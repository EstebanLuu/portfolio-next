import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {

  const pathname = usePathname()

  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'services',
      path: '/services',
    },
    {
      name: 'resume',
      path: '/resume',
    },
    {
      name: 'work',
      path: '/work',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ]

  return (
    <nav className='flex gap-8'>
      {
        links.map((link, ind) =>
          <Link key={ind} href={link.path} className={`${link.path == pathname && 'text-accent border-b-2 border-accent'} font-medium capitalize hover:text-accent transition-all`}>{link.name}</Link>
        )
      }
    </nav>
  )
}

export default Nav