import { Container } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";
import { ColorRepresentation } from "three";

export function Toggle({
  color,
  checked,
  ...rest
}: Omit<ComponentProps<typeof Container>, "children"> & {
  checked: boolean;
  color?: ColorRepresentation;
}) {
  return (
    <Container
      height={0.08}
      width={0.14}
      padding={0.02}
      alignItems="center"
      justifyContent="space-between"
      flexDirection={checked ? "row-reverse" : "row"}
      borderRadius={0.04}
      backgroundColor="black"
      {...rest}
    >
      <Container
        padding={0.02}
        borderRadius={0.02}
        backgroundColor={color}
        backgroundOpacity={checked ? 1 : 0.5}
      ></Container>
    </Container>
  );
}
