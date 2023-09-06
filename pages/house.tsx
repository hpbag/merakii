import NavBar from '../components/NavBar';
import { Box, Text, Stack, UnorderedList, ListItem, Image } from "@chakra-ui/react"

const HousePage = () => {
  return (
    <Box fontFamily="'Courier New', monospace" bg='#FFEDED' w="100%" minH="100vh">
      <NavBar />
      <Box maxW='2xl' p={{ base: 5, md: 20 }}>
        <Text fontSize='2xl' as='b'>House</Text>
        <Stack spacing={5} mt={10}>
          <Text> Merakii House is a community dedicated to creating a space for ambitious, young women focusing on learning, creating, and contributing. This includes founders, emerging innovators, creators and really anyone who wants to make impact. The goal of living in a space together with like-minded people is to maximize serendipity and creative collaboration.</Text>
          <Text>Community at the Merakii House will typically have:</Text>
          <UnorderedList>
            <ListItem>House dinners to discuss or learn a variety of topics!</ListItem>
            <ListItem>Weekend hangouts to reflect on our week, what we’ve been working on this week and what we need to prioritize / need help with.</ListItem>
            <ListItem>Co-working sessions!</ListItem>
            <ListItem>Events hosted by any house mates in collaboration with other tech-focused communities</ListItem>
            <ListItem>+ any other events or hangouts to explore the city!</ListItem>
          </UnorderedList>
          <Image src='location.jpg'/>

        </Stack>
      </Box>

    </Box>
  )
}

export default HousePage;
