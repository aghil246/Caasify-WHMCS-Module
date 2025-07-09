import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Admin() {
  const { data, error } = useSWR('/api/categories', fetcher);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Caasify Admin Dashboard</h1>
      <Link href="/" className="text-blue-600 hover:underline">Back</Link>
      {error && <p className="text-red-500">Failed to load categories</p>}
      {!data && !error && <p>Loading...</p>}
      {data && (
        <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
