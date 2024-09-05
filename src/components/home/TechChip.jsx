import { Chip } from "@nextui-org/react"

const TechChip = (props) => {
    const { icon, variant = "shadow", color } = props
  return (
    <Chip
        startContent={icon}      
        variant={variant}
        size="lg"
        className={`flex justify-center items-center`}
        style={{ backgroundColor: color }}
        classNames={{
            content: "hidden"
        }}
    />
  )
}

export default TechChip