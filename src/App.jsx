import { Suspense } from "react";
import { Canvas } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, Loader, OrbitControls } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { Tundra } from "./vehicles/Tundra";

export default function App() {

  return (
    <CustomizationProvider>
      <div className="App">
      <Loader />
        <Canvas shadows camera={{ position: [0, 0, 20], fov:40 }}>
          <color attach="background" args={['grey']} />
          <Suspense fallback={null}>
          <Tundra scale={3.4} position={[0, 0, 0]} />
          </Suspense>
          <hemisphereLight intensity={0.5} />
        <ContactShadows position={[0, 0, 0.0]} opacity={0.75} scale={20} blur={2.5} far={12.8} />
        <ContactShadows resolution={1024} frames={1} position={[0, 0, 0]} scale={20} blur={1.5} opacity={0.5} far={25} />
        
        <ambientLight intensity={1.7} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

        {/* <Environment preset="city" /> */}
        <Environment resolution={1024} files="/future_parking_2k.hdr" background ground={{ height: 15, radius: 80, scale: 50 }} backgroundBlurriness={50} backgroundIntensity={10}  environmentIntensity={30}>
           
          </Environment>
          <ContactShadows position={[0, 0, 0.0]} opacity={0.75} scale={10} blur={2.5} far={0.8} />
          {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls  autoRotate  enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

