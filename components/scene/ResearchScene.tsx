'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

type SceneControls = { paused: boolean; yaw: number; pitch: number }

export default function ResearchScene({ label = 'Arya' }: { label?: string }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const controls = useRef<SceneControls>({ paused: false, yaw: 0, pitch: 0 })
  const [paused, setPaused] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const compact = window.matchMedia('(max-width: 767px)').matches
    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
    } catch {
      const frame = requestAnimationFrame(() => setFailed(true))
      return () => cancelAnimationFrame(frame)
    }
    renderer.setPixelRatio(Math.min(devicePixelRatio, compact ? 1.25 : 1.75))
    mount.appendChild(renderer.domElement)
    renderer.domElement.setAttribute('aria-hidden', 'true')
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50)
    camera.position.set(0, 0, 10)
    const instrument = new THREE.Group()
    scene.add(instrument)
    const accent = new THREE.Color()
    const face = new THREE.MeshStandardMaterial({ roughness: 0.28, metalness: 0.4 })
    const sides = new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.65 })
    const lines = new THREE.LineBasicMaterial({ transparent: true, opacity: 0.35 })
    const geometries: THREE.BufferGeometry[] = []
    const remember = <T extends THREE.BufferGeometry>(geometry: T): T => {
      geometries.push(geometry)
      return geometry
    }
    scene.add(new THREE.HemisphereLight(0xffffff, 0x333333, 3))
    const key = new THREE.DirectionalLight(0xffffff, 5)
    key.position.set(-3, 5, 6)
    scene.add(key)
    const rim = new THREE.DirectionalLight(0xff6b3d, 3)
    rim.position.set(4, -1, -2)
    scene.add(rim)

    const ring = new THREE.LineSegments(remember(new THREE.EdgesGeometry(new THREE.TorusGeometry(2.9, 0.025, 4, 64))), lines)
    ring.rotation.x = 0.7
    ring.rotation.y = -0.3
    instrument.add(ring)
    const markers = new THREE.Group()
    instrument.add(markers)
    const markerGeometry = remember(new THREE.EdgesGeometry(new THREE.OctahedronGeometry(0.16)))
    for (let i = 0; i < 4; i++) {
      const marker = new THREE.LineSegments(markerGeometry, lines)
      const angle = i * Math.PI / 2
      marker.position.set(Math.cos(angle) * 3, Math.sin(angle) * 2, -0.8)
      markers.add(marker)
    }

    let text: THREE.Mesh | undefined
    let disposed = false
    const palette = () => {
      const css = getComputedStyle(document.documentElement)
      accent.set(css.getPropertyValue('--accent').trim())
      sides.color.copy(accent)
      lines.color.copy(accent)
      face.color.set(css.getPropertyValue('--text').trim())
      rim.color.copy(accent)
    }
    palette()
    new FontLoader().load('/fonts/helvetiker_bold.typeface.json', (font) => {
      if (disposed) return
      const geometry = remember(new TextGeometry(label, {
        font, size: 1, depth: 0.3, curveSegments: 6,
        bevelEnabled: true, bevelSize: 0.018, bevelThickness: 0.025, bevelSegments: 2,
      }))
      geometry.computeBoundingBox()
      const width = geometry.boundingBox!.max.x - geometry.boundingBox!.min.x
      geometry.center()
      text = new THREE.Mesh(geometry, [face, sides])
      text.scale.setScalar(Math.min(1.7, 6 / Math.max(width, 1)))
      text.rotation.set(0.04, -0.18, -0.06)
      instrument.add(text)
      setReady(true)
    }, undefined, () => { if (!disposed) setFailed(true) })

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      if (!width || !height) return
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.position.z = camera.aspect < 1 ? 12 : 10
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    let visible = true
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    visibility.observe(mount)
    let last = 0
    let time = 0
    renderer.setAnimationLoop((now) => {
      const delta = Math.min((now - last) / 1000, 0.05)
      last = now
      if (!visible || document.hidden) return
      const state = controls.current
      if (!state.paused && !motion.matches) time += delta
      instrument.rotation.y += (state.yaw - instrument.rotation.y) * (motion.matches ? 1 : 0.09)
      instrument.rotation.x += (state.pitch - instrument.rotation.x) * (motion.matches ? 1 : 0.09)
      ring.rotation.z = time * 0.12
      markers.rotation.z = -time * 0.08
      if (text) text.position.z = Math.sin(time * 0.5) * 0.08
      renderer.render(scene, camera)
    })
    const lost = (event: Event) => { event.preventDefault(); setFailed(true); setReady(false) }
    renderer.domElement.addEventListener('webglcontextlost', lost)
    window.addEventListener('themechange', palette)
    resize()
    return () => {
      disposed = true
      observer.disconnect()
      visibility.disconnect()
      window.removeEventListener('themechange', palette)
      renderer.domElement.removeEventListener('webglcontextlost', lost)
      renderer.setAnimationLoop(null)
      geometries.forEach((geometry) => geometry.dispose())
      face.dispose(); sides.dispose(); lines.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  }, [label])

  const reset = () => { controls.current.yaw = 0; controls.current.pitch = 0 }
  return (
    <section className="scene-stage" aria-label={`${label}, interactive 3D typography`}>
      <div
        className="scene-stage__viewport"
        tabIndex={0}
        role="group"
        aria-label="Rotate 3D typography with arrow keys or pointer. Home resets the view."
        onKeyDown={(event) => {
          if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home'].includes(event.key)) return
          event.preventDefault()
          if (event.key === 'Home') reset()
          if (event.key === 'ArrowLeft') controls.current.yaw -= 0.15
          if (event.key === 'ArrowRight') controls.current.yaw += 0.15
          if (event.key === 'ArrowUp') controls.current.pitch -= 0.15
          if (event.key === 'ArrowDown') controls.current.pitch += 0.15
          controls.current.yaw = THREE.MathUtils.clamp(controls.current.yaw, -0.7, 0.7)
          controls.current.pitch = THREE.MathUtils.clamp(controls.current.pitch, -0.4, 0.4)
        }}
        onPointerMove={(event) => {
          if (event.pointerType === 'touch') return
          const rect = event.currentTarget.getBoundingClientRect()
          controls.current.yaw = ((event.clientX - rect.left) / rect.width - 0.5) * 0.9
          controls.current.pitch = ((event.clientY - rect.top) / rect.height - 0.5) * 0.5
        }}
        onPointerLeave={reset}
      >
        <div ref={mountRef} className="scene-stage__canvas" />
        {!ready && <div className="scene-stage__fallback" aria-hidden="true"><strong className="display-3d">{label}</strong></div>}
      </div>
      <div className="scene-controls">
        <span className="scene-status" role="status">{failed ? 'Static view' : ready ? 'Pointer / arrow keys to rotate' : 'Loading 3D type'}</span>
        <div className="flex gap-2">
          <button type="button" aria-pressed={paused} disabled={failed} onClick={() => {
            controls.current.paused = !paused
            setPaused(!paused)
          }}>{paused ? 'Resume' : 'Pause'}</button>
          <button type="button" onClick={reset}>Reset view</button>
        </div>
      </div>
    </section>
  )
}
