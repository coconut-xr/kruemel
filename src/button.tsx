import { Text } from "@coconut-xr/koestlich";
import React, { ComponentProps } from "react";

export function Button({ children, ...rest }: ComponentProps<typeof Text>) {
  return (
    <Text padding={0.04} borderRadius={0.04} backgroundColor="black" color="white" {...rest}>
      {children}
    </Text>
  );
}
