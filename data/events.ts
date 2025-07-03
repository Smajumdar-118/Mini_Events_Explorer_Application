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
    "date": "2023-10-15",
    "location": "San Francisco, CA",
    "description": "Annual tech conference featuring latest innovations",
    "fullDescription": "Three-day conference covering AI, blockchain, and cloud computing with keynote speakers from leading tech companies.",
    "category" : "Technology"
  },
  {
    "id": "2",
    "title": "Music Festival",
    "date": "2023-11-05",
    "location": "Austin, TX",
    "description": "Weekend music festival with various artists",
    "fullDescription": "Three-day outdoor music festival featuring over 50 artists across multiple stages. Food trucks and art installations available.",
    "category" : "Technology"
  },
  {
    "id": "3",
    "title": "Next.js Meetup",
    "date": "2024-01-12",
    "location": "Bangalore",
    "description": "A meetup for developers interested in Next.js",
    "fullDescription": "Learn and share ideas about Next.js, performance optimizations, App Router vs Pages Router, and real-world projects.",
    "category" : "Technology"
  },
  {
    "id": "4",
    "title": "Startup Pitch Day",
    "date": "2024-02-18",
    "location": "Mumbai",
    "description": "Startups pitch their ideas to investors",
    "fullDescription": "Early-stage startups pitch to VCs and angel investors. Great for networking, learning, and innovation exposure.",
    "category" : "Technology"
  },
  {
    "id": "5",
    "title": "Data Science Summit",
    "date": "2024-03-10",
    "location": "Delhi",
    "description": "Summit for data professionals",
    "fullDescription": "Deep-dive sessions on machine learning, data engineering, and AI ethics with speakers from Google, Microsoft, and startups.",
    "category" : "Technology"
  },
  {
    "id": "6",
    "title": "Web Dev Bootcamp",
    "date": "2024-04-20",
    "location": "Chennai",
    "description": "Hands-on web development bootcamp",
    "fullDescription": "One-week intensive bootcamp covering HTML, CSS, JavaScript, React, and deployment using Vercel and Netlify.",
    "category" : "Technology"
  },
  {
    "id": "7",
    "title": "Open Source Hackathon",
    "date": "2024-06-15",
    "location": "Hyderabad",
    "description": "Collaborate on open source projects",
    "fullDescription": "Contribute to GitHub projects, earn swag, and learn from maintainers of major open source libraries and frameworks.",
    "category" : "Technology"
  },
  {
    "id": "8",
    "title": "Cybersecurity Conference",
    "date": "2024-08-25",
    "location": "Pune",
    "description": "Conference on modern cybersecurity practices",
    "fullDescription": "Explore zero trust architecture, ethical hacking, and compliance with global experts and CISOs from top companies.",
    "category" : "Technology"
  },
  {
    "id": "9",
    "title": "DevOps India Expo",
    "date": "2024-09-10",
    "location": "Kolkata",
    "description": "Expo on CI/CD and cloud-native DevOps",
    "fullDescription": "Sessions and demos on Kubernetes, Docker, GitHub Actions, and multi-cloud deployments from top Indian tech teams.",
    "category" : "Technology"
  },
  {
    "id": "10",
    "title": "AI for All Seminar",
    "date": "2024-10-05",
    "location": "Ahmedabad",
    "description": "AI made accessible for all developers",
    "fullDescription": "Talks and workshops on AI-powered apps using tools like Hugging Face, OpenAI, and TensorFlow Lite.",
    "category" : "Technology"
  }
]
;

export default eventsData; // Changed to default export