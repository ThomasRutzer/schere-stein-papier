import React, { useRef, Suspense } from "react"

import useStore from "./../store"
import Loading from "./Loading"
import {
  ROCK, SCISSOR, PAPER
} from "./../settings"
import randomFromStringList from "./../utils/randomFromStringList"
import PoseSwitcher from "./poses"

function Oppenent() {
  const reset = useStore(state => state.reset)
  const saveScore = useStore(state => state.saveScore)

  const poseEnterStart = pose => {
    if (pose === "REVEAL_SCISSOR" || pose === "REVEAL_PAPER" || pose === "REVEAL_ROCK") {
      useStore.setState({ message: "And the winner is…" })
    }
  }

  const poseEnterComplete = pose => {
    if (pose === "REVEAL_SCISSOR" || pose === "REVEAL_PAPER" || pose === "REVEAL_ROCK") {
      saveScore()
      reset()
    }

    if (pose === "CHOOSING") {
      const other = randomFromStringList([ROCK, SCISSOR, PAPER])
      useStore.setState({
        other,
        othersIsChoosing: false,
        youAreChoosing: true
      })
    }
  }

  return (
    <Suspense fallback={<Loading />}>
      <PoseSwitcher poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />
    </Suspense>
  )
}

export default Oppenent