import { Image } from "@nextui-org/react"

const JassoImage = () => {
  return (
    <Image
        isBlurred
        width={200}
        height={200}
        src="/jasso.webp"
        alt="NextUI Album Cover"
        className="object-cover h-1/4"
        classNames={{
            wrapper: "translate-y-14",
            base: "translate-y-14"
        }}
        radius="full"
        isZoomed
    />
  )
}

export default JassoImage