import ProductList from '@/components/checkout/product-list';
import CartList from '@/components/checkout/cart-list';
import styles from '@/components/checkout/cart.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '@/hooks/use-cart';

export default function Cart() {
  const { totalPrice, totalQty } = useCart();

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
          <ProductList />
        </div>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList />
        </div>
        <hr />
        <div>{/* 總數量: {calcTotalQty()} / 總金額: {calcTotalPrice()} */}</div>
        <div>
          總數量: {totalQty} / 總金額: {totalPrice}
        </div>
      </div>
    </>
  );
}
