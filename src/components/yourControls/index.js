import useStore from "../../store"
import "./index.css"
import StartButton from "./StartButton"
import Radios from "./Radios"
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