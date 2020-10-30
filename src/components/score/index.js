import useStore from "../../store"
import "./index.css"

const Score = () => {
  const state = useStore()

  return (
    <div className="score">
      <p className="score__label">
        Score
      </p>
      <p className="score__label">
      👀 {state.youWon}:{state.otherWon} 🖥️
      </p>
    </div>
  )
}

export default Score