"use client"

import { signOut, useSession } from "next-auth/react"

import GoogleLoginButton from "~/components/auth/google-login-button"

export default function HomePage() {
  const { data: session, status } = useSession()
  return (
    <div>
      <h1>Home page </h1>
      {status === "authenticated" && session.user ? (
        <div>
          <p>{session.user.name}</p>
          <button onClick={() => signOut()}>sign out</button>
        </div>
      ) : (
        <GoogleLoginButton />
      )}
    </div>
  )
}
