import { useEffect, useState } from "react"

import { 
  TIME_TO_CHOOSE, YOUR_SELECTION_NOT_SELECTED,
  SCISSOR, ROCK, PAPER 
} from "./../settings"
import useStore from "./../store"
import Progressbar from "./ProgressBar"


const YouSelect = () => {
  const state = useStore()
  const [now] = useState(Date.now())
  const [yourSelection, setYourSelection] = useState(YOUR_SELECTION_NOT_SELECTED);
  const handleChange = (e) => {
    setYourSelection(e.target.value);
  }

  useEffect(() => {
    const exactTimeout = TIME_TO_CHOOSE - (Math.abs(Date.now() - now))
    const tiemout = setTimeout(() => {
      useStore.setState({
        you: yourSelection
      })
    }, exactTimeout)

    return () => clearTimeout(tiemout)
  }, [yourSelection, now, state.otherWon, state.youWon, state.you, state.other])

  return (
    <>
      Choose!!!
      <Progressbar />
      <div>
        <label>
          <input
            type="radio"
            name="you-select"
            value={ SCISSOR }
            onChange={handleChange}
          />
            Scissor
          </label>
        <label>
          <input
            type="radio"
            name="you-select"
            value={ ROCK }
            onChange={handleChange}
          />
            Rock
          </label>
        <label>
          <input
            type="radio"
            name="you-select"
            value={ PAPER }
            onChange={handleChange}
          />
            Paper
          </label>
      </div>
    </>
  )
}

export default YouSelect