"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
    const pathname = usePathname();

    return (
        <li>
            <Link
                href={link.path}
                className={`font-medium flex items-center gap-1 h-11 rounded px-4 text-base ${pathname === link.path ? "active text-white bg-[#244D3F]" : "text-[#64748B] bg-transparent"}`}
            >
                <span className="text-xl">{link.icon}</span>
                {link.name}
            </Link>
        </li>
    );
};

export default NavLink;
