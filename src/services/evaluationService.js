import { 
  YOU, OPPONENT, DRAW,
  SCISSOR, ROCK, PAPER
 } from "./../settings"

const config = {
  [SCISSOR]: {
    beats: PAPER,
    loses: ROCK
  },
  [PAPER]: {
    beats: ROCK,
    loses: SCISSOR
  },
  [ROCK]: {
    beats: SCISSOR,
    loses: PAPER
  },
}

class EvaluationService {
  static youBeat(yourSelection, oppenentsSelection) {
    if (yourSelection === oppenentsSelection) return DRAW
    if (!yourSelection) return OPPONENT
    return config[yourSelection].beats === oppenentsSelection ? YOU : OPPONENT
  }
}

export default EvaluationService