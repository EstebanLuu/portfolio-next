'use client'

import Link from "next/link"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { Button } from "./ui/button"

const Header = () => {
    return (
        <header className="py-8 xl:py-5 text-white px-5 sm:px-0">
            <div className="container mx-auto flex justify-between items-center">
                {/* LOGO */}
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Nico <span className="text-accent">.</span>
                    </h1>
                </Link>


                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                </div>

                {/* MOBILE NAV */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    )
}

export default Header