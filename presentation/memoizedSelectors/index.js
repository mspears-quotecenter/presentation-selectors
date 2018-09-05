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

import allItemsExample from "./allItems.example";
import allItemsSelectorExample from "./allItemsSelector.example";
import allItemsNotCurriedExample from "./allItemsNotCurried.example";

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="memoized-1">
    <Heading fit caps size={1}>
      Reselect
    </Heading>
    <Text textColor="primary">
      Reselect is a library to create memoized selectors, and allow the easy
      composition of simple and memoized selectors.
    </Text>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="memoized-2">
    <Heading fit caps size={1} textColor="primary">
      Creating a selector
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".8em" }}
      source={allItemsExample}
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="memoized-3">
    <Heading fit caps size={1}>
      Let's break that example down
    </Heading>
    <Text textAlign="left">
      Reselect's <Code>createSelector</Code> takes two arguments
    </Text>
    <List>
      <ListItem>
        a single selector or an array of selectors{" "}
        <Code>[todosSelector, doneSelector]</Code>
      </ListItem>
      <ListItem>
        a function that the given selectors' results are passed to{" "}
        <Code>concat</Code>
      </ListItem>
    </List>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={allItemsSelectorExample}
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="memoized-4">
    <Heading fit caps size={1} textColor="primary">
      Other ways to write that
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".9em" }}
      source={allItemsNotCurriedExample}
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="memoized-5">
    <Heading fit caps size={1}>
      Why use reselect?
    </Heading>
    <List>
      <ListItem>
        Selectors created with <Code>createSelector</Code> are memoized, which
        means they only recalculate when their arguments change
      </ListItem>
      <ListItem>You can easily compose selectors</ListItem>
      <ListItem>Reselect exposes easy apis to test composed selectors</ListItem>
    </List>
  </Slide>
];
