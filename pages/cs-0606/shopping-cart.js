import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);
  const handleIncrease = (id) => {
    const newProducts = products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count + 1 };
      else return v;
    });
    setProducts(newProducts);
  };

  const handleDecrease = (id) => {
    const newProducts = products.map((v, i) => {
      if (v.id === id) return { ...v, count: v.count - 1 };
      else return v;
    });
    setProducts(newProducts);
  };

  const handleRemove = (id) => {
    const newProducts = products.filter((v) => {
      return v.id != id;
    });
    setProducts(newProducts);
  };
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncrease(product.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const nextProductCount = product.count - 1;
              if (nextProductCount === 0) {
                handleRemove(product.id);
              } else {
                handleDecrease(product.id);
              }
            }}
          >
            -
          </button>
        </li>
      ))}
    </ul>
  );
}
