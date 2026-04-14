import Image from "next/image";
import Link from "next/link";
import React from "react";

const FriendsCard = ({ card }) => {
    // console.log(card);
    const { id, name, picture, days_since_contact, status, tags } = card;
    return (
        <Link href={`/${id}`} className="card bg-white shadow-sm p-6">
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
                <h2 className="text-xl text-[#1F2937] font-semibold">{name}</h2>
                <p className="text-[#64748B]">{days_since_contact}d ago</p>
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
                <div className="card-actions justify-center">
                    <div
                        className={`badge border-none rounded-full text-white font-medium ${status === "Overdue" ? "badge-error bg-red-500" : status === "Almost Due" ? "badge-warning bg-yellow-500" : status === "On-Track" ? "badge-success bg-green-900" : ""}`}
                    >
                        {status}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default FriendsCard;
