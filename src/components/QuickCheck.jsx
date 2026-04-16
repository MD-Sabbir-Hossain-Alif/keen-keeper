"use client";

import { useMyContext } from "@/context/MyProvider";
import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { PiPhoneCall, PiVideoCameraBold } from "react-icons/pi";
import { toast } from "react-toastify";

const QuickCheck = ({ targetedData }) => {
    const { interactions, setInteractions } = useMyContext();

    const handleQuickCheckBtn = (InteractionType) => {
        const data = {
            id: targetedData.id,
            name: targetedData.name,
            action: InteractionType,
            status: targetedData.status,
            createdAt: new Date().toISOString(),
        };

        setInteractions([data, ...interactions]);
        toast.success(`${InteractionType} with ${targetedData.name}`);
    };

    // console.log("All Interactions:", interactions);

    return (
        <div className=" bg-white shadow border border-white p-6 rounded-lg">
            <h4 className="text-[#244D3F] text-xl font-medium mb-4">
                Quick Check-In
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                <div
                    onClick={() => handleQuickCheckBtn("Call")}
                    className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg cursor-pointer hover:bg-[#e5e5e5] transition-all"
                >
                    <h2 className="text-2xl font-black sm:text-[2rem] flex justify-center items-center mb-2">
                        <PiPhoneCall />
                    </h2>
                    <p className="text-base sm:text-lg">Call</p>
                </div>

                <div
                    onClick={() => handleQuickCheckBtn("Text")}
                    className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg cursor-pointer hover:bg-[#e5e5e5] transition-all"
                >
                    <h2 className="text-2xl font-semibold sm:text-[2rem] flex justify-center items-center mb-2">
                        <BiMessageDots />
                    </h2>
                    <p className="text-base sm:text-lg">Text</p>
                </div>

                <div
                    onClick={() => handleQuickCheckBtn("Video")}
                    className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg cursor-pointer hover:bg-[#e5e5e5] transition-all"
                >
                    <h2 className="text-2xl font-semibold sm:text-[2rem] flex justify-center items-center mb-2">
                        <PiVideoCameraBold />
                    </h2>
                    <p className="text-base sm:text-lg">Video</p>
                </div>
            </div>
        </div>
    );
};

export default QuickCheck;
