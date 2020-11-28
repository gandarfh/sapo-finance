import { Container } from '@components/layout'
import { SidebarContext } from '@context/sidebar.context'
import { HamburguerIcon } from '@icons/hamburguer.icon'
import { ReactNode, ReactNodeArray, useContext } from 'react'
import * as S from './styled'

interface InterfaceHeader {
  children?: ReactNode | ReactNodeArray
}

export const HeaderComponent = ({ children }: InterfaceHeader) => {
  const { setSidebarOpen } = useContext(SidebarContext)

  return (
    <>
      <Container>
        <S.HeaderWrapper>
          <div>
            <S.SubTitleHead>Olá,</S.SubTitleHead>
            <S.TitleHead>João</S.TitleHead>
          </div>
          <S.ButtonHamburguer onClick={() => setSidebarOpen(true)}>
            <HamburguerIcon />
          </S.ButtonHamburguer>
        </S.HeaderWrapper>
      </Container>
      {children}
    </>
  )
}
