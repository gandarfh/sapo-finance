import nookies from 'nookies'
import { Column, Container, Row } from '#components/layout'
import { verifyIdToken } from '#auth/firebase-admin'
import { GetServerSidePropsContext } from 'next'
import firebaseClient from '#auth/firebase-client'
import firebase from 'firebase'

interface InterfaceHome {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  user: firebase.User | any
}

const HomePage = ({ user }: InterfaceHome) => {
  firebaseClient()
  return (
    <Container>
      <Row topDesktop={32} topMobile={32}>
        <Column>
          <h2>{`Seja bem vindo ${user?.name}`}</h2>
        </Column>
        <Column topDesktop={12} topMobile={12}>
          <h4>
            {!user
              ? `Cria uma conta primeiro porra`
              : `mas que belo email\n ${user?.email}`}
          </h4>
        </Column>
      </Row>
    </Container>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const cookies = nookies.get(context)
    const { email, name } = await verifyIdToken(cookies.token)
    return {
      props: {
        user: { email, name },
      },
    }
  } catch (err) {
    return { props: {} }
  }
}

export default HomePage
