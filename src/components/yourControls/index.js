import useStore from "../../store"
import "./index.css"
import StartButton from "./../startButton"
import Radios from "../radios"
import ProgressBar from "./../progressBar"

const YourControls = () => {
  const state = useStore()

  return (
    <div className="your-controls">
      { (!state.othersIsChoosing && !state.youAreChoosing) &&
        <StartButton />
      }

      { state.youAreChoosing && !state.you &&
        <div className="your-controls__selection">
          <ProgressBar />
          <Radios />
        </div>
      }
    </div>
  )
}

export default YourControls