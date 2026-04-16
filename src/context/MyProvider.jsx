"use client";
import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [interactions, setInteractions] = useState([]);

    return (
        <MyContext.Provider
            value={{
                interactions,
                setInteractions,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export const useMyContext = () => useContext(MyContext);
