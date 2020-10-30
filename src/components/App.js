import React from "react"

import Scene from "./Scene"
import YourControls from "./yourControls"
import Score from "./score"
import Background from "./background"

function App() {
  return (
    <>
      <Score />
      <YourControls />
      <Scene />
      <Background />
    </>
  )
}

export default App