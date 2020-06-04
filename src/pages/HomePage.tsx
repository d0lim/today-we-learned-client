import React from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from "@emotion/styled";
import SideBar from "../components/SideBar";
import { Flex } from "@chakra-ui/core";
import GroupHeader from "../components/GroupHeader";
import Activities from "../components/Activities";

export type HomePageProps = {};

const Content = styled.div`
  width: 100%;
  padding: 0;
`;

const HomePage = (props: HomePageProps) => {
  return (
    <MainTemplate>
      <Flex minHeight="100vh">
        <SideBar />
        {/* <DateControl /> */}
        <Content>
          <GroupHeader />
          <Activities />
        </Content>
      </Flex>
    </MainTemplate>
  );
};

export default HomePage;
