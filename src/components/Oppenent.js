import React, { useRef, useState, Suspense, useEffect } from "react"
import anime from "animejs"

import useStore from "./../store"
import Model from "./Model"
import Loading from "./Loading"

function Oppenent() {
  const state = useStore()
  const hand = useRef()

  useEffect(() => {
    if (!hand.current || !state.othersIsChoosing) return

    startOther()
  }, [state.othersIsChoosing])

  function startOther() {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 700,
      complete: () => {
        useStore.setState({
          other: 1,
          othersIsChoosing: false
        })
      }
    });

    tl
      .add({
        targets: hand.current.position,
        y: [4, -2],
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
        y: 4,
        delay: 300
      })
  }

  // const positionAnimationRef = useRef()
  // const positionAnimation = useSpring({
  //   y: !state.hideOther ? -2 : 4,
  //   from: { y: 4 },
  //   config: { mass: 3 },
  //   ref: positionAnimationRef
  // })

  // const rotationAnimationRef = useRef()
  // const rotationAnimation = useSpring({
  //   y: 0,
  //   from: { y: state.othersIsChoosing ? 1 : 0 },
  //   loop: { reverse: true },
  //   config: { duration: 100 },
  //   ref: rotationAnimationRef
  // })

  // useChain([positionAnimationRef, rotationAnimationRef])

  // useEffect(() => {
  //   setTimeout(() => {
  //    stopChoosing()
  //   }, 3000)

  //   setTimeout(() => {
  //     console.log("now")
  //     useStore.setState({
  //       other: 1
  //     })
  //   }, 3500)
  // }, [])

  // const stopChoosing = () => {
  //   useStore.setState({
  //     othersIsChoosing: false
  //   })
  // }

  // const saveOthersScore = () => {

  // }

  return (
    <Suspense fallback={<Loading />}>
      {/* <a.group position-y={positionAnimation.y} position-x={rotationAnimation.y}>
          <Model path="/models/pizza.gltf" />
        </a.group> */}
      <group ref={hand} position={[0, 4, 0]}>
        <Model />
      </group>
    </Suspense>
  )
}

export default Oppenent