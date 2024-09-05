import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

const UniversityCard = (props) => {
    const { Icon } = props;

  return (
    <Card
      className="overflow-none relative basis-1/3 maxmd:basis-[50%] border-small border-foreground/10 bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-right-bottom"
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar
            className="border-small border-white/20 bg-transparent"
            icon={Icon}
          />

          <p className="text-large font-medium text-white">Degrees</p>
        </div>
      </CardHeader>
      <CardBody className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium text-white/80">UTL (Universidad técnologica de León)</p>
          <p className="text-small text-white/60">
            I have two university degrees, one in cross-platform software development and the other in software development and management. 
            I have always been passionate about technology, and I am proud to have been able to study and graduate in these two areas. 
            I am always looking to learn more and improve my skills, <span className="italic">never stop learning</span>.
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

export default UniversityCard;