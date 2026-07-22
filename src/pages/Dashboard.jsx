export default function Dashboard() {
  return (
    <div style={{ padding: '0px 24px', maxWidth: 1000, margin: '0 auto' }}>
      
      <div className="top-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32, paddingTop: 24 }}>
        <div className="search-bar" style={{ position: 'relative', width: 300 }}>
          <i className="fa-solid fa-magnifying-glass" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }}></i>
          <input type="text" placeholder="ค้นหาฝ่าย หรืองาน..." style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: 20, border: '1px solid #e2e8f0', outline: 'none' }} />
        </div>
        <div className="header-actions" style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <button style={{ background: 'transparent', border: 'none', position: 'relative', cursor: 'pointer', color: '#db2777' }}>
            <i className="fa-regular fa-bell" style={{ fontSize: 20 }}></i>
            <span style={{ position: 'absolute', top: -4, right: -4, background: '#ef4444', width: 8, height: 8, borderRadius: '50%' }}></span>
          </button>
          <button className="btn-warning" style={{ background: '#eab308', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: 20, fontWeight: 'bold', display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
            <i className="fa-solid fa-bullhorn"></i> สร้างประกาศ
          </button>
        </div>
      </div>

      <section className="page-section active">
        <h1 className="page-title" style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24, color: '#1e293b' }}>
          ศูนย์กลางข้อมูลรุ่น (Executive Summary)
        </h1>
        
        <div style={{ marginBottom: 24 }}>
          {/* Announcement 1 */}
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: 16, borderRadius: 8, marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative' }}>
            <div style={{ fontSize: 24, color: '#eab308' }}><i className="fa-solid fa-bullhorn"></i></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: 16, color: '#9a3412' }}>รับสมัครพี่bm32รับน้องbm34งานFirst meet</h3>
                <span style={{ fontSize: 12, color: '#b45309' }}>โดย เฟิร์ส • 4/6/2569</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#b45309', lineHeight: 1.6 }}>
                ตอนนี่ 33 ได้ไฟนอลกิจกรรมฐานภาคเช้าแล้วค่ะ โดยกิจกรรมฐานแบ่งออกเป็น 8 ฐาน <br/>
                - พี่ปีสอง 6 ฐาน (เรียบร้อยแล้ว)<br/>
                - พี่ปีสาม 1 ฐาน<br/>
                - พี่คลินิก 1 ฐาน
              </p>
              <div style={{ marginTop: 8, fontSize: 13, color: '#9a3412', fontWeight: 'bold', cursor: 'pointer' }}>รายละเอียด... <span style={{ textDecoration: 'underline' }}>อ่านเพิ่มเติม</span></div>
            </div>
            <i className="fa-solid fa-trash" style={{ color: '#ef4444', position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}></i>
          </div>

          {/* Announcement 2 */}
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: 16, borderRadius: 8, marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative' }}>
            <div style={{ fontSize: 24, color: '#eab308' }}><i className="fa-solid fa-bullhorn"></i></div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: 16, color: '#9a3412' }}>ประกาศ<br/>ขออนุญาตประชาสัมพันธ์รับสมัครสตาฟ NMU Openhouse ฐาน "Clinic"ครับ ประกอบไปด้วยฐานเย็บแผล และฐานเจาะเลือด</h3>
                <span style={{ fontSize: 12, color: '#b45309' }}>โดย เฆม (ประธาน) • 4/6/2569</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#b45309', lineHeight: 1.6 }}>
                เนื่องจากมีการปรับเพิ่มฐาน จึงต้องการสตาฟเพิ่... <span style={{ textDecoration: 'underline', fontWeight: 'bold' }}>อ่านเพิ่มเติม</span>
              </p>
            </div>
            <i className="fa-solid fa-trash" style={{ color: '#ef4444', position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}></i>
          </div>

          {/* Announcement 3 */}
          <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: 16, borderRadius: 8, marginBottom: 16, display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative' }}>
            <div style={{ fontSize: 24, color: '#eab308' }}>📬</div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3 style={{ margin: '0 0 8px 0', fontSize: 16, color: '#9a3412' }}>สำนักงานเขตดุสิตฝากประชาสัมพันธ์ รับสมัครนักศึกษาเป็นกรรมการหน่วยเลือกตั้งมีค่าตอบแทนอ่านรายละเอียดในฟอร์ม</h3>
                <span style={{ fontSize: 12, color: '#b45309', textAlign: 'right' }}>โดย เฆม (ประธาน) •<br/>4/6/2569</span>
              </div>
              <p style={{ margin: 0, fontSize: 14, color: '#b45309', lineHeight: 1.6 }}>
                รับสมัครวันนี้ - ถึงวันที่ 4 มิ.ย. 69 เวลา 15.00 น.
              </p>
              <div style={{ marginTop: 8, fontSize: 13, color: '#b45309' }}>ลิงก์สมัคร <a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>https://docs.google.com/forms/d/e/1FAIpQL...</a> <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>อ่านเพิ่มเติม</span></div>
            </div>
            <i className="fa-solid fa-trash" style={{ color: '#ef4444', position: 'absolute', top: 16, right: 16, cursor: 'pointer' }}></i>
          </div>
        </div>

        {/* Complaint Box */}
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: 20 }}>
          <h3 style={{ color: '#1d4ed8', margin: '0 0 16px 0', fontSize: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="fa-solid fa-box-archive"></i> กล่องร้องเรียนและเสนอแนะ (เปิดสาธารณะ)
          </h3>
          <div style={{ display: 'flex', gap: 12 }}>
            <select style={{ padding: '10px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none', background: '#f8fafc', color: '#475569', minWidth: 150 }}>
              <option>SE ปัญหาการเรียน</option>
            </select>
            <input type="text" placeholder="พิมพ์เรื่องที่ต้องการร้องเรียน หรือ เสนอแนะ..." style={{ flex: 1, padding: '10px 16px', borderRadius: 6, border: '1px solid #cbd5e1', outline: 'none' }} />
            <button style={{ background: '#0ea5e9', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 20, fontWeight: 'bold', display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer' }}>
              <i className="fa-solid fa-paper-plane"></i> ส่งเรื่อง
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
