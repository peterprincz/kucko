import React, { FC } from 'react'


const Title: FC<{ title?: string, subTitle?: string, titleClass?: string, subTitleClass?: string, containerClass?: string}> = 
({ title, subTitle, titleClass, subTitleClass, containerClass, children }) => {

    const titleStyle = "text-gray-800 text-big lg:text-huge font-black flex flex-col leading-none break-words " + (titleClass ? titleClass : "");
    const subTitleStyle = "text-gray-800 text-highlight  font-black mt-4 leading-tight break-words " + (subTitleClass ? subTitleClass : "");
    const containerStyle = containerClass ? containerClass : "";

    return (
        <div className={containerStyle}>
            {(title ?
                <h3 className={titleStyle}>
                    {title}
                </h3>
                : ""
            )}
            {(subTitle ? 
                <h3 className={subTitleStyle}>
                    {subTitle}
                </h3>
                : ""
            )}
        </div>
    );
        
}

export default Title