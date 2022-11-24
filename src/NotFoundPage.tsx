import React from 'react';
import { Box, Image } from '@chakra-ui/react';
function Sorry() {
  return (
    <Box display={'flex'} justifyContent="center" alignItems="center">
      <Image
        src="https://images.unsplash.com/photo-1633078654544-61b3455b9161?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80"
        alt="404"
      />
    </Box>
  );
}

export default Sorry;
