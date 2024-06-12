// 1. 建立與導出context
import { createContext, useContext, useState } from 'react';
// createContext()可以傳入defaultValue參數，這是當沒有對應的Provider時，預設的值
// defaultValue可以使用有意義的預設值，或使用null(用於除錯)
// 參考: https://react.dev/reference/react/createContext#parameters
const CartContext = createContext(null);

// 2. 建立一個Context Provider(提供者)元件
// 目的: 提供給最上層元件(_app.js)方便使用，共享狀態在這裡面統一管理
// children指的是被包覆在CartProvider中的所有子女元件
export function CartProvider({ children }) {
  // 使用自訂在頁面層級的版面(layout)
  const [items, setItems] = useState([]);
  const increaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      //如果id符合，增加qty數量
      if (v.id === id) return { ...v, qty: v.qty + 1 };
      // 否則保持原本的物件值
      else return v;
    });
    setItems(nextItems);
  };
  const decreaseItem = (id) => {
    const nextItems = items.map((v, i) => {
      //如果id符合，減少qty數量
      if (v.id === id) return { ...v, qty: v.qty - 1 };
      // 否則保持原本的物件值
      else return v;
    });
    setItems(nextItems);
  };
  const removeItem = (id) => {
    const nextItems = items.filter((v) => {
      return v.id !== id;
    });
    setItems(nextItems);
  };
  // 新增項目
  const addItem = (product) => {
    // 先尋找商品是否已在購物車項目中(沒有找到的話會回傳-1)
    const foundIndex = items.findIndex((v) => v.id === product.id);

    if (foundIndex > -1) {
      // 如果有找到的話===>遞增商品數量
      increaseItem(product.id);
    } else {
      // 否則===>新增項目
      // 擴充qty數字屬性，預設為1
      const newItem = { ...product, qty: 1 };
      const nextItems = [newItem, ...items];
      setItems(nextItems);
    }
  };

  //計算商品價格(for迴圈)
  // const calcTotalPrice = () => {
  //   let total = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty * items[i].price;
  //   }
  //   return total;
  // };

  // //計算商品數量(for迴圈)
  // const calcTotalQty = () => {
  //   let total = 0;
  //   for (let i = 0; i < items.length; i++) {
  //     total += items[i].qty;
  //   }
  //   return total;
  // };
  // 用陣列迭代方法reduce來計算總金額/總數量
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0);
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        totalQty,
        totalPrice,
        addItem,
        increaseItem,
        decreaseItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. 建立一個包裝useContext的專用名稱函式
// 目的: 讓消費者們(consumer)方便使用，呼叫useCart就可以取得共享狀態
export const useCart = () => useContext(CartContext);
