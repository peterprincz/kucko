import { FC } from 'react'

export enum BACKGROUND {
    PRIMARY,
    SECONDARY,
    WHITE
}

export enum FLEX {
    ROW,
    COLUMN
}

export enum HEIGHT {
    FULL,
    MEDIUM
}

const SectionContainer: FC<{background:BACKGROUND, flex:FLEX, height:HEIGHT}> = ({ background, flex, height, children }) => {

    let backgroundColor:string;
    switch(background){
        case BACKGROUND.PRIMARY:  backgroundColor = " bg-primary";break;
        case BACKGROUND.SECONDARY:  backgroundColor = " bg-secondary";break;
        case BACKGROUND.WHITE:  backgroundColor = " bg-white";break;
        default: backgroundColor = " bg-white";break;
    }
    const flexStyle:string = flex === FLEX.ROW ? " flex" : " flex-col justify-center items-center";
    const minHeight:string = height === HEIGHT.FULL ? " min-h-[93vh]" : " min-h-[83vh]"

    return (
        <div className={"container px-3 md:px-6 lg:px-24 py:3 md:py-6 lg:py-20  py-20 max-w-full" + minHeight + flexStyle + backgroundColor}>
            {children}
        </div>
    )
}

export default SectionContainer;