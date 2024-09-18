import Link from 'next/link'
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa'

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/EstebanLuu' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/esteban-nicolás-luna--/' },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, ind) =>
                <a className={iconStyles} href={social.path} target="_blank" rel="noopener noreferrer">
                    {social.icon}
                </a>
            )}
        </div>
    )
}

export default Social