import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "../Styles/general.css";

function Dashboard(props) {
    return (
        <div className="content">
            <div className="section student">
                <h2>SINH VIÊN</h2>
                <p>Chức năng dành cho sinh viên</p>
                <Link to="/print">
                    <div className="card">In tài liệu</div>
                </Link>
                <div className="card">Mua trang in</div>
                <div className="card">Thông tin cá nhân</div>
            </div>

            <div className="section staff">
                <h2>NHÂN VIÊN</h2>
                <p>Chức năng dành cho người quản lý</p>
                <div className="card">Quản lý máy in</div>
                <div className="card">Quản lý cài đặt</div>
                <div className="card">Báo cáo hoạt động</div>
            </div>
        </div>
    );
}
export default Dashboard;