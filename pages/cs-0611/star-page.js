import { useState } from 'react';

import Star from '@/components/stars';

export default function StarPage() {
  const [productRating1, setProductRating1] = useState(3);
  const [productRating2, setProductRating2] = useState(0);
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
        currentRating={productRating1}
        onRatingChange={setProductRating1}
        fillColor="tomato"
        emptyColor="black"
      />
      <Star
        maxCount={8}
        currentRating={productRating2}
        onRatingChange={setProductRating2}
        fillColor="pink"
        emptyColor="black"
      />
    </>
  );
}
