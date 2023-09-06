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
        </Stack>

        
        <Stack spacing={5} mt={10}>
          <Text fontSize='2xl' as='b' mt={10}>Details</Text>
          <UnorderedList>
            <ListItem>8 bedroom, 4 bathroom house</ListItem>
            <ListItem>2 full fledged kitchens with brand new appliances, gas stove, dishwasher, etc.</ListItem>
            <ListItem>spacious living rooms with projector mounted on the ceiling</ListItem>
            <ListItem>access to 3-story backyard patio</ListItem>
            <ListItem>high speed internet</ListItem>
          </UnorderedList>
        </Stack>

        
        <Stack spacing={5} mt={10}>
          <Text fontSize='2xl' as='b' mt={10}>Location</Text>
          <Image src='location.jpg'/>
          <Text>Located in the Mission District, San Francisco.</Text>
          <UnorderedList>
            <ListItem>quiet, tree-lined, sunny neighborhood</ListItem>
            <ListItem>5 min walk to a BART station, hub for local transportation of busses and trains</ListItem>
            <ListItem>15 min walk to mission delores park</ListItem>
            <ListItem>close to tons of farmers market, grocery stores, and major grocery chains</ListItem>
            <ListItem>tons of restaurants and bars within a short walking distance!</ListItem>
          </UnorderedList>
        </Stack>
      </Box>
    </Box>
  )
}

export default HousePage;
