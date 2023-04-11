/* eslint-disable react/no-unknown-property */
import { Container, clippingEvents, Text } from "@coconut-xr/koestlich";
import { Button, Checkbox, Toggle, Tabs, Tab } from "@coconut-xr/kruemel";
import { Canvas } from "@react-three/fiber";
import { Fullscreen } from "./fullscreen";
import { useState } from "react";

export default function Index() {
  const [checked, setChecked] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Canvas
      events={clippingEvents}
      dpr={window.devicePixelRatio}
      camera={{ position: [0, 0, 1], fov: 90 }}
      gl={{ localClippingEnabled: false }}
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
            <Toggle marginRight={0.02} checked={checked} /> <Text>Checked</Text>
          </Container>
          <Text fontSize={0.2} marginTop={0.1}>
            Tabs
          </Text>
          <Tabs width="100%">
            {new Array(3).fill(null).map((_, i) => (
              <Tab onClick={() => setActiveTab(i)} active={i === activeTab}>{`Tab ${i + 1}`}</Tab>
            ))}
          </Tabs>
        </Container>
      </Fullscreen>
    </Canvas>
  );
}
