import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei/useGLTF"
import anime from "animejs"

import { MODEL_OUTSIDE_POSITION_BOTTOM, CONTROL_REVEAL_TRANSITION_DURATION } from "./../../settings"

const PoseChallenging = props => {
  const group = useRef()
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/challenging.glb`)

  useEffect(() => {
    if (!group.current) return
    enter()
  }, [group])

  const enter = () => {
    anime({
      targets: group.current.position,
      keyframes: [
        { y: MODEL_OUTSIDE_POSITION_BOTTOM[1] },
        { y: -6.2 },
        { y: MODEL_OUTSIDE_POSITION_BOTTOM[1], delay: 300 },
      ],
      easing: "linear",
      duration: CONTROL_REVEAL_TRANSITION_DURATION
    })
  }

  return (
    <group ref={group} {...props} position={MODEL_OUTSIDE_POSITION_BOTTOM}>
      <primitive object={nodes.Bone} />
      <skinnedMesh material={materials.skin} geometry={nodes.Cube.geometry} skeleton={nodes.Cube.skeleton} />
    </group>
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/models/challenging.glb`)

export default PoseChallenging
