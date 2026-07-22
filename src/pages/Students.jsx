export default function Students() {
  const students = [
    { id: "6701101001", name: "นักศึกษา 1", year: "ปี 4" },
    { id: "6701101002", name: "นักศึกษา 2", year: "ปี 4" },
    { id: "6701101003", name: "นักศึกษา 3", year: "ปี 5" },
  ];

  return (
    <div>
      <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>รายชื่อนักศึกษา</h1>
          <p style={{ color: "var(--text-muted)", marginTop: "8px" }}>จัดการข้อมูลนักศึกษาแพทย์</p>
        </div>
        <button className="btn" style={{ width: 'auto' }}>+ เพิ่มนักศึกษา</button>
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>รหัสนักศึกษา</th>
            <th>ชื่อ-นามสกุล</th>
            <th>ชั้นปี</th>
            <th>จัดการ</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.year}</td>
              <td>
                <button style={{ background: "none", border: "none", color: "var(--primary)", cursor: "pointer", marginRight: "10px" }}>แก้ไข</button>
                <button style={{ background: "none", border: "none", color: "#ef4444", cursor: "pointer" }}>ลบ</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
