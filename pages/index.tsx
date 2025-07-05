// /pages/index.tsx

import fs from 'fs';
import path from 'path';
import ExplorerPage from './explorer/[...slug]';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const basePath = path.join(process.cwd(), 'public/academiadrive');
  
  // List the top-level directories
  const directories = fs.readdirSync(basePath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  // No PDFs at the homepage level
  const pdfs: any[] = [];

  return {
    props: {
      params: { slug: [] },  // Empty slug for the homepage
      directories,
      pdfs,
    },
  };
};

export default function HomePage({ directories, pdfs }: { directories: string[], pdfs: any[] }) {
  return (
    <div>
      <ExplorerPage
        params={{ slug: [] }} // Empty slug for the homepage
        directories={directories.map((dir) => ({ name: dir, path: dir }))}
        pdfs={pdfs} // No PDFs for the homepage
      />
    </div>
  );
}
