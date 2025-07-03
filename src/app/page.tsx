'use client'
import { useState } from 'react';
import Head from 'next/head';
import EventCard from '../../components/EventCard';
import events from '../../data/events';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  
  // Get unique locations
  const locations = [...new Set(events.map(event => event.location))];
  
  // Filter events based on search term and location filter
  const filteredEvents = events.filter(event => {
    // Apply location filter
    const locationMatch = locationFilter 
      ? event.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;
    
    // Apply search term filter (title, location, category)
    const searchMatch = searchTerm 
      ? (
          event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (event.category && event.category.toLowerCase().includes(searchTerm.toLowerCase()))
      ): true;
    
    return locationMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Head>
        <title>Events Explorer | Find Local Events</title>
        <meta name="description" content="Discover upcoming events in your area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modern Header */}
      <header className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-3xl font-bold">Events Explorer</h1>
            <p className="text-purple-200 mt-1">Discover your next experience</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all">
              Sign In
            </button>
            <button className="px-4 py-2 rounded-lg bg-white text-purple-800 font-medium hover:bg-gray-100 transition-all">
              Create Event
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:30px_30px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Amazing Events</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Find and explore upcoming events in your area. From tech conferences to music festivals.
            </p>
            
            <form 
              className="bg-white rounded-xl p-1 flex flex-col sm:flex-row max-w-3xl mx-auto shadow-xl"
              onSubmit={(e) => {
                e.preventDefault();
                // Search is handled by state change
              }}
            >
              <div className="relative flex-1">
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
                  placeholder="Search events, locations, categories..." 
                  className="w-full py-3 pl-10 pr-4 text-gray-800 rounded-xl focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                className="mt-2 sm:mt-0 sm:ml-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
            <p className="text-gray-600 mt-2">
              {filteredEvents.length} events found
              {searchTerm && ` for "${searchTerm}"`}
              {locationFilter && ` in ${locationFilter}`}
            </p>
          </div>
          
          {/* Location Search Box */}
          <div className="mt-4 md:mt-0 w-full md:w-80">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                </svg>
              </div>
              <input 
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="Filter by location..."
                className="w-full py-3 pl-10 pr-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 shadow-sm transition-all text-gray-800 bg-white"
                aria-label="Filter events by location"
              />
            </div>
          </div>
        </div>

        {/* Location Quick Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setLocationFilter('')}
            className={`px-4 py-2 text-sm rounded-full transition-colors ${
              locationFilter === '' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Locations
          </button>
          {locations.slice(0, 5).map(location => (
            <button
              key={location}
              onClick={() => setLocationFilter(location)}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                locationFilter === location 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">No events found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or location filter</p>
            <div className="mt-4 space-x-2">
              <button 
                onClick={() => setSearchTerm('')}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Clear Search
              </button>
              <button 
                onClick={() => setLocationFilter('')}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Location
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}

        {/* Popular Categories Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Categories</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Music', 'Food', 'Art', 'Sports', 'Business', 'Education', 'Health'].map(category => (
              <div 
                key={category}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer group"
                onClick={() => setSearchTerm(category)}
              >
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <div className="bg-indigo-500 w-8 h-8 rounded-full"></div>
                </div>
                <h4 className="font-semibold text-gray-800">{category}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  {events.filter(e => e.category === category).length} events
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-3xl font-bold mb-4">Never miss an event</h3>
          <p className="text-indigo-100 mb-8">
            Subscribe to our newsletter and get the latest events delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 text-gray-800 rounded-lg focus:outline-none"
            />
            <button className="bg-white text-indigo-800 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4">Events Explorer</h4>
              <p className="mb-4">Discover and explore amazing events in your area.</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map(social => (
                  <div key={social} className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-5 h-5" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Explore</h5>
              <ul className="space-y-2">
                {['All Events', 'Popular Events', 'Online Events', 'Nearby', 'Categories'].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Company</h5>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Contact', 'Blog', 'Help Center'].map(item => (
                  <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-white text-lg font-semibold mb-4">Contact</h5>
              <address className="not-italic">
                <p className="mb-2">HSR layout</p>
                <p className="mb-2">Bengaluru, Karnataka</p>
                <p className="mb-2">hello@eventsexplorer.com</p>
                <p className="mb-2">+91 7600000062</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center">
            <p>© {new Date().getFullYear()} Events Explorer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}