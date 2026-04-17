import { MyProvider } from "@/context/MyProvider";

MyProvider;
const Providers = ({ children }) => {
    return <MyProvider>{children}</MyProvider>;
};

export default Providers;
