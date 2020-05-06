import React from "react";
import MainTemplate from "../../components/main/MainTemplate";
import Header from "../../components/common/Header";
import styled from "@emotion/styled";
import SideBar from "../../components/SideBar";
import { Flex } from "@chakra-ui/core";
import Feed from "../../components/common/Feed";

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
        <Content>
          <Header />
          <Feed />
        </Content>
      </Flex>
    </MainTemplate>
  );
};

export default HomePage;
