import {
  createContext,
  Dispatch,
  ReactNode,
  ReactNodeArray,
  SetStateAction,
  useState,
} from 'react'

interface InterfaceContext {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}
export const SidebarContext = createContext({} as InterfaceContext)

interface InterfaceSidebar {
  children?: ReactNode | ReactNodeArray
}

const SidebarProvider = ({ children }: InterfaceSidebar) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
