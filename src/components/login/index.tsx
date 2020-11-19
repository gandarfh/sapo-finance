import { Column, Container, Row } from '#components/layout'
import { LogoIcon } from '#icons/nav/logo.icon'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styled'

import firebase from 'firebase/app'
import firebaseClient from '#auth/firebase-client'
import 'firebase/auth'

const Login = () => {
  firebaseClient()
  const router = useRouter()

  const [user, setUser] = useState({
    email: '',
    password: '',
    displayName: '',
  })

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
                  disabled={user.email === '' || user.password === ''}
                  type="submit"
                  onClick={async () => {
                    await firebase
                      .auth()
                      .signInWithEmailAndPassword(user.email, user.password)
                      .then(async () => {
                        router.push('/')
                      })
                      .catch((err) => {
                        switch (err.code) {
                          case 'auth/user-not-found':
                            alert('Usuário não existe')
                            break

                          default:
                            alert(err)
                        }
                      })
                  }}
                >
                  Conectar
                </S.Button>
                <S.ButtonRegister
                  disabled={
                    user.email === '' ||
                    user.password === '' ||
                    user.displayName === ''
                  }
                  onClick={async () => {
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
                  }}
                >
                  Criar uma conta
                </S.ButtonRegister>
              </div>
            </div>
          </Column>
        </Row>
      </Container>
    </>
  )
}

Login.displayName = 'Login'

export default Login
