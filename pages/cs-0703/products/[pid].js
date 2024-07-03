import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import data from '@/data/products.json';
import Loader from '@/components/loader';

export default function Detail() {
  //宣告路由
  //宣告兩個屬性：
  //1、router.query:是物件，包含pid屬性
  //2、router.isReady:布林值，初始是false，在完成水和作用後才會變成true，也就是網頁會渲染兩次，第一次渲染時路由是products/[pid]，第二次渲染的路由才是products/(商品正的id)
  const router = useRouter();
  //物件的初始值
  const [product, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  //設定狀態看資料是否正在載入中，true代表一開始就載入資料，不呈現預設值(id:0)
  const [isLoading, setIsLoading] = useState(true);

  const getProduct = async (pid) => {
    const url =
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/' +
      pid;

    try {
      const res = await fetch(url);
      const data = await res.json();

      // console.log(data);
      // 設定狀態前先檢查資料類型是否是陣列，做基本保護，如果不是陣列的話，呼叫map會導致崩潰
      if (
        typeof data === 'object' &&
        data !== null &&
        !Array.isArray(data) &&
        data.id
      ) {
        // 設定到狀態中 ===> 進入update階段，觸發重新渲染(re-render)
        setProduct(data);
        // 狀態設定完就可以關閉載入中動畫
        setIsLoading(false);
      }
    } catch (e) {
      console.error(e);
    }
  };

  //使用useEffect監聽router.isReady變動
  useEffect(() => {
    if (router.isReady) {
      //這裡可以得到router.query(pid屬性)
      console.log(router.query);
      const { pid } = router.query;
      getProduct(pid);
    }
    //   const nextProduct = data.find((v) => v.id === Number(pid));
    //   //   如果沒找到資料就擋下來
    //   if (nextProduct) {
    //     setProduct(nextProduct);
    //   }

    // 讓eslint略過一行檢查:
    // eslint-disable-next-line
  }, [router.isReady])

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      {/* 用isLoading進行條件式渲染，決定是要呈現內容還是呈現載入中 */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>ID: {product.id}</p>
          <p>價格: {product.price}</p>
        </>
      )}
    </>
  );
}
