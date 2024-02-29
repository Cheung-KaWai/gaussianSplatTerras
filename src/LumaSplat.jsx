import React from "react";
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import { extend } from "@react-three/fiber";

// Make LumaSplatsThree available to R3F
extend({ LumaSplats: LumaSplatsThree });

export const LumaSplat = () => {
  return (
    <>
      <lumaSplats semanticsMask={LumaSplatsSemantics.FOREGROUND} source="https://lumalabs.ai/capture/ca9ea966-ca24-4ec1-ab0f-af665cb546ff" scale={0.1} particleRevealEnabled={true} />
    </>
  );
};
