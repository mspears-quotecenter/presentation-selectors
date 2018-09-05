import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code,
  S
} from "spectacle";

import resultFuncExample from "./resultFunc.example";
import unitTestExample from "./unitTest.example";

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="testing-1">
    <Heading caps size={1}>
      Testing Reselect selectors
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="testing-2">
    <Heading caps size={1} textColor="primary">
      Unit test
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".8em" }}
      source={unitTestExample}
      theme="external"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="testing-3">
    <Heading caps size={1} textColor="tertiary">
      Testing composed selectors
    </Heading>
    <Text>
      Imagine a scenario where you have this giant state and you don't care
      about how stuff is sourced from state, only that you get certain things
      from state. Thankfully, reselect provides a method to facilitate that{" "}
      <Code>.resultFunc()</Code>.
    </Text>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="testing-2">
    <Heading caps size={1} textColor="primary">
      Using resultfunc
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={resultFuncExample}
      theme="external"
    />
  </Slide>
];
