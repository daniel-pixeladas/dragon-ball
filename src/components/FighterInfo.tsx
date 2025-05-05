import { FighterType } from "@/types/fighter";
import Image from "next/image";
import React from "react";
import "./fighter.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shadcn/components/ui/card";
import { Badge } from "@/shadcn/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shadcn/components/ui/table";

async function Fighter({ fighter }: { fighter: FighterType }) {
  return (
    <div className="grid grid-cols-12">
      <div
        key={fighter.id}
        className="col-span-3 flex flex-col items-center justify-center relative group w-full p-10"
      >
        {/* Aquí pondremos un efecto de este tipo https://stackoverflow.com/questions/51593513/create-rounded-fire-effect-on-mouseover */}
        {/* <div className="fire hidden group-hover:block"></div> */}
        <Image
          src="/assets/img/fire.gif"
          alt="Fuego"
          className="w-auto h-96 z-0 object-contain absolute top-0 bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-[1s] blur-[2px] group-hover:scale-110 group-hover:scale-y-150 group-hover:-translate-y-8"
          width={400}
          height={400}
        />
        <Image
          src={fighter.image}
          alt={fighter.name}
          className="w-auto h-96 object-contain z-1"
          width={200}
          height={100}
        />
      </div>
      <Card className="col-span-9">
        <CardHeader>
          <CardTitle>
            <h2 className="col-span-9 text-2xl backdrop-contrast-200 font-extrabold text-yellow-400">
              Hola, me llamo {fighter.name}
            </h2>
          </CardTitle>
          <CardDescription>{fighter.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <Badge>{fighter.gender}</Badge>
          <Table>
            <TableCaption>Características del luchador.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">KI</TableHead>
                <TableHead>Max KI</TableHead>
                <TableHead>Affiliation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow key={1}>
                <TableCell className="font-medium">{fighter.ki}</TableCell>
                <TableCell>{fighter.maxKi}</TableCell>
                <TableCell>{fighter.affiliation}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          {fighter.transformations.map((transformation) => (
            <div key={transformation.id}>
              <Image
                src={transformation.image}
                alt={transformation.name}
                className="h-35 w-auto object-contain"
                width={200}
                height={100}
              />
            </div>
          ))}
        </CardFooter>
      </Card>
    </div>
  );
}

export default Fighter;
