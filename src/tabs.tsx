import { Container, Text, useBaseNodeContext } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";
import { ColorRepresentation } from "three";

export function Tabs({ children, ...props }: ComponentProps<typeof Container>) {
  return (
    <Container flexDirection="row" {...props}>
      {children}
    </Container>
  );
}

export function Tab({
  children,
  tabColor,
  active,
  ...props
}: ComponentProps<typeof Text> & { active: boolean; tabColor?: ColorRepresentation }) {
  const node = useBaseNodeContext();
  return (
    <Container alignItems="stretch" flexGrow={1} flexShrink={1} flexDirection="column">
      <Text horizontalAlign="center" opacity={active ? 1 : 0.5} padding={0.02} {...props}>
        {children}
      </Text>
      <Container height={0.015} backgroundColor={tabColor ?? "black"} backgroundOpacity={0.3}>
        {active && (
          <Container id={`${node.id}-tab`} height={0.015} backgroundColor={tabColor ?? "black"} />
        )}
      </Container>
    </Container>
  );
}
