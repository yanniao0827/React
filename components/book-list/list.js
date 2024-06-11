import { useState } from 'react';
import data from '@/data/books.json';

// 下面兩者寫法相同，因為undex是索引檔，所以可寫可不寫
// import Item from './item/index';
import Item from './item';

export default function List() {
  // 設定表格的初始狀態，原本的json資料裡面沒有收藏欄，所以用map的方法先抓books資料庫面的資料並且加上fav欄位，並將該欄位的初始狀態設定成false
  const initState = data.map((v, i) => {
    return { ...v, fav: false };
  });

  // 宣告狀態 因為需要加入收藏(畫面上需要改變)，所以導入的資料需要轉化為狀態
  const [books, setBooks] = useState(initState);
  const handleToggleFav = (isbn) => {
    const nextBooks = books.map((v, i) => {
      // 如果符合(isbn=傳入isbn)，回傳修改其中屬性fav的值作邏輯反相
      if (v.isbn === isbn) return { ...v, fav: !v.fav };
      // 否則保持原本的物件值
      else return v;
    });

    setBooks(nextBooks);
  };
  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <Item
                key={book.isbn}
                book={book}
                handleToggleFav={handleToggleFav}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
