import { FC } from 'react'

const ListItem: FC = ({ children }) => {

    /*hover:animate-slowSpin*/
    return (
        <div className='flex items-center'>
            <div className="rounded-lg min-w-[0.75rem] min-h-[1rem] h-3 w-8 bg-active ">
            </div>
            {children}
        </div>

    )
}

export default ListItem;