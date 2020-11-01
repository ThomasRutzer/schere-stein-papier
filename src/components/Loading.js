import { useProgress } from "@react-three/drei"
import { useEffect } from "react"

import useStore from "./../store"

function Loading() {
  const { progress } = useProgress()
  const init = useStore(state => state.init)

  useEffect(init)

  useEffect(() => {
    if (progress === 100) {
      init()
    }
  }, [init, progress])

  return ""
}

export default Loading