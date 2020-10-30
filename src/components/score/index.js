import useStore from "../../store"
import "./index.css"

const Score = () => {
  const state = useStore()

  return (
    <div className="score">
      <p>
        Score: you: {state.youWon} : other {state.otherWon}
      </p>
    </div>
  )
}

export default Score