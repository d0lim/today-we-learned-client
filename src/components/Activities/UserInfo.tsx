import React from "react";
import { Flex, Image, Text } from "@chakra-ui/core";

export type UserInfoProps = {
  profileImage?: string;
  userName: string;
};

const UserInfo = ({ profileImage, userName }: UserInfoProps) => {
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
        src={profileImage || `https://i.picsum.photos/id/0/60/60.jpg`}
        alt={`${userName}'s Profile`}
        margin="10px"
      />
      <Text textAlign="center">{userName}</Text>
    </Flex>
  );
};

export default UserInfo;
