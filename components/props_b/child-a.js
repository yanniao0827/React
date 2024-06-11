import React from 'react';

export default function ChildA({ pData }) {
  return (
    <>
      <h3>ChildA</h3>
      <p>來自parent的資料: {pData}</p>
    </>
  );
}
