# A Smart Printing Service for Students at HCMUT (HCMUT SSPS)

----

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

### Use-case diagram toàn hệ thống

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/dhsnijwg.png?raw=true)

### Use-case diagram chức năng in tài liệu

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/xt3hvirs.png?raw=true)

----

## 2. System Modeling

---

### 2.1 Activity Diagram
![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/qntm2yma.png?raw=true)
Chức năng in tài liệu yêu cầu sinh viên phải đủ các điều kiện bao gồm : vượt qua hệ thống xác thực tập trung HCMUT-SSO, số dư đủ để in số trang tài liệu yêu cầu, máy in được sinh viên chọn phải sẵn sàng để thực hiện in. Sau khi xác minh đủ các điều kiện để in tài liệu, quá trình in tài liệu sẽ được thực hiện, hệ thống sẽ trừ số trang in vào số dư tài khoản của sinh viên, sau đó sinh viên có thể nhận tài liệu tại máy in đã được chọn in.

### 2.2 Sequence Diagram

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/mjwj1kbu.png?raw=true)

Chức năng in tài liệu yêu cầu sinh viên được thực hiện theo tuần tự: vượt qua hệ thống xác thực tập trung HCMUT-SSO, số dư đủ để in số trang tài liệu yêu cầu. Sau khi xác minh đủ các điều kiện để in tài liệu, quá trình in tài liệu sẽ được thực hiện, hệ thống sẽ trừ số trang in vào số dư tài khoản của sinh viên, sau đó sinh viên có thể nhận tài liệu tại máy in đã được chọn in.

### 2.3 Class Diagram
Class diagram cho module in tài liệu, bao gồm các stakeholder và các class cho kiểm tra đăng nhập, in, kiểm tra thanh toán, lưu lịch sử in và quản lý máy in.

---

## 3. Architecture Design

### 3.1 Layered Architecture Design

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/szyzdby5.png?raw=true)

- **User Interface Layer**:
Giao diện người dùng của hệ thống HCMUT-SSPS sẽ được xây dựng dưới dạng ứng dụng web có hai phân khu chính: dành cho sinh viên và dành cho cán bộ quản lý. Sinh viên được phép truy cập các chức năng như: in ấn, xem lịch sử in và thực hiện thanh toán. Giao diện cán bộ quản lý sẽ bao gồm các chức năng như: quản lý máy in, cấu hình hệ thống, và xem báo cáo thống kê. Mỗi chức năng sẽ được thiết kế thành một trang riêng biệt để dễ dàng truy cập. Giao diện sẽ áp dụng kỹ thuật responsive, nghĩa là tự điều chỉnh để hiển thị tốt trên cả màn hình máy tính, máy tính bảng và điện thoại. User Interface layer sẽ được liên kết trực tiếp tới Web Services layer.

- **Web Services Layer**:
Web Service sẽ được tổ chức thiết kế theo REST API, sử dụng các chức năng lõi ở lớp bên dưới nó để phục vụ cho yêu cầu API từ lớp User Interface phía trên. Lớp Web Services sẽ không được phép tương tác trực tiếp với Database hay các dịch vụ API bên ngoài như BK-Pay và HCMUT-SSO, nó chỉ được sử dụng các chức năng lõi ở lớp System Core Utilities ngay bên dưới nó để tương tác gián tiếp tới các thành phần ở lớp dưới. Điều này giúp nâng cao tính bảo mật và tính tách biệt ở mỗi lớp, cho phép ta có thể nâng cấp thay đổi hoàn toàn một lớp miễn là nó tương thích với hai lớp tiếp xúc trực tiếp với nó.

- **Data Storage**:
Hệ thống HCMUT-SSPS sẽ sử dụng cơ sở dữ liệu quan hệ MySQL để lưu trữ các dữ liệu bao gồm thông tin sinh viên, cán bộ quản lý, dữ liệu máy in, lịch sử in ấn, các giao dịch thanh toán, … và các dữ liệu khác. 
Khối Database Management ở lớp dưới cùng sẽ đảm nhận vai trò tương tác trực tiếp với cơ sở dữ liệu. Mọi hành động muốn tương tác với cơ sở dữ liệu từ lớp phía trên đều cần phải thông qua sự quản lý của khối này.
Hệ thống sẽ áp dụng các biện pháp chuẩn hóa dữ liệu để giảm thiểu trùng lặp, đồng thời có các kế hoạch sao lưu định kỳ để có thể phục hồi dữ liệu và đảm bảo toàn vẹn dữ liệu trong trường hợp có sự cố xảy ra.

- **External Services/APIs**:
Hệ thống sẽ tích hợp với các dịch vụ bên ngoài như HCMUT-SSO và BK-Pay thông qua các API để thực hiện xác thực và thanh toán. Mỗi API này sẽ được quản lý và kiểm soát thông qua một khối trong lớp dưới cùng. Các tiếp cận này giúp đảm bảo rằng các dịch vụ bên ngoài được tích hợp an toàn, dễ dàng quản lý và giảm thiểu rủi ro bảo mật.


### 3.2 Student Printing Document Architecture

![alt text](https://github.com/akngg/se_ssps_241/blob/main/materials/img/ixibur2i.png?raw=true)

Sinh viên đăng nhập được SSO xác nhận và gửi yêu cầu in đến SSMS. Hệ thống xác thực thông tin và kiểm tra số dư tài khoản qua Balance Manager. Nếu có đủ số dư, yêu cầu in sẽ được thông qua và gửi tới Printer để in. Cuối cùng, lịch sử in được ghi lại trong Printing History Manager.

---
end
