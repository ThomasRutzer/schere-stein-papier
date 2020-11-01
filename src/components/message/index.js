import anime from "animejs"
import { useEffect, useRef, useState } from "react"
import splitting from "splitting"

import "./index.css"

const Message = ({ text }) => {
  const messageRef = useRef()
  const [splitted, setSplitted] = useState()

  useEffect(() => {
    if (!messageRef.current || !text) return

    const res = splitting.html({
      content: text,
      by: "chars"
    })

    setSplitted(res)
  }, [text])


  useEffect(() => {
    if (!messageRef.current || !splitted) return

    const tl = anime.timeline({
      duration: 900,
      easing: 'easeInOutExpo',
    })

    const target = document.querySelectorAll(".char")

    tl
      .add({
        targets: target,
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      })
      .add({
        targets: target,
        translateY: [0, -10],
        opacity: [1, 0],
        delay: anime.stagger(100, {start: 200}),
        direction: "reverse"
      })
  }, [splitted])


  return (
    <div ref={messageRef} className="message" dangerouslySetInnerHTML={{ __html: splitted }}>
    </div>
  )
}

export default Message