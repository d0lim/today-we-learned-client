import React from "react";
import styled from "@emotion/styled";

const SideBarDiv = styled.div`
  width: 300px;
  padding: 0;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
  }
  border-right: 2px solid black;
`;

const SearchDiv = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const SideBar = () => {
  return (
    <SideBarDiv>
      <SearchDiv>Search...</SearchDiv>
      <ul>
        <li>Study</li>
        <li>Exercise</li>
        <li>Coffee</li>
      </ul>
    </SideBarDiv>
  );
};

export default SideBar;
