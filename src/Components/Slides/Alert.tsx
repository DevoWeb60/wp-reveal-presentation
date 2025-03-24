import React from 'react'

export default function Alert({ children, title, icon = "ri-error-warning-fill", type = "info" }: { children: React.ReactNode, title: string, icon: string, type?: "warning" | "info" | "success" | "error" }) {
    return (
        <div className={`alert ${type} fragment`}>
            <h2 className="title"><i className={icon}></i> {title}</h2>
            {children}
        </div>
    )
}
