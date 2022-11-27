import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useForm, SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from 'react-query';

import Link from 'next/link'
import { api } from "../../services/api";
import { useRouter } from "next/router";
import { queryClient } from "../../services/queryClient";

type SignInFormData = {
  name: string,
  email: string,
  password: string
  password_confirmation: string
}

const schema = yup.object({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('Email obrigatório').email('Email inválido'),
  password: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], 'As senhas precisam ser iguais')
})

export default function CreateUser() {

  const router = useRouter()

  const createUser = useMutation(async (user: SignInFormData) => {
    const response = await api.post('users', {
      user: {
        ...user,
        create_at: new Date()
      }
    })

    return response.data.user
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const { handleSubmit, register, formState } = useForm({ resolver: yupResolver(schema) })
  const { errors, isSubmitting } = formState

  const handleCreateNewUser: SubmitHandler<SignInFormData> = async (values) => {
    await createUser.mutateAsync(values)

    router.push('/users')
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" maxW={1480} mx="auto" my="6" px="6" onSubmit={handleSubmit(handleCreateNewUser)}>
        <Sidebar />

        <Box as="form" flex={1} borderRadius={8} p={["6", "8"]} bg="gray.800">
          <Heading fontWeight="normal" size="lg">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input
                name="name"
                label="Nome completo"
                error={errors?.name}
                {...register('name')}
              />
              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors?.email}
                {...register('email')}
              />
            </SimpleGrid>

            <SimpleGrid
              minChildWidth="240px"
              spacing={["6", "8"]}
              w="100%"
            >
              <Input
                name="password"
                label="Senha"
                type="password"
                error={errors?.password}
                {...register('password')}
              />
              <Input
                name="password_confirmation"
                type="password"
                label="Confirmação da senha"
                error={errors?.password_confirmation}
                {...register('password_confirmation')}
              />
            </SimpleGrid>
          </VStack>

          <HStack
            mt="8"
            spacing={4}
            justifyContent="flex-end"
            alignItems="center"
          >
            <Link href="/users">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
            </Link>

            <Button
              colorScheme="pink"
              type="submit"
              isLoading={isSubmitting}
            >
              Salvar
            </Button>
          </HStack>
        </Box>
      </Flex>

    </Box>
  )
}