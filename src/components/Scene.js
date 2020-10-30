import React from "react"
import { Canvas } from "react-three-fiber"

import Oppenent from "./Oppenent"
import CameraByFrameRotation from "./CameraByFrameRotation"

function Scene() {
  return (
    <Canvas >
      <CameraByFrameRotation />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Oppenent />
    </Canvas>
  )
}

export default Scene