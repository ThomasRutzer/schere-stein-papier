import useStore from "./../store"

const Button = () => {
  const state = useStore()

  const startGame = () => {
    useStore.setState({
      othersIsChoosing: true,
      you: null,
      other: null
    })
  }

  return (
    <button onClick={startGame} >Start</button>
  )
}

export default Button