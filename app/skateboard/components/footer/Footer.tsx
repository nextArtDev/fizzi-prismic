import Image from "next/image";
import { Logo } from "../shared/Logo";
import { Bounded } from "../shared/Bounded";
import Link from "next/link";
import { FooterPhysics } from "./FooterPhysics";
import { settings } from "../../constants";

 

export async function Footer() {
  // const client = createClient();
  // const settings = await client.getSingle("settings");

  // const boardTextureURLs = settings.footer_skateboards
  //   .map((item) => asImageSrc(item.skateboard, { h: 600 }))
  //   .filter((url): url is string => Boolean(url));

  return (
    <footer className="bg-texture bg-zinc-900 text-white overflow-hidden">
      <div className="relative w-full h-[75vh] ~p-10/16 md:aspect-auto">
        <Image
          // field={settings.data.footer_image}
          src={settings.footer_image}
          alt=""
          fill
          className="object-cover"
          // width={1200}
        />
        {/* <FooterPhysics
          boardTextureURLs={boardTextureURLs}
          className="absolute inset-0 overflow-hidden"
        /> */}
        <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" />
      </div>
      <Bounded  >
        <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
          {settings.navigation.map((item) => (
            <li key={item.link } className="hover:underline">
              <Link href={item.link} >
              {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Bounded>
      {/* List of links */}
    </footer>
  );
}
