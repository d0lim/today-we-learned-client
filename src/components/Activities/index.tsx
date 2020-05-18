import React from "react";
import NewActivity from "./NewActivity";
import styled from "@emotion/styled";

const FeedDiv = styled.div`
  // max-width: 800px;
  // margin-right: auto;
  // margin-left: auto;
  margin-top: 80px;
  padding: 5px 20px 5px;
`;

const Activities = () => (
  <FeedDiv>
    <NewActivity />
  </FeedDiv>
);

export default Activities;
