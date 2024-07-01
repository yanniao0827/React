import { useState } from 'react';
import MyInput from '@/components/controlled-form/my-input';
import MyTextarea from '@/components/controlled-form/my-textarea';

export default function ControlledForm() {
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      <MyInput />
      <MyTextarea />
    </>
  );
}
