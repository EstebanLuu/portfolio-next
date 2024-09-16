'use client'

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { CiMenuFries } from 'react-icons/ci'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-accent text-[32px] " />
            </SheetTrigger>
            <SheetContent className='flex flex-col'>
                {/* LOGO */}
                <div className=''>Menu</div>
                {/* CONTENT */}

                <nav className="flex flex-col justify-center items-center gap-8 mt-10">
                    {
                        links.map((link, ind) =>
                            <Link key={ind} href={link.path}
                                className={` ${pathname == link.path && 'text-accent border-accent border-b-2'}
                                text-xl capitalize hover:text-accent transition-all`}
                            >
                                {link.name}
                            </Link>
                        )
                    }
                </nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav