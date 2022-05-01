import { FC } from 'react'
import { Price } from '../lib/types/data-types'
import Button from './button';

const Price: FC<{ price: Price }> = ({ price, children }) => {

    return (
        <div className='mb-8 mt-6 flex flex-col items-center text-center '>
            <div className='bg-[#edcdcd] shadow-lg rounded-lg min-w-[20rem]'>
                <div className='py-6 px-6 bg-[#e8dfe880] text-center rounded-t-lg'>
                    <span className=" text-highlight text-gray-800 ">
                        {price.priceDesc}
                    </span>
                </div>
                <div className='pt-12'>
                    <div className='mb-6'>
                        <h1 className=" text-highlight font-bold ">
                            {price.price}
                        </h1>
                        <h1 className="  text-gray-800 font-bold">
                            {price.duration}
                        </h1>
                    </div>
                    <div className='mb-6'>
                        <a href='/contact'>
                            <Button title='Kapcsolat' outlined={false}>

                            </Button>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price;