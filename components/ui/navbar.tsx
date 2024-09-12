'use client'

import Link from "next/link";
import { FaHome, FaUser, FaMusic, FaPhoneSquareAlt, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Sidebar() {
    const isActive = usePathname();
    const [isCollapse, setCollapse] = useState(true);
    const linkClass = 'flex flex-row items-center px-2';
    const animClass = 'hover:text-orange-600 hover:translate-x-2 transition-all duration-300';
    const activeClass = 'text-orange-600 translate-x-2'

    const ToggleNavbar = () => {
        setCollapse(!isCollapse);
    }

    return (
        <div className="fixed md:static flex h-screen w-screen max-w-80">
            <nav className={`${isCollapse ? 'w-0 md:w-full' : 'w-full'} transition-all duration-700 ease-in-out flex flex-col max-w-sm place-content-center bg-neutral-800 text-2xl gap-8 overflow-hidden`}>
                <div className={`${isCollapse ? 'opacity-0 md:opacity-100' : 'opacity-100 delay-200'} transition-color duration-300 h-full flex flex-col justify-between py-16`}>
                    <h1 className="text-4xl text-center">LUMINOZ</h1>
                    <div className="flex flex-col my-8 gap-4">
                        {/* LINKS */}
                        <IconContext.Provider value={{ className: 'p-2', size: '40' }}>
                            <Link onClick={ToggleNavbar} className={`${linkClass} ${animClass} ${isActive === '/' ? activeClass : ''}`} href={'/'}>
                                <FaHome />
                                <p>Home</p>
                            </Link>
                            <Link onClick={ToggleNavbar} className={`${linkClass} ${animClass} ${isActive === '/artist' ? activeClass : ''}`} href={'artist'}>
                                <FaUser />
                                <p>Artist</p>
                            </Link>
                            <Link onClick={ToggleNavbar} className={`${linkClass} ${animClass} ${isActive === '/discography' ? activeClass : ''}`} href={'discography'}>
                                <FaMusic />
                                <p>Discography</p>
                            </Link>
                            <Link onClick={ToggleNavbar} className={`${linkClass} ${animClass} ${isActive === '/contact' ? activeClass : ''}`} href={'contact'}>
                                <FaPhoneSquareAlt />
                                <p>Contact</p>
                            </Link>
                        </IconContext.Provider>
                    </div>
                    <h1 className="text-sm text-center">Credit Here</h1>
                </div>
            </nav>

            {/* COLLAPSIBLE BUTTON */}
            <div className="md:hidden">
                <button className="bg-neutral-800 text-orange-600 p-2 my-4" onClick={ToggleNavbar}>
                    <FaChevronRight className={`${isCollapse ? '' : 'rotate-180'} transition-transform delay-200 duration-300 ease-in-out`} size={24} />
                </button>
            </div>

        </div>

    )
}