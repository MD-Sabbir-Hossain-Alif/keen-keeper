"use client";

import { useMyContext } from "@/context/MyProvider";
import React from "react";

const SummaryCards = ({ data }) => {
    // console.log(data);
    const onTrack = data.filter((item) => item.status === "On-Track");
    // console.log(onTrack);
    const needAttention = data.filter((item) => item.status === "Overdue");
    // console.log(needAttention);
    const { interactions } = useMyContext();
    // console.log(interactions);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 text-center">
            <div className="p-4 sm:p-6 md-p-8 bg-white border border-white shadow">
                <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                    {data.length}
                </h2>
                <p className="text-[#64748B] text-base sm:text-lg">
                    Total Friends
                </p>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-white shadow">
                <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                    {onTrack.length}
                </h2>
                <p className="text-[#64748B] text-base sm:text-lg">On Track</p>
            </div>

            <div className="p-6 sm:p-8 bg-white border border-white shadow">
                <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                    {needAttention.length}
                </h2>
                <p className="text-[#64748B] text-base sm:text-lg">
                    Need Attention
                </p>
            </div>
            <div className="p-6 sm:p-8 bg-white border border-white shadow">
                <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                    {interactions.length}
                </h2>
                <p className="text-[#64748B] text-base sm:text-lg">
                    Interactions This Month
                </p>
            </div>
        </div>
    );
};

export default SummaryCards;
