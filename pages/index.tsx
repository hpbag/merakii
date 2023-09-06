import { NextPage } from 'next';
import { useEffect } from 'react';
import { Box, Text, Link } from "@chakra-ui/react"
import Typed from 'typed.js';
import { topRow, bottomRow } from "../carousel-config";
import CarouselItem from "../components/CarouselItem";
import NavBar from "../components/NavBar";

const Home: NextPage = () => {
  useEffect(() => {
    const options = {
      strings: ['merakii house'],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      showCursor: true,
      cursorChar: '_',
    };

    new Typed('.typewriter', options);
  }, []);

  return (
    <Box fontFamily="'Courier New', monospace" bg='#FFEDED' w="100vw" h="100vh">
      <NavBar />


      <Box className="carousel-container">
        <Box p={{ base: 5, md: 20 }}>
          <Box as='b' fontSize="2xl" className="typewriter"></Box>
          <Text fontSize="lg">apply <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdNzBblVsKYNDfpCGeq5Oqe7PAKsMGDso-3SEvnVns8kqYuVA/viewform" isExternal>here</Link></Text>
        </Box>

        <Box className="carousel-track" mb='20px'>
          {Object.keys(topRow).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={topRow[detailKey].imgUrl}
                imgTitle={topRow[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(topRow).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={topRow[detailKey].imgUrl}
                imgTitle={topRow[detailKey].title}
              ></CarouselItem>
            );
          })}
        </Box>

        <Box className="carousel-track-bigger">
          {Object.keys(bottomRow).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={bottomRow[detailKey].imgUrl}
                imgTitle={bottomRow[detailKey].title}
              ></CarouselItem>
            );
          })}
          {Object.keys(bottomRow).map((detailKey) => {
            return (
              <CarouselItem
                imgUrl={bottomRow[detailKey].imgUrl}
                imgTitle={bottomRow[detailKey].title}
              ></CarouselItem>
            );
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Home
