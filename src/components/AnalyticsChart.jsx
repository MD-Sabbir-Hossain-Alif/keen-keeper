"use client";

import { useMyContext } from "@/context/MyProvider";
import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const AnalyticsChart = ({ isAnimationActive = true }) => {
    const { interactions } = useMyContext();

    const totalText = interactions.filter(
        (interaction) => interaction.action === "Text",
    );
    const totalCall = interactions.filter(
        (interaction) => interaction.action === "Call",
    );
    const totalVideo = interactions.filter(
        (interaction) => interaction.action === "Video",
    );
    // console.log(TotalText);
    const data = [
        { name: "Call", value: totalCall.length, fill: "#244d3f" },
        { name: "Text", value: totalText.length, fill: "#7f37f5" },
        { name: "Video", value: totalVideo.length, fill: "#37a163" },
    ];

    return (
        <div className="bg-white border border-white shadow-sm rounded-lg sm:p-4 md:p-6 lg:p-8">
            {interactions.length ? (
                <>
                    <h1 className="text-xl font-medium text-[#244D3F] mb-6">
                        By Interaction Type
                    </h1>
                    <div className="w-full min-w-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                            className="focus:border-none focus:active-none active:ring-0 h-auto w-full"
                        >
                            <PieChart>
                                <Pie
                                    data={data}
                                    dataKey="value"
                                    innerRadius="70%"
                                    outerRadius="90%"
                                    paddingAngle={5}
                                    cornerRadius={10}
                                    isAnimationActive={isAnimationActive}
                                />
                                <Legend />
                                <Tooltip className="rounded-full" />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </>
            ) : (
                <div className="p-2 py-4 sm:py-none sm:p-8 md:p-14 lg:p-22 text-center space-y-4">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-[#244D3F]">
                        Stats Not Available!
                    </h2>
                    <p className="text-[#64748B] text-base md:text-xl lg:text-2xl">
                        Interact with someone to see the stats
                    </p>
                </div>
            )}
        </div>
    );
};

export default AnalyticsChart;
