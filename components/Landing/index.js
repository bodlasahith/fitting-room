import styles from '../../styles/Pages.module.css';

export default function Landing({ navigateToPage }) {
  const image = window.localStorage.getItem('image');

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Fitting Room</h1>
        <p className={styles.description}>
          Click to open draggable image
        </p>
        <button
          className={styles.draggableImage}
          // onMouseDown={(e) => {
          //   e.preventDefault();
          //   const image = new Image();
          //   image.src = image;
          //   image.style.position = 'absolute';
          //   image.style.left = `${e.clientX}px`;
          //   image.style.top = `${e.clientY}px`;
          //   image.style.zIndex = '9999';
          //   document.body.appendChild(image);

          //   const handleMouseMove = (e) => {
          //     image.style.left = `${e.clientX}px`;
          //     image.style.top = `${e.clientY}px`;
          //   };

          //   const handleMouseUp = () => {
          //     document.removeEventListener('mousemove', handleMouseMove);
          //     document.removeEventListener('mouseup', handleMouseUp);
          //     image.remove();
          //   };

          //   document.addEventListener('mousemove', handleMouseMove);
          //   document.addEventListener('mouseup', handleMouseUp);
          // }}
        >
          Open Draggable Image
        </button>
        <p onClick={() => navigateToPage('upload')}>{"Go to Upload Page >"}</p>
      </main>
    </div>
  );
}
