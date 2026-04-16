"use client";

import React from "react";
import CallIcon from "../assets/call.png";
import TextIcon from "../assets/text.png";
import VideoIcon from "../assets/video.png";
import Image from "next/image";
import { useMyContext } from "@/context/MyProvider";

const Interactions = () => {
    const { interactions } = useMyContext();
    console.log(interactions);

    return (
        <div className="space-y-6">
            <select
                defaultValue="Filter timeline"
                className="select select-ghost bg-white border border-[#E9E9E9]"
            >
                <option disabled={true} className="hidden">
                    Filter timeline
                </option>
                <option>On-Track</option>
                <option>Almost Due</option>
                <option>Overdue</option>
            </select>

            <ul className="list rounded-box gap-6">
                {interactions.map((interaction, index) => (
                    <li
                        key={index}
                        className="list-row items-center shadow-sm bg-white border border-[#E9E9E9]"
                    >
                        <div>
                            <Image
                                className="size-10"
                                src={
                                    interaction.action === "Call"
                                        ? CallIcon
                                        : interaction.action === "Text"
                                          ? TextIcon
                                          : interaction.action === "Video"
                                            ? VideoIcon
                                            : ""
                                }
                                alt="call button icon"
                                width="32"
                                height="32"
                            />
                            {/* <PiPhoneCall className="size-8" /> */}
                        </div>
                        <div>
                            <h6 className="text-xl font-medium text-[#244D3F]">
                                {interaction.action}{" "}
                                <span className="text-lg font-normal text-[#64748B]">
                                    with {interaction.name}
                                </span>
                            </h6>
                            <p className="text-[#64748B]">
                                {new Date(
                                    interaction.createdAt,
                                ).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </p>
                        </div>
                        <div>
                            <p className="btn bg-transparent rounded-3xl text-red-500 font-medium ">
                                Clear
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Interactions;
