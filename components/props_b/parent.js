import React from 'react';
import ChildA from './child-a';
import ChildB from './child-b';

export default function Parent() {
  return (
    <>
      <h2>Parent</h2>
      <ChildA />
      <ChildB />
    </>
  );
}
