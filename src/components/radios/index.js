import { useEffect, useState, useRef } from "react"
import anime from "animejs"

import {
  TIME_TO_CHOOSE, YOUR_SELECTION_NOT_SELECTED,
  SCISSOR, ROCK, PAPER
} from "../../settings"
import useStore from "../../store"
import "./index.css"

const YouSelect = () => {
  const timeToChooseTimeout = useRef()
  const wrapper = useRef()
  const state = useStore()
  const [now] = useState(Date.now())

  useEffect(() => {
    if (!wrapper.current) return

    anime({
      targets: wrapper.current.childNodes,
      translateY: [250, 0],
      duration: 1200,
      easing: "easeOutQuad",
      delay: anime.stagger(100),
      begin: () => {
        useStore.setState({ message: "Choose" })
      },
    })
  }, [wrapper])

  useEffect(() => {
    const exactTimeout = TIME_TO_CHOOSE - (Math.abs(Date.now() - now))
    timeToChooseTimeout.current = setTimeout(() => {
      saveSelection(YOUR_SELECTION_NOT_SELECTED)
    }, exactTimeout)

    return () => clearTimeout(timeToChooseTimeout.current)
  }, [now, state.you])

  const handleChange = (e) => {
    anime({
      targets: wrapper.current.childNodes,
      translateY: [0, 250],
      duration: 700,
      easing: "easeOutQuad",
      delay: anime.stagger(50),
      complete: () => {
        saveSelection(e.target.value);
      },
    })
  }

  const saveSelection = you => {
    useStore.setState({
      you
    })
  }

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