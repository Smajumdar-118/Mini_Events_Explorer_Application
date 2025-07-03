export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  fullDescription: string;
  category: string;
}

const eventsData: Event[] = [
  {
    "id": "1",
    "title": "Tech Conference 2023",
    "date": "2025-10-15",
    "location": "San Francisco, CA",
    "description": "Annual tech conference featuring latest innovations",
    "fullDescription": "Three-day conference covering AI, blockchain, and cloud computing with keynote speakers from leading tech companies.",
    "category" : "Technology"
  },
  {
    "id": "2",
    "title": "Music Festival",
    "date": "2025-11-05",
    "location": "Austin, TX",
    "description": "Weekend music festival with various artists",
    "fullDescription": "Three-day outdoor music festival featuring over 50 artists across multiple stages. Food trucks and art installations available.",
    "category" : "Music"
  },
  {
    "id": "3",
    "title": "Next.js Meetup",
    "date": "2026-01-12",
    "location": "Bangalore",
    "description": "A meetup for developers interested in Next.js",
    "fullDescription": "Learn and share ideas about Next.js, performance optimizations, App Router vs Pages Router, and real-world projects.",
    "category" : "Technology"
  },
  {
    "id": "4",
    "title": "Design Conference",
    "date": "2025-09-22",
    "location": "New York, NY",
    "description": "Exploring the future of UX/UI design and digital experiences",
    "fullDescription": "Two-day conference for designers, developers, and product managers. Learn about the latest design trends, tools, and methodologies from industry experts.",
    "category": "Design"
  },
  {
    "id": "5",
    "title": "Data Science Summit",
    "date": "2026-03-10",
    "location": "Delhi",
    "description": "Summit for data professionals",
    "fullDescription": "Deep-dive sessions on machine learning, data engineering, and AI ethics with speakers from Google, Microsoft, and startups.",
    "category" : "Education"
  },
  {
    "id": "6",
    "title": "Web Dev Bootcamp",
    "date": "2026-04-20",
    "location": "Chennai",
    "description": "Hands-on web development bootcamp",
    "fullDescription": "One-week intensive bootcamp covering HTML, CSS, JavaScript, React, and deployment using Vercel and Netlify.",
    "category" : "Technology"
  },
  {
    "id": "7",
    "title": "Open Source Hackathon",
    "date": "2025-06-15",
    "location": "Hyderabad",
    "description": "Collaborate on open source projects",
    "fullDescription": "Contribute to GitHub projects, earn swag, and learn from maintainers of major open source libraries and frameworks.",
    "category" : "Technology"
  },
  {
    "id": "8",
    "title": "Cybersecurity Conference",
    "date": "2025-08-25",
    "location": "Pune",
    "description": "Conference on modern cybersecurity practices",
    "fullDescription": "Explore zero trust architecture, ethical hacking, and compliance with global experts and CISOs from top companies.",
    "category" : "Technology"
  },
  {
    "id": "9",
    "title": "DevOps India Expo",
    "date": "2025-09-10",
    "location": "Kolkata",
    "description": "Expo on CI/CD and cloud-native DevOps",
    "fullDescription": "Sessions and demos on Kubernetes, Docker, GitHub Actions, and multi-cloud deployments from top Indian tech teams.",
    "category" : "Technology"
  },
  {
    "id": "10",
    "title": "Food & Wine Expo",
    "date": "2025-10-28",
    "location": "San Francisco, CA",
    "description": "Gourmet tasting experience with world-class chefs",
    "fullDescription": "Experience the finest culinary creations from award-winning chefs. Taste exquisite wines, attend cooking demonstrations, and learn from master sommeliers.",
    "category": "Food"
  },
  {
     "id": "11",
    "title": "Startup Pitch Night",
    "date": "2025-09-30",
    "location": "Kolkata, India",
    "description": "Watch emerging startups pitch to top investors",
    "fullDescription": "An evening of innovation where 10 selected startups present their ideas to a panel of investors. Networking reception follows the pitches.",
    "category": "Business"
  }
]
;

export default eventsData; 