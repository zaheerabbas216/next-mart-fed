import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.mart_icon}>
          <img src="/logo.jpg" alt="" className={styles.mart_logo} />
          <h3 className="mx-2">Next-Mart</h3>
        </div>
        <div className={styles.nav_links}>
          <Link href="#">
            <span>Login/Sign Up</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
