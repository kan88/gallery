import React from 'react'

export default function Button(props: React.ComponentPropsWithoutRef<'button'>) {
    const { children } = props
    return (
        <button {...props}>{children}</button>
    )
}
