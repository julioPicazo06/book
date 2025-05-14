import React from 'react'

export const When = ({ children, predicate }: { children: React.ReactNode, predicate: boolean }) => {
    if (!predicate) {
        return <></>
    }
    return <>{children}</>
}

