import HTMLIcon from "../components/icons/Tech/HTML.astro"
import CSSIcon from "../components/icons/Tech/CSS.astro"
import JSIcon from "../components/icons/Tech/JavaScript.astro"
import ReactIcon from "../components/icons/React.astro"
import TailwindIcon from "../components/icons/Tech/Tailwind.astro"
import AWSIcon from "../components/icons/Tech/AWS.astro"
import GoogleCloudIcon from "../components/icons/Tech/GoogleCloud.astro"
import KotlinIcon from "../components/icons/Tech/Kotlin.astro"
import JetpackIcon from "../components/icons/Tech/JetPack.astro"
import NextJSIcon from "../components/icons/Tech/NextJS.astro"

export const WEBDEV_ICONS = [
    {
        name: "HTML",
        color: "#E44D26",
        Icon: HTMLIcon,
    },
    {
        name: "CSS",
        color: "#264DE4",
        Icon: CSSIcon,
    },
    {
        name: "JavaScript",
        color: "#F7DF1E",
        Icon: JSIcon,
    },
    {
        name: "React",
        color: "#61DAFB",
        Icon: ReactIcon,
    },
    {
        name: "Next.js",
        color: "#000000",
        Icon: NextJSIcon,
    },
    {
        name: "Tailwind CSS",
        color: "#06B6D4",
        Icon: TailwindIcon,
    }
]

export const CLOUDDEV_ICONS = [
    {
        name: "AWS",
        color: "#FF9900",
        Icon: AWSIcon,
    },
    {
        name: "Google Cloud Platform",
        color: "#4285F4",
        Icon: GoogleCloudIcon,
    }
]

export const MOBILEDEV_ICONS = [
    {
        name: "Kotlin",
        color: "#0095D5",
        Icon: KotlinIcon,
    },
    {
        name: "Jetpack Compose",
        color: "#6200EE",
        Icon: JetpackIcon,
    }
]

export const PROGRAMMING_LANG_ICONS = []