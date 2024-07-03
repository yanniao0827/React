import { useState } from 'react';
import data from '@/data/products.json';
import Link from 'next/link';

export default function List() {
  const [products, setProducts] = useState(data);
  return (
    <>
      <h1>商品列表</h1>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0703/products/${v.id}`}>{v.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
