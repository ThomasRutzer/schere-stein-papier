import { useEffect, useState } from "react"

import { TIME_TO_CHOOSE, YOUR_SELECTION_NOT_SELECTED } from "./../settings"
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
        you: Number(yourSelection)
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
            value="1"
            onChange={handleChange}
          />
            Option 1
          </label>
        <label>
          <input
            type="radio"
            name="you-select"
            value="2"
            onChange={handleChange}
          />
            Option 2
          </label>
        <label>
          <input
            type="radio"
            name="you-select"
            value="3"
            onChange={handleChange}
          />
            Option 3
          </label>
      </div>
    </>
  )
}

export default YouSelect