import useStore from "./../store"
import Message from "./message"
import YourControls from "./yourControls"
import Score from "./score"

const UI = () => {
  const state = useStore()

  return (
    <>
      <Score />
      <YourControls />
      <Message text={state.message} />
    </>
  )
}

export default UI