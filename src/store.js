import create from "zustand"

const useStore = create(set => ({
  you: null,
  other: null,
  othersIsChoosing: false
}))

export default useStore