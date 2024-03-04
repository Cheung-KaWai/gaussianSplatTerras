import React from "react";
import { Splat } from "@react-three/drei";

export const DreiSplat = () => {
  return (
    <>
      <Splat src="backyard2.splat" position={[0, 0, 0]} rotation={[0, 0, 0]} alphaTest={false} />
    </>
  );
};
