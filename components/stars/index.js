import { useState, useEffect } from 'react';
// 導入.module.css檔案
// 與元件在同一個資料夾，比較合適單個元件時的開發使用
import styles from './star.module.css';

export default function Star({
  maxCount = 5, // 最多可評的分數(幾個星星)
  currentRating = 0,
  onRatingChange = () => {}, // 點按回傳評分的函式
}) {
  // 記錄點按時的評分，一開始是0分代表沒有評分
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  useEffect(() => {
    setRating(currentRating);
  }, [currentRating]);

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {/* 
          這裡使用簡易建立5個陣列1...N的語法，可以參考:
          https://github.com/orgs/mfee-react/discussions/50 
        */}
        {Array(maxCount)
          .fill(1)
          .map((v, i) => {
            // 每個星星圖示按鈕的分數，相當於索引+1
            const score = i + 1;
            return (
              <button
                // 從初次渲染到應用程式執行過程中，都不會有新增、刪除、修改、排序…的情況
                // 才能使用index(索引)當key
                key={i}
                className={styles['star-btn']}
                onClick={() => {
                  // 點按後設定分數
                  setRating(score);
                }}
                onMouseEnter={() => {
                  setHoverRating(score);
                }}
                onMouseLeave={() => {
                  setHoverRating(0);
                }}
              >
                <span
                  // 判斷星星是否要點亮。如果這個星星的分數(score)小於等於目前的選中的評分(rating)狀態，則套用亮起樣式
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span>
              </button>
            );
          })}
        <p>你給了{rating}星</p>
      </div>
    </>
  );
}
