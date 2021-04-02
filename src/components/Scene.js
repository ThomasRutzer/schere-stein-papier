import React from "react"
import { Canvas } from "react-three-fiber"

import Loading from "./Loading"
import Oppenent from "./Oppenent"
import CameraByFrameRotation from "./CameraByFrameRotation"
import useStore from "../store"

function Scene() {
  const initialized = useStore(state => state.initialized)

  return (
    <Canvas>
      <Loading />
      <CameraByFrameRotation />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      { initialized &&
        <Oppenent />
      }
    </Canvas>
  )
}

export default Scene