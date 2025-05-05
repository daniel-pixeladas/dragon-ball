import { FighterType } from "@/types/fighter";
import Image from "next/image";
import React from "react";
import "./fighter.css";
import Link from "next/link";

function Fighter({ fighter }: { fighter: FighterType }) {
  return (
    <Link href={`/fighters/${fighter.id}`} key={fighter.id} prefetch={true} className="flex flex-col items-center justify-center relative group">
      <h2 className="text-2xl backdrop-contrast-200 font-extrabold text-yellow-400">{fighter.name}</h2>
      {/* Aquí pondremos un efecto de este tipo https://stackoverflow.com/questions/51593513/create-rounded-fire-effect-on-mouseover */}
      {/* <div className="fire hidden group-hover:block"></div> */}
      <Image src='/assets/img/fire.gif' alt='Fuego' className='h-64 max-w-[800px] !w-[800px] z-0 object-contain absolute top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-[1s] blur-[2px] group-hover:scale-110 group-hover:scale-y-150 group-hover:-translate-y-8' width={400} height={400} />
      <Image
        src={fighter.image}
        alt={fighter.name}
        className="w-48 h-48 object-contain z-1"
        width={200}
        height={100}
      />
    </Link>
  );
}

export default Fighter;
