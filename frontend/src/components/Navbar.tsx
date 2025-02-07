import { Button, Container, Flex, HStack, Link } from "@chakra-ui/react";
import Logo from "@/components/Logo";

const Navbar = () => {
  return (
    <Container h="4.5rem" mx="auto" maxW="full" boxShadow="md">
      <Flex align="center" justify="space-between" boxSize="full">
        <Logo fontSize="3xl"/>
        <HStack
          align="center"
          position="absolute"
          left="50%"
          transform="translateX(-50%)"
        >
          <Link href={"/"}>
            <Button variant="ghost" fontSize={14}>
              Home
            </Button>
          </Link>
          <Link href={"/about"}>
            <Button variant="ghost" fontSize={14}>
              About
            </Button>
          </Link>
        </HStack>
        <Link href={"/contact"}>
          <Button variant="solid" fontSize={14}>
            Contact Us
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default Navbar;
