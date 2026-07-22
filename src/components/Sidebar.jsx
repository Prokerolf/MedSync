import { NavLink } from "react-router-dom";

export default function Sidebar({ isCollapsed, onToggle }) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="BM32 Logo" style={{ width: 36, height: 36, borderRadius: '50%', border: '2px solid white' }} />
          <span style={{ fontWeight: 'bold', fontSize: 18, color: 'var(--primary-color)' }}>MedSync32 🇯🇵</span>
        </div>
        <button className="icon-btn toggle-sidebar-btn" onClick={onToggle} style={{ width: 32, height: 32, fontSize: 14, background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}>
          <i className={`fa-solid ${isCollapsed ? 'fa-chevron-right' : 'fa-chevron-left'}`}></i>
        </button>
      </div>

      <ul className="nav-links">
        <li className="active">
          <i className="fa-solid fa-chart-pie"></i>
          <span>ภาพรวม (Dashboard)</span>
        </li>
        <li>
          <i className="fa-solid fa-calendar-days"></i>
          <span>ตารางเรียน</span>
        </li>
        <li>
          <i className="fa-solid fa-sitemap"></i>
          <span>ข้อมูลแต่ละฝ่าย</span>
        </li>
        <li>
          <i className="fa-solid fa-bullhorn"></i>
          <span>รวมประกาศทั้งหมด</span>
        </li>
        <li style={{ borderLeft: '3px solid var(--danger)', background: 'rgba(239, 68, 68, 0.05)' }}>
          <i className="fa-solid fa-chess-king" style={{ color: 'var(--danger)' }}></i>
          <span style={{ color: 'var(--danger)', fontWeight: 600 }}>Admin Hub</span>
        </li>

        <div className="dept-text" style={{ marginTop: 24, marginBottom: 8, textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--text-muted)' }}>ฝ่ายของคุณ</div>
        
        <li>
          <i className="fa-solid fa-crown" style={{ color: '#3b82f6' }}></i>
          <span>ประธาน/รองประธาน</span>
        </li>
        <li>
          <i className="fa-solid fa-pen-nib" style={{ color: '#ec4899' }}></i>
          <span>เลขานุการ</span>
        </li>
        <li>
          <i className="fa-solid fa-book-open" style={{ color: '#8b5cf6' }}></i>
          <span>วิชาการ</span>
        </li>
        <li>
          <i className="fa-solid fa-people-group" style={{ color: '#f59e0b' }}></i>
          <span>กิจกรรม</span>
        </li>
        <li>
          <i className="fa-solid fa-bullhorn" style={{ color: '#10b981' }}></i>
          <span>ประชาสัมพันธ์ (PR)</span>
        </li>
        <li>
          <i className="fa-solid fa-palette" style={{ color: '#db2777' }}></i>
          <span>Art (ศิลปกรรม)</span>
        </li>
        <li>
          <i className="fa-solid fa-heart-pulse" style={{ color: '#14b8a6' }}></i>
          <span>คุณภาพชีวิต (Welfare)</span>
        </li>
      </ul>

      <div className="user-profile" style={{ display: 'flex', flexDirection: isCollapsed ? 'column' : 'row', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border-color)' }}>
        <img src="https://ui-avatars.com/api/?name=Guest&background=random" alt="Profile" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
        <div className="user-info" style={{ display: isCollapsed ? 'none' : 'flex', flexDirection: 'column' }}>
          <span className="user-name" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 120, fontWeight: 'bold' }}>Guest</span>
          <span className="user-role" style={{ fontSize: 12, color: 'var(--text-muted)' }}>Guest Access</span>
        </div>
        <button style={{ marginLeft: isCollapsed ? 'auto' : 0, background: '#fef2f2', color: '#ef4444', border: '1px solid #fca5a5', borderRadius: 8, padding: isCollapsed ? '6px 10px' : '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }} title="ออกจากระบบ">
          <i className="fa-solid fa-power-off"></i>
          {isCollapsed && <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 600 }}>ออก</span>}
        </button>
      </div>
    </aside>
  );
}
