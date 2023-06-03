import { Container } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";
import { ColorRepresentation } from "three";

export function Checkbox({
  color = "white",
  checked,
  ...rest
}: Omit<ComponentProps<typeof Container>, "children"> & {
  checked: boolean;
  color?: ColorRepresentation;
}) {
  return (
    <Container
      height={0.08}
      width={0.08}
      alignItems="center"
      justifyContent="center"
      backgroundColor="black"
      {...rest}
    >
      <Container padding={checked ? 0.02 : 0} backgroundColor={color} />
    </Container>
  );
}
