import { MODEL_OUTSIDE_POSITION_TOP, MODEL_INSIDE_POSITION_TOP } from "./../../settings"

const useEnterAnimationFromTop = () => {
  return {
    in: targets => ({
      targets: targets.position,
      y: [MODEL_OUTSIDE_POSITION_TOP[1], MODEL_INSIDE_POSITION_TOP[1]]
    }),
    out: targets => ({
      targets: targets.position,
      y: MODEL_OUTSIDE_POSITION_TOP[1],
      delay: 400
    }),
    settings: {
      duration: 2400
    }
  }
}

export default useEnterAnimationFromTop