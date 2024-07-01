import { useState } from 'react';
import InputIME from '@/components/controlled-form/input-ime';

export default function ControlledForm() {
  const [inputText, setInputText] = useState('');

  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      <div title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <h2>文字輸入框(input-text)-修正輸入法組字</h2>
        <InputIME
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
