import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import events from '../../data/events';
import {  Event } from '../../data/events';

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: EventDetailsProps) {
  return (
    <div>
      <Head>
        <title>{event.title} | Events Explorer</title>
        <meta name="description" content={event.description} />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <article>
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
            <p className="text-gray-600 mb-4"><strong>Location:</strong> {event.location}</p>
            <p className="text-gray-700">{event.fullDescription}</p>
          </div>
        </article>
      </main>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = events.map(event => ({
    params: { id: event.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const event = events.find(e => e.id === params?.id);
  return { props: { event } };
};