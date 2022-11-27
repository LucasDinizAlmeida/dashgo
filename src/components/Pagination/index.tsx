import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number,
  registersPerPage?: number,
  currentPage?: number,
  onPageChange: (page: number) => void
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1
    })
}


export function Pagination({
  totalCountOfRegisters,
  registersPerPage = 10,
  currentPage = 1,
  onPageChange
}: PaginationProps) {

  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - siblingsCount)
    : []

  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

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
        {
          (currentPage > 1 + siblingsCount) &&
          <>
            <PaginationItem onPageChange={onPageChange} number={1} />
            {currentPage > (2 + siblingsCount) && <Text>...</Text>}
          </>

        }

        {
          previousPages.length !== 0 && previousPages.map(page => {
            return (
              <PaginationItem onPageChange={onPageChange} number={page} />
            )
          })
        }
        <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />
        {
          nextPages.length !== 0 && nextPages.map(page => {
            return (
              <PaginationItem onPageChange={onPageChange} number={page} />
            )
          })
        }

        {
          currentPage < (lastPage - siblingsCount) &&
          <>
            {currentPage < lastPage - 2 && <Text>...</Text>}
            <PaginationItem onPageChange={onPageChange} number={lastPage} />
          </>
        }
      </HStack>
    </Flex>
  )
}