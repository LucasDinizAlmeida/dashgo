import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";


export default function CreateUser() {

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} p={6} bg="gray.800">
          <Heading fontWeight="normal" size="lg">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing="8"
              w="100%"
            >
              <Input
                name="password"
                label="Senha"
                type="password"
              />
              <Input
                name="password_confirmation"
                type="password"
                label="E-mail"
              />
            </SimpleGrid>
          </VStack>

          <HStack
            mt="8"
            spacing={4}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Button colorScheme="whiteAlpha">Cancelar</Button>
            <Button colorScheme="pink">Salvar</Button>
          </HStack>
        </Box>
      </Flex>

    </Box>
  )
}