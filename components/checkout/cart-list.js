import React from 'react';
import styles from './cart.module.css';
import { useCart } from '@/hooks/use-cart';

export default function CartList() {
  const { items, increaseItem, decreaseItem, removeItem } = useCart();

  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <li key={v.id} className={styles['item']}>
              <div className={styles['w-400']}>{v.name}</div>
              <div>{v.price}</div>
              <div>
                <button
                  onClick={() => {
                    increaseItem(v.id);
                  }}
                >
                  +
                </button>
                <span>{v.qty}</span>
                <button
                  onClick={() => {
                    // 按下此按鈕處理後後，改變的下次數量
                    const nextQty = v.qty - 1;

                    if (nextQty === 0) {
                      if (confirm('你確定要移除項目?')) {
                        removeItem(v.id);
                      }
                    } else {
                      decreaseItem(v.id);
                    }
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    if (confirm('你確定要移除項目?')) {
                      removeItem(v.id);
                    }
                  }}
                >
                  移除
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
