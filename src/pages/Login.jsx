import { useState } from "react";

export default function Login({ onLogin }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!studentId || !password) {
      alert("กรุณากรอกรหัสนักศึกษาและรหัสผ่าน");
      return;
    }
    
    // Original logic: admin is bm32, user is 1111
    let isValid = false;
    if (password === 'bm32' || password === '1111') {
      isValid = true;
    }

    if (isValid) {
      localStorage.setItem("medsyncUser", studentId);
      onLogin(studentId);
    } else {
      alert("รหัสนักศึกษา หรือ รหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center', background: 'var(--bg-color)' }}>
      <div className="login-card" style={{ background: 'white', padding: 40, borderRadius: 16, textAlign: 'center', boxShadow: 'var(--shadow-lg)', width: '100%', maxWidth: 400 }}>
        <img src="/bm32-logo.png" alt="BM32 Logo" onError={(e) => e.target.src = 'https://cdn-icons-png.flaticon.com/512/847/847969.png'} style={{ width: 100, height: 100, borderRadius: '50%', marginBottom: 16, border: '4px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
        <h1 style={{ marginBottom: 8, fontSize: '24px' }}>เข้าสู่ระบบ MedSync32</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 32 }}>แพลตฟอร์มประสานงานรุ่นคณะแพทย์</p>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <input
            type="text"
            placeholder="รหัสนักศึกษา (เช่น 6701101076)"
            value={studentId}
            onChange={e => setStudentId(e.target.value)}
            style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
          />
          <input
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ padding: 12, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }}
          />
          <button type="submit" className="btn-primary" style={{ padding: 16, fontSize: 16, fontWeight: 'bold' }}>
            <i className="fa-solid fa-right-to-bracket"></i> เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  );
}
