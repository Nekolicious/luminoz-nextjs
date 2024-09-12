import Link from "next/link";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export default function SocialButton() {
    const linkClass = "bg-orange-600 hover:scale-110 transition-transform duration-300 ease-in-out rounded-full p-2";
    return (
        <div className="flex gap-4 justify-center">
            <Link className={linkClass} target="_blank" href={'https://x.com/LUMiNOZProject'}>
                <FaXTwitter />
            </Link>
            <Link className={linkClass} target="_blank" href={'https://www.facebook.com/profile.php?id=61556131885796'}>
                <FaFacebook />
            </Link>
            <Link className={linkClass} target="_blank" href={'https://www.instagram.com/luminozproject/'}>
                <FaInstagram />
            </Link>
        </div>
    )
}