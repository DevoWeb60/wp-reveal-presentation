import React from 'react'

export default function Notes({ children }: { children: React.ReactNode }) {
    return (
        <aside className="notes">
            {children}
        </aside>
    )
}
