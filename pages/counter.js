// useState是一種鉤子hooks，是設計來讓韓式行元件可以使用狀態的，如useState、useEffect
import { useState } from 'react';

// 元件的命名一定要英文開頭大寫，否則react會認為是一般的函式
export default function Counter() {
  // [total=獲得狀態的變數, setTotal=設定狀態變數的函式] = useState(初始值)
  // useState(0)讓計數器從0開始
  const [total, setTotal] = useState(0);
  return (
    // <>...</> 這是react中特有的Fragment(片段)元件，使用<>...</>包覆程式碼，有點像div
    <>
      <h1>{total}</h1>
      <button
        //   在一般的JS中，設計功能是用addEventListener，但是在react中會使用許多人造事件屬性，如這裡的onClick
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
