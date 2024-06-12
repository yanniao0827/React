import styles from '@/components/checkout/cart.module.css';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  return (
    <>
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
    </>
  );
}
