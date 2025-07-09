import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Caasify Standalone Webapp</h1>
      <p className="text-gray-700">Update <code>.env</code> with your API token to get started.</p>
      <ul className="list-disc pl-5">
        <li>
          <Link href="/admin" className="text-blue-600 hover:underline">Admin Dashboard</Link>
        </li>
        <li>
          <Link href="/client" className="text-blue-600 hover:underline">Client Portal</Link>
        </li>
      </ul>
    </div>
  );
}
