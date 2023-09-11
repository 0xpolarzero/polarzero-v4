"use client"

import { useEffect, useMemo, useRef } from "react"
import { usePathname } from "next/navigation"
import { useFrame, useThree } from "@react-three/fiber"
import { useTheme } from "next-themes"
import * as THREE from "three"

import { EntityType, EntityUniform } from "@/types/canvas"
import { pathnameToEntityType } from "@/config/entity-type"

import fragmentShader from "./shaders/fragmentShader"
import vertexShaders from "./shaders/vertexShaders"

const Entity = () => {
  const { resolvedTheme: theme } = useTheme()
  const type: EntityType = pathnameToEntityType[usePathname()]
  const ref = useRef<THREE.Points | null>(null)
  const { viewport } = useThree()

  const count: number = 1000
  const radius: number = 2
  const colors: { dark: number[][]; light: number[][] } = useMemo(() => {
    return {
      dark: [
        [1.0, 1.0, 1.0],
        [0.91, 0.91, 0.91],
      ],
      light: [
        [0.06, 0.06, 0.06],
        [0.02, 0.02, 0.02],
      ],
    }
  }, [])

  const particlesPosition: Float32Array = useMemo(() => {
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const d = Math.sqrt(Math.random() - 0.5) * radius
      const th = THREE.MathUtils.randFloatSpread(360)
      const phi = THREE.MathUtils.randFloatSpread(360)

      let x = d * Math.sin(th) * Math.cos(phi)
      let y = d * Math.sin(th) * Math.sin(phi)
      let z = d * Math.cos(th)

      positions.set([x, y, z], i * 3)
    }

    return positions
  }, [count, radius])

  const uniforms: EntityUniform = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      uRadius: {
        value: radius,
      },
      // spread it manually just for the compiler...
      uColorA: new THREE.Uniform(
        new THREE.Vector3(
          colors["dark"][0][0],
          colors["dark"][0][1],
          colors["dark"][0][2]
        )
      ),
      uColorB: new THREE.Uniform(
        new THREE.Vector3(
          colors["dark"][1][0],
          colors["dark"][1][1],
          colors["dark"][1][2]
        )
      ),

      uGain: {
        value: 1.0,
      },
      uBrighten: {
        value: 1.0,
      },
    }),
    [radius, colors]
  )

  useFrame(({ clock }) => {
    if (!ref.current) return
    const shaderMaterial = ref.current.material as THREE.ShaderMaterial

    // Time
    shaderMaterial.uniforms.uTime.value = clock.getElapsedTime()

    // Placement
    ref.current.position.x =
      type === "home" || type === "hire-me" ? viewport.width / 4 : 0
  })

  useEffect(() => {
    if (!ref.current || !type) return

    const shaderMaterial = ref.current.material as THREE.ShaderMaterial
    shaderMaterial.vertexShader = vertexShaders[type]
    shaderMaterial.needsUpdate = true
  }, [type])

  useEffect(() => {
    if (!ref.current || !theme || (theme !== "dark" && theme !== "light"))
      return
    const shaderMaterial = ref.current.material as THREE.ShaderMaterial

    shaderMaterial.uniforms.uColorA.value = new THREE.Vector3(
      ...colors[theme][0]
    )
    shaderMaterial.uniforms.uColorB.value = new THREE.Vector3(
      ...colors[theme][1]
    )
  }, [theme, colors])

  return (
    <points ref={ref} scale={1.5}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        vertexShader={vertexShaders["home"]}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  )
}

export default Entity
