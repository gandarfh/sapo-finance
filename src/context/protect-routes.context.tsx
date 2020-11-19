import { useAuth } from '#auth/auth'

interface InterfaceProtect {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}
export const ProtectRoute = ({ children }: InterfaceProtect) => {
  const { user } = useAuth()
  if (
    !user &&
    window.location.pathname !== '/login' &&
    window.location.pathname !== '/register'
  ) {
    return (window.location.href = '/login')
  }
  return children
}
