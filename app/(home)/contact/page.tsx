'use client';

import SocialButton from "@/components/ui/socialbutton";
import { IoMail } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Page() {
    const router = useRouter();

    return (
        <div className="min-h-full w-full p-8 overflow-auto flex flex-col items-center justify-center gap-8">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <div className="flex place-content-center">
                <Link
                    className="flex flex-col items-center bg-orange-600 hover:bg-orange-700 p-4 text-center rounded"
                    href={'mailto:luminozteam@email.com'}>
                    <IoMail size={45} />
                    <p className="tracking-wider">
                        luminozteam@email.com
                    </p>
                </Link>
            </div>
            <SocialButton />
        </div>
    );
}
