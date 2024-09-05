import { Card, CardHeader, CardBody, Button, Avatar, Tabs, Tab, Chip, Image, Divider } from "@nextui-org/react";
import JassoImage from "./JassoImage";

const JassoCard = (props) => {
  const { CardContent, SocialBar } = props

  return (
    <div class="flex w-full items-start justify-center p-4">
      <Card className="my-10">
        <CardHeader className="relative flex flex-col h-[200px] justify-end bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400">
          <JassoImage client:visible />
        </CardHeader>
        <CardBody>
          { CardContent }
          <p class="text-medium text-center text-default-400">Find me at</p>
			    <Divider className="my-4" />
          { SocialBar }
        </CardBody>
      </Card>
    </div>
  )
}

export default JassoCard