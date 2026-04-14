import React from "react";
import { FaPlus } from "react-icons/fa";
import FriendsCard from "./FriendsCard";

const Main = async () => {
    const res = await fetch("http://localhost:3000/friends-data.json");
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
                {/* summary cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-10 text-center">
                    <div className="p-4 sm:p-6 md-p-8 bg-white border border-white shadow">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            0
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Total Friends
                        </p>
                    </div>

                    <div className="p-6 sm:p-8 bg-white border border-white shadow">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            0
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            On Track
                        </p>
                    </div>

                    <div className="p-6 sm:p-8 bg-white border border-white shadow">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            0
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Need Attention
                        </p>
                    </div>
                    <div className="p-6 sm:p-8 bg-white border border-white shadow">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            0
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Interactions This Month
                        </p>
                    </div>
                </div>
            </section>
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
        </main>
    );
};

export default Main;
