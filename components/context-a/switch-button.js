import { useTheme } from '@/hooks/use-theme';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

export default function SwitchButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button onClick={toggleTheme}>
        {theme === 'hikarino' ? <FaRegMoon /> : <FaRegSun />}
      </button>
    </>
  );
}
