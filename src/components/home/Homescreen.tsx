import { Box, Button, Heading, Hide, Image } from '@chakra-ui/react';
import { FcTodoList } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { SlNotebook } from 'react-icons/sl';
import { BsListCheck } from 'react-icons/bs';
export default function HomeScreen() {
  return (
    <>
      <Box textAlign={'left'} mt={'5rem'}>
        <Box
          display={'flex'}
          justifyContent={'space-around'}
          flexDirection={['column', 'column', 'row', 'row']}
          p={[1, 1, 5, 5]}
        >
          <Box>
            <Heading p={[0.4, 0.8, 1, 1]} as="h1" size="2xl">
              Simple productivity tracker
            </Heading>
            {/* <Heading p={[0.4, 0.8, 1, 1]} as="h3" size="lg">
              Plan a day a leave everything in scratchpad
            </Heading>
            <Heading p={[0.4, 0.8, 1, 1]} as="h4" size="md">
              Tackle 8 taks per day and see a productivity boost
            </Heading> */}
            <Heading p={[0.4, 0.8, 1, 1]} as="h5" size="sm">
              Start using it today for free
            </Heading>
            <Box display={'flex'} p={'1rem'}>
              <Link to="/todos">
                <Button
                  colorScheme="twitter"
                  size="xs"
                  p={'0.7rem'}
                  leftIcon={<BsListCheck />}
                  variant="solid"
                  mr={1}
                >
                  Todos
                </Button>
              </Link>
              <Link to="/scratchpad">
                <Button
                  colorScheme="twitter"
                  size="xs"
                  p={'0.7rem'}
                  leftIcon={<SlNotebook />}
                  variant="solid"
                >
                  Scratchpad
                </Button>
              </Link>
            </Box>
          </Box>
          <Hide breakpoint="(max-width: 772px)">
            <Box>
              <Image boxSize="720px" src="/assets/hero.png" alt="hero image" />
            </Box>
          </Hide>
        </Box>
      </Box>
    </>
  );
}
