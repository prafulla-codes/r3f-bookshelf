import { useEffect, useRef } from 'react'
import './Experience.css'
import * as THREE from 'three'
import BookShelf from './Bookshelf'
import { OrbitControls } from '@react-three/drei'
function Experience() {
  const orbitControls = useRef();
  useEffect(()=>{
    console.log(orbitControls.current)
    orbitControls.current.target = new THREE.Vector3(0,2,0)
    orbitControls.current.object.position.set(3,4,3)
  },[])
  return (
      <>
      <color attach="background" args={["grey"]}></color>
      <OrbitControls 
        minAzimuthAngle={-Math.PI / 4 * 0.2} // Restrict rotation left
        maxAzimuthAngle={Math.PI / 2 * 2} // Restrict rotation right
      maxDistance={8}
    
      ref={orbitControls}
      />
      <BookShelf/>
      <mesh  rotation-y={Math.PI / 2} scale={10} position-x={-1.33}>
        <planeGeometry />
        <meshBasicMaterial
        side={THREE.DoubleSide}
        color={"#2f2f2f"} />
      </mesh>
      <pointLight intensity={100} position={[5,3,2]} />
      <pointLight intensity={50} position={[0,6,-5]} />
      </>

  )
}

export default Experience
