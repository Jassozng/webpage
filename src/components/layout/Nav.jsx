import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
    Link,
    Button
} from "@nextui-org/react";
import useTheme from "../../hooks/useTheme";
import { useRef } from "react";

const Nav = (props) => {
    const { HomeIcon, RocketIcon, AboutIcon, currentPath } = props;
    const homeRef = useRef(null);
    const experienceRef = useRef(null);
    const aboutRef = useRef(null);
    const { theme, toggleTheme, ThemeSwitch } = useTheme();

    const handleRedirect = (e, ref) => {
        e.preventDefault();
        ref.current.click();
    }

    const menuItems = Object.freeze([
        {
            label: "Home",
            href: "/",
            ref: homeRef,
            icon: HomeIcon
        },
        {
            label: "Experience",
            href: "/experience",
            ref: experienceRef,
            icon: RocketIcon
        },
        {
            label: "About me",
            href: "/about",
            ref: aboutRef,
            icon: AboutIcon
        }
    ]);

    

  return (
    <Navbar
        classNames={{
            base: "py-4 backdrop-filter-none bg-transparent",
            wrapper: "px-0 w-full justify-center bg-transparent",
            item: "hidden md:flex",
        }}
        height="54px"
    >
        <NavbarContent
            className="gap-4 rounded-full border-small border-default-200/20 px-2 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
            justify="center"
        >
        {/* Toggle */}
        {/* <NavbarMenuToggle className="ml-2 text-default-400 md:hidden" /> */}

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
            <div className="rounded-full bg-foreground text-background">

            </div>
            {/* <span className="ml-2 font-medium md:hidden">Jasso Zuñiga</span> */}
            <div className="flex gap-4 w-full ml-2 font-medium md:hidden">
                {
                    menuItems.map((item, index) => {
                        const isActive = currentPath === item.href;
                        return (
                            <Button 
                                key={index}
                                radius="full" 
                                variant={ isActive ? "flat" : "light" } 
                                color="secondary"
                                name={`menu-navegation-${index}`}
                                startContent={item.icon} 
                                onClick={(e) => handleRedirect(e, item.ref)}
                                isIconOnly
                            />
                        )
                    })
                }
            </div>
        </NavbarBrand>

        {/* Items */}
        <NavbarItem className="hidden md:flex">
            <Link 
                className="text-default-500" 
                href="/" 
                size="sm" 
                onClick={(e) => handleRedirect(e, homeRef)}
                color={currentPath !== "/" ? "secondary" : "foreground"}
                underline={currentPath !== "/" ? "hover" : "always"}
            >
                Home
            </Link>
            <a href="/" className="hidden" ref={homeRef} />
        </NavbarItem>
        <NavbarItem>
            <Link 
                className="text-default-500" 
                href="/experience" 
                size="sm" 
                onClick={(e) => handleRedirect(e, experienceRef)}
                color={currentPath !== "/experience" ? "secondary" : "foreground"}
                underline={currentPath !== "/experience" ? "hover" : "always"}
            >
                Experience
            </Link>
            <a href="/experience" className="hidden" ref={experienceRef} />
        </NavbarItem>
        <NavbarItem>
            <Link 
                className="text-default-500" 
                href="/about" 
                size="sm" 
                onClick={(e) => handleRedirect(e, aboutRef)}
                color={currentPath !== "/about" ? "secondary" : "foreground"}
                underline={currentPath !== "/about" ? "hover" : "always"}
            >
                About me
            </Link>
            <a href="/about" className="hidden" ref={aboutRef} />
        </NavbarItem>
        <NavbarItem className="ml-2 !flex">
            { ThemeSwitch() }
        </NavbarItem>
        </NavbarContent>

        {/* Menu */}
        {/* <NavbarMenu
            className="top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] rounded-large border-small border-default-200/20 bg-background/60 py-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
            motionProps={{
                initial: {opacity: 0, y: -20},
                animate: {opacity: 1, y: 0},
                exit: {opacity: 0, y: -20},
                transition: {
                ease: "easeInOut",
                duration: 0.2,
                },
            }}
        >
        
            {menuItems.map((item, index) => (
                <NavbarMenuItem
                    key={index}
                    onClick={(e) => handleRedirect(e, item.ref)}
                >
                    {item.label}
                </NavbarMenuItem>
            ))}

        </NavbarMenu> */}
    </Navbar>
  )
}

export default Nav