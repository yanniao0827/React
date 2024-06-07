import { useState } from 'react';

export default function ChildB({ setDataFromChild }) {
  const [cData, setCData] = useState('我要傳資料給parent');
  return (
    <>
      <h3>ChildB</h3>
      <button
        onClick={() => {
          setDataFromChild(cData);
        }}
      >
        送資料給Parent
      </button>
    </>
  );
}
