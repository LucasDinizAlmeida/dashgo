import { ElementType } from "react";
import { Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link, { LinkProps } from 'next/link'
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";


interface NavLinkProps extends LinkProps {
  children: string,
  icon: ElementType,
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {


  return (
    <ActiveLink href={href} {...rest}>
      <ChakraLink display="flex" alignItems="center" >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium" >{children}</Text>
      </ChakraLink>
    </ActiveLink>

  )
}