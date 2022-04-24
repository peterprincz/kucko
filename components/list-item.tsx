import { FC } from 'react'

const ListItem: FC = ({ children }) => {

    /*hover:animate-slowSpin*/
    return (
        <div className='flex items-center'>
            <div className="w-5  overflow-hidden inline-block">
                <div className=" h-7  bg-active rotate-45 transform origin-top-left"></div>
            </div>
            {children}
        </div>

    )
}

export default ListItem;