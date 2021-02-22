import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Image from 'next/image'

export async function getStaticProps() {
  const url = 'https://restcountries.eu/rest/v2/all';

  const response = await fetch(url);
  const data = await response.json();
  const countries = data;
  return {
    props: {
      countries
    }
  }
}

export default function Home({ countries }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Explore countries</title>
        <meta charset="UTF-8" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      </Head>

      <Header />
      <main className={styles.homeContainer}>
        <section className={styles.inputContainer}>
          <input
            className={styles.inputSearch}
            type="text"
            placeholder="Search for a country..."
          />
          <input
            className={styles.inputFilter}
            type="text"
            placeholder="Filter by Region"
          />
        </section>
        <section className={styles.countriesContainer}>
          {countries.slice(0, 8).map(country => (
            <aside className={styles.countryItem} key={country.numericCode}>
              <div className={styles.countryFlag}>
                <Image
                  src={country.flag}
                  width={237}
                  height={144}
                />
              </div>
              <div className={styles.countryInfo}>
                <h4 className={styles.countryName}>
                  {country.name}
                </h4>
                <p className={styles.countryPopulation}>
                  <span>Population: </span>{country.population}
                </p>
                <p className={styles.countryRegion}>
                  <span>Region: </span>{country.region}
                </p>
                <p className={styles.countryCapital}>
                  <span>Capital: </span>{country.capital}
                </p>
              </div>
            </aside>
          ))}
        </section>
      </main>
    </div >
  )
}
