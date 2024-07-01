import { useState } from 'react';

export default function MyCheckbox() {
  //  radio
  const lunchOptions = ['subway', '全家', '摩斯'];
  const [lunch, setLunch] = useState('');

  //checkbox
  const initState = lunchOptions.map((v, i) => {
    return { id: i + 1, label: v, checked: false };
  });

  const [myLunch, setmyLunch] = useState(initState);

  const handleToggleChecked = (id) => {
    const nextMyLunch = myLunch.map((v, i) => {
      if (v.id === id) return { ...v, checked: !v.checked };
      else return v;
    });

    setmyLunch(nextMyLunch);
  };

  // checkbox 字串陣列
  const [lunchs, setLunchs] = useState(['subway', '全家']);
  const handleCheckboxGroup = (e) => {
    const tv = e.target.value;
    if (lunchs.includes(tv)) {
      const nextDrinks = lunchs.filter((v) => v !== tv);
      setLunchs(nextDrinks);
    } else {
      const nextDrinks = [...lunchs, tv];
      setLunchs(nextDrinks);
    }
  };
  return (
    <>
      <div title="checkbox">
        <h2>多選選擇</h2>
        {myLunch.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                onChange={() => {
                  handleToggleChecked(v.id);
                }}
              />
              {v.label}
            </label>
          );
        })}
        <h2>多選選擇-字串陣列</h2>
        {lunchOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                value={v}
                checked={lunchs.includes(v)}
                onChange={handleCheckboxGroup}
              />
              {v}
            </label>
          );
        })}
      </div>
    </>
  );
}
