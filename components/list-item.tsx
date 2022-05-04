import { FC } from 'react'

const ListItem: FC = ({ children }) => {

    return (
        <div className='flex items-center'>
            <div className="w-5 min-w-[1.2rem] h-7 overflow-hidden inline-block mr-2">
                <div className=" h-7  bg-interactive rotate-45 transform origin-top-left"></div>
            </div>
            {children}
        </div>

    )
}

export default ListItem;