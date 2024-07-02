import { useState } from 'react';

export default function LoginForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  // 記錄錯誤訊息用
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // 顯示密碼使用
  const [showPassword, setShowPassword] = useState(false);

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    // 可以用e.target來觀察或檢測是哪個欄位觸發事件
    // console.log(e.target.name, e.target.type, e.target.value)

    // ES6中的特性: Computed Property Names(計算得出來的屬性名稱)
    // [e.target.name]: e.target.value
    // ^^^^^^^^^^^^^^^ 這裡可以動態代入變數值或表達式，計算出物件屬性名稱(字串)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // 先阻擋form表單元素的預設送出行為
    e.preventDefault();

    // 表單檢查 ---START
    // 建立一個新錯誤訊息物件
    const newErrors = { username: '', password: '' };

    // 開始檢查
    if (!user.username === '') {
      newErrors.username = '請填寫帳號';
    }

    if (user.password.length > 10 || user.password.length < 6) {
      newErrors.password = '密碼長度需介於6至10個字元';
    }

    if (!user.password) {
      newErrors.password = '寫密碼';
    }
    // 檢查完成，設定到狀態中呈現
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((v) => v);

    if (hasErrors) {
      alert('錯誤');
      return;
    }

    // 表單檢查 ---END
    alert('送server');
  };
  return (
    <>
      <h1>登入表單</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            帳號:{' '}
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="error">{errors.username}</div>
        <div>
          <label>
            {' '}
            密碼:{' '}
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleFieldChange}
            />
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => {
                setShowPassword(!showPassword);
              }}
            />
            顯示密碼
          </label>
        </div>
        <div className="error">{errors.password}</div>
        <div>
          {/* 在form表單元素中的button建議加上類型type，沒寫或預設是submit，點按都會觸發提交submit事件 */}
          <button type="submit">登入</button>
        </div>
      </form>
      <style jsx>
        {`
          .error {
            color: tomato;
            font-size: 12px;
            height: 18px;
          }
        `}
      </style>
    </>
  );
}
