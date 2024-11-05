import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">City Not Found</h1>
      <p className="text-lg text-gray-600 mb-6">
        We couldn&apos;t find weather data for the specified city. Please check the spelling or try searching for another city.
      </p>
      <Link href="/" passHref>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
