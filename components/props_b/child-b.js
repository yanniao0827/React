import { useState, useEffect } from 'react';

export default function ChildB({ setDataFromChild }) {
  const [cData, setCData] = useState('我來自childB');
  useEffect(() => {
    // 方式2: 第一次呈現渲染就執行
    setDataFromChild(cData);
  }, []);

  return (
    <>
      <h3>ChildB</h3>
      {/* <button
        onClick={() => {
          setDataFromChild(cData);
        }}
      >
        送資料給Parent
      </button> */}
      {/* <button
        onClick={() => {
          // 方式1: 利用事件處理函式執行
          setDataFromChild(cData);
        }}
      >
        送資料給Child A
      </button> */}
    </>
  );
}
