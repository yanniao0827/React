import { useContext } from 'react';
import { ThemeContext } from '@/context/theme';

export default function Page1() {
  const value = useContext(ThemeContext);

  return (
    <>
      <h1>Page1-Context範例-a</h1>
      <p>value = {JSON.stringify(value)}</p>
    </>
  );
}
