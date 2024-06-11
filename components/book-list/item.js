import React from 'react';
// 因為使用import圖片的方式，所以需要引入Image元件
import Image from 'next/image';
// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';
export default function Item({ book, handleToggleFav }) {
  return (
    <>
      {' '}
      <tr>
        <td>{book.isbn}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>
          <Image
            onClick={() => {
              handleToggleFav(book.isbn);
            }}
            src={book.fav ? bookmarkIconFill : bookmarkIcon}
            alt=""
          />
        </td>
      </tr>
    </>
  );
}
