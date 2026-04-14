import React from "react";
import { FaPlus } from "react-icons/fa";

const Main = () => {
    return (
        <section className="max-w-6xl w-full mx-auto">
            <div className="flex flex-col justify-center items-center mt-20">
                <h1 className="text-5xl text-[#1F2937] font-bold mb-4">
                    Friends to keep close in your life
                </h1>
                <p className="text-[#64748B] max-w-145 text-center">
                    Your personal shelf of meaningful connections. Browse, tend,
                    and nurture the relationships that matter most.
                </p>
                <button className="btn bg-[#244D3F] text-white mt-8">
                    <FaPlus />
                    Add a Friend
                </button>
            </div>
        </section>
    );
};

export default Main;
