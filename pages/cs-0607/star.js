import React from 'react';
// 導入.module.css檔案
import styles from '@/styles/star.module.css';

export default function Star() {
  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {Array(5)
          .fill(1)
          .map((v, i) => {
            return (
              <button key={i} className={styles['star-btn']}>
                {' '}
                <span>&#9733;</span>
              </button>
            );
          })}
      </div>
    </>
  );
}
