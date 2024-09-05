import React from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const ProjectCard = ({ item }) => {
  return (
    <Card isFooterBlurred className="w-full h-[400px] col-span-12 sm:col-span-7">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{item.label}</p>
        <h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={item.imageUrl}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <Image
            alt={item.iconAlt}
            className="rounded-full w-10 h-11 bg-black"
            src={item.icon}
          />
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{item.subtitle}</p>
            <p className="text-tiny text-white/60">{item.sublabel}</p>
          </div>
        </div>
        <Button radius="full" size="sm" href={item.buttonHref}>
          {item.buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;