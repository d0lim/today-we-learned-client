import React from "react";
import TextEditTabs from "./TextEditTabs";
import { Flex, Button } from "@chakra-ui/core";
import UserInfo from "./UserInfo";

const NewActivity = () => {
  return (
    <Flex
      maxWidth="800px"
      // border="1px solid black"
      // borderRadius="10px"
      mr="auto"
      ml="auto"
    >
      <UserInfo userName="test user" />
      {/* <Textarea
        height="200px"
        resize="none"
        placeholder="Here is a sample placeholder"
      /> */}
      <TextEditTabs />
      <Button ml="5px" height="200px" variantColor="teal">
        Submit
      </Button>
    </Flex>
  );
};

export default NewActivity;
