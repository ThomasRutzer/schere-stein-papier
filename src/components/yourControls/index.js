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

      { state.youAreChoosing &&
        <div className="your-controls__selection">
          <div className="your-controls__progress-bar">
            {!state.you &&
              <ProgressBar />
            }
          </div>
          <Radios />
        </div>
      }
    </div>
  )
}

export default YourControls