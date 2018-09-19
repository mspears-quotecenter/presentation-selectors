import React from "react";
import { Heading, ListItem, List, Slide, Link } from "spectacle";

export default [
  <Slide transition={["fade"]} bgColor="secondary" key="summary-1">
    <Heading caps size={1}>
      Selectors Summary
    </Heading>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="summary-2">
    <Heading caps size={1}>
      Wins
    </Heading>
    <List>
      <ListItem>Dries up selecting props from state</ListItem>
      <ListItem>
        Allows you to move deriving of state outside of component renders
      </ListItem>
      <ListItem>Easier to mock than the whole of an app's state</ListItem>
      <ListItem>Can be memozied for heavier computations</ListItem>
      <ListItem>Composable with other selectors</ListItem>
      <ListItem>Abstracts state shape away from consumers</ListItem>
    </List>
  </Slide>,
  <Slide transition={["fade"]} bgColor="primary" key="summary-3">
    <Heading caps size={1}>
      Useful links
    </Heading>
    <List>
      <ListItem>
        <Link href="https://github.com/reduxjs/reselect">Reselect's docs</Link>
      </ListItem>
      <ListItem>
        <Link href="https://github.com/quotecenter/react-quotecenter-training">
          Excercises
        </Link>
      </ListItem>
    </List>
  </Slide>
];
