import { useContext, useRef } from 'react'
import { SidebarContext } from '@context/sidebar.context'
import { useOutsideClick } from '@hooks/outsideclick'
import * as S from './styled'
import { useTranslation } from 'react-i18next'
import { LogoIcon } from '@icons/logo.icon'

export const SidebarComponent = () => {
  const { sidebarOpen, setSidebarOpen } = useContext(SidebarContext)
  const sidebarRef = useRef(null)
  const { i18n } = useTranslation()

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false)
    }
  }

  useOutsideClick(sidebarRef, closeSidebar)

  return (
    <>
      <S.SiderbarWrapper open={sidebarOpen}>
        <S.SidebarMain open={sidebarOpen} ref={sidebarRef}>
          <S.HeaderContent>
            <LogoIcon />
            <S.CloseButton onClick={closeSidebar}>Voltar</S.CloseButton>
          </S.HeaderContent>

          <S.ChangeLanguage>
            {i18n.language.toLowerCase()}
            <S.ContentLanguage>
              <S.LanguageItem onClick={() => i18n.changeLanguage('pt-BR')}>
                pt-br
              </S.LanguageItem>
              <S.LanguageItem onClick={() => i18n.changeLanguage('en')}>
                en
              </S.LanguageItem>
            </S.ContentLanguage>
          </S.ChangeLanguage>
        </S.SidebarMain>
      </S.SiderbarWrapper>
    </>
  )
}
