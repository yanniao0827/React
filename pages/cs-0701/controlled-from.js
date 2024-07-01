import { useState } from 'react';
import MyInput from '@/components/controlled-form/my-input';
import MyTextarea from '@/components/controlled-form/my-textarea';
import MyRadio from '@/components/controlled-form/my-radio';
import MyCheckbox from '@/components/controlled-form/my-checkbox';

export default function ControlledForm() {
  return (
    <>
      <h1>可控表單元件範例</h1>
      <hr />
      {/* <MyInput />
      <MyTextarea /> */}
      <MyRadio />
      <MyCheckbox />
    </>
  );
}
