import React, { useEffect, useRef } from "react"
import anime from "animejs"

import { TIME_TO_CHOOSE } from "./../../settings"
import "./index.css"

const ProgressBar = ({ size = 64, strokeWidth = 8 }) => {
  const intervalRef = useRef()
  const svgRef = useRef()
  const labelRef = useRef()
  const circleRef = useRef()

  const center = size / 2
  const radius = size / 2 - strokeWidth / 2

  useEffect(() => {
    if (!svgRef.current || !circleRef.current) return

    const tl = anime.timeline({
      easing: "linear",
      duration: TIME_TO_CHOOSE
    });

    tl
      .add({
        targets: svgRef.current,
        opacity: [0, 1],
        duration: 100
      })
      .add({
        targets: circleRef.current,
        stroke: "#F74803",
        strokeDashoffset: [anime.setDashoffset, 0],
      })
  }, [svgRef, circleRef])

  useEffect(() => {
    if (!labelRef.current) return

    anime({
      targets: labelRef.current,
      color: "#F74803",
      duration: TIME_TO_CHOOSE - 100,
      begin: () => {
        let begin = TIME_TO_CHOOSE / 1000
        labelRef.current.innerText = begin

        intervalRef.current = setInterval(() => {
          begin = begin - 1
          labelRef.current.innerText = begin
        }, 1000)
      },
      complete: () => {
        clearInterval(intervalRef)
      }
    })

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [labelRef, intervalRef])

  return (
    <div className="progress-bar">
      <svg
        ref={svgRef}
        className="progress-bar__svg"
        width={size}
        height={size}
      >
        <circle
          className="progress-bar__circle-bg"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
      </svg>
      <p ref={labelRef} className="progress-bar__label"></p>
    </div>
  )
}

export default ProgressBar
