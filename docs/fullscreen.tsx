import { RootContainer, RootObject } from "@coconut-xr/koestlich";
import { loadYoga } from "@coconut-xr/flex";
import React, { ReactNode } from "react";
import { useThree } from "@react-three/fiber";

export function Fullscreen({ children }: { children: ReactNode }) {
  const ratio = useThree((s) => s.size.width / s.size.height);
  return (
    <group position={[-ratio, 1, 0]}>
      <RootContainer
        loadYoga={loadYoga}
        id="root"
        overflow="scroll"
        width={2 * ratio}
        height={2}
      >
        {children}
      </RootContainer>
    </group>
  );
}
