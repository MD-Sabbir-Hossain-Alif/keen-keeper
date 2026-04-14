import Image from "next/image";
import React from "react";
import LogoFooter from "../assets/logo-xl.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] pt-20 pb-7.5 w-full text-white">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col justify-center items-center text-center">
                    <Image
                        src={LogoFooter}
                        alt="keen keeper footer logo"
                        width="412"
                        height="auto"
                    ></Image>
                    <p className="opacity-80 mt-4">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>
                    <div className="text-2xl mt-6">
                        <h4>Social Links</h4>
                        <div className="flex gap-4 mt-4">
                            <Image
                                src={Instagram}
                                alt="keen keeper footer logo"
                                width="40"
                                height="auto"
                            ></Image>
                            <Image
                                src={Facebook}
                                alt="keen keeper footer logo"
                                width="40"
                                height="auto"
                            ></Image>
                            <Image
                                src={Twitter}
                                alt="keen keeper footer logo"
                                width="40"
                                height="auto"
                            ></Image>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center pt-7.5 border-t border-t-[#1A8862] mt-10 ">
                    <p className="opacity-50">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="opacity-50 flex justify-between items-center gap-8">
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
