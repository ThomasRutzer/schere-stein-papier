import create from "zustand"

import EvaluationService from "./services/evaluationService"
import { YOU, OPPONENT } from "./settings"


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
    const winner = EvaluationService.youBeat(state.you, state.other)

    return {
      lastWinner: winner,
      otherWon: winner === OPPONENT ? state.otherWon + 1 : state.otherWon,
      youWon: winner === YOU ? state.youWon + 1 : state.youWon
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