// useState是一種鉤子hooks，是設計來讓韓式行元件可以使用狀態的，如useState、useEffect
import { useState } from 'react'

export default function Counter() {
  // useState(0)讓計數器從0開始
  const [total, setTotal] = useState(0)
  return (
    <>
      <h1>{total}</h1>
      <button
        //   在一班的JS中，設計功能是用addEventListener，但是在react中會使用許多人造事件屬性，如這裡的onClick
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
    </>
  )
}
