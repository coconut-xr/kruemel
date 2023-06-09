import { Container, ExtendedThreeEvent, Text, useBaseNodeContext } from "@coconut-xr/koestlich";
import React, { ComponentProps, ReactNode, startTransition, useMemo, useState } from "react";
import { ColorRepresentation } from "three";
import { Dropdown, DropdownContent } from "./dropdown.js";
import { ChevronDown } from "./icons/outline/chevron-down.js";

export function Select({
  value,
  onChange,
  options,
  backgroundColor = "black",
  color = "white",
  ...rest
}: Omit<ComponentProps<typeof Container>, "children"> & {
  color?: ColorRepresentation;
  value: any;
  onChange: (value: any) => void;
  options: Array<{ value: any; label: string | ReactNode }>;
}) {
  return (
    <Dropdown {...rest}>
      <SelectContent
        color={color}
        backgroundColor={backgroundColor}
        onChange={onChange}
        options={options}
        value={value}
      />
    </Dropdown>
  );
}

function SelectContent({
  value,
  onChange,
  options,
  color,
  backgroundColor,
}: {
  value: any;
  onChange: (value: any) => void;
  color: ColorRepresentation;
  backgroundColor: ColorRepresentation;
  options: Array<{ value: any; label: string | ReactNode }>;
}) {
  const [open, setOpen] = useState(false);
  const selectedIndex = useMemo(
    () => options.findIndex(({ value: v }) => v === value),
    [value, options],
  );
  const selectedLabel = options[selectedIndex].label;

  const node = useBaseNodeContext();
  const getId = (index: number) => `${node.id}-option-${index}`;

  let i = 0;

  return (
    <>
      <Container
        flexDirection="row"
        alignItems="center"
        gapColumn={0.02}
        backgroundColor={backgroundColor}
        onClick={() => setOpen((open) => !open)}
      >
        <ChevronDown marginLeft={0.07} color="white" />
        {RenderLabel(getId(selectedIndex), 0, selectedLabel, undefined, color, false)}
      </Container>
      <DropdownContent backgroundColor={backgroundColor} open={open} flexDirection="column">
        {options.map(({ value, label }, index) =>
          index == selectedIndex
            ? null
            : RenderLabel(
                getId(index),
                index,
                label,
                (e: ExtendedThreeEvent<MouseEvent>) => {
                  e.stopPropagation();
                  startTransition(() => {
                    setOpen(false);
                    onChange(value);
                  });
                },
                color,
                i++ != 0,
              ),
        )}
      </DropdownContent>
    </>
  );
}

function RenderLabel(
  id: string,
  index: number,
  label: string | ReactNode,
  onClick: ((e: ExtendedThreeEvent<MouseEvent>) => void) | undefined,
  color: ColorRepresentation,
  borderTop: boolean,
) {
  if (typeof label === "string") {
    return (
      <Text
        index={index}
        borderTop={borderTop ? 0.005 : 0}
        borderOpacity={borderTop ? 0.5 : 0}
        padding={0.04}
        borderColor={color}
        color={color}
        key={id}
        id={id}
        onClick={onClick}
      >
        {label}
      </Text>
    );
  }
  return (
    <Container
      index={index}
      borderTop={borderTop ? 0.005 : 0}
      borderOpacity={borderTop ? 0.5 : 0}
      padding={0.04}
      borderColor={color}
      key={id}
      id={id}
      onClick={onClick}
    >
      {label}
    </Container>
  );
}
