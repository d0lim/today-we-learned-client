import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import UserInfo from "./UserInfo";

type ActivityItemProps = {
  userName: string;
  content: string;
};

const ActivityItem = ({ userName, content }: ActivityItemProps) => {
  return (
    <Flex marginBottom={10}>
      <UserInfo userName={userName} />
      <Box
        className="markdown-body"
        id="preview"
        height="200px"
        overflow="auto"
        padding="10px 30px"
        border="1px solid #E2E8F0"
        borderRadius="3px"
        width="100%"
      >
        {content}
      </Box>
    </Flex>
  );
};

export default ActivityItem;
