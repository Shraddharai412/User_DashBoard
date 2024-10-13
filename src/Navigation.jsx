
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
        <ul className={styles.navList}>
        <li className={styles.navItem}>Dashboard</li>
        <li className={styles.navItem}>Policies</li>
        <li className={styles.navItem}>Claims</li>
        <li className={styles.navItem}>Payments</li>
        <li className={styles.navItem}>Support</li>
      </ul>
    </nav>
  );
};

export default Navigation;
