import { useEffect, useRef } from "react"
import anime from "animejs"

import useStore from "../../store"
import { CONTROL_REVEAL_TRANSITION_DURATION } from "./../../settings"
import "./index.css"
import StartButton from "./StartButton"
import YouSelect from "../YouSelect"

const YourControls = () => {
  const state = useStore()
  const wrapper = useRef()

  useEffect(() => {
    if (state.sceneLoaded) {
      anime({
        targets: wrapper.current,
        translateY: ["100%", 0],
        opacity: 1,
        duration: CONTROL_REVEAL_TRANSITION_DURATION
      })
    }
  }, [state.sceneLoaded, wrapper])

  return (
    <div ref={wrapper} className="your-controls">
      { (!state.othersIsChoosing && !state.youAreChoosing) &&
        <StartButton />
      }

      { state.youAreChoosing &&
        <YouSelect />
      }

      { state.lastWinner &&
        <p>
          {state.lastWinner === "you" && <span>WIN!!!</span>}
          {state.lastWinner !== "you" && <span>LOSE!!!</span>}
        </p>
      }
    </div>
  )
}

export default YourControls