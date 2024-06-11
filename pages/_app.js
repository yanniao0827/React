// import '@/styles/globals.css'
// import '@/styles/product-table.css';

import { ThemeContext } from '@/context/theme';
import { useState } from 'react';
export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme }}>
      {getLayout(<Component {...pageProps} />)}
    </ThemeContext.Provider>
  );
}
