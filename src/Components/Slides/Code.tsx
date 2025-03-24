import React from 'react'

export default function Code({ children, lines = false, language = "php", fragment = false, file = false }: { children: React.ReactNode, lines?: boolean | string, language?: string, fragment?: boolean, file?: string }) {

    const lineAttribute = lines ? { "data-line-numbers": lines } : {}

    const getCode = () => {
        return (
            <div className="code">
                {file && <code className="fileName">{file}</code>}
                <pre>
                    <code
                        {...lineAttribute}
                        data-trim data-noescape
                        className={`language-${language}`}
                    >
                        {children}
                    </code>
                </pre>
            </div>
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
