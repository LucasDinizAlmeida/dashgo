import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Thead, Tr, Text, Tbody, Td, Th } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} p={6} bg="gray.800">
          <HStack justifyContent="space-between" alignItems="center" mb="8">
            <Heading size="lg" fontWeight="normal" color="gray.100">Usuários</Heading>

            <Button
              as="a"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} size={22} />}
            >
              Criar Novo
            </Button>
          </HStack>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>USUÁRIO</Th>
                <Th>DATA DE CADASTRO</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>

            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Diniz Almeida</Text>
                    <Text color="gray.300" fontSize="sm">almeidalucas820@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} size={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Diniz Almeida</Text>
                    <Text color="gray.300" fontSize="sm">almeidalucas820@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} size={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lucas Diniz Almeida</Text>
                    <Text color="gray.300" fontSize="sm">almeidalucas820@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2022</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} size={16} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>

            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>

    </Box>
  )
}