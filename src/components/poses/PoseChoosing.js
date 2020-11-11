import React, { useRef, useEffect } from "react"
import { useGLTF } from "@react-three/drei/useGLTF"
import anime from "animejs"

import { MODEL_OUTSIDE_POSITION_TOP, MODEL_INSIDE_POSITION_TOP } from "./../../settings"

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/models/choosing.glb`)

  useEffect(() => {
    if (!group.current) return
    enterAnimation()
  }, [group])

  const enterAnimation = () => {
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 700,
      complete: () => props.poseEnterComplete("CHOOSING")
    });

    tl
      .add({
        targets: group.current.position,
        y: [MODEL_OUTSIDE_POSITION_TOP[1], MODEL_INSIDE_POSITION_TOP[1]],
      })
      .add({
        targets: group.current.position,
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
        targets: group.current.position,
        y: MODEL_OUTSIDE_POSITION_TOP[1],
        delay: 300
      })
  }
  return (
    <group 
      ref={group} 
      {...props} 
      scale={[1.5, 1.5, 1.5]} 
      position={[0, MODEL_OUTSIDE_POSITION_TOP[1], 0]} 
      rotation={[0, 0, Math.PI]}>
      <primitive object={nodes.Bone} />
      <skinnedMesh material={materials.skin} geometry={nodes.Cube.geometry} skeleton={nodes.Cube.skeleton} />
    </group>
  )
}

useGLTF.preload(`${process.env.PUBLIC_URL}/models/choosing.glb`)
