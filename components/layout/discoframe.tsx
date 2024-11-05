type DiscoProps = {
    id: string;
    name: string;
    ytLink: string;
};

export default function DiscoFrame({ id, name, ytLink }: DiscoProps) {
    const playlistId = ytLink.split("list=")[1];

    return (
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded border border-neutral-200 dark:border-neutral-700 p-4">
            <input type="hidden" name="id" value={id} />
            <div className="mt-4 aspect-w-16 aspect-h-9">
                <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                    title={name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded"
                ></iframe>
            </div>
            <p className="mt-2 text-orange-600 font-bold">{name}</p>
        </div>
    );
}
