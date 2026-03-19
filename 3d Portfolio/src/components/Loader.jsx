import React from 'react'
import { Html } from '@react-three/drei'

const Loader = () => {
  return (
    //when we are rendering something into canvas it has to be something that is 3d, so if we want to render something that is not 3d we have to turn it into 3d, so we can use a div and give it some styles to make it look like a loader, and then we can use the animate-spin class to make it spin, and other classes likewise
    // we use react three drei (has helpers and abstractions for react three fiber)
    <Html>
    <div className="flex justify-center items-center">
        <div className="w-20 h-20 border-2 border-opacity-20
        border-blue-500 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
    </Html>
  )
}

export default Loader