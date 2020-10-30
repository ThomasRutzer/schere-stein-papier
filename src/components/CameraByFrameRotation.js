import { useThree, useFrame, extend } from "react-three-fiber"

const CameraByFrameRotation = () => {
  console.log("render")
  let angle = 0;
  const { camera } = useThree()

  useFrame(() => {
    camera.position.x = 0.5 * Math.cos(angle);
    angle += 0.01;
  })

  return ""
}

export default CameraByFrameRotation