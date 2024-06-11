import React from 'react';

import Star from '@/components/stars';

export default function StarPage() {
  return (
    <>
      <h1>星星評分元件測試頁</h1>
      <hr />
      {/* 對照組，使用index內的預設值 */}
      <Star />
      <hr />
      {/* 測試組，自行設定最高跟最一開始的星數，也就是parent設定的值 */}
      <Star maxCount={3} initRating={1} />
      <Star maxCount={6} initRating={5} />
    </>
  );
}
