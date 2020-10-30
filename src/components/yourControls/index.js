import useStore from "../../store"
import "./index.css"
import StartButton from "./StartButton"
import YouSelect from "../YouSelect"

const YourControls = () => {
  const state = useStore()
 

  return (
    <div className="your-controls">
      { (!state.othersIsChoosing && !state.youAreChoosing) &&
        <StartButton />
      }

      { state.youAreChoosing && !state.you &&
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