import NavBar from '../components/NavBar';
import { Box, Text, Stack, UnorderedList, ListItem } from "@chakra-ui/react"

const ValuesPage = () => {
  return (
    <Box fontFamily="'Courier New', monospace" bg='#FFEDED' w="100vw" minH="100vh">
      <NavBar />
      <Box maxW='2xl' p={{ base: 5, md: 20 }}>
        <Text fontSize='2xl' as='b'>Values</Text>
        <Stack spacing={5} mt={10}>
          <Text> Merakii House is a community that is made to support the people that are part of it. Our values are based on people to reflect this.
          </Text>
          <Text>A person part of Merakii House is:</Text>
          <UnorderedList>
            <ListItem>someone who makes the people around them feel good about themselves</ListItem>
            <ListItem>someone who is intentional</ListItem>
            <ListItem>someone who can expression feelings of gratitude and appreciation</ListItem>
            <ListItem>someone who listens actively</ListItem>
            <ListItem>someone who challenges their own thinking</ListItem>
          </UnorderedList>
        </Stack>
      </Box>

    </Box>
  )
}

export default ValuesPage;
