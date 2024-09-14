import Link from "next/link"
import Nav from "./Nav"

const Header = () => {

    const data = [
        {
            name: 'contact',
            path: '',
        }
    ]
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* LOGO */}
                <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Nicolas <span className="text-accent">.</span>
                    </h1>
                </Link>


                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href='/contact'>
                        Hire me
                    </Link>
                </div>

                {/* MOBILE NAV */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header