/* eslint-disable react/no-unknown-property */
import { Container, clippingEvents, Text } from "@coconut-xr/koestlich";
import {
  Button,
  Checkbox,
  Toggle,
  Tabs,
  Tab,
  Slider,
  Radio,
  Dropdown,
  DropdownContent,
  Select,
} from "@coconut-xr/kruemel";
import { Canvas } from "@react-three/fiber";
import { Fullscreen } from "./fullscreen";
import { useState } from "react";

export default function Index() {
  const [checked, setChecked] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [sliderValue, setSliderValue] = useState(0.5);
  return (
    <Canvas
      dpr={window.devicePixelRatio}
      camera={{ position: [0, 0, 2], fov: 90 }}
      style={{ height: "100vh" }}
    >
      <ambientLight color={0xffffff} intensity={0.5} />
      <Fullscreen>
        <Container alignItems="flex-start" padding={0.05} flexGrow={1} flexDirection="column">
          <Text fontSize={0.2}>Button</Text>
          <Button onClick={() => setChecked((checked) => !checked)}>Toggle Checked</Button>

          <Text fontSize={0.2} marginTop={0.1}>
            Checkbox
          </Text>
          <Container
            alignItems="center"
            flexDirection="row"
            onClick={() => setChecked((checked) => !checked)}
          >
            <Checkbox marginRight={0.02} checked={checked} />
            <Text>Checked</Text>
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Toggle
          </Text>
          <Container
            alignItems="center"
            flexDirection="row"
            onClick={() => setChecked((checked) => !checked)}
          >
            <Toggle marginRight={0.02} checked={checked} />
            <Text>Checked</Text>
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Dropdown
          </Text>
          <Dropdown>
            <Button onClick={() => setChecked((checked) => !checked)}>Toggle Dropdown</Button>
            <DropdownContent
              border={0.003}
              borderColor="black"
              borderOpacity={0.5}
              borderRadius={0.02}
              padding={0.015}
              open={checked}
            >
              <Text>Dropdown Content</Text>
            </DropdownContent>
          </Dropdown>

          <Text fontSize={0.2} marginTop={0.2}>
            Slider
          </Text>
          <Slider value={sliderValue} range={10} onChange={setSliderValue} />

          <Text fontSize={0.2} marginTop={0.1}>
            Select
          </Text>
          <Select
            value={activeTab}
            options={new Array(3)
              .fill(null)
              .map((_, i) => ({ value: i, label: `Option ${i + 1}` }))}
            onChange={setActiveTab}
          />

          <Text fontSize={0.2} marginTop={0.1}>
            Radio
          </Text>
          <Container alignItems="center" flexDirection="column">
            {new Array(3).fill(null).map((_, i) => (
              <Container
                key={i}
                alignItems="center"
                flexDirection="row"
                onClick={() => setActiveTab(i)}
              >
                <Radio marginRight={0.02} checked={i === activeTab ? true : false} />
                <Text>{`Radio ${i + 1}`}</Text>
              </Container>
            ))}
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Tabs
          </Text>
          <Tabs width="100%">
            {new Array(3).fill(null).map((_, i) => (
              <Tab key={i} onClick={() => setActiveTab(i)} active={i === activeTab}>{`Tab ${
                i + 1
              }`}</Tab>
            ))}
          </Tabs>
        </Container>
      </Fullscreen>
    </Canvas>
  );
}
