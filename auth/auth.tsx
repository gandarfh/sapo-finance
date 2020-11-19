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
  const [user, setUser] = useState<firebase.User | null>({} as firebase.User)

  useEffect(() => {
    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null)
        nookies.set(undefined, 'token', '', {})
        return
      }
      const token = await user.getIdToken()
      setUser(user as firebase.User)
      nookies.set(undefined, 'token', token, {})
    })
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
