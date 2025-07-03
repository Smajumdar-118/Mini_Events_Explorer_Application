interface EventFilterProps {
  locations: string[];
  onFilterChange: (location: string) => void;
}

export default function EventFilter({ 
  locations, 
  onFilterChange 
}: EventFilterProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className="h-5 w-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
        <input
          type="text"
          onChange={(e) => onFilterChange(e.target.value)}
          placeholder="Search by location..."
          className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm transition-all"
          aria-label="Search events by location"
        />
      </div>
      
      <div className="flex flex-wrap gap-2 mt-3">
        <button
          onClick={() => onFilterChange('')}
          className="px-3 py-1.5 text-sm bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        >
          All Locations
        </button>
        {locations.slice(0, 5).map(location => (
          <button
            key={location}
            onClick={() => onFilterChange(location)}
            className="px-3 py-1.5 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
}