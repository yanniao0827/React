import React from 'react';

export default function JsxMap() {
  const aa = [1, 4, 8, 12];
  return (
    <>
      <h1>陣列map</h1>
      <hr />
      <ul>
        {aa.map((v, i) => {
          return <li key={i}>{v}</li>;
        })}
      </ul>
    </>
  );
}
