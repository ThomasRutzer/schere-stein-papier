import { CONTROL_REVEAL_TRANSITION_DURATION } from "./../../settings"
import { useEffect, useRef } from "react"
import anime from "animejs"

import useStore from "../../store"
import "./index.css"

const Button = () => {
  const wrapper = useRef()

  useEffect(() => {
    if (!wrapper.current) return
    
    anime({
      targets: wrapper.current,
      translateY: ["250px", 0],
      duration: CONTROL_REVEAL_TRANSITION_DURATION / 2,
      delay: 250,
      easing: "linear"
    })
  }, [wrapper])

  const startGame = () => {
    anime({
      targets: wrapper.current,
      translateY: [0, "250px"],
      duration: 300,
      easing: "easeInQuad",
      complete: () => {
        useStore.setState({
          othersIsChoosing: true
        })
      }
    })
  }

  return (
    <button ref={wrapper} className="start-button" onClick={startGame} >Start</button>
  )
}

export default Button