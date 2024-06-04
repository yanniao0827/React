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
      {true}
      {false}
      <hr />
      <h2>Null/Umdefine data</h2>
      {null}
      {undefined}
      <hr />
    </>
  );
}
