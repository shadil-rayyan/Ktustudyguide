import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KUSTudy Branch Explorer',
};

type ExplorerPageProps = {
  params: Promise<{ slug?: string[] }>;
};

export default async function ExplorerPage({ params }: ExplorerPageProps) {
  const { slug = [] } = await params;
  const basePath = path.join(process.cwd(), 'public/kustudyguide', ...slug);

  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(basePath, { withFileTypes: true });
  } catch {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
        <h1 className="text-2xl font-semibold text-red-600">❌ Folder Not Found</h1>
        <p className="text-gray-600 mt-2">No directory exists at this path.</p>
      </main>
    );
  }

  const directories = entries.filter((e) => e.isDirectory());
  const pdfs = entries.filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.pdf'));

  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
        📁 {slug.length > 0 ? slug.join(' / ') : 'SELECT YOUR BRANCH'}
      </h1>

      {directories.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {directories.map((dir) => (
            <Link
              key={dir.name}
              href={`/explorer/${[...slug, dir.name].join('/')}`}
              className="flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-200"
            >
              <div className="text-blue-400 text-5xl mb-4">
                {getIcon(dir.name)}
              </div>
              <div className="text-lg font-bold text-gray-700 uppercase">{dir.name}</div>
            </Link>
          ))}
        </div>
      )}

      {pdfs.length > 0 && (
        <>
          <h2 className="text-2xl font-semibold text-green-700 text-center mb-6">📄 PDFs Available</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pdfs.map((pdf) => (
              <a
                key={pdf.name}
                href={`/kustudyguide/${[...slug, pdf.name].join('/')}`}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex flex-col items-center justify-center p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition duration-200"
              >
                <div className="text-red-500 text-5xl mb-3">📄</div>
                <div className="text-sm font-medium text-center text-gray-700 break-words">{pdf.name}</div>
              </a>
            ))}
          </div>
        </>
      )}

      {directories.length === 0 && pdfs.length === 0 && (
        <p className="text-center text-gray-500 mt-8">No folders or PDFs found in this section.</p>
      )}
    </main>
  );
}

function getIcon(name: string) {
  const map: { [key: string]: string } = {
    MECH: '⚙️',
    CSE: '💻',
    ECE: '📶',
    EEE: '💡',
    CIVIL: '🏠',
    IT: '🧩',
  };
  const upper = name.toUpperCase();
  return map[upper] || '📁';
}
