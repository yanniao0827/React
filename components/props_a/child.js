import React from 'react';

export default function Child(props) {
  return (
    <>
      <h3>Child</h3>
      {/* 這裡是將父母元件給的屬性顯示出來 */}
      <p>title={props.title}</p>
      <p>price = {props.price}</p>
      <p>isConnected = {props.isConnected ? 'true' : 'false'}</p>
      <p>aa = {JSON.stringify(props.aa)}</p>
      <p>oa = {JSON.stringify(props.oa)}</p>
      <p>sum(1,2) = {props.sum(1, 2)}</p>
    </>
  );
}
