import { useProgress, Html } from "@react-three/drei"
import { useEffect } from "react"

import useStore from "./../store"

function Loading() {
  const { progress } = useProgress()

  useEffect(() => {
    if (progress === 100) {
      useStore.setState({ sceneLoaded: true })
    }
  }, [progress])

  return <Html center>{progress} % loaded</Html>
}

export default Loading