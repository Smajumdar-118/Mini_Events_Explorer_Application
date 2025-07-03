import Link from 'next/link';
import { Event } from '../data/events';

export default function EventCard({ event }: { event: Event }) {
  return (
    <Link href={`/events/${event.id}`} className="block">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 h-full">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          <p className="text-gray-600 mb-1">{event.date}</p>
          <p className="text-gray-600 mb-2">{event.location}</p>
          <p className="text-gray-700">{event.description}</p>
        </div>
      </article>
    </Link>
  );
}