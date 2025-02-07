import { Text } from "@chakra-ui/react";

type props = {
  fontSize: string
}

const Logo = (props: props) => {
  return (
    <Text
      fontSize={props.fontSize}
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
