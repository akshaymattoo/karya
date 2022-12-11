import { Box, Button, Flex, Image, Spacer, Text, useMediaQuery } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import chakraHero from '/assets/hero.png';

const Hero = () => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

  return (
    <Flex
      alignItems="center"
      w="full"
      px={isLargerThan62 ? '16' : '6'}
      py="16"
      minHeight="90vh"
      justifyContent="space-between"
      flexDirection={isLargerThan62 ? 'row' : 'column'}
    >
      <Box mr={isLargerThan62 ? '6' : '0'} w={isLargerThan62 ? '60%' : 'full'}>
        <Text fontSize={isLargerThan62 ? '5xl' : '4xl'} fontWeight="bold" mb="4">
          {' '}
          Simple task tracker
        </Text>

        <Text mb="6" fontSize={isLargerThan62 ? 'lg' : 'base'} opacity={0.7}>
          Celebrate every day and see the magic of compounding over the years. Start using karya for
          free today.
        </Text>
        <Link to="/todos">
          <Button
            w="200px"
            colorScheme="twitter"
            variant="solid"
            h="50px"
            size={isLargerThan62 ? 'lg' : 'sm'}
            mb={isLargerThan62 ? '0' : '10'}
          >
            Todos
          </Button>
        </Link>
        <Link to="/scratchpad">
          <Button
            w="200px"
            colorScheme="twitter"
            variant="solid"
            h="50px"
            size={isLargerThan62 ? 'lg' : 'sm'}
            mb={isLargerThan62 ? '0' : '10'}
            ml={2}
          >
            Scratchpad
          </Button>
        </Link>
      </Box>

      <Spacer />

      <Flex w={isLargerThan62 ? '40%' : 'full'} alignItems="center" justifyContent="center">
        <Image src={chakraHero} alt="Chakra UI" />
      </Flex>
    </Flex>
  );
};

export default Hero;
