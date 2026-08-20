import { Link } from "react-router-dom";

export default function ShopButton({ to, children }) {
    return (
        <Link
            to={to}
            className=" mt-6 flex h-12 w-35.5 items-center justify-center  rounded-full bg-[#08c52a] text-sm
                font-semibold text-white transition hover:bg-[#06ad25] sm:mt-8 sm:h-12 sm:text-base">
            {children}
        </Link>
    );
}