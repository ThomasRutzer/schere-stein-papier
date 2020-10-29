import React, { useEffect, useRef } from "react"
import anime from "animejs"

import { TIME_TO_CHOOSE } from "./../settings"
import "./ProgressBar.css"

const ProgressBar = ({ size = 40, strokeWidth = 1 }) => {
  const svgRef = useRef()
  const circleRef = useRef()

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2

  useEffect(() => {
    if (!svgRef.current || !circleRef.current) return

    const tl = anime.timeline({
      easing: "linear",
      duration: TIME_TO_CHOOSE - 100
    });

    tl
      .add({
        targets: svgRef.current,
        opacity: [0, 1],
        duration: 100
      })
      .add({
        targets: circleRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
      })


  }, [svgRef, circleRef])

  return (
    <>
      <svg
        ref={svgRef}
        className="svg"
        width={size}
        height={size}
      >
        <circle
          ref={circleRef}
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          stroke="red"
          strokeWidth={strokeWidth}
        />

      </svg>
    </>
  )
}

export default ProgressBar
