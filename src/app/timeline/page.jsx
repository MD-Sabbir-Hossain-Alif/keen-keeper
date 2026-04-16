import Interactions from "@/components/Interactions";

const TimelinePage = () => {
    return (
        <div className="max-w-6xl w-full mx-auto my-20">
            <div className="space-y-6">
                <h1 className="text-5xl text-[#1F2937] font-bold">Timeline</h1>
                {/* interactions  */}
                <Interactions />
            </div>
        </div>
    );
};

export default TimelinePage;
