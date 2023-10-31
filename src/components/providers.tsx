"use client"

import React, { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

import { Toaster } from "./ui/toaster"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>{children}</SessionProvider>
      <Toaster />
    </>
  )
}
