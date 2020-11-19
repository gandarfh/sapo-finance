import { useTranslation } from 'react-i18next'

import firebase from 'firebase/app'
import firebaseClient from '#auth/firebase-client'
import 'firebase/auth'

import { LogoIcon } from '#icons/nav/logo.icon'
import * as S from './styled'
import { LogoutIcon } from '#icons/nav/logout.icon'
import { useAuth } from '#auth/auth'
import { Container } from '#components/layout'
import { useRouter } from 'next/router'

export const Navbar = () => {
  firebaseClient()
  const { user } = useAuth()
  const router = useRouter()
  const { t } = useTranslation('home')
  return (
    <>
      <S.NavWrapper>
        <Container>
          <S.NavContent>
            <LogoIcon
              width="100"
              height="55"
              style={{ cursor: 'pointer' }}
              onClick={() => router.push('/')}
            />
            <div style={{ color: '#fff' }}>home</div>
            {t('home:teste')}

            {user && (
              <S.LogoutButton
                onClick={async () => {
                  firebase.auth().signOut()
                  router.push('/login')
                }}
              >
                <LogoutIcon
                  color="primary"
                  width="18px"
                  height="16px"
                  style={{ marginRight: '12px' }}
                />
                Logout
              </S.LogoutButton>
            )}
          </S.NavContent>
        </Container>
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
