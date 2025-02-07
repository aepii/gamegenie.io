import { Box } from "@chakra-ui/react";
import GameCard from "@/components/GameCard"

const placeholder = "105600"

const StartPage = () => {
  return (
    <Box
      w="full"
      h="calc(100vh - 4.5rem)"
      py={8}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <GameCard id={placeholder} />
    </Box>
  );
};

export default StartPage;
