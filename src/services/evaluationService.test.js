import EvaluationService from "./EvaluationService"
import { ROCK, SCISSOR, DRAW, OPPONENT, YOU } from "./../settings"

describe("EvaluationService", () => {
  test("static method getWinner", () => {
    const youWin = EvaluationService.getWinner(ROCK, SCISSOR)
    const opponentWin = EvaluationService.getWinner(SCISSOR, ROCK)
    const itsADraw = EvaluationService.getWinner(SCISSOR, SCISSOR)

    expect(youWin).toBe(YOU)
    expect(opponentWin).toBe(OPPONENT)
    expect(itsADraw).toBe(DRAW)
  })
})