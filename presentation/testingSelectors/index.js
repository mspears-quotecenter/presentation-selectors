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

import resultFuncExample from "./resultFunc.example";

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="testing-1">
    <Heading caps size={1}>
      Testing Reselect selectors
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="testing-2">
    <Heading caps size={1} textColor="secondary">
      Help I don't know how to make this snazzy
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="testing-3">
    <Heading caps size={1} textColor="secondary">
      Send help
    </Heading>
    <CodePane
      lang="javascript"
      style={{ fontSize: "1em" }}
      source={resultFuncExample}
    />
  </Slide>
];
