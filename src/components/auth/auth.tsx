import { createContext, useContext, useEffect, useState } from 'react'
import nookies from 'nookies'
import firebase from 'firebase/app'
import firebaseClient from './firebase-client'
import 'firebase/auth'

interface InterfaceProvider {
  children?: React.ReactNode
}

export interface InterfaceUser {
  user?: firebase.User | null
}

const AuthContext = createContext({} as InterfaceUser)

export const AuthProvider = ({ children }: InterfaceProvider) => {
  firebaseClient()
  const [dataUser, setDataUser] = useState<firebase.User | null>(
    {} as firebase.User
  )

  useEffect(() => {
    firebase.auth().onIdTokenChanged(async (user) => {
      if (user === null) {
        setDataUser(null)
        nookies.set(undefined, 'token', '', {})
        return
      }
      const token = await user.getIdToken()
      setDataUser(user as firebase.User)
      nookies.set(undefined, 'token', token, {})
    })
  }, [dataUser])

  return (
    <AuthContext.Provider value={{ user: dataUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
