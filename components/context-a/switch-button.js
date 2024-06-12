import { useContext } from 'react';
import { ThemeContext } from '@/context/theme';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

export default function SwitchButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'hikarino' ? <FaRegMoon /> : <FaRegSun />}
      </button>
    </>
  );
}
