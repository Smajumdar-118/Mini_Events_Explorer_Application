export default function EventFilter({ 
  locations, 
  onFilterChange 
}: {
  locations: string[];
  onFilterChange: (location: string) => void;
}) {
  return (
    <select 
      onChange={(e) => onFilterChange(e.target.value)}
      className="w-full p-2 border rounded-md md:w-64"
      aria-label="Filter events by location"
    >
      <option value="">All Locations</option>
      {locations.map(location => (
        <option key={location} value={location}>{location}</option>
      ))}
    </select>
  );
}