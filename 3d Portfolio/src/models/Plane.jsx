import { useRef, useEffect} from 'react';
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

export const Plane = ({isRotating, ...props}) => {
    const ref = useRef();
    const { scene, animations} = useGLTF(planeScene);
    const {actions} = useAnimations(animations, ref);
        console.log(Object.keys(actions))
    useEffect(() => {
      actions["Animation"].play();
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Plane
