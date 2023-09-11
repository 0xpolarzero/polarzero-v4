"use client"

import { ReactNode, Suspense } from "react"
import { Preload } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useTheme } from "next-themes"

export default function Scene({ children, ...props }: { children: ReactNode }) {
  const { resolvedTheme: theme } = useTheme()

  return (
    <Suspense fallback={null}>
      <Canvas
        {...props}
        className="pointer-events-none"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        eventPrefix="client"
        orthographic
        camera={{ zoom: 80 }}
        dpr={[1, 1.5]}
      >
        {children}
        <Preload all />
      </Canvas>
    </Suspense>
  )
}
