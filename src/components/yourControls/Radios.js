import { useEffect, useState, useRef } from "react"
import anime from "animejs"

import {
  TIME_TO_CHOOSE, YOUR_SELECTION_NOT_SELECTED,
  SCISSOR, ROCK, PAPER
} from "../../settings"
import useStore from "../../store"
import "./Radios.css"

const YouSelect = () => {
  const wrapper = useRef()
  const state = useStore()
  const [now] = useState(Date.now())
  const [yourSelection, setYourSelection] = useState(YOUR_SELECTION_NOT_SELECTED);
  const handleChange = (e) => {
    setYourSelection(e.target.value);
  }

  useEffect(() => {
    if (!wrapper.current) return

    anime({
      targets: wrapper.current.childNodes,
      translateY: [250, 0],
      duration: 1200,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
      begin: () => {
        useStore.setState({ message: "Choose"})
      }
    })
  }, [wrapper])

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
    <div ref={wrapper} className="radios">
      <div className="radio">
        <label className="radio__item">
          <span className="radio__input">
            <input
              onChange={handleChange}
              type="radio"
              name="you-select"
              value={ROCK}
            />
            <span className="radio__control"></span>
          </span>
          <span className="radio__label">Rock ⛰️</span>
        </label>
      </div>
      <div className="radio">
        <label className="radio__item">
          <span className="radio__input">
            <input
              onChange={handleChange}
              type="radio"
              name="you-select"
              value={SCISSOR}
            />
            <span className="radio__control"></span>
          </span>
          <span className="radio__label">Scissor ✂️</span>
        </label>
      </div>
      <div className="radio">
        <label className="radio__item">
          <span className="radio__input">
            <input
              onChange={handleChange}
              type="radio"
              name="you-select"
              value={PAPER}
            />
            <span className="radio__control"></span>
          </span>
          <span className="radio__label">Paper 📰</span>
        </label>
      </div>
    </div>
  )
}

export default YouSelect