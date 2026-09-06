export default function ProductTabs({ tabs, activeTab, onChange }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,180px),1fr))] gap-3 sm:gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={`min-h-12 rounded-full border px-4 py-3 text-sm font-medium transition sm:min-h-14 sm:px-5 sm:text-base ${activeTab === tab.id ? "border-[#075039] bg-[#f3f7f5] text-[#075039]" : "border-gray-100 text-gray-600 hover:border-gray-300"}`}
        >
          {tab.title}
        </button>
      ))}
    </div>
  );
}