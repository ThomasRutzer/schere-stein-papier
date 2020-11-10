/*
auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei/useGLTF"
import anime from "animejs"

import { MODEL_OUTSIDE_POSITION_TOP } from "./../../settings"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF("./../models/paper.glb")

  useEffect(() => {
    if (!group.current) return
    enterAnimation()
  }, [group])

  const enterAnimation = () => {
    const tl = anime.timeline({
      duration: 2400,
      begin: () => props.poseEnterStart("REVEAL_PAPER"),
      complete: () => props.poseEnterComplete("REVEAL_PAPER")
    })

    tl
      .add({
        targets: group.current.position,
        y: [MODEL_OUTSIDE_POSITION_TOP[1], -2],
      })

      .add({
        targets: group.current.position,
        y: [-2, MODEL_OUTSIDE_POSITION_TOP[1]],
        delay: 400
      })
  }

  return (
    <group ref={group} {...props} scale={[1.5, 1.5, 1.5]}>
      <primitive object={nodes.Bone} />
      <skinnedMesh material={materials.skin} geometry={nodes.Cube.geometry} skeleton={nodes.Cube.skeleton} />
    </group>
  )
}

useGLTF.preload("./../models/paper.glb")