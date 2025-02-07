import { Text } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      textTransform="uppercase"
      textAlign="center"
      bgGradient="to-r"
      gradientFrom="red.500"
      gradientTo="blue.500"
      bgClip="text"
    >
      GameGenie
    </Text>
  );
};

export default Logo;
