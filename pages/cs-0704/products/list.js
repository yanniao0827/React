import { useEffect, useState } from 'react';
// import data from '@/data/products.json';
import Link from 'next/link';

export default function List() {
  // 宣告狀態為空陣列
  // 需要注意:初始值至少要是空白陣列，初次渲染時是用初始值，需要去對應伺服器回應的資料類型
  // 注意2：應用程式執行過程中要保持資料類型為陣列

  const [total, setTotal] = useState(0); // 總筆數
  const [pageCount, setPageCount] = useState(0); // 總頁數
  const [products, setProducts] = useState([]); // 商品資料陣列

  // 製作分頁，一頁想看到10筆資料
  const [page, setPage] = useState(1); //目前是第幾頁
  const [perpage, setPerpage] = useState(10);

  const getProducts = async (params = {}) => {
    const baseURL = 'http://localhost:3005/api/my-products';

    // URLSearchParams是一種查詢字串的物件
    const searchParams = new URLSearchParams(params);

    // 生成查詢字串
    const url = `${baseURL}?${searchParams.toString}`;
    try {
      const res = await fetch(url);
      const resData = await res.json();

      if (resData.status === 'success') {
        setPageCount(resData.data.pageCount);
        setTotal(resData.data.total);
        // 設定狀態前先檢查資料類型是否是陣列，做基本保護，如果不是陣列的話，呼叫map會導致崩潰
        if (Array.isArray(resData.data.products)) {
          setProducts(resData.data.products);
        }
      }
      // console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    const params = { page, perpage };
    getProducts(params);
    //didMount
  }, [page, perpage]);

  return (
    <>
      <h1>商品列表</h1>
      <hr />
      <button
        onClick={() => {
          // 最小就是第一頁
          const nextPage = page - 1 > 1 ? page : 1;
          setPage(nextPage);
        }}
      >
        前一頁
      </button>
      <button
        onClick={() => {
          // 不可以超過最大頁數
          const nextPage = page + 1 < pageCount ? page + 1 : pageCount;
          setPage(nextPage);
        }}
      >
        後一頁
      </button>
      目前頁面：{page}/總頁數{pageCount}/總筆數{total}
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
