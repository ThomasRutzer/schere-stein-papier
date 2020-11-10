import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei/useGLTF"
import anime from "animejs"

import { MODEL_INSIDE_POSITION_TOP, MODEL_OUTSIDE_POSITION_TOP } from "../../settings"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("./../models/scissor.glb")

  useEffect(() => {
    if (!group.current) return
    enterAnimation()
  }, [group])

  const enterAnimation = () => {
    console.log("enter");
    const tl = anime.timeline({
      duration: 2400,
      begin: () => props.poseEnterStart("REVEAL_SCISSOR"),
      complete: () => props.poseEnterComplete("REVEAL_SCISSOR")
    })

    tl
      .add({
        targets: group.current.position,
        y: [MODEL_OUTSIDE_POSITION_TOP[1], MODEL_INSIDE_POSITION_TOP[1]],
      })

      .add({
        targets: group.current.position,
        y: MODEL_OUTSIDE_POSITION_TOP[1],
        delay: 400
      })
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

useGLTF.preload("./../models/scissor.glb")
