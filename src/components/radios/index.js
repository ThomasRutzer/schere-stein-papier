import { useEffect, useState, useRef, useCallback } from "react"
import anime from "animejs"

import {
  TIME_TO_CHOOSE, YOUR_SELECTION_NOT_SELECTED,
  SCISSORS, ROCK, PAPER
} from "../../settings"
import useStore from "../../store"
import "./index.css"

const YouSelect = () => {
  const timeToChooseTimeout = useRef()
  const wrapper = useRef()
  const [now] = useState(Date.now())
  const saveYours = useStore(state => state.saveYours)

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
      const targets = wrapper.current.childNodes
      const onRadiosHidden = () => {
        saveYours(YOUR_SELECTION_NOT_SELECTED)
      }

      hideRadios(targets, onRadiosHidden)
    }, exactTimeout)

    return () => clearTimeout(timeToChooseTimeout.current)
  }, [now, saveYours])

  const handleChange = e => {
    const selection = e.target.value
    const targets = Array.from(wrapper.current.childNodes).filter(child => !child.classList.contains(`radio--${selection}`))
    const onRadiosHidden = () => {
      clearTimeout(timeToChooseTimeout.current)
      saveYours(selection)
    }

    hideRadios(targets, onRadiosHidden)
  }

  const hideRadios = useCallback((targets, onComplete) => {
    anime({
      targets,
      translateY: [0, 250],
      duration: 700,
      easing: "easeOutQuad",
      delay: anime.stagger(50),
      complete: onComplete
    })
  }, [])

  return (
    <div ref={wrapper} className="radios">
      <div className={`radio radio--${ROCK}`}>
        <span className="radio__back"></span>
        <label className="radio__item">
          <input
            onChange={handleChange}
            type="radio"
            name="you-select"
            value={ROCK}
          />
          <span className="radio__control"></span>
          <span className="radio__label">Rock ✊</span>
        </label>
      </div>
      <div className={`radio radio--${SCISSORS}`}>
        <span className="radio__back"></span>
        <label className="radio__item">
          <input
            onChange={handleChange}
            type="radio"
            name="you-select"
            value={SCISSORS}
          />
          <span className="radio__control"></span>
          <span className="radio__label">Scissors ✌️</span>
        </label>
      </div>
      <div className={`radio radio--${PAPER}`}>
        <span className="radio__back"></span>
        <label className="radio__item">
          <input
            onChange={handleChange}
            type="radio"
            name="you-select"
            value={PAPER}
          />
          <span className="radio__control"></span>
          <span className="radio__label">Paper ✋</span>
        </label>
      </div>
    </div>
  )
}

export default YouSelect