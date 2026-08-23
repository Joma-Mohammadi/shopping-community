import { Link } from "react-router-dom";

export default function ShopButton({ to, children, className = "" }) {
  return (
    <Link
      to={to}
      className={`mt-6 flex h-12 w-50.5 items-center justify-center rounded-full bg-[#08c52a] py-4 text-sm font-semibold
         text-white transition hover:bg-[#06ad25] sm:mt-8 sm:h-14 sm:w-50 sm:text-base ${className}`}
    >
      {children}
    </Link>
  );
}