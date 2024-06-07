import { useState } from 'react';
// import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  // 建立一個狀態，專門拿來存放子元件回傳的資料
  const [dataFromChild, setDataFromChild] = useState('');

  return (
    <>
      <h2>Parent</h2>
      {/* <ChildA /> */}
      <p>來自子女B的資料: {dataFromChild}</p>
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  );
}
