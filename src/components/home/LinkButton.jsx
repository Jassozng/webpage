import { Button, Link } from "@nextui-org/react"

const LinkButton = (props) => {
    const { url, name, icon } = props

  return (
    <Button 
        color="primary" 
        variant="light" 
        as={Link} 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        startContent={icon}
    >
        {name}
    </Button>
  )
}

export default LinkButton