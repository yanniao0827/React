import List from '@/components/context-a/list';
// 用於取代a元件的特別元件，可以在不同頁面保持住狀態
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page2() {
  const router = useRouter();
  return (
    <>
      <h1>Page2(Context範例-a)</h1>
      <List />
      <hr />
      <a href="/cs-0612/context-a/page1">Page1(a標記)</a>
      <br />
      {/*  用於取代a元件的特別元件，可以在不同頁面保持住狀態 */}
      <Link href="/cs-0612/context-a/page1">Page1(Link元件)</Link>
      <br />
      <button
        onClick={() => {
          alert('welcome');
          if (confirm('sure?')) {
            // 連至page1
            router.push('/cs-0612/context-a/page1');
          }
        }}
      >
        Page1
      </button>
    </>
  );
}
