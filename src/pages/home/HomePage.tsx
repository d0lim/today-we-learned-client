import React from "react";
import MainTemplate from "../../components/main/MainTemplate";
import Header from "../../components/common/Header";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <MainTemplate>
      <Header />
      <div>
        음... 이게 컨텐트 디브가 돼야겠지요..? 사이드바나 뭐 아래에 그것들...
      </div>
    </MainTemplate>
  );
};

export default HomePage;
