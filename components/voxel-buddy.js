import { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { ScanSpinner, ScanContainer } from './voxel-scan-loader'

// An original voxel scene: a cat studying at a laptop on a floating island.
// Built from code at runtime, so there is no model file to download.

const VOXEL = 0.42
const INTRO_FRAMES = 100

const C = {
  grassA: '#7bbf6a',
  grassB: '#6aae5c',
  dirtA: '#8a5a3b',
  dirtB: '#7a4e33',
  dirtDark: '#5e3b27',
  fur: '#f0a04b',
  furDark: '#d9822b',
  white: '#f7f3ea',
  pink: '#f29bab',
  eye: '#2b2b2f',
  laptop: '#a7b0ba',
  laptopDark: '#5a6470',
  screen: '#88ccca',
  chart: '#ff63c3',
  bookRed: '#c0504d',
  bookBlue: '#3d6fb6',
  bookYellow: '#e9c46a',
  pot: '#b5651d',
  leaf: '#3f8f4f',
  leafLight: '#5fb36a'
}

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

function hash3(x, y, z) {
  const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453
  return h - Math.floor(h)
}

function buildScene() {
  const cells = new Map()
  const put = (x, y, z, c) => cells.set(`${x},${y},${z}`, [x, y, z, c])
  const fill = (x0, x1, y0, y1, z0, z1, c) => {
    for (let x = x0; x <= x1; x++)
      for (let y = y0; y <= y1; y++)
        for (let z = z0; z <= z1; z++) put(x, y, z, c)
  }

  // Floating island with rounded corners and a tapered underside.
  for (let x = -7; x <= 6; x++) {
    for (let z = -7; z <= 6; z++) {
      const ax = Math.abs(x + 0.5)
      const az = Math.abs(z + 0.5)
      if (ax > 6 && az > 6) continue
      put(x, 0, z, hash3(x, 0, z) > 0.5 ? C.grassA : C.grassB)
      put(x, -1, z, hash3(x, -1, z) > 0.5 ? C.dirtA : C.dirtB)
      put(x, -2, z, hash3(x, -2, z) > 0.5 ? C.dirtA : C.dirtB)
      if (ax < 5.5 && az < 5.5) put(x, -3, z, C.dirtB)
      if (ax < 4 && az < 4) put(x, -4, z, C.dirtDark)
      if (ax < 2 && az < 2) put(x, -5, z, C.dirtDark)
    }
  }

  // Laptop: base, keyboard, and a screen showing a small chart.
  fill(0, 5, 1, 1, -3, 0, C.laptop)
  fill(1, 4, 1, 1, -2, -1, C.laptopDark)
  fill(0, 5, 2, 6, -4, -4, C.laptopDark)
  fill(1, 4, 3, 5, -4, -4, C.screen)
  put(1, 3, -4, C.chart)
  put(2, 4, -4, C.chart)
  put(3, 4, -4, C.chart)
  put(4, 5, -4, C.chart)

  // Cat: body, chest, paws.
  fill(-5, -2, 1, 4, -2, 1, C.fur)
  fill(-5, -2, 3, 3, -2, -2, C.furDark)
  fill(-5, -2, 1, 1, -2, -2, C.furDark)
  fill(-4, -3, 1, 3, 1, 1, C.white)
  put(-5, 1, 2, C.white)
  put(-2, 1, 2, C.white)

  // Head with stripes and face.
  fill(-6, -1, 5, 8, -1, 2, C.fur)
  fill(-4, -3, 8, 8, -1, 1, C.furDark)
  put(-6, 7, 0, C.furDark)
  put(-1, 7, 0, C.furDark)
  fill(-5, -2, 5, 5, 2, 2, C.white)
  put(-4, 6, 2, C.pink)
  put(-3, 6, 2, C.pink)
  put(-5, 7, 2, C.eye)
  put(-2, 7, 2, C.eye)

  // Ears.
  put(-6, 9, 0, C.fur)
  put(-5, 9, 0, C.fur)
  put(-6, 10, 0, C.fur)
  put(-5, 9, 1, C.pink)
  put(-2, 9, 0, C.fur)
  put(-1, 9, 0, C.fur)
  put(-1, 10, 0, C.fur)
  put(-2, 9, 1, C.pink)

  // Tail curling behind, with a white tip.
  put(-3, 1, -3, C.fur)
  put(-3, 1, -4, C.fur)
  put(-2, 1, -4, C.furDark)
  put(-1, 1, -4, C.fur)
  put(-1, 2, -4, C.white)

  // Stack of books.
  fill(2, 5, 1, 1, 3, 5, C.bookRed)
  fill(3, 5, 2, 2, 3, 5, C.bookBlue)
  fill(2, 4, 3, 3, 3, 5, C.bookYellow)

  // Potted plant.
  fill(-6, -5, 1, 2, 4, 5, C.pot)
  fill(-6, -5, 3, 3, 4, 5, C.leaf)
  put(-6, 4, 4, C.leafLight)
  put(-5, 4, 5, C.leafLight)
  put(-5, 5, 4, C.leaf)

  return Array.from(cells.values())
}

const VoxelBuddy = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { current: container } = refContainer
    if (!container) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const scW = container.clientWidth
    const scH = container.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(scW, scH)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const target = new THREE.Vector3(0, 0, 0)
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
    const scale = scH * 0.005 + 4.8
    const camera = new THREE.OrthographicCamera(
      -scale,
      scale,
      scale,
      -scale,
      0.01,
      50000
    )
    camera.position.copy(initialCameraPosition)
    camera.lookAt(target)

    scene.add(new THREE.AmbientLight(0xffffff, 0.65 * Math.PI))
    const sun = new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI)
    sun.position.set(6, 12, 8)
    scene.add(sun)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = !reduceMotion
    controls.enableZoom = false
    controls.enablePan = false
    controls.target = target

    // Whole scene in one instanced draw call. The model's vertical centre
    // sits 1.3 units above the camera target, which places it in the upper
    // part of the canvas like the original layout.
    const voxels = buildScene()
    let minY = Infinity
    let maxY = -Infinity
    for (const [, y] of voxels) {
      if (y < minY) minY = y
      if (y > maxY) maxY = y
    }
    const yOffset = 1.3 - ((minY + maxY) / 2) * VOXEL
    const geometry = new THREE.BoxGeometry(VOXEL, VOXEL, VOXEL)
    const material = new THREE.MeshLambertMaterial()
    const mesh = new THREE.InstancedMesh(geometry, material, voxels.length)
    const matrix = new THREE.Matrix4()
    const color = new THREE.Color()
    voxels.forEach(([x, y, z, c], i) => {
      matrix.makeTranslation(
        (x + 0.5) * VOXEL,
        y * VOXEL + yOffset,
        (z + 0.5) * VOXEL
      )
      mesh.setMatrixAt(i, matrix)
      mesh.setColorAt(i, color.set(c))
    })
    mesh.instanceMatrix.needsUpdate = true
    mesh.instanceColor.needsUpdate = true
    scene.add(mesh)

    // Render loop, paused while the canvas is off screen.
    let req = null
    let frame = 0
    let visible = true

    const animate = () => {
      req = null
      if (!visible) return
      req = requestAnimationFrame(animate)

      if (!reduceMotion && frame < INTRO_FRAMES) {
        frame++
        const p = initialCameraPosition
        const rot = -easeOutCirc(frame / 120) * Math.PI * 20
        camera.position.y = 10
        camera.position.x = p.x * Math.cos(rot) + p.z * Math.sin(rot)
        camera.position.z = p.z * Math.cos(rot) - p.x * Math.sin(rot)
        camera.lookAt(target)
      } else {
        controls.update()
      }

      renderer.render(scene, camera)
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && req === null) animate()
    })
    observer.observe(container)

    const handleResize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
    window.addEventListener('resize', handleResize, false)

    setLoading(false)

    return () => {
      if (req !== null) cancelAnimationFrame(req)
      observer.disconnect()
      window.removeEventListener('resize', handleResize, false)
      controls.dispose()
      geometry.dispose()
      material.dispose()
      mesh.dispose()
      renderer.domElement.remove()
      renderer.dispose()
    }
  }, [])

  return (
    <ScanContainer ref={refContainer}>
      {loading && <ScanSpinner />}
    </ScanContainer>
  )
}

export default VoxelBuddy
