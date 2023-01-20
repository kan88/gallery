import React from 'react'

interface ImgProps {
    url?: string
    title?: string
}

export default function Img(props: ImgProps) {
    const { url, title } = props
    return (
        <img src={url} alt={title} width="150" height="100"></img>
    )
}
