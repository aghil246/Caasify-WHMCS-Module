import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Client() {
  const { data, error } = useSWR('/api/categories', fetcher);

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Client Portal</h1>
      <Link href="/" className="text-blue-600 hover:underline">Back</Link>
      {error && <p className="text-red-500">Failed to load categories</p>}
      {!data && !error && <p>Loading...</p>}
      {data && (
        <ul className="list-disc pl-5">
          {Array.isArray(data) && data.map((cat: any) => (
            <li key={cat.id}>{cat.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
