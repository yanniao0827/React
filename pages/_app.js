// import '@/styles/globals.css'
// import '@/styles/product-table.css';

import { ThemeContext } from '@/context/theme';
import { useState } from 'react';
export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page);
  const [theme, setTheme] = useState('hikarino');
  const toggleTheme = () => {
    setTheme(theme === 'hikarino' ? 'yamino' : 'hikarino');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  );
}
