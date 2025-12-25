import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/users">Go to Users Page</Link>
        <Link href="/counter">Go to Counter Page</Link>
      </main>
    </div>
  );
}
