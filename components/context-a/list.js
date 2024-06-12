import { useTheme } from '@/hooks/use-theme';

export default function List() {
  const { theme } = useTheme();
  return (
    <>
      <ul className={theme}>
        <li>1111</li>
        <li>2222</li>
        <li>3333</li>
        <li>4444</li>
      </ul>
      <style jsx>{`
        .hikarino {
          background-color: white;
          color: green;
        }
        .yamino {
          background-color: black;
          color: violet;
        }
      `}</style>
    </>
  );
}
