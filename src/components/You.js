import useStore from "./../store"
import StartButton from "./Button"
import YouSelect from "./YouSelect"

const You = () => {
  const state = useStore()

  return (
    <>
      Your UI!
      { !state.othersIsChoosing &&
        <StartButton />
      }

      { state.other && !state.you &&
        <YouSelect />
      }

      { state.other && state.you &&
        <p>
          you: {state.you}; oppenent: {state.other}
          { state.you === state.other && <span>WIN!!!</span>}
          { state.you !== state.other && <span>LOSE!!!</span>}
        </p>
      }
    </>
  )
}

export default You