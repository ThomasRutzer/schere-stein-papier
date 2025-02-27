import { CONTROL_REVEAL_TRANSITION_DURATION } from "./../../settings"
import { useEffect, useRef } from "react"
import anime from "animejs"

import useStore from "../../store"
import "./index.css"

const Button = () => {
  const wrapper = useRef()
  const start = useStore(state => state.start)
  const pose = useStore(state => state.currentPose)

  useEffect(() => {
    if (pose === "CHALLENGING") {
      anime({
        targets: wrapper.current,
        translateY: ["250px", 0],
        duration: CONTROL_REVEAL_TRANSITION_DURATION / 2,
        delay: 420,
        easing: "linear"
      })
    }
  }, [pose])

  const startGame = () => {
    anime({
      targets: wrapper.current,
      translateY: [0, "250px"],
      duration: 300,
      easing: "easeInQuad",
      complete: start
    })
  }

  return (
    <button ref={wrapper} className="start-button" onClick={startGame}>
      <span className="start-button__back"></span>
      <span className="start-button__front">Start</span>
    </button>
  )
}

export default Button
