import { FC } from 'react'

const ListItem: FC = ({ children }) => {

    return (
        <div className='flex items-center'>
            <div className="rounded-md min-w-[2rem] min-h-[2rem] h-8 w-8 bg-active hover:animate-slowSpin">
            </div>
            {children}
        </div>

    )
}

export default ListItem;