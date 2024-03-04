import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { LumaSplat } from "./LumaSplat";
import { Box, Environment, OrbitControls } from "@react-three/drei";

import { Leva, useControls } from "leva";
import { DreiSplat } from "./DreiSplat";
import { Model } from "./components/Model";
import { useRef } from "react";

function App() {
  const ref = useRef();

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
        <OrbitControls ref={ref} target={[-0.436, 0.168, -0.3025]} object-position={[0.119, 0.147, -0.265]} object-rotation={[0.505, 1.31, -0.491]} onChange={() => console.log(ref.current)} />
        {splatType === 0 && <DreiSplat />}
        {splatType === 1 && <LumaSplat />}
        <Environment preset="city" />
        <Model scale={[0.07, 0.3, 0.07]} position={[-0.25, 0.098, -0.4]} rotation={[0, 0.75, 0]} />
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
