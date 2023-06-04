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
  Table,
  TableRow,
  TableCell,
  Link,
  Steps,
  StepNumbers,
  StepNumber,
  StepTitles,
  StepTitle,
  StepConnection,
  Progess,
} from "@coconut-xr/kruemel";
import { Plus, Play, Pause, Trash, MagnifyingGlass, Bars3 } from "@coconut-xr/kruemel/icons/solid";
import { Canvas } from "@react-three/fiber";
import { Fullscreen } from "./fullscreen.js";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { MOUSE } from "three";

const tableData = [
  ["Entry Name", "Entry Number", "Entry Description"],
  ["ABC", "1", "ABC is CBA reversed"],
  ["Koestlich", "2", "User Interfaces for Three.js"],
  ["Coconut XR", "3", "Powered by Coconut Capital GmbH"],
];

export default function Index() {
  const [checked, setChecked] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const [sliderValue, setSliderValue] = useState(0.5);
  return (
    <Canvas
      gl={{ localClippingEnabled: true }}
      events={clippingEvents}
      dpr={window.devicePixelRatio}
      style={{ height: "100vh" }}
    >
      <OrbitControls
        target={[0, 0, 0]}
        enableZoom={false}
        enablePan={false}
        minDistance={5}
        maxDistance={5}
        mouseButtons={{
          LEFT: MOUSE.RIGHT,
          MIDDLE: MOUSE.MIDDLE,
          RIGHT: MOUSE.LEFT,
        }}
      />
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

          <Text fontSize={0.2} marginTop={0.1}>
            Table
          </Text>
          <Table>
            {tableData.map((rowData, rowIndex) => (
              <TableRow key={rowIndex}>
                {rowData.map((cellData, columnIndex) => (
                  <TableCell key={columnIndex}>
                    <Text>{cellData}</Text>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </Table>
          <Text fontSize={0.2} marginTop={0.1}>
            Link
          </Text>
          <Container flexDirection="row">
            <Text>Find our Website </Text>
            <Link href="https://coconut-xr.com" target="_blank">
              here.
            </Link>
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Steps
          </Text>
          <Steps maxWidth={4}>
            <StepNumbers>
              <StepNumber>1</StepNumber>
              <StepConnection />
              <StepNumber>2</StepNumber>
              <StepConnection />
              <StepNumber>3</StepNumber>
              <StepConnection backgroundColor="gray" />
              <StepNumber backgroundColor="gray">4</StepNumber>
            </StepNumbers>
            <StepTitles>
              <StepTitle>Login</StepTitle>
              <StepTitle>Do Something</StepTitle>
              <StepTitle>Logout</StepTitle>
              <StepTitle>Shut Down</StepTitle>
            </StepTitles>
          </Steps>

          <Text fontSize={0.2} marginTop={0.1}>
            Icons
          </Text>
          <Container flexWrap="wrap" flexDirection="row" gapColumn={0.1}>
            <Plus />
            <Play />
            <Pause />
            <Trash />
            <MagnifyingGlass />
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Pagination
          </Text>
          <Container flexDirection="row">
            <Button>1</Button>
            <Button backgroundColor="gray">2</Button>
            <Button backgroundColor="gray">3</Button>
            <Button backgroundColor="gray">4</Button>
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Navbar
          </Text>

          <Container
            width="100%"
            maxWidth={4}
            backgroundColor="black"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            paddingY={0.06}
            paddingX={0.1}
            gapColumn={0.1}
          >
            <Bars3 height={0.05} color="white" />
            <Text color="white" fontSize={0.1}>
              COCONUT-XR
            </Text>
            <Container flexGrow={1} />
            <MagnifyingGlass color="white" />
            <Plus color="white" />
          </Container>

          <Text fontSize={0.2} marginTop={0.1}>
            Progress
          </Text>
          <Progess value={0.5} />
        </Container>
      </Fullscreen>
    </Canvas>
  );
}
