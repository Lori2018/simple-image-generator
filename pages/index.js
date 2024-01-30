import React, { useState } from 'react';
import styles from '../styles/Home.module.css'; 

const Home = () => {
  const [currentText, setCurrentText] = useState('');

  const handleInputChange = (e) => {
    setCurrentText(e.target.value);
  };

  const generateImageSource = (text) => {
    return `http://loremflickr.com/320/240/${text}`;
  };

  return (
    <div className={styles.container}>
      {/* Left Half of the Website */}
      <div className={styles.leftHalf}>
        <div className={styles.centered}>
          <div className={styles.textBox}>
            <h1>simple image generator</h1>
            <p>enter some text, and in a moment your image will appear</p>
            <input
              type="text"
              placeholder="Type something..."
              value={currentText}
              onChange={handleInputChange}
              className={styles.inputBox}
            />
          </div>
        </div>
      </div>

      {/* Right Half of the Website */}
      <div className={styles.rightHalf}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <img src={generateImageSource(currentText)} alt="Generated Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
