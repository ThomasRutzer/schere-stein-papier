import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei"
import anime from "animejs"

import { MODEL_OUTSIDE_POSITION_TOP } from "../../settings"
import useEnterAnimationFromTop from "./useEnterAnimationFromTop"

const PoseScissors = props => {
  const group = useRef()
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/scissors.glb`)
  const enterAnimation = useEnterAnimationFromTop()

  useEffect(() => {
    if (!group.current) return
    enter()
  }, [group])

  const enter = () => {
    const tl = anime.timeline({
      duration: enterAnimation.settings.duration,
      begin: () => props.poseEnterStart("REVEAL_SCISSORS"),
      complete: () => props.poseEnterComplete("REVEAL_SCISSORS")
    })

    tl
      .add(enterAnimation.in(group.current))
      .add(enterAnimation.out(group.current))
  }

  return (
    <group
      {...props}
      ref={group}
      position={[0, MODEL_OUTSIDE_POSITION_TOP[1], 0]}
      rotation={[0, 0, Math.PI]}
      scale={[1.5, 1.5, 1.5]}>
      <primitive object={nodes.Bone} />
      <skinnedMesh material={materials.skin} geometry={nodes.Cube.geometry} skeleton={nodes.Cube.skeleton} />
    </group>
  )
}

export default PoseScissors
