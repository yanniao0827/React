import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import data from '@/data/products.json';

export default function Detail() {
  //宣告路由
  //宣告兩個屬性：
  //1、router.query:是物件，包含pid屬性
  //2、router.isReady:布林值，初始是false，在完成水和作用後才會變成true，也就是網頁會渲染兩次，第一次渲染時路由是products/[pid]，第二次渲染的路由才是products/(商品正的id)
  const router = useRouter();
  const [products, setProduct] = useState({
    id: 0,
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  });

  //使用useEffect監聽router.isReady變動
  useEffect(() => {
    if (router.isReady) {
      //這裡可以得到router.query(pid屬性)
      console.log(router.query);
      const { pid } = router.query;
      const nextProduct = data.find((v) => v.id === Number(pid));
      //   如果沒找到資料就擋下來
      if (nextProduct) {
        setProduct(nextProduct);
      }
    }
    // 讓eslint略過一行檢查:
    // eslint-disable-next-line
  }, [router.isReady]);
  return (
    <>
      <h1>商品內頁</h1>
      <hr />
      <h2>{products.name}</h2>
      <p>ID:{products.id}</p>
      <p>價格:{products.price}</p>
    </>
  );
}
