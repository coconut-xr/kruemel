import { Container } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";
import { ColorRepresentation } from "three";

export function Radio({
  color = "white",
  checked,
  ...rest
}: Omit<ComponentProps<typeof Container>, "children"> & {
  checked: boolean;
  color?: ColorRepresentation;
}) {
  return (
    <Container
      height={0.06}
      width={0.06}
      alignItems="center"
      justifyContent="center"
      borderRadius={0.03}
      backgroundColor="black"
      {...rest}
    >
      <Container
        padding={checked ? 0.015 : 0}
        borderRadius={0.015}
        backgroundColor={color}
      ></Container>
    </Container>
  );
}
