import React, { FC } from 'react'


const Link: FC<{ title:string, href:string }> = ({ title, href }) => {

    return (
        <a className="underline text-link hover:text-interactive " href={href}>
            {title}
        </a>
    )
}

export default Link;