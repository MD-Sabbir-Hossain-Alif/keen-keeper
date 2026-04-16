"use client";

import React from "react";
import CallIcon from "../assets/call.png";
import Image from "next/image";
import { useMyContext } from "@/context/MyProvider";

const Interactions = () => {
    const { interactions, setInteractions } = useMyContext();
    console.log(interactions);

    return (
        <div className="space-y-4">
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

            <ul className="list bg-base-100 rounded-box shadow-md">
                <li className="list-row items-center">
                    <div>
                        <Image
                            className="size-8"
                            src={CallIcon}
                            alt="call button icon"
                            width="32"
                            height="32"
                        />
                        {/* <PiPhoneCall className="size-8" /> */}
                    </div>
                    <div>
                        <h6>Call</h6>
                        <p className="text-[#64748B]">
                            Asked for career advice
                        </p>
                    </div>
                    <div>
                        {new Date(interactions.createdAt).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            },
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Interactions;
