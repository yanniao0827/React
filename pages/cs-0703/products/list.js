import { useEffect, useState } from 'react';
// import data from '@/data/products.json';
import Link from 'next/link';

export default function List() {
  // 宣告狀態為空陣列
  // 需要注意:初始值至少要是空白陣列，初次渲染時是用初始值，需要去對應伺服器回應的資料類型
  // 注意2：應用程式執行過程中要保持資料類型為陣列
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const url =
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products';
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      // 設定狀態前先檢查資料類型是否是陣列，做基本保護，如果不是陣列的話，呼叫map會導致崩潰
      if (Array.isArray(data)) {
        setProducts(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProducts();
    //didMount
  }, []);

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
