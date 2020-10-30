import React, { useRef, useState, Suspense, useEffect } from "react"
import anime from "animejs"

import useStore from "./../store"
import Model from "./Model"
import Loading from "./Loading"
import { MODEL_OUTSIDE_POSITION_TOP, MODEL_OUTSIDE_POSITION_BOTTOM } from "./../settings"

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
        { y: -6 },
        { y: -6 },
        { y: MODEL_OUTSIDE_POSITION_BOTTOM[1] },
      ],
      easing: "easeOutQuad",
      duration: 2000
    })
  }

  const revealModelChoosing = () => {
    anime({
      targets: hand.current.position,
      y: [MODEL_OUTSIDE_POSITION_TOP[1], -2],
      duration: 2000,
      complete: hideModelChoosing
    })
  }

  const hideModelChoosing = () => {
    anime({
      targets: hand.current.position,
      y: [-2, MODEL_OUTSIDE_POSITION_TOP[1]],
      duration: 2000,
      complete: () => {
        console.log("reset")
        saveScore()
        reset()
      }
    })
  }

  function wiggleModel() {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 700,
      complete: () => {
        useStore.setState({
          other: 1,
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