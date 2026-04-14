import Image from "next/image";
import React from "react";
import Logo from "../assets/logo.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    const links = (
        <>
            <li>
                <Link href="/">
                    <RiHome2Line />
                    Home
                </Link>
            </li>
            <li>
                <Link href="/timeline">
                    <IoTimeOutline />
                    Timeline
                </Link>
            </li>
            <li>
                <Link href="/stats">
                    <ImStatsDots />
                    Stats
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white shadow-sm">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
        </div>
    );
};

export default Navbar;
