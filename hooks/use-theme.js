// 1. 建立與導出context
import { createContext, useContext, useState } from 'react';
// createContext()可以傳入defaultValue參數，這是當沒有對應的Provider時，預設的值
// defaultValue可以使用有意義的預設值，或使用null(用於除錯)
// 參考: https://react.dev/reference/react/createContext#parameters
const ThemeContext = createContext(null);

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在ThemeProvider中的所有子女元件
export function ThemeProvider({ children }) {
  // 使用自訂在頁面層級的版面(layout)
  const [theme, setTheme] = useState('hikarino');
  const toggleTheme = () => {
    setTheme(theme === 'hikarino' ? 'yamino' : 'hikarino');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useTheme就可以取得共享狀態
export const useTheme = () => useContext(ThemeContext);
