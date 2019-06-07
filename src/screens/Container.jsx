import React from "react";
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';

const ScreensContainer = (props) => {
  return (
    <div>
    <Box>
      <Heading>Title</Heading>
      <Heading subtitle size={6}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={1}>Title</Heading>
      <Heading subtitle size={3}>
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={2}>Title</Heading>
      <Heading subtitle size={4} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={3}>Title</Heading>
      <Heading subtitle size={5} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
    <Box>
      <Heading size={4}>Title</Heading>
      <Heading subtitle size={6} renderAs="h2">
        Subtitle
      </Heading>
    </Box>
  </div>
  );
};
export default ScreensContainer;
