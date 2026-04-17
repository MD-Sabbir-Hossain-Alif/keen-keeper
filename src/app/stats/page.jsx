import AnalyticsChart from "@/components/AnalyticsChart";

export const metadata = {
    title: "Stats",
    description: "Stats Page",
};

const StatsPage = () => {
    return (
        <div className="max-w-6xl w-full mx-auto my-8 sm:my-12 md:my-16 lg:my-20 p-4">
            <h1 className="text-[1.75rem] sm:text-[2.63rem] md:text-5xl text-[#1F2937] font-bold mb-2 sm:mb-4 md:mb-6">
                Friendship Analytics
            </h1>
            <AnalyticsChart />
        </div>
    );
};

export default StatsPage;
