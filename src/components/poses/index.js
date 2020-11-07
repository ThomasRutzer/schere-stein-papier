import useStore from "./../../store"
import PoseChallenging from "./PoseChallenging"
import PosePaper from "./PosePaper"
import PoseRock from "./PoseRock"
import PoseScissor from "./PoseScissor"
import PoseChoosing from "./PoseChoosing"

const PoseSwitcher = ({ poseEnterStart, poseEnterComplete }) => {
  const state = useStore()

  const getPose = () => {
    switch (state.currentPose) {
      case "CHALLENGING":
        return <PoseChallenging />

      case "CHOOSING":
        return <PoseChoosing poseEnterComplete={poseEnterComplete} />

      case "REVEAL_ROCK":
        return <PoseRock poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />

      case "REVEAL_SCISSOR":
        return <PoseScissor poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />

      case "REVEAL_PAPER":
        return <PosePaper poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />

      default:
        break;
    }
  }

  return getPose()
}

export default PoseSwitcher 