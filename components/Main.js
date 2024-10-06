import React from 'react'

export default function Main(props) {
  const { children } = props
  return (
    <main className="flex-1 flex-col h-dvh">
      {children}
    </main>
  )
}
