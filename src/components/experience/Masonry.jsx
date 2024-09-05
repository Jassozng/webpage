import React from 'react';
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

const items = [
  {
    title: "Hooters Mexico web",
    subtitle: "",
    // icon: "https://nextui.org/images/breathing-app-icon.jpeg",
    iconAlt: "Koaula Icon",
    label: "Built with: Apps Camelot",
    sublabel: "Animated webpage for the Hooters restaurant chain in Mexico.",
    buttonLabel: "Check it out",
    buttonHref: "https://www.hooters.com.mx/",
    imageUrl: "/hooters-preview.png"
  },
  {
    title: "Koaula Marketplace",
    subtitle: "",
    icon: null,
    iconAlt: "",
    label: "Built with: Apps Camelot",
    sublabel: "KOAULA Marketplace web application for MOOC courses for the Virtual University of the State of Guanajuato (UVEG)",
    buttonLabel: "Take a look",
    buttonHref: "#",
    imageUrl: "/koaula-preview.png"
  }
];

const ProjectCard = ({ item }) => {
  return (
    <Card isFooterBlurred className="w-full h-[400px] lg:h-[500px] xl:h-[600px] col-span-full md:col-span-6 lg:col-span-4">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{item.label}</p>
        <h4 className="text-white/90 font-medium text-xl">{item.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt={item.iconAlt}
        className="z-0 w-full h-full object-cover"
        src={item.imageUrl}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          {item.icon && (
            <Image
              alt={item.iconAlt}
              className="rounded-full w-10 h-11 bg-black"
              src={item.icon}
            />
          )}
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

const ProjectCardTwo = ({ item }) => {
  return (
    <Card isFooterBlurred className="w-full h-[300px] lg:h-[400px] xl:h-[500px] col-span-full md:col-span-6 lg:col-span-4">
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/60 uppercase font-bold">{item.label}</p>
        <h4 className="text-black font-medium text-2xl">{item.title}</h4>
      </CardHeader>
      <Image
        removeWrapper
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={item.imageUrl}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">{item.subtitle}</p>
          <p className="text-black text-tiny">{item.sublabel}</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm" href={item.buttonHref}>
          {item.buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  );
};

const Masonry = () => (
  <div className="grid grid-cols-12 gap-4 px-4" style={{ width: '90%', margin: '0 auto' }}>
    {items.map((item, index) => {
      const className = index % 2 === 0 ? "lg:col-span-8 xl:col-span-6" : "lg:col-span-4 xl:col-span-6";
      return index % 2 === 0 ? (
        <div key={index} className={`col-span-12 md:col-span-6 ${className}`}>
          <ProjectCard item={item} />
        </div>
      ) : (
        <div key={index} className={`col-span-12 md:col-span-6 ${className}`}>
          <ProjectCardTwo item={item} />
        </div>
      );
    })}
  </div>
);

export default Masonry;
