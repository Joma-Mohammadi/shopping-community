import { NavLink } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function DropdownMenu({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-1 text-base text-gray-700 transition hover:text-green-700"
      >
        {item.title}

        <FaChevronDown
          size={13}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 min-w-52.5 pt-3">
          <div className="rounded-lg border border-gray-100 bg-white py-2 shadow-xl">
            {item.items?.map((option) => (
              <NavLink
                key={option.id}
                to={option.path}
                className="block px-5 py-2.5 text-base text-gray-700 transition hover:bg-gray-50 hover:text-green-700"
                onClick={() => setOpen(false)}
              >
                {option.title}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}