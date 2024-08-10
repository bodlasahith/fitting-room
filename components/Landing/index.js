import React, { useState } from 'react';
import styles from '../../styles/Pages.module.css';

export default function Landing() {
  const [imageSrc, setImageSrc] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingElement, setDraggingElement] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragStart = (event) => {
    if (event.button !== 0) return; // Only allow left-click to start dragging

    setIsDragging(true);
    const img = event.target;
    const shiftX = event.clientX - img.getBoundingClientRect().left;
    const shiftY = event.clientY - img.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      img.style.left = pageX - shiftX + 'px';
      img.style.top = pageY - shiftY + 'px';
    };

    const onMouseMove = (event) => {
      if (isDragging) {
        moveAt(event.pageX, event.pageY);
      }
    };

    const stopDragging = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', onMouseMove);
      img.onmouseup = null;
      img.oncontextmenu = null;
    };

    document.addEventListener('mousemove', onMouseMove);

    img.onmouseup = stopDragging;

    img.oncontextmenu = (event) => {
      event.preventDefault(); // Prevent the context menu from appearing
      stopDragging(); // Stop dragging on right-click
    };
  };

  const handleDragOutside = (event) => {
    if (isDragging && draggingElement) {
      const moveAt = (pageX, pageY) => {
        draggingElement.style.left = pageX + 'px';
        draggingElement.style.top = pageY + 'px';
      };
      moveAt(event.pageX, event.pageY);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousemove', handleDragOutside);
    return () => {
      document.removeEventListener('mousemove', handleDragOutside);
    };
  }, [isDragging, draggingElement]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Virtual Fitting Room</h1>
        <ol className={styles.instructions}>
          <li>Choose an outfit</li>
          <li>Upload your photo</li>
          <li>Drag and drop the outfit onto your photo</li>
          <li>Adjust the position and size of the outfit</li>
          <li>Save and share your virtual outfit</li>
        </ol>
        <p className={styles.description}>
          Click to open draggable image
        </p>
        <input type="file" className={styles.button} accept="image/png" onChange={handleImageUpload} />
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Draggable"
            className="draggableImage"
            style={{ position: 'absolute', top: '50px', left: '50px', cursor: 'move' }}
            onMouseDown={handleDragStart}
          />
        )}
      </main>
    </div>
  );
}
