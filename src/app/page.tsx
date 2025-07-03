'use client'
import { useState } from 'react';
import Head from 'next/head';
import EventCard from '../../components/EventCard';
import EventFilter from '../../components/EventFilter';
import events  from '../../data/events';

export default function Home() {
  const [filter, setFilter] = useState('');
  
  const locations = [...new Set(events.map(event => event.location))];
  const filteredEvents = filter 
    ? events.filter(event => event.location === filter)
    : events;

  return (
    <div>
      <Head>
        <title>Events Explorer | Find Local Events</title>
        <meta name="description" content="Discover upcoming events in your area" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Upcoming Events</h1>
        
        <div className="mb-6">
          <EventFilter 
            locations={locations} 
            onFilterChange={setFilter} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </main>
    </div>
  );
}