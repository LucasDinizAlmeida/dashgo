import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Thead, Tr, Text, Tbody, Td, Th, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useQuery } from 'react-query'
import { api } from "../../services/api";
import { useUsers } from "../../services/hooks/useUsers";


export default function UserList() {

  const { data, isLoading, isError, isFetching } = useUsers()


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} p={6} bg="gray.800">
          <HStack justifyContent="space-between" alignItems="center" mb="8">
            <Heading size="lg" fontWeight="normal" color="gray.100">
              Usuários
              {!isLoading && isFetching && <Spinner size="sm" ml="4" color="gray.500" />}
            </Heading>

            <Link href="/users/create">
              <Button
                as="a"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} size={22} />}
              >
                Criar Novo
              </Button>
            </Link>
          </HStack>

          {
            isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : isError ? (
              <Text>Erro ao carregar os usuários</Text>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px="6" color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>USUÁRIO</Th>
                      {isWideVersion && <Th>DATA DE CADASTRO</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>

                  <Tbody>

                    {
                      data.map(user => {
                        return (
                          <Tr key={user.id}>
                            <Td px="6">
                              <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                              <Box>
                                <Text fontWeight="bold">{user.name}</Text>
                                <Text color="gray.300" fontSize="sm">{user.email}</Text>
                              </Box>
                            </Td>
                            {isWideVersion && <Td>{user.createAt}</Td>}
                            <Td>
                              {isWideVersion && <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="purple"
                                leftIcon={<Icon as={RiPencilLine} size={16} />}
                              >
                                Editar
                              </Button>}
                            </Td>
                          </Tr>
                        )
                      })
                    }

                  </Tbody>
                </Table>

                <Pagination />
              </>
            )
          }

        </Box>
      </Flex>

    </Box>
  )
}