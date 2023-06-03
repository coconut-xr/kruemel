import { Text } from "@coconut-xr/koestlich";
import React from "react";
import { ComponentProps } from "react";

export function Link({
  children,
  href,
  target,
  ...props
}: ComponentProps<typeof Text> & {
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | string;
}) {
  return (
    <Text
      color="blue"
      onClick={href != null ? () => window.open(href, target ?? "_self") : undefined}
      {...props}
    >
      {children}
    </Text>
  );
}
