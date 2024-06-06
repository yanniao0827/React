import { useState } from 'react';

const sample = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
];

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(sample);

  return (
    <>
      <h1>物件陣列(object array)狀態的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' };

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const nextData = [newObj, ...data];

          //3
          setData(nextData);
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' };

          //1 //2
          const nextData = [...data, newObj];

          //3
          setData(nextData);
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          // 1. uuid或nonaid(其它npm套件)
          //const newId = self.crypto.randomUUID()
          // 2. 時間日期物件(Date)物件轉毫秒整數值
          // `+new Date()` 或 `Date.now()`
          // const newId = Number(new Date());
          // 3. 隨機字串(hash字串)
          // const newId = (Math.random() + 1).toString(36).substring(7)
          // 4. 仿照資料表主鍵遞增id(註: 只有id為數字才可以用)
          // 提取data陣列中的id為一個新陣列
          const ids = data.map((v) => v.id);
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1;
          const newObj = { id: newId, text: 'xxx' };
          const nextData = [newObj, ...data];
          setData(nextData);
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const ids = data.map((v) => v.id);
          const newId = data.length > 0 ? Math.max(...ids) + 1 : 1;
          const newObj = { id: newId, text: 'yyy' };
          const nextData = [...data, newObj];
          setData(nextData);
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // 建立一個新陣列，並對原本的的表格資料data進行篩選，如果篩選到內容包含a的資料，把這些資料回傳到新陣列裡面
          const nextData = data.filter((v) => {
            return v.text.includes('a');
          });

          //3 把data的狀態重新設定成新陣列的結果
          setData(nextData);
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          // 篩選出不包含b的資料
          const nextData = data.filter((v) => {
            return v.text !== 'b';
          });

          //3
          setData(nextData);
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // 1、使用filter篩選出id不包含4的資料
          // const nextData = data.filter((v) => {
          //   return v.id !== 4;
          // });
          // setData(nextData);
          // 2、使用for迴圈
          // const nextData = [];
          // for (let i = 0; i < data.length; i++) {
          //   if (data[i].id !== 4) {
          //     nextData.push(data[i]);
          //   }
          // }
          // setData(nextData);
          // 3、使用splice
          const foundIndex = data.findIndex((v) => v.id === 4);
          if (foundIndex > -1) {
            const nextData = JSON.parse(JSON.stringify(data));
            // 刪除 公式: array.splice(deleteIndex, 1)
            nextData.splice(foundIndex, 1);
            setData(nextData);
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          const nextData = data.map((v, i) => {
            if (v.id === 3) return { ...v, text: 'cccc' };
            else return v;
          });
          setData(nextData);
        }}
      >
        8. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([]);
        }}
      >
        9. 清空表格
      </button>
      <br />
      <button
        onClick={() => {
          // 1、slice分割，把原本的表格分割成兩個部分，最後再和新資料一起串起來
          // const foundIndex = data.findIndex((v) => v.id === 2);
          // if (foundIndex > -1) {
          //   // 從找到的索引值產生(切出)兩個子女陣列，aa是要新增的那筆資料前，也就是id為1、2的陣；ab是id為3、4的陣列
          //   // 公式: array.slice(startIndex, endIndex)
          //   // 注意: 不包含endIndex成員
          //   const aa = data.slice(0, foundIndex + 1);
          //   const ab = data.slice(foundIndex + 1);
          //   const newObj = { id: 5, text: 'bbb' };
          //   const nextData = [...aa, newObj, ...ab];
          //   setData(nextData);
          // }
          // 2、for迴圈
          // const nextData = [];
          // for (let i = 0; i < data.length; i++) {
          //   // 固定把data中的成員加到新狀態陣列中
          //   nextData.push(data[i]);
          //   // 如果id=2，在它後面多加一個新物件
          //   if (data[i].id === 2) {
          //     nextData.push({ id: 5, text: 'bbb' });
          //   }
          // }
          // setData(nextData);
          // 3、splice
          const foundIndex = data.findIndex((v) => v.id === 2);
          if (foundIndex > -1) {
            const nextData = JSON.parse(JSON.stringify(data));
            // 插入公式(到索引後面): array.splice(insertIndex+1, 0, value)
            nextData.splice(foundIndex + 1, 0, { id: 5, text: 'bbb' });
            setData(nextData);
          }
        }}
      >
        10. 在id為2後面插入id為5與文字為bbb的物件
      </button>
    </>
  );
}
