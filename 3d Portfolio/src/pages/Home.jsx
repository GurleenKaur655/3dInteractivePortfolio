import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Loader from '../components/Loader'


import Lighthouse from '../models/lighthouse'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'
import HomeInfo from '../components/HomeInfo'


const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [lighthouseTransform, setLighthouseTransform] = useState([null, null, null])
  const [planeTransform, setPlaneTransform] = useState([null, null])


  const adjustLighthouseForScreenSize = () => {
    let screenScale
    let screenPosition = [0, -6.5, -43]
    // let rotation = [0.1, 4.7, 0]

    if (window.innerWidth < 768) {
      screenScale = [0.065, 0.065, 0.065]
    } else {
      screenScale = [0.07, 0.07, 0.07]
    }

    setLighthouseTransform([screenScale, screenPosition])
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.0999 ,0.0999, 0.0999]
      screenPosition = [0, -0.4, 0]
    } else {
      screenScale = [0.11, 0.11, 0.11];
      screenPosition = [0, -0.4, 0]
    }

     setPlaneTransform([screenScale, screenPosition])
  }
 

  useEffect(() => {
    adjustLighthouseForScreenSize()
    window.addEventListener("resize", adjustLighthouseForScreenSize)

    return () => window.removeEventListener("resize", adjustLighthouseForScreenSize)
  }, [])

    useEffect(() => {
    adjustPlaneForScreenSize()
    window.addEventListener("resize", adjustPlaneForScreenSize)

    return () => window.removeEventListener("resize", adjustPlaneForScreenSize)
  }, [])

  const [lighthouseScale, lighthousePosition] = lighthouseTransform
    const [planeScale, planePosition] = planeTransform

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ position: [0, 0, 5], near: 0.1, far: 1000 }}>
        {/* objects closer will not be rendered and far than 1000 will not be rendered, without lighting cant see the models*/}

        <Suspense fallback={<Loader />}>
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <ambientLight intensity={0.5} />

          <Sky isRotating={isRotating} />

          <Bird />

          <Lighthouse
            position={lighthousePosition}
            scale={lighthouseScale}
            isRotating={isRotating}
            rotation={[0.1, 4.7077, 0]}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20.5, 0]} />
          {/* it will take some time to load the 3d project hence a fallback to show instead */}
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home