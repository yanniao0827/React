import { useState } from 'react';

export default function CRender() {
  const [total, setTotal] = useState(0);

  return (
    <>
      <h1>JSX中條件式渲染(conditional render)</h1>
      <hr />
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1);
        }}
      >
        +1
      </button>
      <hr />
      {/* 這種寫法有瑕疵，因為我們想要的是還沒按下按鈕之前都不要顯示 */}
      {total && <p>目前total為{total}</p>}
      {/* 要解決這個問題可以把前面的total變成布林值，因為布林值不會被渲染 */}
      {Boolean(total) && <p>目前total為{total}</p>}
      {!!total && <p>目前total為{total}</p>}
      {/* 使用比較運算子轉換 */}
      {total > 0 && <p>目前total為{total}</p>}
      {/* 使用三元運算子 */}
      {total ? <p>目前total為{total}</p> : ''}
    </>
  );
}
