
import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { NavigationsNav } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { RiMenuLine, RiLogoutCircleLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { UseAuth } from "../../contexts/AuthContext";


export function Header() {

  const { sigOut } = UseAuth()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  const { onOpen } = useSidebarDrawer()

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

      {
        !isWideVersion &&
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          variant="unstyled"
          fontSize={24}
          mr="2"
          onClick={onOpen}
        >

        </IconButton>
      }

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex
        align="center"
        ml="auto"
      >
        <NavigationsNav />

        <Profile showProfileData={isWideVersion} />

        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiLogoutCircleLine} />}
          variant="unstyled"
          fontSize={24}
          ml="4"
          onClick={sigOut}
        >

        </IconButton>

      </Flex>
    </Flex>
  )
}