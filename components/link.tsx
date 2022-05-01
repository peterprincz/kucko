import React, { FC } from 'react'

const Link: FC<{ title:string, href:string, target?:string }> = ({ title, href, target }) => {

    return (
        <a className="underline text-link hover:text-interactive " href={href} target={target}>
            {title}
        </a>
    )
}

export default Link;