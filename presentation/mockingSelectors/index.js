import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code
} from "spectacle";

import testingSagaExample from "./testingSaga.example";

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="mocking-1">
    <Heading caps size={1}>
      Mocking selectors in other tests
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="mocking-2">
    <Heading caps size={1}>
      Summary of sthitsss
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="mocking-3">
    <Heading caps size={1} textColor="primary">
      Testing a saga
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".5em" }}
      source={testingSagaExample}
      theme="external"
    />
  </Slide>
];
