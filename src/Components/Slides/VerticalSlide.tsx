import React from 'react'

export default function VerticalSlide({children, header}: {children: React.ReactNode, header: React.ReactNode}) {
  return (
    <section className="vertical-slide" data-auto-animate>
      {header}
      {children}
    </section>
  )
}
