import { Container } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";

export function Dropdown({ children, ...rest }: ComponentProps<typeof Container>) {
  return (
    <Container positionType="relative" {...rest}>
      {children}
    </Container>
  );
}

export function DropdownContent({
  children,
  open,
  ...rest
}: ComponentProps<typeof Container> & { open: boolean }) {
  return (
    <Container
      scaleY={open ? 1 : 0}
      positionType="absolute"
      positionTop="105%"
      positionLeft={0}
      {...rest}
    >
      {children}
    </Container>
  );
}
