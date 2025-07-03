import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import events from '../../data/events';
import { Event } from '../../data/events';
import Link from 'next/link';

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Head>
        <title>{event.title} | Events Explorer</title>
        <meta name="description" content={event.description} />
      </Head>

      <main className="container mx-auto px-4 py-12">
        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline text-sm"
        >
          ← Back to Events
        </Link>

        <article className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{event.title}</h1>

          <div className="mb-6 text-sm text-gray-600 space-y-1">
            <p><span className="font-medium">📅 Date:</span> {event.date}</p>
            <p><span className="font-medium">📍 Location:</span> {event.location}</p>
          </div>

          <hr className="my-6" />

          <p className="text-gray-700 text-lg leading-relaxed">
            {event.fullDescription}
          </p>
        </article>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map((event) => ({
    params: { id: event.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find((e) => e.id === params?.id);
  return { props: { event } };
};
