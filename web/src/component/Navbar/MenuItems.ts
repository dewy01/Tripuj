export type MenuProps = {
    title: string,
    url: string,
    cName: string
}

export const MenuItems: MenuProps[] = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
    },
    {
        title: "About",
        url: "/about",
        cName: "nav-links",
    },
    {
        title: "Service",
        url: "/service",
        cName: "nav-links",
    },
    {
        title: "Contact",
        url: "/contact",
        cName: "nav-links",
    },
    {
        title: "SignUp",
        url: "/signup",
        cName: "nav-links-mobile",
    }
]
