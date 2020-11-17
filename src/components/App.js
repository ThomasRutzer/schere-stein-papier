import React from "react"
import { useGLTF } from "@react-three/drei"

import Scene from "./Scene"
import Gui from "./Gui"

useGLTF.preload(`${process.env.PUBLIC_URL}/models/challenging.glb`)
useGLTF.preload(`${process.env.PUBLIC_URL}/models/choosing.glb`)
useGLTF.preload(`${process.env.PUBLIC_URL}/models/paper.glb`)
useGLTF.preload(`${process.env.PUBLIC_URL}/models/rock.glb`)
useGLTF.preload(`${process.env.PUBLIC_URL}/models/scissors.glb`)

function App() {
  return (
    <>
      <Gui />
      <Scene />
    </>
  )
}

export default App