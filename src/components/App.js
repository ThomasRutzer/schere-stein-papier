import React, { useEffect } from "react"

import useStore from "./../store"
import Scene from "./Scene"
import YourControls from "./yourControls"
import Score from "./score"
import Background from "./background"
import Message from "./message"

function App() {
  const state = useStore()
  const init = useStore(state => state.init)

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Score />
      <YourControls />
      <Scene />
      <Message text={state.message} />
      <Background />
    </>
  )
}

export default App