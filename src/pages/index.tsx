import { Button, Flex, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from 'react-hook-form'
import { Input } from "../components/Form/Input";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})


type SignInFormData = {
  email: string,
  password: string
}


export default function SingIn() {

  const { register, handleSubmit, formState } = useForm({ resolver: yupResolver(schema) })

  const { errors } = formState

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log(values)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email" {...register('email')} error={errors?.email} />
          <Input type="password" label="Senha" name="password" {...register('password')} error={errors?.password} />
        </Stack>

        <Button
          mt={6}
          type="submit"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Enviar
        </Button>
      </Flex>
    </Flex>
  )
}
