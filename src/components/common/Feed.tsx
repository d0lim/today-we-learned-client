import React from "react";
import styled from "@emotion/styled";
import AddActivity from "../AddActivity";

const FeedDiv = styled.div`
  // max-width: 800px;
  // margin-right: auto;
  // margin-left: auto;
  margin-top: 80px;
  padding: 5px 20px 5px;
`;

const Feed = () => {
  return (
    <>
      <FeedDiv>
        <AddActivity />
      </FeedDiv>
    </>
  );
};

export default Feed;
