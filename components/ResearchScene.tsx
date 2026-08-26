'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

function cssColor(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  return new THREE.Color(value || fallback)
}

export default function ResearchScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const fallbackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const compact = window.matchMedia('(max-width: 639px)').matches
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(compact ? 38 : 34, 1, 0.1, 100)
    camera.position.set(0, 0.15, compact ? 7.8 : 7.2)

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: !compact, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, compact ? 1 : 1.5))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    renderer.domElement.setAttribute('aria-hidden', 'true')
    mount.appendChild(renderer.domElement)
    fallbackRef.current?.classList.add('is-hidden')

    const lattice = new THREE.Group()
    lattice.rotation.set(-0.2, 0.35, 0.08)
    scene.add(lattice)

    const accent = cssColor('--accent', '#ff6b3d')
    const border = cssColor('--border-strong', '#55544c')
    const mainMaterial = new THREE.LineBasicMaterial({ color: accent, transparent: true, opacity: 0.78 })
    const secondaryMaterial = new THREE.LineBasicMaterial({ color: border, transparent: true, opacity: 0.72 })

    const geometries: THREE.BufferGeometry[] = []
    const lines: THREE.LineSegments[] = []
    const addBox = (size: number, material: THREE.LineBasicMaterial, rotation: THREE.Euler) => {
      const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(size, size, size))
      geometries.push(geometry)
      const line = new THREE.LineSegments(geometry, material)
      line.rotation.copy(rotation)
      lines.push(line)
      lattice.add(line)
      return line
    }

    addBox(2.9, mainMaterial, new THREE.Euler(0.18, -0.26, 0.08))
    if (!compact) addBox(2.05, secondaryMaterial, new THREE.Euler(-0.46, 0.25, -0.22))
    addBox(compact ? 1.25 : 1.15, mainMaterial, new THREE.Euler(0.22, 0.58, 0.38))

    let axes: THREE.LineSegments | undefined
    if (!compact) {
      const axisPoints = new Float32Array([
        -1.9, 0, 0, 1.9, 0, 0,
        0, -1.9, 0, 0, 1.9, 0,
        0, 0, -1.9, 0, 0, 1.9,
      ])
      const axisGeometry = new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(axisPoints, 3))
      geometries.push(axisGeometry)
      axes = new THREE.LineSegments(axisGeometry, secondaryMaterial)
      axes.rotation.set(0.1, 0.2, 0)
      lines.push(axes)
      lattice.add(axes)
    }

    const targetRotation = new THREE.Vector2(lattice.rotation.x, lattice.rotation.y)
    let frame = 0
    let disposed = false
    let isVisible = true

    const render = () => renderer.render(scene, camera)

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
      render()
    }

    const handlePointer = (event: PointerEvent) => {
      if (!canHover || event.pointerType === 'touch') return
      const rect = mount.getBoundingClientRect()
      const pointerX = ((event.clientX - rect.left) / rect.width) * 2 - 1
      const pointerY = -(((event.clientY - rect.top) / rect.height) * 2 - 1)
      targetRotation.y = 0.35 + pointerX * 0.2
      targetRotation.x = -0.2 + pointerY * 0.12
    }

    const observer = new ResizeObserver(resize)
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting
      if (isVisible && !reducedMotion && !compact && !frame) frame = window.requestAnimationFrame(animate)
    }, { threshold: 0.01 })
    const handleThemeChange = () => {
      mainMaterial.color.copy(cssColor('--accent', '#ff6b3d'))
      secondaryMaterial.color.copy(cssColor('--border-strong', '#55544c'))
      render()
    }
    const handleContextLost = (event: Event) => {
      event.preventDefault()
      fallbackRef.current?.classList.remove('is-hidden')
    }
    const animate = (time: number) => {
      if (disposed) return
      if (!isVisible) {
        frame = 0
        return
      }
      frame = window.requestAnimationFrame(animate)
      if (!reducedMotion) {
        lattice.rotation.x += (targetRotation.x - lattice.rotation.x) * 0.035
        lattice.rotation.y += (targetRotation.y - lattice.rotation.y) * 0.035
        lattice.rotation.z = 0.08 + Math.sin(time * 0.00035) * 0.035
        lattice.position.y = Math.sin(time * 0.00045) * 0.045
      }
      render()
    }

    observer.observe(mount)
    visibilityObserver.observe(mount)
    mount.addEventListener('pointermove', handlePointer)
    window.addEventListener('themechange', handleThemeChange)
    renderer.domElement.addEventListener('webglcontextlost', handleContextLost, false)
    resize()

    if (compact || reducedMotion) {
      render()
    } else {
      frame = window.requestAnimationFrame(animate)
    }

    return () => {
      disposed = true
      window.cancelAnimationFrame(frame)
      observer.disconnect()
      visibilityObserver.disconnect()
      mount.removeEventListener('pointermove', handlePointer)
      window.removeEventListener('themechange', handleThemeChange)
      renderer.domElement.removeEventListener('webglcontextlost', handleContextLost)
      geometries.forEach((geometry) => geometry.dispose())
      lines.forEach((line) => lattice.remove(line))
      mainMaterial.dispose()
      secondaryMaterial.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [])

  return (
    <figure className="research-scene" role="img" aria-label="Interactive wireframe research lattice">
      <div ref={fallbackRef} className="research-scene__fallback" aria-hidden="true"><span /><span /><span /></div>
      <div ref={mountRef} className="research-scene__canvas" aria-hidden="true" />
      <figcaption className="research-scene__label">research lattice / 03—25</figcaption>
    </figure>
  )
}
