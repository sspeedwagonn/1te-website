import { FunctionComponent } from "react";
import * as FaIcons from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

interface Props {
    className?: string;
    itemClassName?: string;
}

const socialLinks = [
    { href: "https://bsky.app/profile/ahkatz5.bsky.social", label: "Bluesky", Icon: FaBluesky },
    { href: "https://www.youtube.com/@andrewkatz2273", label: "Youtube", Icon: FaIcons.FaYoutube },
    { href: "https://www.instagram.com/1traitdangerofficial", label: "Instagram", Icon: FaIcons.FaInstagram },
];

const Socials: FunctionComponent<Props> = ({ className, itemClassName }) => {
    return (
        <ul className={className}>
            {socialLinks.map(({ href, label, Icon }) => (
                <li key={label}>
                    <a href={href} target="_blank" aria-label={label} className={"action-text " + itemClassName}>
                        <Icon />
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default Socials;
