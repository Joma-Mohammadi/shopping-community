export default function Button({
  children,
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={`mt-6 flex h-11 w-40 items-center justify-center rounded-full bg-[#17AF26] hover:bg-[#06ad25] 
        text-sm font-semibold text-white transition  sm:mt-8 sm:h-14 sm:w-50 sm:text-base cursor-pointer ${className}`}>
      {children}
    </button>
  );
}