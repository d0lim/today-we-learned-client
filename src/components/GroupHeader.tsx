import React, { useState } from "react";
import { Heading, Flex, Text } from "@chakra-ui/core";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils, DayValue } from "react-modern-calendar-datepicker";
import { myCustomLocale } from "../utils/locale";

// const DatePickerDiv = styled.div`
//   height: 80px;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-bottom: 1px solid black;
// `;

const GroupHeader = () => {
  const defaultValue: DayValue = utils("en").getToday();
  const [selectedDay, setSelectedDay] = useState<DayValue>(defaultValue);
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="white"
      color="black"
      borderBottom="1px solid black"
      height="80px"
    >
      <Flex align="center" mr={6}>
        <Heading as="h1" size="lg">
          Study
        </Heading>
        <Text ml="1rem">Group for Study!</Text>
      </Flex>
      <Flex align="center" mr={6}>
        {/* <Text>2020-05-05</Text> */}
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          inputPlaceholder="Select a day"
          shouldHighlightWeekends
          locale={myCustomLocale}
        />
      </Flex>
    </Flex>
  );
};

export default GroupHeader;
