import { Card, Image, CardBody} from "@nextui-org/react";

const CurrentJobCard = () => {
  return (
    <Card className="w-full basis-2/3">
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt="Acme Creators"
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src="/appscamelot-logo.png"
        />

        <div className="px-4 py-5">
          <h3 className="text-large font-medium">Software Development Engineer</h3>
          <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
            <p>
                Currently working at Apps Camelot, a leading company in the tech industry. 
                I am responsible for developing and maintaining the company's software products,
                ensuring that they meet the highest quality standards. By working closely with the
                product and design teams, I am able to deliver the best possible user experience.
            </p>
            <p>I am very happy and proud of myself, as I am building the path I always dreamed of, having the opportunity to show what I am capable of!</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default CurrentJobCard;