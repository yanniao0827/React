import React, { useRef } from 'react';

export default function InputRef() {
  const inputRef = useRef(null);
  return (
    <>
      <h2>input使用refs(不可控)</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          alert(inputRef?.current?.value);
        }}
      >
        獲得值
      </button>
    </>
  );
}
