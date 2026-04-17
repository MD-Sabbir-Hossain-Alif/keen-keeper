"use client";

import React, { Suspense } from "react";
import CallIcon from "../assets/call.png";
import TextIcon from "../assets/text.png";
import VideoIcon from "../assets/video.png";
import Image from "next/image";
import { useMyContext } from "@/context/MyProvider";

const Interactions = () => {
    const { interactions } = useMyContext();
    // console.log(interactions);

    return (
        <Suspense
            fallback={
                interactions.length && (
                    <div className="bg-white border border-white text-center shadow-sm p-25">
                        <p className="text-[#64748B] text-2xl">
                            Data is Comming...
                        </p>
                    </div>
                )
            }
            className="space-y-6"
        >
            <select
                defaultValue="Filter timeline"
                className="select select-ghost bg-white border border-[#E9E9E9]"
            >
                <option disabled={true} className="hidden">
                    Filter timeline
                </option>
                <option>Call</option>
                <option>Text</option>
                <option>Video</option>
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
                            <p className="btn bg-transparent rounded-3xl text-[#64748B] hover:text-red-400 hover:border-red-400 font-medium ">
                                Clear
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
            {!interactions.length && (
                <div className="bg-white border border-white shadow-sm p-4 sm:p-12 md:p-20 lg:p-30 text-center space-y-4 rounded-lg">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#244D3F]">
                        Timeline Not Available!
                    </h2>
                    <p className="text-[#64748B] text-base md:text-xl lg:text-2xl">
                        Interact with someone to see the timeline
                    </p>
                </div>
            )}
        </Suspense>
    );
};

export default Interactions;
