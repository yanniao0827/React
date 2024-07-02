import React, { useEffect, useState } from 'react';

export default function EffectPattern() {
  const [total, setTotal] = useState(0);

  // 樣式1 沒有第二傳入參數，每次渲染都會執行一次
  // 一般情況下是用來做紀錄的，在自訂鉤子開發上會用到
  //   useEffect(() => {
  //     console.log('每次渲染都會執行一次');
  //   });

  // 樣式2 第二傳入參數是空陣列，第一次渲染後會執行一次，之後渲染就不再執行
  // 是最常使用的，又稱componentDidMount/didMount，用於fetch/ajax和伺服器要資料、整合非react應用程式
  useEffect(() => {
    console.log('第一次渲染後會執行一次，之後渲染就不再執行');
  }, []);

  // 樣式3 第二傳入參數有相依變數，第一次執行傳入參數的程式碼，之後有心的傳入就執行一次新的
  // 用途是解決異步方案、狀態作為屬性船褥子元件同化、同一元件套用不同資料
  // 相依變數陣列只能傳入state或props，或是兩者計算衍生的變數(購物車商品金額變動)
  //   useEffect(() => {
  //     console.log('第一次執行傳入參數的程式碼，之後有新的傳入就再執行新的');
  //   }, [total]);

  // 樣式4 第一個傳入參數函式的回傳值也是函式(函式裡面還有函式)，通常是搭配樣式2一起做，元件在移出DOM前執行一次(ex:先登出)
  // 用途是做某些元件移出前的清理工作(計時器裡面的資料清理cleanup)
  //   useEffect(() => {
  //     return () => {
  //       console.log();
  //     };
  //   }, []);

  return (
    <>
      <h1>Effect四樣式範例</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
