import { FC } from 'react'
import Link from '../link';

const Footer: FC = () => {


    return (
        <footer className="bg-white w-full py-8 shadow-inner h-[10vh]">
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto font-light flex flex-wrap justify-center gap-8">
                    <li className="my-2">
                        <Link href="/jog/legalnotice" title='Jogi Nyilatkozat' />
                    </li>
                    <li className="my-2">
                        <Link href="/jog/secrecy" title='Titoktartás' />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;