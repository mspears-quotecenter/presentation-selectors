// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  CodePane,
  Code,
  S
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import basicSelectorExample from "../assets/basicSelector.example";
import basicSelectorExampleUsage from "../assets/basicSelectorUsage.example";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#FA6304",
    quaternary: "#CECECE"
  },
  {
    primary: "Fira Code"
  }
);

const Presentation = () => (
  <Deck theme={theme}>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading fit caps size={1}>
        React Selectors with Reselect
      </Heading>
      <Text textColor="secondary" bold>
        memoization of computed state
      </Text>
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading fit caps size={1}>
        What are selectors?
      </Heading>
      <Text textColor="secondary">
        A selector is a pure function, that takes in state, and returns a
        specific value.
      </Text>
      <CodePane
        lang="javascript"
        style={{ fontSize: "1em" }}
        source={basicSelectorExample}
      />
    </Slide>
    <Slide transition={["fade"]} bgColor="tertiary">
      <Heading fit caps size={1} textColor="primary">
        Using that selector with redux
      </Heading>
      <CodePane
        lang="javascript"
        style={{ fontSize: ".8em" }}
        source={basicSelectorExampleUsage}
      />
    </Slide>
    <Slide transition={["fade"]} bgColor="primary">
      <Heading fit caps size={1}>
        Why Use simple selectors?
      </Heading>
      <List>
        <ListItem>
          They are dry; you don't have to write{" "}
          <Code>state => state.todos</Code> in every{" "}
          <S type="bold">mapStateToProps</S>
        </ListItem>
        <ListItem>Pure functions are easy to stub in tests</ListItem>
        <ListItem>You don't have to know the shape of state</ListItem>
      </List>
    </Slide>
  </Deck>
);

export default Presentation;
