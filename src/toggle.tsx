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
      height={0.06}
      width={0.1}
      padding={0.015}
      alignItems="center"
      justifyContent="space-between"
      flexDirection="row"
      borderRadius={0.03}
      backgroundColor="black"
      {...rest}
    >
      <Container index={checked ? 0 : 1} padding={0.01}></Container>
      <Container
        index={checked ? 1 : 0}
        padding={0.015}
        borderRadius={0.015}
        backgroundColor={color}
        backgroundOpacity={checked ? 1 : 0.5}
      ></Container>
    </Container>
  );
}
