import React, { useRef, useState, Suspense, useEffect } from "react"
import anime from "animejs"

import useStore from "./../store"
import Model from "./Model"
import Loading from "./Loading"
import {
  MODEL_OUTSIDE_POSITION_TOP, MODEL_OUTSIDE_POSITION_BOTTOM,
  CONTROL_REVEAL_TRANSITION_DURATION,
  ROCK, SCISSOR, PAPER
} from "./../settings"
import randomFromStringList from "./../utils/randomFromStringList"

function Oppenent() {
  const state = useStore()
  const hand = useRef()
  const reset = useStore(state => state.reset)
  const saveScore = useStore(state => state.saveScore)

  useEffect(() => {
    if (!state.othersIsChoosing && !state.youAreChoosing) {
      revealModelAttacking()
    }
  }, [state.othersIsChoosing, state.youAreChoosing])

  useEffect(() => {
    if (!state.othersIsChoosing) return
    wiggleModel()
  }, [state.othersIsChoosing])

  useEffect(() => {
    if (state.other && state.you) {
      revealModelChoosing()
    }
  }, [state.other, state.you])

  const revealModelAttacking = () => {
    anime({
      targets: hand.current.position,
      keyframes: [
        { y: MODEL_OUTSIDE_POSITION_BOTTOM[1] },
        { y: -7 },
        { y: -7 },
        { y: MODEL_OUTSIDE_POSITION_BOTTOM[1] },
      ],
      easing: "linear",
      duration: CONTROL_REVEAL_TRANSITION_DURATION
    })
  }

  const revealModelChoosing = () => {
    const tl = anime.timeline({
      duration: 2000,
      complete: () => {
        saveScore()
        reset()
      }
    })

    tl
      .add({
        targets: hand.current.position,
        y: [MODEL_OUTSIDE_POSITION_TOP[1], -2],
      })

      .add({
        targets: hand.current.position,
        y: [-2, MODEL_OUTSIDE_POSITION_TOP[1]],
      })
  }

  function wiggleModel() {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 700,
      complete: () => {
        useStore.setState({
          other: randomFromStringList([ROCK, SCISSOR, PAPER]),
          othersIsChoosing: false,
          youAreChoosing: true
        })
      }
    });

    tl
      .add({
        targets: hand.current.position,
        y: [MODEL_OUTSIDE_POSITION_TOP[1], -2],
      })
      .add({
        targets: hand.current.position,
        keyframes: [
          { x: 0 },
          { x: 1 },
          { x: -1 },
          { x: 1 },
          { x: -1 },
          { x: 1 },
          { x: -1 },
          { x: 1 },
          { x: -1 },
          { x: 0 },
        ],
      })
      .add({
        targets: hand.current.position,
        y: MODEL_OUTSIDE_POSITION_TOP[1],
        delay: 300
      })
  }

  return (
    <Suspense fallback={<Loading />}>
      <group
        ref={hand}
        position={
          state.othersIsChoosing || state.youAreChoosing
            ? MODEL_OUTSIDE_POSITION_TOP
            : MODEL_OUTSIDE_POSITION_BOTTOM
        }>
        <Model />
      </group>
    </Suspense>
  )
}

export default Oppenent