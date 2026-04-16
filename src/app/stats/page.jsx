import AnalyticsChart from "@/components/AnalyticsChart";

const StatsPage = () => {
    return (
        <div className="max-w-6xl w-full mx-auto my-20">
            <h1 className="text-5xl text-[#1F2937] font-bold mb-6">
                Friendship Analytics
            </h1>
            <AnalyticsChart />
        </div>
    );
};

export default StatsPage;
