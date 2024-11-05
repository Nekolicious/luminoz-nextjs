import Image from "next/image";

type ArtistProps = {
    id: string;
    name: string;
    role: string;
    about: string;
    imgSrc: string;
}

export default function ArtistFrame({ id, name, role, about, imgSrc }: ArtistProps) {
    return (
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 p-4 ">
            <input type="hidden" name="id" value={id} />
            <div className="relative h-24 w-24 mx-auto my-4">
                <Image
                    src={imgSrc}
                    fill
                    alt={name}
                    className="rounded-full"
                />
            </div>
            <div className="my-4 flex flex-col gap-1">
                <p className="font-bold">
                    {name}
                </p>
                <p className="text-sm text-orange-600">
                    {role}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-200">
                    {about}
                </p>
            </div>
        </div>
    )
}