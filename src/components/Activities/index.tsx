import React from "react";
import NewActivity from "./NewActivity";
import { Box, Divider } from "@chakra-ui/core";
import ActivityItem from "./ActivityItem";

const Activities = () => (
  <Box maxWidth="800px" mr="auto" ml="auto" mt="80px" padding="5px 20px 5px">
    <NewActivity />
    <Divider />
    <ActivityItem userName="test user" content="lorem ipsum fuck" />
    <ActivityItem userName="test user" content="lorem ipsum fuck" />
    <ActivityItem userName="test user" content="lorem ipsum fuck" />
    <ActivityItem userName="test user" content="lorem ipsum fuck" />
    <ActivityItem userName="test user" content="lorem ipsum fuck" />
  </Box>
);

export default Activities;
