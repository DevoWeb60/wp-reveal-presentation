import React from 'react'

export default function Code({ children, language = "php", fragment = false }: { children: React.ReactNode, language?: string, fragment?: boolean }) {

    const getCode = () => {
        return (
            <pre><code data-trim data-noescape className={`language-${language}`}>{children}</code></pre>
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
