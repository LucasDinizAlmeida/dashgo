import { Box, Button, Checkbox, Flex, Heading, HStack, Icon, Table, Thead, Tr, Text, Tbody, Td, Th, useBreakpointValue, Spinner, Link } from "@chakra-ui/react";
import NextLink from 'next/link';
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";

import { GetUserProps } from '../../services/hooks/useUsers';

interface UserListProps extends GetUserProps { }

export default function UserList({ users, totalCount }: UserListProps) {

  const [selectedPage, setSelectedPage] = useState(1)

  const { data, isLoading, isError, isFetching } = useUsers(selectedPage)



  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  async function handlePrefetingUser(userId: string) {
    queryClient.prefetchQuery(['users', userId], async () => {
      const response = await fetch(`users/${userId}`)
      const data = await response.json()

      return data
    }, {
      staleTime: 1000 * 60 //1 min
    })
  }


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

            <NextLink href="/users/create">
              <Button
                as="a"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} size={22} />}
              >
                Criar Novo
              </Button>
            </NextLink>
          </HStack>

          {/* {
            isLoading ? (
              <Flex justifyContent="center">
                <Spinner />
              </Flex>
            ) : isError ? (
              <Text>Erro ao carregar os usuários</Text>
            ) : ( */}
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

                {/* {
                      data.users.map(user => {
                        return (
                          <Tr key={user.id}>
                            <Td px="6">
                              <Checkbox colorScheme="pink" />
                            </Td>
                            <Td>
                              <Box>
                                <Link color="purple.400" onMouseEnter={() => handlePrefetingUser(user.id)}>
                                  <Text fontWeight="bold">{user.name}</Text>
                                </Link>
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
                    } */}
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Link color="purple.400">
                        <Text fontWeight="bold">user01</Text>
                      </Link>
                      <Text color="gray.300" fontSize="sm">silva90@gmail.com</Text>
                    </Box>
                  </Td>
                  {isWideVersion && <Td>20/06/22</Td>}
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

              </Tbody>
            </Table>

            {/* <Pagination
                  onPageChange={setSelectedPage}
                  currentPage={selectedPage}
                  totalCountOfRegisters={data.totalCount}
                /> */}
            <Pagination
              onPageChange={setSelectedPage}
              currentPage={10}
              totalCountOfRegisters={5}
            />
          </>



        </Box>
      </Flex>

    </Box>
  )
}


// export const getServerSideProps: GetServerSideProps = async () => {

//   const { users, totalCount } = await getUsers(1)

//   return {
//     props: {
//       users,
//       totalCount
//     }
//   }
// }

