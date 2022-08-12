import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";


export function Pagination() {

  return (

    <Flex
      direction={['column', 'row']}
      justifyContent="space-between"
      alignItems="center"
      mt="8"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </HStack>
    </Flex>
  )
}