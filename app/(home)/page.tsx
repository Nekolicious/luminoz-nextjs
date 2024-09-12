import Image from "next/image";
import SocialButton from "@/components/ui/socialbutton";

export default function Home() {
  return (
    <section className="min-h-full w-full flex flex-col place-content-center text-center">
      {/* IMAGE */}
      <div className="py-4">
        <Image
          className="mx-auto border-circle"
          src={'/img/luminoz.png'}
          width={200}
          height={200}
          alt="luminoz logo"
        />
      </div>

      {/* TEXT */}
      <div className="flex flex-col gap-4 py-8 btop bbottom">
        <h1 className="text-4xl font-bold tracking-wide">
          LUMiNOZ
        </h1> 
        <p className="px-2 font-mono">
          LUMiNOZ is an Indonesian Doujin Circle that releases wide range various genre and focus on rhythm game.
        </p>
        <SocialButton />
      </div>
    </section>
  );
}
