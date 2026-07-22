import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';

// Placeholder for Schedules page
const Schedules = () => (
  <div>
    <div className="page-header">
      <h1>ตารางเวร</h1>
      <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>จัดการตารางเวรนักศึกษาแพทย์</p>
    </div>
    <div style={{ background: "white", padding: "40px", textAlign: "center", borderRadius: "8px", color: "var(--text-muted)" }}>
      ส่วนจัดการตารางเวรกำลังพัฒนา
    </div>
  </div>
);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  if (!isAuthenticated) {
    return <Login onLogin={setIsAuthenticated} />;
  }

  return (
    <BrowserRouter>
      <div className={`app-container ${isSidebarCollapsed ? "sidebar-collapsed" : ""}`} style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-color)' }}>
        
        {/* Sidebar Component */}
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)} />

        <main className={`main-content ${isSidebarCollapsed ? "" : "expanded"}`} style={{ flex: 1 }}>
          
          {/* Top Header */}
          <header className="top-header" style={{ padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--bg-color)', zIndex: 10 }}>
            <div className="search-bar" style={{ position: 'relative', width: 300 }}>
              <i className="fa-solid fa-search" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
              <input type="text" placeholder="ค้นหาฝ่าย หรืองาน..." style={{ width: '100%', padding: '12px 16px 12px 48px', borderRadius: 24, border: '1px solid var(--border-color)', outline: 'none', background: '#fff' }} />
            </div>
            
            <div className="header-actions" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              <button className="mobile-menu-btn" onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}>
                <i className="fa-solid fa-bars"></i>
              </button>
              
              <div className="notification-wrapper" style={{ position: 'relative' }}>
                <button className="icon-btn" style={{ background: 'white', border: '1px solid var(--border-color)', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-main)' }}>
                  <i className="fa-regular fa-bell"></i>
                  <span className="noti-badge" style={{ position: 'absolute', top: -2, right: -2, background: 'var(--danger)', color: 'white', fontSize: 10, width: 18, height: 18, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</span>
                </button>
              </div>

              <button className="btn-warning" style={{ background: 'var(--warning)', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 24, fontWeight: 'bold', display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer', boxShadow: 'var(--shadow-sm)' }}>
                <i className="fa-solid fa-bullhorn"></i> สร้างประกาศ
              </button>
            </div>
          </header>

          {/* Page Content */}
          <div style={{ padding: '0 32px 32px 32px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/schedules" element={<Schedules />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
