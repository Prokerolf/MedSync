import { useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";

export default function Login({ onLogin }) {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const trackAndFetchVisits = async () => {
      try {
        const statsRef = doc(db, 'stats', 'usage');
        // Increment visit if not done in this session
        if (!sessionStorage.getItem('medsync_visited')) {
          await setDoc(statsRef, { visits: increment(1) }, { merge: true });
          sessionStorage.setItem('medsync_visited', 'true');
        }
        
        // Fetch current visits
        const docSnap = await getDoc(statsRef);
        if (docSnap.exists()) {
          setVisits(docSnap.data().visits || 0);
        } else {
          setVisits(1);
        }
      } catch (err) {
        console.warn("Could not fetch stats, maybe missing firebase config", err);
      }
    };
    trackAndFetchVisits();
  }, []);

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

        {/* Public Usage Statistics */}
        <div style={{ marginTop: 40, padding: 24, background: '#f8fafc', borderRadius: 16, border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--primary)' }}>
            <i className="fa-solid fa-chart-line"></i>
            <h3 style={{ fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>สถิติการเข้าใช้งาน</h3>
          </div>
          <div style={{ fontSize: 36, fontWeight: '900', color: '#0f172a', display: 'flex', alignItems: 'baseline', gap: 4 }}>
            {visits > 0 ? visits.toLocaleString() : '-'} <span style={{ fontSize: 14, color: '#64748b', fontWeight: 'normal' }}>ครั้ง</span>
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8' }}>จำนวนเพื่อนๆ ที่เข้ามาใช้งานแพลตฟอร์มนี้</p>
        </div>
      </div>
    </div>
  );
}
