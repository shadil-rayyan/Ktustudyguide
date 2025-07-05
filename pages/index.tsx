import Link from 'next/link';
import Head from 'next/head';
import styles from './index.module.css';

const semesters = Array.from({ length: 8 }, (_, i) => `S${i + 1}`);

export default function Home() {
  return (
    <>
      <Head>
        <title>Select Semester | KUSTudy</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.heading}>Study Material</h1>
        <div className={styles.subheading}>SEM</div>

        <div className={styles.grid}>
          {semesters.map((sem) => (
            <Link key={sem} href={`/explorer/${sem.toLowerCase()}`} className={styles.card}>
              <span>{sem}</span>
            </Link>
          ))}
        </div>

        <p className={styles.footer}>Stay focused, work hard, and believe in yourself</p>
      </main>
    </>
  );
}
