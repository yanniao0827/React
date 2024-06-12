// import '@/styles/globals.css'
// import '@/styles/product-table.css';

import { ThemeProvider } from '@/hooks/use-theme';
export default function MyApp({ Component, pageProps }) {
  // 使用自訂在頁面層級的版面(layout)
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
  );
}
