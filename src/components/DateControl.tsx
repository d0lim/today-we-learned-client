import React from "react";
import styled from "@emotion/styled";

const DateControlDiv = styled.div`
  width: 240;
  padding: 0;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DatePickerDiv = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
`;

const DateControl = () => (
  <DateControlDiv>
    <DatePickerDiv>2020-05-05</DatePickerDiv>
    This is time dial area
  </DateControlDiv>
);

export default DateControl;
