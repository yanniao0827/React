import List from '@/components/context-a/list';
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link';

export default function Page2() {
  return (
    <>
      <h1>Page2(Context範例-a)</h1>
      <List />
      <hr />
      <a href="/cs-0612/context-a/page1">Page1(a標記)</a>
      <br />
      {/*  用於取代a元件的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0612/context-a/page1">Page1(Link元件)</Link>
    </>
  );
}
