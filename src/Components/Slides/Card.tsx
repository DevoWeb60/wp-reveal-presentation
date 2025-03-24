import React from 'react'

export default function Card({ children, title, fragment }: { children: React.ReactNode, title?: string | React.ReactNode, fragment?: boolean }) {
  return (
    <div className={`card ${fragment ? 'fragment' : ''}`}>
      {title && typeof title === 'string' ? <h4>{title}</h4> : title}
      {children}
    </div>
  )
}
