
import { Flex, Text, Icon, Input, HStack, Box, Avatar, useBreakpointValue } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri'
import { Profile } from "./Profile";
import { NavigationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";


export function Header() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <NavigationsNav />

        <Profile showProfileData={isWideVersion} />

      </Flex>
    </Flex>
  )
}