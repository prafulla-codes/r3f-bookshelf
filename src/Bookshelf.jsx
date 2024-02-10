import {useGLTF} from '@react-three/drei'


function BookShelf () {
    let model = useGLTF('models/bookshelf.glb',false)

    return <group>
        <primitive object={model.scene} scale={2}/>
    </group>
}

export default BookShelf;