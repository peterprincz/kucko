import { FC } from 'react'

const Footer: FC = () => {

    const grayStyle = "text-gray-600  hover:text-gray-800 px-3 py-2 rounded-md font-medium transition-colors duration-200";
    

    return (
        <footer className="bg-white w-full py-8 shadow-inner h-[10vh]">
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto font-light flex flex-wrap justify-around">
                    <li className="my-2">
                        <a className={grayStyle} href="#">
                            Jogi Nyilatkozat
                        </a>
                    </li>
                    <li className="my-2">
                        <a className={grayStyle} href="#">
                            Titoktartás
                        </a>
                    </li>
                    <li className="my-2">
                        <a className={grayStyle} href="#">
                            Adatvédelmi Nyilatkozat
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;