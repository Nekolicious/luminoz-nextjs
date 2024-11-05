import { albumData } from "@/app/_lib/data";
import DiscoFrame from "@/components/layout/discoframe";

export default function Page() {
    return (
        <div className="min-h-full w-full p-8 overflow-auto">
            <h2 className="text-4xl font-bold my-8">Discography</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center text-center gap-6">
                {albumData.map((album) => (
                    <DiscoFrame
                        key={album.id}
                        id={album.id.toString()}
                        name={album.name}
                        ytLink={album.ytLink}
                    />
                ))}
            </div>
        </div>
    );
}
