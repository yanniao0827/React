import React from 'react';

export default function JsxRender() {
  return (
    <>
      <h1>JSX render</h1>
      <hr />
      <h2>Number data</h2>
      123
      {NaN}
      {100 - 1}
      <hr />
      <h2>String data</h2>
      LEA
      {'     '}
      {`price=${100 - 1}`}
      <hr />
      <h2>Boolean data</h2>
      {/* 會無法渲染顯示不出來，但不會跳錯誤訊息 */}
      {true}
      {false}
      <hr />
      <h2>Null/Umdefine data</h2>
      {/* 會無法渲染顯示不出來，但不會跳錯誤訊息 */}
      {null}
      {undefined}
      <hr />
      <h2>Array data</h2>
      {/* 陣列內容會被串接成字串 */}
      {[1, 2, 3]}
      {['hello', 'Lea']}
      {/* key就跟html的id一樣 */}
      {[<li key="1">abc</li>, <li key="2">def</li>]}
      <hr />
      <h2>object(物件)</h2>
      {/* 不能直接渲染，會造成中斷錯誤，不是React Child */}
      {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {{ a: 1, b: 2 }} */}
      <hr />
      <h2>function(函式)</h2>
      {/* 不會渲染，會有主控台警告，不是React Child */}
      {/* 參考: https://github.com/orgs/mfee-react/discussions/91 */}
      {/* {() => {}} */}
      <hr />
    </>
  );
}
