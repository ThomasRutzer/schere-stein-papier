import create from "zustand"

const useStore = create(set => ({
  you: null,
  other: null,
  othersIsChoosing: false,
  youAreChoosing: false,
  roundCount: 0,
  otherWon: 0,
  youWon: 0,
  lastWinner: null,
  sceneLoaded: false,
  saveScore: () => set(state => {
    const winner = state.you === state.other ?  "you" : "other"
    return {
      lastWinner: winner,
      otherWon: winner === "other" ? state.otherWon + 1 : state.otherWon,
      youWon: winner === "you" ? state.youWon + 1 : state.youWon
    }
  }),
  reset: () => set(state => ({
    you: null,
    other: null,
    othersIsChoosing: false,
    youAreChoosing: false,
    roundCount: state.roundCount++
  })),
}))

export default useStore