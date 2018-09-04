import React from "react";
import { Deck, Heading, Slide, Text } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import simpleSelectors from "./simpleSelectors";
import memoizedSelectors from "./memoizedSelectors";

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
        Selectors
      </Heading>
      <Text textColor="secondary" bold>
        reselect and react
      </Text>
    </Slide>
    {simpleSelectors}
    {memoizedSelectors}
  </Deck>
);

export default Presentation;
