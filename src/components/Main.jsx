import React, { Suspense } from "react";
import { FaPlus } from "react-icons/fa";
import FriendsCard from "./FriendsCard";
import SummaryCards from "./SummaryCards";

const Main = async () => {
    const res = await fetch(
        "https://keen-keeper-iota-nine.vercel.app/friends-data.json",
        {
            cache: "no-cache",
        },
    );
    const data = await res.json();
    // console.log(data);
    return (
        <main className="max-w-6xl w-full mx-auto">
            {/* banner section  */}
            <section>
                {/* hero section  */}
                <div className="flex flex-col justify-center items-center mt-20">
                    <h1 className="text-4xl sm:text-[2.63rem] md:text-5xl text-[#1F2937] font-bold mb-4 text-center">
                        Friends to keep close in your life
                    </h1>
                    <p className="text-[#64748B] max-w-145 text-center text-sm md:text-base">
                        Your personal shelf of meaningful connections. Browse,
                        tend, and nurture the relationships that matter most.
                    </p>
                    <button className="btn bg-[#244D3F] text-white mt-8">
                        <FaPlus />
                        Add a Friend
                    </button>
                </div>
            </section>
            <Suspense
                fallback={
                    <div className="flex justify-center items-center h-screen w-full">
                        <span className="loading loading-ring loading-xl max-w-20 w-full "></span>
                    </div>
                }
            >
                {/* summary cards */}
                <SummaryCards data={data} />
                <hr className="mb-10 border-[#E9E9E9]" />
                {/* friends card section */}
                <section>
                    <h3 className="text-2xl text-[#1F2937] font-semibold mb-4">
                        Your Friend
                    </h3>
                    <div className="grid grid-cols-4 gap-6 mb-20">
                        {data.map((card) => (
                            <FriendsCard key={card.id} card={card} />
                        ))}
                    </div>
                </section>
            </Suspense>
        </main>
    );
};

export default Main;
