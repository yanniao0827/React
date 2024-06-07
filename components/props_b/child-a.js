import React from 'react';

export default function ChildA({ pData }) {
  return (
    <>
      <h3>ChildA</h3>
      <p>parent傳來的:{pData}</p>
    </>
  );
}
