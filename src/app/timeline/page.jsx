const TimelinePage = () => {
    return (
        <div className="max-w-6xl w-full mx-auto h-screen my-20">
            <div className="space-y-6">
                <h1 className="text-5xl text-[#1F2937] font-bold">Timeline</h1>
                <select
                    defaultValue="Filter timeline"
                    className="select select-ghost bg-white border border-[#E9E9E9]"
                >
                    <option disabled={true} className="hidden">
                        Filter timeline
                    </option>
                    <option>Inter</option>
                    <option>Poppins</option>
                    <option>Raleway</option>
                </select>
            </div>
        </div>
    );
};

export default TimelinePage;
