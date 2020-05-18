import React from "react";
import TextEditTabs from "./TextEditTabs";
import { Flex, Button } from "@chakra-ui/core";
import UserInfo from "./UserInfo";

const NewActivity = () => {
  return (
    <Flex marginBottom={10}>
      <UserInfo userName="test user" />
      <TextEditTabs />
      <Button ml="5px" height="200px" variantColor="teal">
        Submit
      </Button>
    </Flex>
  );
};

export default NewActivity;
