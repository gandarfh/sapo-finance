import { createContext } from 'react'

export const NavbarContext = createContext({})

export const NavbarProvider: React.FC = ({ children }) => {
  return <NavbarContext.Provider value={{}}>{children}</NavbarContext.Provider>
}
