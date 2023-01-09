import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { MdCheckCircle, MdCheckCircleOutline } from 'react-icons/md';

const Premium = () => {
  const [isLargerThan62] = useMediaQuery('(min-width: 62em)');

  return (
    <VStack>
      <Flex
        alignItems="center"
        w="full"
        px={isLargerThan62 ? '16' : '6'}
        py="16"
        justifyContent="center"
        flexDirection={isLargerThan62 ? 'row' : 'column'}
      >
        <Box w={isLargerThan62 ? '60%' : 'full'}>
          <Text fontSize={isLargerThan62 ? '3xl' : 'xl'} fontWeight="bold" mb="4">
            {' '}
            Premium features (coming soon)
          </Text>
          <Box textAlign={'left'}>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Sync across all devices
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Make theme based list in scratch pad.
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Statistics
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
          </Box>
        </Box>

        <Spacer />

        <Flex w={isLargerThan62 ? '30%' : '92%'} alignItems="center" justifyContent="center">
          <Input placeholder="email" />
          <Button colorScheme="twitter" variant="solid" ml={1}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Premium;
