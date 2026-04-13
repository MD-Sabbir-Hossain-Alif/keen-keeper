"use client";

const error = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-medium">
                Something went wrong 😢
            </h2>
            <button className="btn btn-error">Try again</button>
        </div>
    );
};

export default error;
