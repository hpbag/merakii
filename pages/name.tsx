import NavBar from '../components/NavBar';
import { Box, Text, Stack } from "@chakra-ui/react"

const NamePage = () => {
  return (
    <Box fontFamily="'Courier New', monospace" bg='#FFEDED' w="100vw" minH="100vh">
      <NavBar />
      <Box maxW='2xl' p={{ base: 5, md: 20 }}>
        <Text fontSize='2xl' as='b'>Name</Text>
        <Stack spacing={2} mt={10}>
          <Text> <strong>Meraki</strong> [may-rah-kee] · Greek · <em>adjective</em></Text>
          <Text>1. To do something with soul, creativity, or love.</Text>
          <Text>2. To put “something of yourself” into what you’re doing.</Text>
        </Stack>
      </Box>

    </Box>
  )
}

export default NamePage;
