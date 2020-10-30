import React from "react"
import { Canvas } from "react-three-fiber"
import { Text } from "@react-three/drei"

import Oppenent from "./Oppenent"
import CameraByFrameRotation from "./CameraByFrameRotation"

function Scene() {
  return (
    <Canvas >
      <CameraByFrameRotation />
      <ambientLight />
      {/* <Text
        color="#FE9F1B" // default
        anchorX="center" // default
        anchorY="middle" // default
      >
        START
</Text> */}
      <pointLight position={[10, 10, 10]} />
      <Oppenent />
    </Canvas>
  )
}

export default Scene