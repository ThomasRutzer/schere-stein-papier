import create from "zustand"

import EvaluationService from "./services/evaluationService"
import { 
  YOU, OPPONENT, DRAW,
  MESSAGE_DRAW, MESSAGE_OPPONENT_WON, MESSSAGE_YOU_WON
 } from "./settings"


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
  message: null,
  init: () => set(state => ({
    message: "Let's start"
  })),
  saveScore: () => set(state => {
    const winner = EvaluationService.youBeat(state.you, state.other)
    const message = winner === DRAW 
      ? MESSAGE_DRAW : winner === OPPONENT 
        ? MESSAGE_OPPONENT_WON 
        : MESSSAGE_YOU_WON

    return {
      lastWinner: winner,
      otherWon: winner === OPPONENT ? state.otherWon + 1 : state.otherWon,
      youWon: winner === YOU ? state.youWon + 1 : state.youWon,
      message
    }
  }),
  reset: () => set(state => ({
    you: null,
    other: null,
    othersIsChoosing: false,
    youAreChoosing: false,
    roundCount: state.roundCount++,
    message: null
  })),
}))

export default useStore