import { useState } from 'react';
import InputIME from '@/components/controlled-form/input-ime';

export default function ControlledForm() {
  const [inputText, setInputText] = useState('');
  const [inputNumber, setInputNumber] = useState(0);

  const [inputDateText, setInputDateText] = useState('');

  const dateToString = (date = null) =>
    date instanceof Date ? date.toISOString().split('T')[0] : '';
  const stringToDate = (str = '') => new Date(str);
  const [inputDateObject, setInputDateObject] = useState(
    stringToDate('2024-07-01')
  );

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
        <h2>數字輸入框(input-number)</h2>
        <input
          type="number"
          max={10}
          min={0}
          step={1}
          value={inputNumber}
          onChange={(e) => {
            setInputNumber(Number(e.target.value));
          }}
        />
        <h2>日期輸入(input-date)字串</h2>
        <input
          type="date"
          value={inputDateText}
          onChange={(e) => {
            setInputDateText(e.target.value);
          }}
        />
        <h2>日期輸入(input-date)物件</h2>
        <input
          type="date"
          value={dateToString(inputDateObject)}
          onChange={(e) => {
            setInputDateObject(stringToDate(e.target.value));
          }}
        />
      </div>
    </>
  );
}
