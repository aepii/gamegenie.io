import {
  Box,
  Container,
  Input,
  Button,
  Heading,
  VStack,
  Link,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import Logo from "@/components/Logo";

const RegisterPage = () => {
  return (
    <Box py={8}>
      <Container maxW="4xl">
        <VStack>
          <Logo fontSize="5xl" />
          <Box w="full" p={6} rounded="lg" shadow="md">
            <Heading as="h1" size="3xl" textAlign="center" mb={4}>
              Sign Up
            </Heading>
            <VStack gap={4}>
              <Field label="Email">
                <Input type="email" variant="flushed" name="email"></Input>
              </Field>
              <Field label="Username">
                <Input variant="flushed" name="username"></Input>
              </Field>
              <Field label="Password">
                <Input
                  type="password"
                  variant="flushed"
                  name="password"
                ></Input>
              </Field>
              <Field label="Confirm Password">
                <Input
                  type="password"
                  variant="flushed"
                  name="confirm-password"
                ></Input>
              </Field>
              <Button w="full">Sign Up</Button>
              <Link href="/start">
                <Button variant="ghost" w="full">
                  Coninue as Guest
                </Button>
              </Link>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default RegisterPage;
