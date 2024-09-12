import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-full w-full place-content-center text-center">

      {/* IMAGE CONTAINER */}
      <div>
        <Image
          src={'/img/luminoz.png'}
          fill
          alt="luminoz logo"
        />
      </div>

      <p>
        HOME
      </p>

    </section>
  );
}
