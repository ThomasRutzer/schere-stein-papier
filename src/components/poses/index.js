import useStore from "./../../store"
import PoseChallenging from "./PoseChallenging"
import PosePaper from "./PosePaper"
import PoseRock from "./PoseRock"
import PoseScissors from "./PoseScissors"
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

      case "REVEAL_SCISSORS":
        return <PoseScissors poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />

      case "REVEAL_PAPER":
        return <PosePaper poseEnterStart={poseEnterStart} poseEnterComplete={poseEnterComplete} />

      default:
        break;
    }
  }

  return getPose()
}

export default PoseSwitcher 