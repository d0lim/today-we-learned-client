import React, { useState } from "react";
import { Heading, Flex, Text, IconButton } from "@chakra-ui/core";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { utils, DayValue } from "react-modern-calendar-datepicker";
import { myCustomLocale } from "../utils/locale";
import { addDays } from "../utils/handleDayValue";


const GroupHeader = () => {
  const defaultValue: DayValue = utils("en").getToday();
  const [selectedDay, setSelectedDay] = useState<DayValue>(defaultValue);

  const handleDecreaseDay = () => {
    if (selectedDay)
      setSelectedDay(addDays(selectedDay, -1))
  }

  const handleIncreaseDay = () => {
    if (selectedDay)
      setSelectedDay(addDays(selectedDay, 1))
  }

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
      <Flex align="center" mr={6} >
        <IconButton mr={3} aria-label="Previous Day" icon="chevron-left" onClick={handleDecreaseDay} />
        <DatePicker
          value={selectedDay}
          onChange={setSelectedDay}
          inputPlaceholder="Select a day"
          shouldHighlightWeekends
          locale={myCustomLocale}
        />
        <IconButton ml={3} aria-label="Next Day" icon="chevron-right" onClick={handleIncreaseDay} />
      </Flex>
    </Flex>
  );
};

export default GroupHeader;
