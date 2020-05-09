import React from "react";
import { Flex, Textarea, Image, Button, Text } from "@chakra-ui/core";

const UserInfo = () => {
  return (
    <Flex
      direction="column"
      minWidth="80px"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Image
        size="60px"
        objectFit="cover"
        src="https://api.adorable.io/avatars/60/sample@twl.app.png"
        alt="User Profile"
        margin="10px"
      />
      <Text textAlign="center">User Name</Text>
    </Flex>
  );
};

const AddActivity = () => {
  return (
    <Flex
      maxWidth="800px"
      // border="1px solid black"
      // borderRadius="10px"
      mr="auto"
      ml="auto"
    >
      <UserInfo />
      <Textarea
        height="200px"
        resize="none"
        placeholder="Here is a sample placeholder"
      />
      <Button ml="5px" height="200px" variantColor="teal">
        Submit
      </Button>
    </Flex>
  );
};

export default AddActivity;
