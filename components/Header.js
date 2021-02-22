import styles from '../styles/Header.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a className={styles.logo}>
          <h2>Find the world...</h2>
        </a>
      </Link>
      <span className={styles.toogleTheme}>
        <p className={styles.toogleText}>Dark Mode</p>
      </span>
    </header>
  );
}

export default Header;