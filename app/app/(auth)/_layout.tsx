import { Redirect, Stack } from 'expo-router'

export default function AuthRoutesLayout(): JSX.Element {
  const isSignedIn = false // Replace with your authentication logic

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }

  return <Stack />
}