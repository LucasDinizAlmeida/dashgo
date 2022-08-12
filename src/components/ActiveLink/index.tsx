import { cloneElement, ReactElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";


interface ActiveLinkProps extends LinkProps {
  children: ReactElement
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {

  const { asPath } = useRouter()

  const color = asPath.startsWith(String(rest.href)) ? 'pink.400' : 'gray.100'

  return (
    <Link {...rest}>
      {cloneElement(children, { color })}
    </Link>
  )
}