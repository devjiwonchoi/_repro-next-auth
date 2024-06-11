import { auth } from '@/auth'
import { SignIn } from '@/sign-in'

export default async function Repro() {
  const session = await auth()
  if (!session) return <SignIn />
  return <p>should not be visible</p>
}
