import * as THREE from "three"

export type EntityType = "home" | "portfolio" | "writing"

export type EntityUniform = {
  uTime: {
    value: number
  }
  uRadius: {
    value: number
  }
  uColorA: {
    value: THREE.Vector3
  }
  uColorB: {
    value: THREE.Vector3
  }
  uGain: {
    value: number
  }
  uBrighten: {
    value: number
  }
}
