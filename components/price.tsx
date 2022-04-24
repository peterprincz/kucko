import { FC } from 'react'
import { Price } from '../lib/types/data-types'



const Price: FC<{ price: Price }> = ({ price, children }) => {


    return (
        <div className='mb-8 mt-6 flex flex-col items-center text-center bg-white p-6 rounded-md shadow-lg'>
            <h1 className=" text-highlight  text-gray-800">
                {price.price} / {price.duration}
            </h1>
            <h1 className=" text-highlight  text-gray-800">
                {price.priceDesc}
            </h1>
        </div>
    )
}

export default Price;