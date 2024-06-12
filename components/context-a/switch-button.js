import { useContext } from 'react';
import { ThemeContext } from '@/context/theme';

export default function SwitchButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>{theme}</button>
    </>
  );
}
