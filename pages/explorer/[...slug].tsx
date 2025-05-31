import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KUSTudy Branch Explorer',
};

type ExplorerPageProps = {
  params: {
    slug: string[];
  };
  directories: fs.Dirent[];
  pdfs: fs.Dirent[];
};

export async function getStaticPaths() {
  const basePath = path.join(process.cwd(), 'public/kustudyguide');

  // Recursive function to get all directories
  const getDirectories = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let directories: string[] = [];

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        directories.push(fullPath.replace(basePath, '').replace(/\\/g, '/').slice(1));
        directories = directories.concat(getDirectories(fullPath)); // Recurse into subdirectories
      }
    });

    return directories;
  };

  const directories = getDirectories(basePath);

  const paths = directories.map((dir) => ({
    params: { slug: dir.split('/') },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string[] } }) {
  const { slug = [] } = params;
  const basePath = path.join(process.cwd(), 'public/kustudyguide', ...slug);

  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(basePath, { withFileTypes: true });
  } catch {
    return {
      notFound: true,
    };
  }

  const directories = entries.filter((e) => e.isDirectory()).map((dir) => ({
    name: dir.name,
    path: path.join(basePath, dir.name),
  }));

  const pdfs = entries.filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.pdf')).map((pdf) => ({
    name: pdf.name,
    path: path.join(basePath, pdf.name),
  }));

  return {
    props: {
      params,
      directories,
      pdfs,
    },
  };
}

export default function ExplorerPage({
  params,
  directories,
  pdfs,
}: ExplorerPageProps) {
  const { slug = [] } = params;

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
