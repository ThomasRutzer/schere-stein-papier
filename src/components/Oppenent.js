import React, { Suspense } from "react"

import useStore from "./../store"
import Loading from "./Loading"
import PoseSwitcher from "./poses"

function Oppenent() {
  const reset = useStore(state => state.reset)
  const reveal = useStore(state => state.reveal)
  const saveScore = useStore(state => state.saveScore)
  const saveOther = useStore(state => state.saveOther)

  const poseEnterStart = pose => {
    if (pose === "REVEAL_SCISSOR" || pose === "REVEAL_PAPER" || pose === "REVEAL_ROCK") {
      reveal()
    }
  }

  const poseEnterComplete = pose => {
    if (pose === "REVEAL_SCISSOR" || pose === "REVEAL_PAPER" || pose === "REVEAL_ROCK") {
      saveScore()
      reset()
    }

    if (pose === "CHOOSING") {
      saveOther()
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <PoseSwitcher poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />
    </Suspense>
  )
}

export default Oppenent