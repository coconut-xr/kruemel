import { Container, ExtendedThreeEvent } from "@coconut-xr/koestlich";
import { ThreeEvent } from "@react-three/fiber";
import React, { ComponentProps, startTransition, useCallback, useRef } from "react";
import { Box3, ColorRepresentation, Mesh, Vector3 } from "three";
import { clamp } from "three/src/math/MathUtils.js";

const vectorHelper = new Vector3();

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
  const downRef = useRef(false);
  const onPointerDown = useCallback((e: ThreeEvent<PointerEvent>) => {
    downRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    e.stopPropagation();
  }, []);
  const onPointerMove = useCallback(
    (e: ThreeEvent<PointerEvent>) => {
      if (!downRef.current || !(e.object instanceof Mesh)) {
        return;
      }
      if (e.object.geometry.boundingBox == null) {
        e.object.geometry.computeBoundingBox();
      }
      vectorHelper.copy(e.point);
      e.object.worldToLocal(vectorHelper);
      const box: Box3 = e.object.geometry.boundingBox;
      const value = clamp((vectorHelper.x - box.min.x) / box.max.x - box.min.x, 0, 1) * range;
      startTransition(() => onChange(value));
      e.stopPropagation();
    },
    [onChange, range],
  );
  const onPointerUp = useCallback((e: ThreeEvent<PointerEvent>) => {
    downRef.current = false;
    e.stopPropagation();
  }, []);
  return (
    <Container
      height={0.08}
      width={0.6}
      borderRadius={0.04}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
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
