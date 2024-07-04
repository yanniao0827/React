import { useEffect, useState } from 'react';
// import data from '@/data/products.json';
import Link from 'next/link';
import BS5Pagination from '@/components/common/bs5-pagination';

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

  // 排序
  const [orderby, setOrderBy] = useState({ sort: 'id', order: 'asc' });

  const getProducts = async (params = {}) => {
    const baseUrl = 'http://localhost:3005/api/my-products';

    // URLSearchParams是一種查詢字串的物件
    const searchParams = new URLSearchParams(params);
    // 生成查詢字串
    const url = `${baseUrl}?${searchParams.toString()}`;

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
    const params = { page, perpage, sort: orderby.sort, order: orderby.order };
    getProducts(params);
    //didMount
  }, [page, perpage, orderby]);

  return (
    <>
      <h1>商品列表頁</h1>
      <hr />
      <button
        onClick={() => {
          // 最小頁面是1(不能小於1)
          const nextPage = page - 1 > 1 ? page - 1 : 1;
          setPage(nextPage);
        }}
      >
        上一頁
      </button>
      <button
        onClick={() => {
          // 最大頁面是pageCount
          const nextPage = page + 1 < pageCount ? page + 1 : pageCount;
          setPage(nextPage);
        }}
      >
        下一頁
      </button>
      目前頁面 {page} / 總頁數 {pageCount} / 總筆數: {total}
      <div>
        <label>
          排序
          <select
            value={`${orderby.sort},${orderby.order}`}
            onChange={(e) => {
              const tv = e.target.value;
              setOrderBy({
                sort: tv.split(',')[0],
                order: tv.split(',')[1],
              });
            }}
          >
            <option value="id,asc">ID排序(由小到大)</option>
            <option value="id,desc">ID排序(由大到小)</option>
            <option value="price,asc">價格排序(由小到大)</option>
            <option value="price,desc">價格排序(由大到小)</option>
          </select>
        </label>
      </div>
      <ul>
        {products.map((v, i) => {
          return (
            <li key={v.id}>
              <Link href={`/cs-0703/products/${v.id}`}>
                {v.name}/{v.price}
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        {/* 加入分頁列元件 */}
        <BS5Pagination
          forcePage={page - 1}
          onPageChange={(e) => {
            setPage(e.selected + 1);
          }}
          pageCount={pageCount}
        />
      </div>
    </>
  );
}
