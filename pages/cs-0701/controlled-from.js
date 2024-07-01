import { useState } from 'react';
import MyInput from '@/components/controlled-form/my-input';
import MyTextarea from '@/components/controlled-form/my-textarea';

export default function ControlledForm() {
  //  radio
  const lunchOptions = ['subway', '全家', '摩斯'];
  const [lunch, setLunch] = useState('');

  //checkbox
  const initState = lunchOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false };
  });

  const [myLunch, setmyLunch] = useState(initState);

  const handleToggleChecked = (id) => {
    const nextMyLunch = myLunch.map((v, i) => {
      if (v.id === id) return { ...v, checked: !v.checked };
      else return v;
    });

    setmyLunch(nextMyLunch);
  };

  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      {/* <MyInput />
      <MyTextarea /> */}
      <div title="radio">
        <h2>單選選擇</h2>
        {lunchOptions.map((v, i) => {
          // 注意如果<>...</>要加key屬性要改為<Fragment>...</Fragment>元件
          return (
            <label
              // 只有當初次render後不會再有更動(新增刪除修改)，才能使用索引作為key
              key={i}
            >
              <input
                type="radio"
                value={v}
                // 每個radio選項用自己本身的v和狀態pet比較，相符會是true代表被選中
                checked={v === lunch}
                onChange={(e) => {
                  // 第一種寫法: (推薦)有加value屬性和事件物件時，和其它可控元件寫法類似
                  setLunch(e.target.value);
                  // 第二種寫法: 直接用v值代入
                  // setPet(v)
                }}
              />
              {v}
            </label>
          );
        })}
        <h2>多選選擇</h2>
        {myLunch.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                onChange={() => {
                  handleToggleChecked(v.id);
                }}
              />
              {v.label}
            </label>
          );
        })}
      </div>
    </>
  );
}
