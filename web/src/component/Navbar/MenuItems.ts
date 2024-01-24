export type MenuProps = {
    title: string,
    url: string,
    cName: string
}

export const MenuItems: MenuProps[] = [
    {
        title: "Dom",
        url: "/",
        cName: "nav-links",
    },
    {
        title: "O nas",
        url: "/about",
        cName: "nav-links",
    },
    {
        title: "Usługi",
        url: "/service",
        cName: "nav-links",
    },
    {
        title: "Kontakt",
        url: "/contact",
        cName: "nav-links",
    },
    {
        title: "Zarejestuj",
        url: "/signup",
        cName: "nav-links-mobile",
    }
]
