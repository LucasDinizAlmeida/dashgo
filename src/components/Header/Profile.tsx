import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {

  showProfileData?: boolean
}


export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {
        showProfileData &&
        <Box textAlign="right" mr="4">
          <Text>Lucas Diniz Almeida</Text>
          <Text color="gray.300" fontSize="small">
            almeidalucas820@gmail.com
          </Text>
        </Box>
      }
      <Avatar size="md" name="Lucas Diniz" src="https://github.com/lucasDinizAlmeida.png" />
    </Flex>
  )
}