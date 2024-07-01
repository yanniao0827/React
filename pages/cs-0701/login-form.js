import { useState } from 'react';

export default function LoginForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
  });

  // 顯示密碼使用
  const [showPassword, setShowPassword] = useState(false);

  // 多欄位共用事件處理函式
  const handleFieldChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h1>登入表單</h1>
      <hr />
      <form onSubmit={() => {}}>
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
        <div>
          {/* 在form表單元素中的button建議加上類型type，沒寫或預設是submit，點按都會觸發提交submit事件 */}
          <button type="submit">登入</button>
        </div>
      </form>
    </>
  );
}
