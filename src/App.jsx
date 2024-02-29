import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { Scene } from "./Scene";
import { Box, OrbitControls } from "@react-three/drei";
import { useRef } from "react";

function App() {
  return (
    <Container>
      <Canvas>
        <OrbitControls object-position={[-0.922, 0.48, 0.266]} object-rotation={[-1.06, -1.034, -0.99]} />
        <Box position={[1.1, 0, 0]} scale={[1, 0.1, 1]} />
        <Scene />
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

export default App;
