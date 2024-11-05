'use client'

import Link from "next/link";
import { FaHome, FaUser, FaMusic, FaPhoneSquareAlt, FaChevronRight } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import { usePathname } from "next/navigation";

export function Sidebar() {
    const isActive = usePathname();
    const [isCollapse, setCollapse] = useState(true);
    const linkClass = 'flex flex-row items-center font-bold py-4';
    const animClass = 'hover:text-orange-600 hover:translate-x-2 transition-all duration-300';
    const activeClass = 'text-orange-600 translate-x-2';

    const ToggleNavbar = () => {
        setCollapse(!isCollapse);
    };

    return (
        <>
            <div className={`fixed md:static flex h-screen ${isCollapse ? 'w-0 md:w-screen' : 'w-screen'} max-w-80 drop-shadow z-20`}>
                <nav className={`${isCollapse ? 'w-0 md:w-full md:border-r-8 md:border-orange-600' : 'w-80 border-r-8 border-orange-600'} transition-all duration-700 ease-in-out flex flex-col max-w-sm place-content-center bg-neutral-100 dark:bg-neutral-800 text-2xl gap-8 overflow-hidden`}>
                    <div className={`${isCollapse ? 'opacity-0 md:opacity-100' : 'opacity-100 delay-300'} transition-opacity duration-300 h-full flex flex-col justify-between py-16`}>
                        <h1 className="text-4xl text-center tracking-wide font-bold">LUMiNOZ</h1>
                        <div className="flex flex-col my-8 px-8 divide-y divide-neutral-600">
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
                        <p className="text-sm text-center text-neutral-400 dark:text-neutral-600">
                            &#169; 2024 <Link className="hover:underline" href={'https://nekocia.my.id/'} target="_blank">Nekocia</Link> for LUMiNOZ
                        </p>
                    </div>
                </nav>
            </div>

            {/* Overlay */}
            {!isCollapse && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={ToggleNavbar}
                ></div>
            )}

            {/* Collapsible Button */}
            <div className="md:hidden fixed top-4 left-4 z-30">
                <button className="bg-neutral-800 text-orange-600 p-2" onClick={ToggleNavbar}>
                    <FaChevronRight className={`${isCollapse ? '' : 'rotate-180'} transition-transform duration-300 ease-in-out`} size={24} />
                </button>
            </div>
        </>
    );
}
