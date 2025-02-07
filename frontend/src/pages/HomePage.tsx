import { Box, Heading, VStack, Button, HStack, Link } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Box
      w="full"
      h="calc(100vh - 4.5rem)"
      py={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack>
        <Heading as="h1" fontSize="5xl" textAlign="center" filter= "drop-shadow(0 0 2em #ff0000)">
          Discover Your Next Favorite Game With{" "}
          <Box
            as="span"
            bgGradient="to-r"
            gradientFrom="red.500"
            gradientTo="blue.500"
            bgClip="text"
          >
            GAMEGENIE
          </Box>
        </Heading>
        <Heading as="h2" fontSize="lg" color="gray.400" py={8}>
          Get personalized game recommendations based on your preferences and
          play history.
        </Heading>
        <HStack py={8}>
          <Link href={"/register"}>
            <Button size="2xl" color="" variant="solid" fontSize={16}>
              Start Now
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button size="2xl" variant="outline" fontSize={16}>
              Learn More
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HomePage;
