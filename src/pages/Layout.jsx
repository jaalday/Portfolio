import { Outlet } from "react-router-dom"

import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


const primaryNav = [
    {title: 'about', url: "/about"},
    {title: 'contact', url: "/contact"},
]

const Layout = () => {
    return (
        <>
        <Navigation navItems={primaryNav}/>
        <Outlet/>
        <Footer/>
        </>
    )
};

export default Layout;