import { createContext, ReactNode, useContext, useEffect } from "react";
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from "next/router";

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

interface SidebarDrawerContextProviderProps {
  children: ReactNode
}

export function SidebarDrawerContextProvider({ children }: SidebarDrawerContextProviderProps) {

  const disclosure = useDisclosure()

  const { asPath } = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)




// import { createContext, ReactNode } from "react";
// import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

// const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

// interface SidebarDrawerContextProviderProps {
//   children: ReactNode
// }

// export function SidebarDrawerContextProvider({ children }: SidebarDrawerContextProviderProps) {

//   const disclosure = useDisclosure()

//   return (
//     <SidebarDrawerContext.Provider value={disclosure}>
//       {children}
//     </SidebarDrawerContext.Provider>
//   )
// }