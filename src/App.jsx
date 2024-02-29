import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { LumaSplat } from "./LumaSplat";
import { Box, Environment, OrbitControls } from "@react-three/drei";

import { Leva, useControls } from "leva";
import { DreiSplat } from "./DreiSplat";
import { Model } from "./components/Model";

function App() {
  const { splatType } = useControls({
    splatType: {
      options: {
        drei: 0,
        luma: 1,
      },
    },
  });

  return (
    <Container>
      <Canvas>
        <Leva hidden />
        <OrbitControls object-position={[-0.922, 0.48, 0.266]} object-rotation={[-1.06, -1.034, -0.99]} />
        {splatType === 0 && <DreiSplat />}
        {splatType === 1 && <LumaSplat />}
        <Environment preset="city" />
        <Model scale={[0.25, 1, 0.25]} position={[2.4, -0.1, -0.1]} />
        <Model scale={[0.25, 1, 0.25]} position={[0.1, -0.08, -2.5]} rotation={[0, Math.PI / 2, 0]} />
        {/* <Test /> */}
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

export default App;
