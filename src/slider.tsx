import { Container, ExtendedThreeEvent } from "@coconut-xr/koestlich";
import React, { ComponentProps, startTransition, useCallback } from "react";
import { ColorRepresentation } from "three";
import { clamp } from "three/src/math/MathUtils.js";

export function Slider({
  color = "white",
  value,
  range,
  onChange,
  ...rest
}: Omit<ComponentProps<typeof Container>, "children"> & {
  value: number;
  range: number;
  onChange: (value: number) => void;
  color?: ColorRepresentation;
}) {
  const onPointerMove = useCallback(
    (e: ExtendedThreeEvent<PointerEvent>) => {
      if (e.uv != null && (e.nativeEvent.buttons === 1 || e.nativeEvent.buttons === undefined)) {
        //e.nativeEvent.buttons === undefined for ReactNative
        const value = e.uv.x * range;
        startTransition(() => onChange(value));
        e.stopPropagation();
      }
    },
    [onChange, range],
  );
  return (
    <Container
      height={0.08}
      width={0.6}
      borderRadius={0.04}
      onPointerMove={onPointerMove}
      padding={0.02}
      backgroundColor="black"
      {...rest}
    >
      <Container
        width={`${((1 - 0.03) * clamp(value / range, 0, 1) + 0.03) * 100}%`}
        minWidth={0.03}
        height={0.04}
        borderRadius={0.02}
        backgroundOpacity={0.5}
        backgroundColor={color}
        alignItems="flex-end"
      >
        <Container height={0.04} width={0.04} borderRadius={0.02} backgroundColor={color} />
      </Container>
    </Container>
  );
}
