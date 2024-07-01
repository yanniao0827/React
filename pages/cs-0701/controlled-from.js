import React, { useState } from 'react';

export default function ControlledForm() {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      <div title="input-text">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
