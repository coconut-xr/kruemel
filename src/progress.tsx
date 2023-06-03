import { Container, ExtendedThreeEvent } from "@coconut-xr/koestlich";
import React, { ComponentProps, startTransition, useCallback } from "react";
import { ColorRepresentation } from "three";
import { clamp } from "three/src/math/MathUtils.js";

/**
 * @param value between 0 and 1
 */
export function Progess({
  value,
  ...props
}: Omit<ComponentProps<typeof Container>, "children"> & {
  value: number;
}) {
  return (
    <Container
      height={0.08}
      width={1}
      borderRadius={0.04}
      backgroundOpacity={0.5}
      backgroundColor="black"
      {...props}
    >
      <Container
        width={`${((1 - 0.03) * clamp(value, 0, 1) + 0.03) * 100}%`}
        minWidth={0.03}
        height={0.08}
        borderRadius={0.04}
        backgroundColor="black"
      />
    </Container>
  );
}
