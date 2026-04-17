import { MyProvider } from "@/context/MyProvider";

MyProvider;
const Providers = ({ chieldren }) => {
    return <MyProvider>{chieldren}</MyProvider>;
};

export default Providers;
