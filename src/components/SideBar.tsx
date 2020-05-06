import React, { useState } from "react";
import styled from "@emotion/styled";

const SideBarDiv = styled.div`
  width: 200px;
  padding: 17px 10px 0;
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    padding-inline-start: 0;
  }

  li {
    list-style-type: none;
  }
`;

const SideBar = () => {
  const [expand, setExpand] = useState(true);
  const onClickCollapse = () => setExpand(!expand);
  return (
    <>
      {expand ? (
        <SideBarDiv>
          <span role="presentation" onClick={onClickCollapse}>
            사이드바 접기
          </span>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
            <li>Menu Item 5</li>
          </ul>
        </SideBarDiv>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default SideBar;
