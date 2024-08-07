import styles from '../../styles/Pages.module.css';

export default function Upload({ navigateToPage}) {
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          window.localStorage.setItem('image', e.target.result);
        };
      };
      reader.readAsDataURL(file);
    } else {
      alert('Please upload a png file');
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Fitting Room</h1>
        <p className={styles.description}>Upload a png</p>
        <p onClick={() => navigateToPage('landing')}>{"< Go Back"}</p>
        <input type="file" accept="image/png" onChange={handleFileUpload} />
      </main>
    </div>
  );
}