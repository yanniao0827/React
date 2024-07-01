import { useState } from 'react';

export default function MyRadio() {
  //  radio
  const lunchOptions = ['subway', '全家', '摩斯'];
  const [lunch, setLunch] = useState('');
  return (
    <>
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
      </div>
    </>
  );
}
