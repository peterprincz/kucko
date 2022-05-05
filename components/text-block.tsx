import React, { FC } from 'react'

const TextBlock: FC<{ text: string }> = ({ text, children }) => {

    return (
        <p className="text-justify">
            {text}
        </p>
    );
}

export default TextBlock;