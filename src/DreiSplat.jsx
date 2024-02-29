import React from "react";
import { Splat } from "@react-three/drei";

export const DreiSplat = () => {
  return <Splat src="https://huggingface.co/datasets/kawaicheung/test/resolve/main/garden.splat" position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />;
};
