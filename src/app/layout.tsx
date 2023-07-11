'use client'; 
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, theme } from '@primer/react'
import Nav from './nav';
import '@primer/css/index.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-color-mode="dark" data-dark-theme="dark_dimmed">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <ThemeProvider colorMode="dark" theme={theme}>
          <SessionProvider>
            <Nav/>
            {children}
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

