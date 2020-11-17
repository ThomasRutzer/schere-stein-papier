import { 
  YOU, OPPONENT, DRAW, YOUR_SELECTION_NOT_SELECTED,
  SCISSORS, ROCK, PAPER
 } from "./../settings"

const config = {
  [SCISSORS]: {
    beats: PAPER,
    loses: ROCK
  },
  [PAPER]: {
    beats: ROCK,
    loses: SCISSORS
  },
  [ROCK]: {
    beats: SCISSORS,
    loses: PAPER
  },
}

class EvaluationService {
  static getWinner(yourSelection, oppenentsSelection) {
    if (yourSelection === oppenentsSelection) return DRAW
    if (yourSelection === YOUR_SELECTION_NOT_SELECTED) return OPPONENT
    return config[yourSelection].beats === oppenentsSelection ? YOU : OPPONENT
  }
}

export default EvaluationService