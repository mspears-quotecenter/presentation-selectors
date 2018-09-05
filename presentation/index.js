import React from "react";
import { Deck, Heading, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import simpleSelectors from "./simpleSelectors";
import memoizedSelectors from "./memoizedSelectors";
import testingSelectors from "./testingSelectors";

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
    <Slide transition={["fade"]} bgColor="secondary">
      <Heading fit caps size={1}>
        Selectors
      </Heading>
      <Text textColor="primary" bold>
        Reselect and React
      </Text>
    </Slide>
    {simpleSelectors}
    {memoizedSelectors}
    {testingSelectors}
  </Deck>
);

export default Presentation;
