import { Box, Flex, Spacer } from "@chakra-ui/react"
import Link from 'next/link'

const NavBar = () => {
  return (
    <Flex justify="flex" py={5} px={{ base: 5, md: 20 }}>
      <Link href="/">m.</Link>
      <Spacer/>
      <Flex>
        <Link href="/name">name</Link>
        <Box as="span" mx={2}>|</Box>
        <Link href="/values">values</Link>
        <Box as="span" mx={2}>|</Box>
        <Link href="/house">house</Link>
        <Box as="span" mx={2}>|</Box>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdNzBblVsKYNDfpCGeq5Oqe7PAKsMGDso-3SEvnVns8kqYuVA/viewform" target="_blank">apply</a>
      </Flex>
    </Flex>
  )
}

export default NavBar
