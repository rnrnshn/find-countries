import Header from '../components/Header';
import styles from '../styles/Details.module.css'

const Details = () => {
  return (
    <div className={styles.detailsContainer}>
      <Header />
      <h1> Details Page</h1>
    </div>
  );
}

export default Details;