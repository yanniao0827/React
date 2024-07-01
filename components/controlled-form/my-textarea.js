import { useState } from 'react';

export default function MyTextarea() {
  //textarea
  const [textareaText, setTextareaText] = useState('');
  return (
    <>
      <div title="textarea">
        <h2>文字輸入框(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value);
          }}
        />
      </div>
    </>
  );
}
