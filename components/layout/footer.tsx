import { FC } from 'react'
import Link from '../link';

const Footer: FC = () => {


    return (
        <footer className="bg-white w-full py-8 shadow-inner h-[10vh]">
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto font-light flex flex-wrap justify-around">
                    <li className="my-2">
                        <Link href="/legal/legalnotice" title='Jogi Nyilatkozat' />
                    </li>
                    <li className="my-2">
                        <Link href="/legal/secrecy" title='Titoktartás' />
                    </li>
                    <li className="my-2">
                        <Link href="/legal/privacystatement" title='Adatvédelmi Nyilatkozat' />
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;