import Image from "next/image";
import React from "react";
import LogoFooter from "../assets/logo-xl.png";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";

const Footer = () => {
    return (
        <footer className="bg-[#244D3F] pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-2 sm:pb-3.5 md:pb-5.5 lg:pb-7.5 w-full text-white">
            <div className="max-w-6xl mx-auto px-2 sm:px-6">
                <div className="flex flex-col justify-center items-center text-center">
                    <Image
                        src={LogoFooter}
                        alt="keen keeper footer logo"
                        width="412"
                        height="auto"
                        className="max-w-70 sm:max-w-90 md:max-w-103 w-full"
                    />
                    <p className="opacity-80 mt-4 max-w-md sm:max-w-lg">
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
                            />
                            <Image
                                src={Facebook}
                                alt="keen keeper footer logo"
                                width="40"
                                height="auto"
                            />
                            <Image
                                src={Twitter}
                                alt="keen keeper footer logo"
                                width="40"
                                height="auto"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7.5 border-t border-t-[#1A88628A] mt-5 md:mt-8 lg:mt-10 text-center sm:text-left">
                    <p className="opacity-50">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>
                    <div className="opacity-50 flex flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8">
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
