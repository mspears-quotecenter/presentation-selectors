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
      Reselect provides a method on selectors created by{" "}
      <Code>createSelector</Code>, <Code>.resultFunc()</Code> that allows you to
      easily test composed selectors.
    </Text>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="testing-4">
    <Heading caps size={1} textColor="primary">
      Using resultfunc
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={resultFuncExample}
      theme="external"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="testing-5">
    <Heading caps size={1} textColor="tertiary">
      Why use result func?
    </Heading>
    <List>
      <ListItem>You don't need to construct the entireity of state</ListItem>
      <ListItem>
        You should already be testing the selectors composed individually (as
        long as they aren't just simple getters from state)
      </ListItem>
    </List>
  </Slide>
];
