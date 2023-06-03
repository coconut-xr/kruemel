import { Container } from "@coconut-xr/koestlich";
import React from "react";
import { ComponentProps } from "react";

export function Table({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container width="100%" flexDirection="column" {...props}>
      {children}
    </Container>
  );
}

export function TableRow({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container alignItems="stretch" flexDirection="row" {...props}>
      {children}
    </Container>
  );
}

export function TableCell({
  children,
  size = 1,
  ...props
}: ComponentProps<typeof Container> & { size?: number }) {
  return (
    <Container
      padding={0.02}
      border={0.005}
      borderColor="black"
      flexBasis={0}
      minWidth={0}
      flexGrow={size}
      {...props}
    >
      {children}
    </Container>
  );
}
