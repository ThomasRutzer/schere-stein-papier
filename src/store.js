import create from "zustand"

import EvaluationService from "./services/evaluationService"
import {
  YOU, OPPONENT, DRAW,
  ROCK, SCISSORS, PAPER,
  MESSAGE_DRAW, MESSAGE_OPPONENT_WON, MESSSAGE_YOU_WON, MESSAGE_START, MESSAGE_REVEAL
} from "./settings"
import randomFromStringList from "./utils/randomFromStringList"

const useStore = create(set => ({
  you: null,
  other: null,
  othersIsChoosing: false,
  youAreChoosing: false,
  otherWon: 0,
  youWon: 0,
  currentPose: "",
  sceneLoaded: false,
  message: null,
  initialized: false,

  init: () => set(state => ({
    message: MESSAGE_START,
    currentPose: "CHALLENGING",
    initialized: true
  })),
  start: () => set(state => ({
    othersIsChoosing: true,
    currentPose: "CHOOSING"
  })),
  reveal: () => set(state => ({
    message: MESSAGE_REVEAL
  })),
  saveYours: (you) => set(state => {
    return {
      you,
      currentPose: `REVEAL_${state.other}`
    }
  }),
  saveOther: () => set(state => ({
    other: randomFromStringList([ROCK, SCISSORS, PAPER]),
    othersIsChoosing: false,
    youAreChoosing: true
  })),
  saveScore: () => set(state => {
    const winner = EvaluationService.getWinner(state.you, state.other)
    const message = winner === DRAW
      ? MESSAGE_DRAW : winner === OPPONENT
        ? MESSAGE_OPPONENT_WON
        : MESSSAGE_YOU_WON

    return {
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
    message: null,
    currentPose: "CHALLENGING"
  })),
}))

export default useStore