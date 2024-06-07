import React from 'react';

export default function Child({
  // 在這裡可以設定預設值，如果父母元件沒有給值的話就會套用預設值，可以見那邊查看資料類型是什麼
  title = '沒設定',
  price = 0,
  isConnected = false,
  aa = [],
  oa = {},
  sum = () => {},
}) {
  return (
    <>
      <h3>Child</h3>
      {/* 這裡是將父母元件給的屬性顯示出來 */}
      <p>title={title}</p>
      <p>price = {price}</p>
      <p>isConnected = {isConnected ? 'true' : 'false'}</p>
      <p>aa = {JSON.stringify(aa)}</p>
      <p>oa = {JSON.stringify(oa)}</p>
      <p>sum() = {sum(1, 2)}</p>
    </>
  );
}
