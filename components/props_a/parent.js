import React from 'react';
import Child from './child';

export default function Parent() {
  return (
    <>
      <h2>Parent</h2>
      {/*  */}
      <Child
      // title="0607 props"
      // price={555}
      // isConnected={true}
      // aa={[1, 2, 3]}
      // oa={{ a: 1, b: 2 }}
      // sum={(x, y) => x + y}
      />
    </>
  );
}
