import React from "react"
import { Canvas } from "react-three-fiber"

import Oppenent from "./Oppenent"

function Scene() {
  return (
    <Canvas >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Oppenent />
    </Canvas>
  )
}

export default Scene