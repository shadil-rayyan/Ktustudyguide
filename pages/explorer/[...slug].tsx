import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Metadata } from 'next';
import styles from './Explorer.module.css';

export const metadata: Metadata = {
  title: 'KUSTudy Branch Explorer',
};

type ExplorerPageProps = {
  params: {
    slug: string[];
  };
  directories: { name: string; path: string }[];
  pdfs: { name: string; path: string }[];
};

export async function getStaticPaths() {
  const basePath = path.join(process.cwd(), 'public/kustudyguide');

  const getDirectories = (dir: string): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let directories: string[] = [];

    entries.forEach((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        directories.push(fullPath.replace(basePath, '').replace(/\\/g, '/').slice(1));
        directories = directories.concat(getDirectories(fullPath));
      }
    });

    return directories;
  };

  const directories = getDirectories(basePath);
  const paths = directories.map((dir) => ({
    params: { slug: dir.split('/') },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string[] } }) {
  const { slug = [] } = params;
  const basePath = path.join(process.cwd(), 'public/kustudyguide', ...slug);

  let entries: fs.Dirent[] = [];
  try {
    entries = fs.readdirSync(basePath, { withFileTypes: true });
  } catch {
    return { notFound: true };
  }

  const directories = entries
    .filter((e) => e.isDirectory())
    .map((dir) => ({ name: dir.name, path: path.join(basePath, dir.name) }));

  const pdfs = entries
    .filter((e) => e.isFile() && e.name.toLowerCase().endsWith('.pdf'))
    .map((pdf) => ({ name: pdf.name, path: path.join(basePath, pdf.name) }));

  return {
    props: { params, directories, pdfs },
  };
}

export default function ExplorerPage({ params, directories, pdfs }: ExplorerPageProps) {
  const { slug = [] } = params;

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Study Material</h1>
      <div className={styles.subheading}>
        {slug.length > 0 ? slug.join(' / ') : 'SELECT YOUR BRANCH'}
      </div>

      {directories.length > 0 && (
        <div className={styles.grid}>
          {directories.map((dir) => (
            <Link
              key={dir.name}
              href={`/explorer/${[...slug, dir.name].join('/')}`}
              legacyBehavior
            >
              <a className={styles.card}>{dir.name}</a>
            </Link>
          ))}
        </div>
      )}

      {pdfs.length > 0 && (
        <>
          <h2 className={styles.subheading}>PDFs Available</h2>
          <div className={styles.grid}>
            {pdfs.map((pdf) => (
              <a
                key={pdf.name}
                href={`/kustudyguide/${[...slug, pdf.name].join('/')}`}
                className={styles.card}
                download
              >
                {pdf.name}
              </a>
            ))}
          </div>
        </>
      )}

      {(directories.length === 0 && pdfs.length === 0) && (
        <p className={styles.footer}>No folders or PDFs found in this section.</p>
      )}
    </main>
  );
}
