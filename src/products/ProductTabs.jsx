export default function ProductTabs({
  tabs,
  activeTab,
  onChange,
}) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5">

      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`
            h-12 rounded-full border text-sm font-medium transition
            sm:h-14 sm:text-base

            ${
              activeTab === tab.id
                ? "border-[#075039] bg-[#f3f7f5] text-[#075039]"
                : "border-gray-100 text-gray-600 hover:border-gray-300"
            }
          `}
        >
          {tab.title}
        </button>
      ))}

    </div>
  );
}