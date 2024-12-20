import { FunctionComponent } from "react";
import NavItem from "./utils/NavItem";

interface Props {
  className?: string;
  listClassName?: string;
  itemClassName?: string;
  buttonClassName?: string;
  closeMenu?: () => void;
  mobile?: boolean;
}

const navItems = [
  { title: "Home", path: "#home" },
  { title: "Story", path: "#story" },
  { title: "Awards", path: "#awards" },
  { title: "Trailer", path: "#trailer" },
];

const Navigation: FunctionComponent<Props> = ({
                                                className,
                                                listClassName,
                                                closeMenu = () => {},
                                                itemClassName,
                                                buttonClassName,
                                              }) => {
  return (
      <nav aria-label="main navigation" className={className}>
        <ul className={listClassName}>
          {navItems.map(({ title, path }) => (
              <NavItem
                  key={title}
                  title={title}
                  path={path}
                  closeMenu={closeMenu}
                  className={itemClassName}
              />
          ))}
        </ul>
        <a
            href="https://store.steampowered.com/app/2149630/1_Trait_Escape/"
            aria-label="Buy Now"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary cursor-pointer px-12 ${buttonClassName}`}
            onClick={() => {
              closeMenu();
            }}
        >
          BUY NOW
        </a>
      </nav>
  );
};

export default Navigation;
