import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import {
  Tabs,
  TabPanels,
  TabPanel,
  Textarea,
  Box,
  TabList,
  Tab,
  Text,
} from "@chakra-ui/core";
import "github-markdown-css";

const TextEditTabs = () => {
  const [value, setValue] = useState<string>("");
  const onChangeValue = (e: any) => setValue(e.target.value);

  // console.log(unified().use(parse).use(remark2react).processSync(value));

  // FIXME: Have set processed to 'any' type as vFile types do not have 'result' property.

  return (
    <Tabs width="100%" defaultIndex={0}>
      <TabPanels>
        <TabPanel>
          <Textarea
            value={value}
            onChange={onChangeValue}
            height="200px"
            resize="none"
            placeholder="Input Text"
          />
        </TabPanel>
        <TabPanel>
          <Box
            className="markdown-body"
            id="preview"
            height="200px"
            overflow="auto"
            padding="10px 30px"
            border="1px solid #E2E8F0"
            borderRadius="3px"
          >
            {value !== "" ? (
              <ReactMarkdown>{value}</ReactMarkdown>
            ) : (
              <Text color="lightGray">Input Text</Text>
            )}
          </Box>
        </TabPanel>
      </TabPanels>
      <TabList height="42px">
        <Tab>Edit</Tab>
        <Tab>Preview</Tab>
      </TabList>
    </Tabs>
  );
};

export default TextEditTabs;
