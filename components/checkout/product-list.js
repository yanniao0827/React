import React from 'react';
import products from '@/data/Product.json';
import styles from './cart.module.css';
import { useCart } from '@/hooks/use-cart';

export default function ProductList() {
  const { addItem } = useCart();

  return (
    <>
      <div className={styles['product']}>
        <ul className={styles['list']}>
          {products.map((v, i) => {
            return (
              <li key={v.id} className={styles['item']}>
                <div className={styles['w-400']}>{v.name}</div>
                <div>{v.price}</div>
                <div>
                  <button
                    onClick={() => {
                      addItem(v);
                    }}
                  >
                    加入購物車
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
