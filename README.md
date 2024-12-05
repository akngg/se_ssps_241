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
Hiện nay, nhu cầu sử dụng tài liệu giấy của sinh viên trường Đại học Bách khoa TP.HCM (HCMUT) càng gia tăng, với nhiều lý do có thể liệt kê như tiện theo dõi và ghi chú kịp với bài giảng trên lớp, in để đọc và học đỡ đau mắt, in tài liệu để đi thi… Nhu cầu càng nhiều, kéo theo các thách thức liên quan đến trải nghiệm dịch vụ in ấn cũng như công tác quản lý tài liệu. Một hệ thống in ấn thông minh (Student Smart Printing Service - SSPS) là cần thiết cho các thách thức và nhu cầu đó.

#### 1.1.2 Stakeholders and Needs
- **Sinh viên**: việc in ấn thân thiện và tiện lợi, có thể theo dõi và dễ dàng thay đổi các cài đặt in ấn như in 1 hay 2 mặt, in màu, in bao nhiêu bản hay bao nhiêu trang.
- **SPSO (Student Printing Service Officer)**: truy cập lịch sử in của sinh viên hay máy in, quản lý các máy in, quản lý số trang in cho sinh viên, theo dõi tình trạng lịch sử in ấn.

#### 1.1.3 Stakeholders and Benefits
- **Sinh viên**: tiết kiệm thời gian và công sức, theo dõi được số trang đã in và còn lại, xem lại được tài liệu đã in.
- **SPSO**: quản lý hiệu quả, lưu và thống kê lịch sử, theo dõi được các đơn hàng và các phản hồi để đảm bảo ổn định về chất lượng.


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

###Use-case diagram toàn hệ thống

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/dhsnijwg.png?raw=true)

###Use-case diagram chức năng in tài liệu

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
