# Report

## A Smart Printing Service for Students at HCMUT (HCMUT SSPS)

### Danh sách thành viên
| Họ và Tên       | MSSV    |
|------------------|---------|
| Nguyễn Quốc Tuấn | 2112585 |
| Nguyễn Minh Ngọc | 2212263 |
| Nguyễn Anh Kiệt  | 2211758 |

---

## 1. Requirements Elicitation

---

### 1.1 Domain Context

#### 1.1.1 Context
Hiện nay, nhu cầu sử dụng tài liệu giấy của sinh viên HCMUT gia tăng vì nhiều lý do như: 
- Tiện theo dõi và ghi chú kịp bài giảng.
- Đọc và học đỡ đau mắt.
- In tài liệu đi thi. 

Điều này dẫn đến nhu cầu có một hệ thống in ấn thông minh (Student Smart Printing Service - SSPS).

#### 1.1.2 Stakeholders and Needs
- **Sinh viên**: Dịch vụ in thân thiện, tiện lợi, dễ dàng thay đổi cài đặt in (in 1 hay 2 mặt, in màu, số bản in...).
- **SPSO (Student Printing Service Officer)**: Quản lý máy in, lịch sử in ấn, và số trang in.

#### 1.1.3 Stakeholders and Benefits
- **Sinh viên**: Tiết kiệm thời gian, công sức, theo dõi số trang in, lưu tài liệu đã in.
- **SPSO**: Quản lý hiệu quả, thống kê lịch sử, đảm bảo chất lượng dịch vụ.

---

### 1.2 Describe Requirements

#### 1.2.1 Functional Requirements
- **Sinh viên**:
  - Đăng nhập và đăng xuất.
  - Cập nhật thông tin tài khoản.
  - Theo dõi tài liệu, lịch sử in.
  - Mua trang in.
  - Kiểm tra cài đặt in.
- **SPSO**:
  - Theo dõi thông tin máy in.
  - Quản lý máy in (thêm, bớt, vô hiệu).
  - Kiểm tra cài đặt và tệp tin in.

#### 1.2.2 Non-Functional Requirements
- Hệ thống có uptime trên 99.5%/năm.
- Phục vụ 300 người dùng đồng thời.
- Đảm bảo xác thực qua HCMUT_SSO.
- Hỗ trợ sử dụng trên website và ứng dụng di động.

---

### 1.3 Use-case Diagram
Các use-case chính:
- Đăng nhập/Đăng ký.
- Mua thêm trang in.
- In tài liệu.
- Xem lịch sử in.
- Quản lý máy in.
- Chỉnh sửa cài đặt hệ thống.
- Xem báo cáo lịch sử hoạt động.

---

## 2. System Modeling

---

### 2.1 Activity Diagram
Mô tả hoạt động in tài liệu: Sinh viên phải xác thực thành công qua HCMUT_SSO, có số dư đủ, chọn máy in sẵn sàng, sau đó in tài liệu và trừ số dư.

### 2.2 Sequence Diagram
Các bước tuần tự để in tài liệu:
1. Sinh viên xác thực.
2. Hệ thống kiểm tra số dư.
3. Tiến hành in.
4. Ghi lịch sử in.

### 2.3 Class Diagram
Các class bao gồm:
- Sinh viên, máy in, quản lý lịch sử in, kiểm tra đăng nhập, thanh toán.

---

## 3. Architecture Design

### 3.1 Layered Architecture Design
- **User Interface Layer**: Giao diện cho sinh viên và quản lý, hỗ trợ responsive trên PC và di động.
- **Web Services Layer**: REST API kết nối các lớp chức năng.
- **Data Storage**: Dùng MySQL, hỗ trợ sao lưu và quản lý dữ liệu.
- **External Services/APIs**: Tích hợp với HCMUT_SSO và BK-Pay.

### 3.2 Student Printing Document Architecture
Sơ đồ Component mô tả:
- Sinh viên gửi yêu cầu in.
- Hệ thống xác thực, kiểm tra số dư qua Balance Manager.
- Thực hiện in và ghi vào lịch sử in.

---

## 4. Implementation

### Sprint 1
- Chi tiết triển khai sprint đầu tiên.

### Sprint 2
- Chi tiết triển khai sprint thứ hai.
