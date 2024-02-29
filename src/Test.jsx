import { Environment, Grid, PivotControls } from "@react-three/drei";
import React from "react";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import { extend } from "@react-three/fiber";

extend({ LumaSplats: LumaSplatsThree });

export function Test() {
  const gridConfig = {
    gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: "#6f6f6f",
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: "#c1c1c1",
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };

  return (
    <>
      <Grid position={[0, -1, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />

      <lumaSplats
        semanticsMask={LumaSplatsSemantics.FOREGROUND}
        // Emmanuel Frémiet - Jeanne d’Arc @HouseofJJD
        source="https://lumalabs.ai/capture/d80d4876-cf71-4b8a-8b5b-49ffac44cd4a"
        position={[-1, 0, 0]}
        scale={0.5}
      />

      <PivotControls anchor={[0, 0, 0]}>
        <lumaSplats
          semanticsMask={LumaSplatsSemantics.FOREGROUND}
          // Camille Alaphilippe - La femme au singe @HouseofJJD
          source="https://lumalabs.ai/capture/b46ae7cf-0e40-431a-9d7e-45bc3ec516c6"
          position={[1, 0, 0]}
          scale={0.5}
          rotation={[0, Math.PI, 0]}
        />
      </PivotControls>
    </>
  );
}
