import { useTranslation } from 'react-i18next'

import { LogoIcon } from '#icons/nav/logo.icon'
import * as S from './styled'

export const Navbar = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <S.NavWrapper>
        <S.NavContent>
          <LogoIcon />
          <div style={{ color: '#fff' }}>home</div>
          {t('home:teste')}
        </S.NavContent>
      </S.NavWrapper>
    </>
  )
}

export const NavbarContentBase = () => {
  return (
    <>
      <div>teste</div>
    </>
  )
}
