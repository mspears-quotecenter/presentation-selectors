import React from "react";
import {
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code,
  ComponentPlayground
} from "spectacle";
import PropTypes from "prop-types";
import { createSelector } from "reselect";
import getOr from "lodash/fp/getOr";
import concat from "lodash/fp/concat";

import allItemsExample from "./allItems.example";
import allItemsSelectorExample from "./allItemsSelector.example";
import allItemsNotCurriedExample from "./allItemsNotCurried.example";
import allTogetherExample from "./allTogether.example";

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
      style={{ fontSize: ".7em" }}
      source={allItemsExample}
      theme="external"
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
        a single selector, n number selectors as arguments, or an array of
        selectors <Code>[todosSelector, doneSelector]</Code>
      </ListItem>
      <ListItem>
        the final argument is always a function that accepts the results of the
        passed in selectors as arguments &nbsp;<Code>concat</Code>
      </ListItem>
    </List>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={allItemsSelectorExample}
      theme="external"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="memoized-4">
    <Heading fit caps size={1} textColor="primary">
      Other ways to write that
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: ".7em" }}
      source={allItemsNotCurriedExample}
      theme="external"
    />
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="memoized-4">
    <Heading fit caps size={1} textColor="primary">
      Let's see everything together
    </Heading>
    <ComponentPlayground
      code={allTogetherExample}
      scope={{ getOr, createSelector, concat, PropTypes }}
      theme="external"
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
