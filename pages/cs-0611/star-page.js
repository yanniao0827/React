import { useState } from 'react';

import Star from '@/components/stars';

export default function StarPage() {
  const [productRating2, setProductRating2] = useState(1);
  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組，使用index內的預設值 */}
      <Star />
      <hr />
      {/* 測試組，自行設定最高跟最一開始的星數，也就是parent設定的值 */}
      <Star
        maxCount={8}
        currentRating={productRating2}
        onRatingChange={setProductRating2}
      />
      <button onClick={() => setProductRating2(1)}>快速1</button>
      <button onClick={() => setProductRating2(4)}>快速4</button>
      <button onClick={() => setProductRating2(8)}>快速8</button>
    </>
  );
}
