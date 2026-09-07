'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function cssColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return value ? new THREE.Color(value) : new THREE.Color(fallback)
}

function currentTheme(): 'dark' | 'light' {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function circleGeometry(radius: number, segments: number) {
  const points: THREE.Vector3[] = []
  for (let i = 0; i <= segments; i += 1) {
    const angle = (i / segments) * Math.PI * 2
    points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0))
  }
  return new THREE.BufferGeometry().setFromPoints(points)
}

type Orbit = {
  group: THREE.Group
  satellite: THREE.Group
  speed: number
}

export default function ResearchScene() {
  const stageRef = useRef<HTMLDivElement>(null)
  const mountRef = useRef<HTMLDivElement>(null)
  const fallbackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const stage = stageRef.current
    const mount = mountRef.current
    if (!stage || !mount) return

    const compact = window.matchMedia('(max-width: 767px)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let createdRenderer: THREE.WebGLRenderer | null = null
    try {
      createdRenderer = new THREE.WebGLRenderer({
        antialias: !compact,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch {
      return
    }
    if (!createdRenderer) return
    const renderer = createdRenderer
    const canvas = renderer.domElement

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, compact ? 1.5 : 1.75))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    canvas.setAttribute('aria-hidden', 'true')
    mount.appendChild(canvas)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(compact ? 48 : 42, 1, 0.1, 80)
    camera.position.set(0, 0.15, compact ? 7.4 : 7.6)

    const world = new THREE.Group()
    scene.add(world)

    const dark = currentTheme() === 'dark'
    const accent = cssColor('--accent', '#ff6b3d')
    const secondary = cssColor('--border-strong', '#55544c')
    const bg = cssColor('--bg', dark ? '#11110f' : '#f4f2ed')

    const geometries: THREE.BufferGeometry[] = []
    const materials: THREE.Material[] = []
    const rememberGeometry = <T extends THREE.BufferGeometry>(geometry: T): T => {
      geometries.push(geometry)
      return geometry
    }
    const rememberMaterial = <T extends THREE.Material>(material: T): T => {
      materials.push(material)
      return material
    }

    const core = new THREE.Group()
    core.rotation.set(0.35, 0.5, 0)
    world.add(core)

    const coreOuterMat = rememberMaterial(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.95 }))
    const coreInnerMat = rememberMaterial(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.55 }))
    const haloMat = rememberMaterial(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.3 }))
    const shellMat = rememberMaterial(new THREE.MeshBasicMaterial({ color: accent, wireframe: true, transparent: true, opacity: 0.06, depthWrite: false }))

    core.add(new THREE.LineSegments(
      rememberGeometry(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1, 1))),
      coreOuterMat,
    ))
    core.add(new THREE.LineSegments(
      rememberGeometry(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.46, 0))),
      coreInnerMat,
    ))
    core.add(new THREE.LineLoop(rememberGeometry(circleGeometry(1.35, 96)), haloMat))
    core.add(new THREE.Mesh(
      rememberGeometry(new THREE.IcosahedronGeometry(1.32, compact ? 1 : 2)),
      shellMat,
    ))

    const ringMats = [
      rememberMaterial(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.55 })),
      rememberMaterial(new THREE.LineBasicMaterial({ color: secondary, transparent: true, opacity: 0.7 })),
    ]
    const satMat = rememberMaterial(new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.95 }))

    const ringRadii = compact ? [1.55, 2.1] : [1.95, 2.6, 3.2]
    const ringTilts = compact ? [[0.9, 0.1], [-0.8, 0.25]] : [[0.75, 0.15], [-0.7, 0.35], [0.55, -0.55]]
    const ringMatIndex = [0, 1, 0]
    const orbits: Orbit[] = ringRadii.map((radius, index) => {
      const group = new THREE.Group()
      group.rotation.set(ringTilts[index][0], ringTilts[index][1], 0)
      const ring = new THREE.LineLoop(
        rememberGeometry(circleGeometry(radius, compact ? 72 : 96)),
        ringMats[ringMatIndex[index] % ringMats.length],
      )
      group.add(ring)

      const satellite = new THREE.Group()
      satellite.position.set(radius, 0, 0)
      satellite.add(new THREE.LineSegments(
        rememberGeometry(new THREE.EdgesGeometry(new THREE.BoxGeometry(0.2, 0.2, 0.2))),
        satMat,
      ))
      group.add(satellite)
      world.add(group)
      return {
        group,
        satellite,
        speed: (0.12 + Math.random() * 0.1) * (Math.random() > 0.5 ? 1 : -1),
      }
    })

    const particleCount = compact ? 130 : 380
    const particleGeo = rememberGeometry(new THREE.BufferGeometry())
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i += 1) {
      const radius = (compact ? 2.1 : 2.6) + Math.pow(Math.random(), 0.6) * (compact ? 2.4 : 3.4)
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.85
      positions[i * 3 + 2] = radius * Math.cos(phi) * 0.8
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = rememberMaterial(new THREE.PointsMaterial({
      color: accent,
      size: compact ? 0.085 : 0.06,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true,
    }))
    const particles = new THREE.Points(particleGeo, particleMat)
    world.add(particles)

    const fog = new THREE.FogExp2(bg, compact ? 0.1 : 0.055)
    scene.fog = fog

    const applyPalette = () => {
      const isDark = currentTheme() === 'dark'
      const nextAccent = cssColor('--accent', '#ff6b3d')
      const nextSecondary = cssColor('--border-strong', '#55544c')
      const nextBg = cssColor('--bg', isDark ? '#11110f' : '#f4f2ed')

      coreOuterMat.color.copy(nextAccent)
      coreInnerMat.color.copy(nextAccent)
      haloMat.color.copy(nextAccent)
      shellMat.color.copy(nextAccent)
      satMat.color.copy(nextAccent)
      ringMats[0].color.copy(nextAccent)
      ringMats[1].color.copy(nextSecondary)
      particleMat.color.copy(nextAccent)

      coreOuterMat.opacity = isDark ? 1 : 0.95
      coreInnerMat.opacity = isDark ? 0.55 : 0.6
      haloMat.opacity = isDark ? 0.3 : 0.42
      shellMat.opacity = compact ? 0.05 : 0.07
      ringMats[0].opacity = isDark ? 0.55 : 0.7
      ringMats[1].opacity = isDark ? 0.7 : 0.8
      satMat.opacity = 0.95
      particleMat.blending = isDark ? THREE.AdditiveBlending : THREE.NormalBlending
      particleMat.opacity = isDark ? 0.95 : 0.85

      fog.color.copy(nextBg)
    }

    const render = () => renderer.render(scene, camera)

    const pointer = new THREE.Vector2(0, 0)
    const smoothed = pointer.clone()
    const syncPointer = () => {
      smoothed.copy(pointer)
      applyPointer()
    }
    const applyPointer = () => {
      world.rotation.y = smoothed.x * 0.45
      world.rotation.x = 0.18 + smoothed.y * 0.3
      camera.position.x = smoothed.x * 0.55
      camera.position.y = 0.15 - smoothed.y * 0.4
      camera.lookAt(0, 0, 0)
    }
    const onPointerMove = (event: PointerEvent) => {
      if (!canHover || event.pointerType === 'touch') return
      const rect = stage.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      if (reducedMotion) {
        syncPointer()
        render()
      }
    }
    const onPointerLeave = () => {
      pointer.set(0, 0)
      if (reducedMotion) {
        syncPointer()
        render()
      }
    }

    const resize = () => {
      const rect = stage.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      camera.aspect = rect.width / rect.height
      camera.updateProjectionMatrix()
      renderer.setSize(rect.width, rect.height, false)
      render()
    }
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(stage)

    let rafId = 0
    let disposed = false
    let isVisible = true
    let yaw = 0.4
    let lastTime = performance.now()

    const animate = (time: number) => {
      if (disposed || !isVisible) {
        rafId = 0
        return
      }
      rafId = requestAnimationFrame(animate)
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time
      const elapsed = time * 0.001

      yaw += dt * 0.1
      smoothed.x += (pointer.x - smoothed.x) * Math.min(dt * 3.5, 1)
      smoothed.y += (pointer.y - smoothed.y) * Math.min(dt * 3.5, 1)
      world.rotation.y = yaw + smoothed.x * 0.45
      world.rotation.x = 0.18 + Math.sin(elapsed * 0.35) * 0.03 + smoothed.y * 0.3
      world.position.y = Math.sin(elapsed * 0.5) * 0.05

      core.rotation.x += dt * 0.06
      core.rotation.y += dt * 0.09
      core.rotation.z += dt * 0.03

      for (const orbit of orbits) {
        orbit.group.rotation.z += orbit.speed * dt
        orbit.satellite.rotation.x += dt * 1.1
        orbit.satellite.rotation.y += dt * 0.7
      }

      camera.position.x = smoothed.x * 0.55
      camera.position.y = 0.15 - smoothed.y * 0.4
      camera.lookAt(0, 0, 0)

      const baseOpacity = currentTheme() === 'dark' ? 0.95 : 0.85
      particleMat.opacity = baseOpacity * (0.88 + Math.sin(elapsed * 1.6) * 0.12)
      render()
    }

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !reducedMotion && !rafId) {
        lastTime = performance.now()
        rafId = requestAnimationFrame(animate)
      } else if (!isVisible && rafId) {
        cancelAnimationFrame(rafId)
        rafId = 0
      }
    }, { threshold: 0.02 })
    visibilityObserver.observe(stage)

    const onThemeChange = () => {
      applyPalette()
      render()
    }
    const onContextLost = (event: Event) => {
      event.preventDefault()
      fallbackRef.current?.classList.remove('is-hidden')
    }
    const onContextRestored = () => {
      fallbackRef.current?.classList.add('is-hidden')
      applyPalette()
      render()
    }

    applyPalette()
    resize()
    fallbackRef.current?.classList.add('is-hidden')

    if (reducedMotion) {
      applyPointer()
    } else {
      lastTime = performance.now()
      rafId = requestAnimationFrame(animate)
    }

    stage.addEventListener('pointermove', onPointerMove, { passive: true })
    stage.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('themechange', onThemeChange)
    canvas.addEventListener('webglcontextlost', onContextLost)
    canvas.addEventListener('webglcontextrestored', onContextRestored)

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
      stage.removeEventListener('pointermove', onPointerMove)
      stage.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('themechange', onThemeChange)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      canvas.removeEventListener('webglcontextrestored', onContextRestored)
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach((material) => material.dispose())
      renderer.dispose()
      if (canvas.parentElement === mount) mount.removeChild(canvas)
    }
  }, [])

  return (
    <figure
      ref={stageRef}
      className="scene-stage"
      role="img"
      aria-label="Animated orbital research lattice — an interactive three dimensional scene"
    >
      <div ref={fallbackRef} className="scene-stage__fallback" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div ref={mountRef} className="scene-stage__canvas" aria-hidden="true" />
      <figcaption className="scene-stage__label">orbital research lattice / est. 2023</figcaption>
    </figure>
  )
}
