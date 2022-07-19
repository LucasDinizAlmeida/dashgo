import { Button, Flex, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";


export default function SingIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        borderRadius={8}
        p={8}
        flexDir="column"
      >

        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email" />
          <Input type="password" label="Senha" name="password" />
        </Stack>

        <Button mt={6} type="submit" colorScheme="pink" size="lg">
          Enviar
        </Button>
      </Flex>
    </Flex>
  )
}
