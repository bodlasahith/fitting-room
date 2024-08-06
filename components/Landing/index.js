import styles from '../../styles/Pages.module.css';

export default function Landing({ navigateToPage }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Fitting Room</h1>
        <p className={styles.description}>
          This is an example of a Browser Extension built with NEXT.JS. Please
          refer to the GitHub repo for running instructions and documentation
        </p>
        <p>{"[ - This is landing page content - ]"}</p>
        <p onClick={() => navigateToPage('upload')}>{"Go to New Page >"}</p>
      </main>
    </div>
  );
}
