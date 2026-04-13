"use client";

import Link from "next/link";

const GlobalError = ({ error, reset }) => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-medium">
                404 - Page Not Found
            </h2>
            <Link href="/" className="btn btn-error">
                Go Home
            </Link>
        </div>
    );
};

export default GlobalError;
