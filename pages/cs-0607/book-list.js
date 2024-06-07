import { useState } from 'react';
import Image from 'next/image';

// 範例資料
import data from '@/data/books.json';

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg';
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg';

export default function BookList() {
  // 設定表格的初始狀態，原本的json資料裡面沒有收藏欄，所以用map的方法先抓books資料庫面的資料並且加上fav欄位，並將該欄位的初始狀態設定成false
  const initState = data.map((v, i) => {
    return { ...v, fav: false };
  });

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
          {books.map((v, i) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    onClick={() => {
                      handleToggleFav(v.isbn);
                    }}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
