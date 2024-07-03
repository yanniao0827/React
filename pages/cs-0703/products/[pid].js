import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import data from '@/data/products.json'

export default function Detail() {
  // 第一步:  宣告路由器
  // router.query 物件值，包含了pid屬性
  // router.isReady 布林值，初始為false，如果此頁面完成"水合作用"後，會改變為true，此時才能得到query值
  const router = useRouter();

  // 物件類型的狀態的初始值，建議是一個要描述出裡面有什麼屬性的物件
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  // 與伺服器作fetch獲得資料(建議寫在useEffect上面與外面比較容易維護管理)
  const getProduct = async (pid) => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
      pid;

    // 使用try-catch陳述式，讓和伺服器連線程式作錯誤處理
    try {
      const res = await fetch(url);
      const data = await res.json();

      //console.log(data)

      // 檢查是否為物件資料類型(基本保護)
      if (
        typeof data === 'object' &&
        data !== null &&
        !Array.isArray(data) &&
        data.id
      ) {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
        setProduct(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  // 第二步: 用useEffect監聽router.isReady的變動
  // 樣式3: didMount+didUpdate
  useEffect(() => {
    if (router.isReady) {
      // 這裡可以得到router.query(pid屬性)值
      // 動態路由得到的pid屬性值都是字串值(比對時要小心)
      console.log(router.query);
      // 解構出pid屬性值
      const { pid } = router.query;

      // 呼叫getProduct
      getProduct(pid);
    }
    // 註解: 讓eslint略過一行檢查
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      <h2>{product.name}</h2>
      <p>ID: {product.id}</p>
      <p>價格: {product.price}</p>
    </>
  );
}
