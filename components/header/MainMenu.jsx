"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MainMenu = ({ variant = "desktop", onNavigate } = {}) => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
   
  ];

  return (
    <nav
      className={`navbar ${
        variant === "mobile" ? "navbar-mobile" : "navbar-desktop"
      }`}
      aria-label="Primary"
    >
      <ul className={`navbar-nav ${variant === "mobile" ? "flex-column" : ""}`}>
        {links.map((item) => (
          <li key={item.href} className="nav-item">
            <Link
              href={item.href}
              className={`nav-link ${isActive(item.href) ? "active-menu" : ""}`}
              onClick={() => onNavigate?.(item.href)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
