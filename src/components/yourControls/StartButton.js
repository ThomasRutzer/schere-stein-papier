import { CONTROL_REVEAL_TRANSITION_DURATION } from "./../../settings"
import { useEffect, useRef } from "react"
import anime from "animejs"

import useStore from "../../store"

const Button = () => {
  const wrapper = useRef()

  useEffect(() => {
    if (!wrapper.current) return

      anime({
        targets: wrapper.current,
        translateY: ["100%", 0],
        opacity: 1,
        duration: CONTROL_REVEAL_TRANSITION_DURATION
      })
  }, [wrapper])

  const startGame = () => {
    useStore.setState({
      othersIsChoosing: true
    })
  }

  return (
    <button ref={wrapper} className="start-button" onClick={startGame} >Start</button>
  )
}

export default Button