import React from 'react'

export default function Code({ children, lines = false, language = "php", fragment = false }: { children: React.ReactNode, lines?: boolean | string, language?: string, fragment?: boolean }) {

    const lineAttribute = lines ? { "data-line-numbers": lines } : {}

    const getCode = () => {
        return (
            <pre>
                <code
                    {...lineAttribute}
                    data-trim data-noescape
                    className={`language-${language}`}
                >
                    {children}
                </code>
            </pre>
        )
    }

    if (fragment) {
        return (
            <div className="fragment">
                {getCode()}
            </div>
        )
    }

    return getCode()
}
