import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { LumaSplat } from "./LumaSplat";
import { Box, OrbitControls } from "@react-three/drei";

import { useControls } from "leva";
import { DreiSplat } from "./DreiSplat";

function App() {
  const { splatType } = useControls({
    splatType: {
      options: {
        luma: 0,
        drei: 1,
      },
    },
  });

  return (
    <Container>
      <Canvas>
        <OrbitControls object-position={[-0.922, 0.48, 0.266]} object-rotation={[-1.06, -1.034, -0.99]} />
        <Box position={[1.1, 0, 0]} scale={[1, 0.1, 1]} />
        {splatType === 0 && <LumaSplat />}
        {splatType === 1 && <DreiSplat />}
      </Canvas>
    </Container>
  );
}

const Container = styled.div`
  width: 100svw;
  height: 100svh;
`;

export default App;
