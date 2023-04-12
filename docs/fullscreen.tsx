import { RootContainer, RootObject } from "@coconut-xr/koestlich";
import { loadYoga } from "@coconut-xr/flex";
import React, { ReactNode } from "react";
import { useThree } from "@react-three/fiber";

export function Fullscreen({ children }: { children: ReactNode }) {
  const ratio = useThree((s) => s.size.width / s.size.height);
  return (
    <group position={[-ratio * 2, 2, 0]}>
      <RootContainer
        loadYoga={loadYoga}
        id="root"
        overflow="scroll"
        width={4 * ratio}
        height={4}
      >
        {children}
      </RootContainer>
    </group>
  );
}
