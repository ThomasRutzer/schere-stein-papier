import EvaluationService from "./EvaluationService"
import { ROCK, SCISSORS, DRAW, OPPONENT, YOU } from "./../settings"

describe("EvaluationService", () => {
  test("static method getWinner", () => {
    const youWin = EvaluationService.getWinner(ROCK, SCISSORS)
    const opponentWin = EvaluationService.getWinner(SCISSORS, ROCK)
    const itsADraw = EvaluationService.getWinner(SCISSORS, SCISSORS)

    expect(youWin).toBe(YOU)
    expect(opponentWin).toBe(OPPONENT)
    expect(itsADraw).toBe(DRAW)
  })
})