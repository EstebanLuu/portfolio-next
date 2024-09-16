import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: '/' },
    { icon: <FaLinkedin />, path: '/' },
    { icon: <FaYoutube />, path: '/' },
    { icon: <FaTwitter />, path: '/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, ind) =>
                <Link key={ind} href={social.path} className={iconStyles} >
                    {social.icon}
                </Link>
            )}
        </div>
    )
}

export default Social