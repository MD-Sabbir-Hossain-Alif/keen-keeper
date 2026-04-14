import Image from "next/image";
import React from "react";
import { BiMessageDots } from "react-icons/bi";
import { LuHistory } from "react-icons/lu";
import { PiPhoneCall, PiVideoCameraBold } from "react-icons/pi";

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(parseInt(id));
    const res = await fetch("http://localhost:3000/friends-data.json");
    const data = await res.json();
    // console.log(data);

    const targetedData = data.find((item) => item.id === parseInt(id));
    // console.log(targetedData);

    const {
        name,
        picture,
        email,
        days_since_contact,
        status,
        tags,
        bio,
        goal,
        next_due_date,
    } = targetedData;

    return (
        <section className="max-w-6xl w-full mx-auto grid grid-cols-3 gap-6 my-20">
            {/* first-item profile */}
            <div className="col-span-1">
                <div className="card bg-white shadow-sm p-6 ">
                    <figure>
                        <div className="avatar">
                            <div className="w-20 rounded-full">
                                <Image
                                    src={picture}
                                    alt={name}
                                    width="80"
                                    height="80"
                                    className="object-top"
                                />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body text-center p-0 mt-3 gap-2">
                        <h2 className="text-xl text-[#1F2937] font-semibold">
                            {name}
                        </h2>
                        <div className="card-actions justify-center">
                            <div
                                className={`badge border-none rounded-full text-white font-medium ${status === "Overdue" ? "badge-error bg-red-500" : status === "Almost Due" ? "badge-warning bg-yellow-500" : status === "On-Track" ? "badge-success bg-green-900" : ""}`}
                            >
                                {status}
                            </div>
                        </div>
                        <div className="card-actions justify-center">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="badge font-medium rounded-full px-2 py-3 bg-[#CBFADB] text-[#244D3F] uppercase"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <p className="text-[#64748B] font-medium text-lg">
                            <em>{`"${bio}"`}</em>
                        </p>
                        <p className="text-[#64748B]">Preferred: {email}</p>
                    </div>
                </div>
            </div>
            {/* second item  */}
            <div className="flex flex-col col-span-2 gap-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                    <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4 bg-white border border-white shadow rounded-lg">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            {days_since_contact}
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Days Since Contact
                        </p>
                    </div>

                    <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4 bg-white border border-white shadow rounded-lg">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            {goal}
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Goal (Days)
                        </p>
                    </div>

                    <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4 bg-white border border-white shadow rounded-lg">
                        <h2 className="text-[#244D3F] text-2xl font-semibold sm:text-[2rem]">
                            {next_due_date}
                        </h2>
                        <p className="text-[#64748B] text-base sm:text-lg">
                            Next Due
                        </p>
                    </div>
                </div>
                {/* relationships */}
                <div className="py-4 sm:py-6 md:py-8 px-2 sm:px-3 md:px-4 bg-white border border-white shadow rounded-lg">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[#244D3F] text-lg font-medium sm:text-xl">
                            Relationship Goal
                        </h2>
                        <button className="btn">Edit</button>
                    </div>
                    <p className="text-[#64748B] text-base sm:text-lg">
                        Connect every{" "}
                        <span className="text-[#1F2937] font-bold">
                            {goal} days
                        </span>
                    </p>
                </div>
                {/* quick check in */}
                <div className=" bg-white shadow border border-white p-6 rounded-lg">
                    <h4 className="text-[#244D3F] text-xl font-medium mb-4">
                        Quick Check-In
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                        <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg">
                            <h2 className="text-2xl font-black sm:text-[2rem] flex justify-center items-center mb-2">
                                <PiPhoneCall />
                            </h2>
                            <p className="text-base sm:text-lg">Call</p>
                        </div>

                        <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg">
                            <h2 className="text-2xl font-semibold sm:text-[2rem] flex justify-center items-center mb-2">
                                <BiMessageDots />
                            </h2>
                            <p className="text-base sm:text-lg">Text</p>
                        </div>

                        <div className="py-2 sm:py-3 md:py-4 px-2 sm:px-3 md:px-4 bg-[#F8FAFC] text-[#1F2937] border border-[#E9E9E9] rounded-lg">
                            <h2 className="text-2xl font-semibold sm:text-[2rem] flex justify-center items-center mb-2">
                                <PiVideoCameraBold />
                            </h2>
                            <p className="text-base sm:text-lg">Video</p>
                        </div>
                    </div>
                </div>
                {/* recent interaction */}
                <div className="p-6 space-y-4 bg-white border border-white shadow rounded-lg">
                    <div className="flex justify-between item-center">
                        <h4 className="text-xl text-[#244D3F] font-medium">
                            Recent Interactions
                        </h4>
                        <button className="btn text-[#1F2937] flex gap-1 font-medium">
                            <LuHistory />
                            <span>Full History</span>
                        </button>
                    </div>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                        <li className="list-row items-center">
                            <div>
                                {/* <Image
                                    className="size-8"
                                    src={CallIcon}
                                    alt="call button icon"
                                    width="32"
                                    height="32"
                                /> */}
                                <PiPhoneCall className="size-8" />
                            </div>
                            <div>
                                <h6>Call</h6>
                                <p className="text-[#64748B]">
                                    Asked for career advice
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-[#64748B]">
                                    Apr 28, 2026
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default DetailsPage;
