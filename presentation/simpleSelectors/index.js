/* eslint-disable react/jsx-key */
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

import selectorExample from "./selector.example";
import usageExample from "./usage.example";

export default [
  <Slide transition={["fade"]} bgColor="primary" key="simple-1">
    <Heading fit caps size={1}>
      What are selectors?
    </Heading>
    <Text textColor="secondary">
      A selector is a pure function, that takes in state, and returns a specific
      value.
    </Text>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={selectorExample}
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="simple-2">
    <Heading fit caps size={1} textColor="primary">
      Using that selector with redux
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".9em" }}
      source={usageExample}
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="simple-3">
    <Heading fit caps size={1}>
      Why Use simple selectors?
    </Heading>
    <List>
      <ListItem>
        They are dry; you don't have to write <Code>state => state.todos</Code>{" "}
        in every <S type="bold">mapStateToProps</S>
      </ListItem>
      <ListItem>Pure functions are easy to stub in tests</ListItem>
      <ListItem>You don't have to know the shape of state</ListItem>
    </List>
  </Slide>
];
