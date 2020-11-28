import { Column, Container, Row } from '#components/layout'
import { LogoIcon } from '#icons/nav/logo.icon'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styled'

import firebase from 'firebase/app'
import firebaseClient from '#auth/firebase-client'
import 'firebase/auth'

const Register = () => {
  firebaseClient()
  const router = useRouter()

  const [user, setUser] = useState({
    email: '',
    password: '',
    displayName: '',
  })
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Container>
        <Row>
          <Column
            heightDesktop="100vh"
            heightMobile="100vh"
            alignDesktop="center"
            alignMobile="center"
            justifyDesktop="center"
            justifyMobile="center"
          >
            <LogoIcon
              color="primary"
              height="70"
              width="100"
              style={{ marginBottom: '32px' }}
            />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <S.Inputs
                type="text"
                name="email"
                placeholder="* Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <S.Inputs
                type="password"
                name="password"
                placeholder="* Senha"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
              <S.Inputs
                type="displayName"
                name="displayName"
                placeholder="Nome"
                value={user.displayName}
                onChange={(e) =>
                  setUser({ ...user, displayName: e.target.value })
                }
              />

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <S.Button
                  disabled={
                    user.email === '' ||
                    user.password === '' ||
                    user.displayName === ''
                  }
                  onClick={async () => {
                    setLoading(true)
                    await firebase
                      .auth()
                      .createUserWithEmailAndPassword(user.email, user.password)
                      .then(async () => {
                        await firebase
                          .auth()
                          .currentUser?.updateProfile({
                            displayName: user.displayName,
                          })
                          .then(() => {
                            router.push('/')
                          })
                      })
                      .catch((err) => {
                        alert(err)
                      })
                      .finally(() => {
                        setLoading(false)
                      })
                  }}
                >
                  {loading ? 'registrando...' : 'registrar'}
                </S.Button>
                <S.ButtonRegister
                  onClick={() => {
                    router.push('/login')
                  }}
                >
                  já tenho uma conta
                </S.ButtonRegister>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </>
  )
}

Register.displayName = 'Register'

export default Register
