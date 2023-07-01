
'use client'

import { LoginLayoutContainer } from "./styles/styles"

export default function LoginLayout({
  children
}: {
  children: React.ReactNode
}) {

  return (
    <LoginLayoutContainer>
      {children}
    </LoginLayoutContainer>
  )
}