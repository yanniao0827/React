import { useState } from 'react';
import MyInput from '@/components/controlled-form/my-input';
import MyTextarea from '@/components/controlled-form/my-textarea';
import MyRadio from '@/components/controlled-form/my-radio';
import MyCheckbox from '@/components/controlled-form/my-checkbox';

export default function ControlledForm() {
  const drinkOptions = ['高山金萱', '熟成紅茶', '胭脂多多', '蘋果紅宣'];
  const [drink, setDrink] = useState('');
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      {/* <MyInput />
      <MyTextarea /> */}
      {/* <MyRadio />
      <MyCheckbox /> */}
      <div title="select">
        <h2>下拉選單</h2>
        <select
          value={drink}
          onChange={(e) => {
            setDrink(e.target.value);
          }}
        >
          <option value="">請選擇品項</option>
          {drinkOptions.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
