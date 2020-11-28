import { HeaderComponent } from '@components/header'
import { ReactNode, ReactNodeArray } from 'react'

interface InterfaceLayout {
  children?: ReactNode | ReactNodeArray
}

export const LayoutWithHeaderComponent = ({ children }: InterfaceLayout) => {
  return (
    <>
      <HeaderComponent>{children}</HeaderComponent>
    </>
  )
}
