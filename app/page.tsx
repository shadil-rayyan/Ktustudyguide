import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Select Semester | KUSTudy',
};

const semesters = Array.from({ length: 8 }, (_, i) => `S${i + 1}`);

export default function ExplorerRoot() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-10 text-blue-500">SELECT YOUR SEMESTER</h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {semesters.map((sem) => (
          <Link
            key={sem}
            href={`/explorer/${sem.toLowerCase()}`}
            className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="bg-blue-400 text-white text-4xl w-20 h-20 flex items-center justify-center rounded-full mb-4">
              📄
            </div>
            <span className="text-xl font-semibold text-gray-700">{sem}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
