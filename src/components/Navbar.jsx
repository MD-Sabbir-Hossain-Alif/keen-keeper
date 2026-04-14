"use client";

import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const isActive = usePathname();
    // console.log(isActive);
    const links = (
        <>
            <li>
                <Link
                    className={`font-semibold focus:bg-[#244D3F] focus:text-white ${isActive === "/" ? "bg-[#244D3F] text-white" : ""}`}
                    href="/"
                >
                    <RiHome2Line />
                    Home
                </Link>
            </li>
            <li>
                <Link
                    className={`font-semibold focus:bg-[#244D3F] focus:text-white ${isActive === "/timeline" ? "bg-[#244D3F] text-white" : ""}`}
                    href="/timeline"
                >
                    <IoTimeOutline />
                    Timeline
                </Link>
            </li>
            <li>
                <Link
                    className={`font-semibold focus:bg-[#244D3F] focus:text-white ${isActive === "/stats" ? "bg-[#244D3F] text-white" : ""}`}
                    href="/stats"
                >
                    <ImStatsDots />
                    Stats
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm md:px-10 lg:px-20 py-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost sm:hidden"
                    >
                        <GiHamburgerMenu className="text-xl sm:text-2xl" />
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
                    >
                        {links}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <Image
                    src={Logo}
                    alt="keen keeper logo"
                    width={141}
                    height="auto"
                    loading="eager"
                ></Image>
            </div>
            <div className="navbar-end hidden sm:flex">
                <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
            </div>
        </div>
    );
};

export default Navbar;
