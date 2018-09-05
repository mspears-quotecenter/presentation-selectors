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

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="testing-1">
    <Heading fit caps size={1}>
      Testing Reselect selectors
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="tertiary" key="testing-2">
    <Heading fit caps size={1} textColor="primary">
      x
    </Heading>
  </Slide>
];
