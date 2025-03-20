import React from 'react'

export default function Card({children, title, fragment}: {children: React.ReactNode, title: string, fragment?: boolean}) {
  return (
    <div className={`card ${fragment ? 'fragment' : ''}`}>
      <h4>{title}</h4>
      {children}
    </div>
  )
}
