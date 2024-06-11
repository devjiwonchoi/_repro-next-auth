import { auth } from '@/auth'
import { SignIn } from '@/sign-in'

export default async function Layout({ children }) {
  const session = await auth()
  if (!session) return <SignIn />
  return <>{children}</>
}
