import Interactions from "@/components/Interactions";

const TimelinePage = () => {
    return (
        <div className="max-w-6xl w-full mx-auto my-8 sm:my-12 md:my-16 lg:my-20 p-4">
            <div className="space-y-6">
                <h1 className="text-[1.75rem] sm:text-[2.63rem] md:text-5xl text-[#1F2937] font-bold">
                    Timeline
                </h1>
                {/* interactions  */}
                <Interactions />
            </div>
        </div>
    );
};

export default TimelinePage;
