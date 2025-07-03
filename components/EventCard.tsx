import Link from 'next/link';
import { Event } from '../data/events';

export default function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.id}`} className="block h-full">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl h-full flex flex-col border border-gray-200 hover:border-indigo-100">
        {/* Event Image Placeholder */}
        <div className="relative h-48 bg-gradient-to-r from-purple-500 to-indigo-600">
          {/* Only show category tag if category exists */}
          {event.category && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-indigo-700">
              {event.category}
            </div>
          )}
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="text-xl font-bold text-gray-800">{event.title}</h2>
              <div className="flex items-center text-gray-600 mt-1">
                <svg 
                  className="w-4 h-4 mr-1.5" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">{event.location}</span>
              </div>
            </div>
            <div className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2">
              {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 flex-1">{event.description}</p>
          
          <div className="flex justify-between items-center pt-3 border-t border-gray-100">
            <span className="text-sm font-medium text-indigo-600">View Details →</span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((_, i) => (
                <div 
                  key={i}
                  className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white"
                />
              ))}
              <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500">
                +12
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}