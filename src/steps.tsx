import { Container, Text } from "@coconut-xr/koestlich";
import { ComponentProps } from "react";
import React from "react";
import { ColorRepresentation } from "three";

export function Steps({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container gapRow={0.02} width="100%" flexDirection="column" {...props}>
      {children}
    </Container>
  );
}

export function StepNumbers({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container alignItems="center" flexDirection="row" {...props}>
      <Container height={0.1} flexGrow={0.5} />
      {children}
      <Container flexGrow={0.5} />
    </Container>
  );
}

export function StepNumber({
  children,
  color = "white",
  ...props
}: Omit<ComponentProps<typeof Container>, "children"> & {
  color?: ColorRepresentation;
  children: string;
}) {
  return (
    <Container
      padding={0.05}
      alignItems="center"
      justifyContent="center"
      borderRadius={100}
      aspectRatio={1}
      backgroundColor="black"
      {...props}
    >
      <Text color={color}>{children}</Text>
    </Container>
  );
}

export function StepConnection(props: ComponentProps<typeof Container>) {
  return (
    <Container
      marginLeft={-0.01}
      marginRight={-0.01}
      height={0.04}
      flexGrow={1}
      backgroundColor="black"
      {...props}
    />
  );
}

export function StepTitles({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container alignItems="center" flexDirection="row" {...props}>
      {children}
    </Container>
  );
}

export function StepTitle({ children }: { children: string }) {
  return (
    <Container flexBasis={0} flexGrow={1} flexDirection="column" alignItems="center">
      <Text horizontalAlign="center">{children}</Text>
    </Container>
  );
}
