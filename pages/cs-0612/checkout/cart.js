import { useState } from 'react';
import ProductList from '@/components/checkout/product-list';
import CartList from '@/components/checkout/cart-list';
import styles from '@/components/checkout/cart.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
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
  const calcTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty * items[i].price;
    }
    return total;
  };

  //計算商品數量(for迴圈)
  const calcTotalQty = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty;
    }
    return total;
  };

  // 用陣列迭代方法reduce來計算總金額/總數量
  const totalQty = items.reduce((acc, v) => acc + v.qty, 0);
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0);
  return (
    <>
      <div className={styles['container']}>
        <div className={styles['navbar']}>
          <div className={styles['logo']}>網站Logo</div>
          <div className={styles['header']}>
            <h2>購物車範例</h2>
          </div>
          <div className={styles['badge']}>
            <div className={styles['button']}>
              <FaShoppingCart />
              <span className={styles['button__badge']}>4</span>
            </div>
          </div>
        </div>
        <h3>商品列表</h3>
        <div className={styles['product']}>
          <ProductList addItem={addItem} />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
            removeItem={removeItem}
          />
        </div>
        <hr />
        <div>
          總數量: {calcTotalQty()} / 總金額: {calcTotalPrice()}
        </div>
        <div>
          (陣列迭代)總數量: {totalQty} / (陣列迭代)總金額: {totalPrice}
        </div>
      </div>
    </>
  );
}
