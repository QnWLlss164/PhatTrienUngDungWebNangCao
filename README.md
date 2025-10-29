# PhatTrienUngDungWebNangCao
1. Giới thiệu ngắn gọn

Mục tiêu sản phẩm
Website “quảng bá món ăn địa phương” giúp giới thiệu các món đặc sản và quán ăn địa phương (ví dụ Đà Lạt), để du khách dễ tìm món ăn, địa chỉ quán, đọc review, xem hình ảnh, xem bản đồ chỉ đường và lưu món/quán yêu thích. Mục tiêu phụ là hỗ trợ chuyển đổi số cho các quán ăn truyền thống, quảng bá văn hóa ẩm thực địa phương. 



Hệ thống đồng thời đóng vai trò là nền tảng quản lý nội dung: quản trị viên (Admin / chủ quán) có thể thêm, sửa, xóa món ăn, quán ăn, bài viết blog, và kiểm duyệt đánh giá. 



Đối tượng sử dụng chính

Khách du lịch / người dùng: tìm món ăn/quán ăn, xem chi tiết, đọc bài blog, đánh giá và bình luận. 



Chủ quán / quản trị viên: quản lý nội dung món ăn, quán ăn, bài viết, danh mục và người dùng. 



Các tính năng chính phía người dùng:

Đăng nhập, đăng ký

Tổng quan website

Chi tiết trang món ăn

Chi tiết trang nhà hàng

Chi tiết Blog

Các tính năng chính phía quản trị (dashboard / admin):

Dashboard- thống kê

Quản lý tài khoản

Quản lý loại món ăn

Quản lý nhà hàng

Quản lý món ăn

Quản lý blog

2. Kiến trúc hệ thống

2.1 Sơ đồ tổng thể 

Frontend (Client): Ứng dụng ReactJS. Nó render giao diện người dùng (trang chủ, danh sách món ăn, chi tiết nhà hàng, blog, dashboard admin,...). Ở phía client có các thư mục components, containers, config, apis, assets, hooks, css. containers có nhiệm vụ kiểm tra trạng thái đăng nhập và điều hướng nếu người dùng chưa xác thực.

Backend (Server): API viết bằng Node.js + ExpressJS. Backend nhận request từ frontend, xử lý logic (tìm kiếm món/quán, quản lý người dùng, đánh giá, CRUD nội dung), xác thực JWT, và giao tiếp với database MongoDB.

 Database (MongoDB): Lưu trữ món ăn đặc sản, quán ăn, tài khoản người dùng/quản trị, đánh giá/bình luận và danh sách yêu thích. MongoDB cho phép mở rộng ngang (sharding), có replication, truy vấn nhanh và linh hoạt schema.

 Dịch vụ bản đồ / định vị: Geocoding API (Google Maps API / Mapbox) để lấy thông tin vị trí từ toạ độ lat/long và hiển thị bản đồ chỉ đường tới quán ăn. Endpoint /api trong GeocodeRouter gọi Google Geocoding API và cần API key.

 2.2 Tech stack

Frontend: ReactJS, ChartJS, tích hợp Google Maps API / Mapbox. 


Backend: Node.js, ExpressJS (REST API). 


Database: MongoDB (NoSQL). 


Auth & bảo mật: JWT để quản lý phiên đăng nhập, phân quyền (user vs admin), xác thực mỗi request qua token kèm theo. Hệ thống mã hoá mật khẩu và dùng token để quyết định ai được truy cập các route cần quyền Admin. 


Triển khai / DevOps: Docker (dự kiến dùng để đóng gói và triển khai backend + database), GitHub để lưu mã nguồn. 

2.3 Lý do chọn công nghệ (theo tài liệu + phân tích)

ReactJS: tạo giao diện giàu hình ảnh, nhiều trang khác nhau (trang món ăn, nhà hàng, blog, dashboard) nhưng vẫn thống nhất về màu sắc, typography, hiệu ứng, trải nghiệm responsive. 

 

Node.js / ExpressJS: xử lý nhiều request đồng thời theo mô hình non-blocking, rất phù hợp cho API hiệu suất cao và realtime-style (ví dụ cập nhật đánh giá, xem dữ liệu động). 



MongoDB: linh hoạt schema (dễ lưu món ăn / quán ăn với nhiều thuộc tính khác nhau), dễ mở rộng ngang khi dữ liệu lớn lên, và hỗ trợ replication để đảm bảo tính sẵn sàng. 


JWT + phân quyền: bắt buộc vì hệ thống có 2 vai trò chính “người dùng” và “admin”; một số API chỉ cho admin gọi (ví dụ /api/all, xóa món ăn/quán ăn). 

Tập trung UI/UX: tài liệu nhấn mạnh yêu cầu tải trang nhanh (<3 giây), tương thích đa thiết bị, giao diện đơn giản và thân thiện. 

3. Hướng dẫn chạy nhanh

Hướng dẫn chạy chương trình Nhóm 8:

B1: vào thư mục \1_Source\Server chạy lệnh npm i, sau đó chạy lệnh npm run server

B2: vào thư mục \1_Source\Client\food_promote chạy lệnh npm i, sau đó chạy lệnh npm start

B3: vào thư mục \1_Source\Dashboard\admin_dashboard chạy lệnh npm i, sau đó chạy lệnh npm start

B4: vào postman lần lượt gửi các POST sau:

	http://localhost:8080/api/import/user
  
	http://localhost:8080/api/import/post
  
	http://localhost:8080/api/import/restaurant
  
	http://localhost:8080/api/import/categories
  
	http://localhost:8080/api/import/product
  
B5: truy cập http://localhost:3000/

4. Tài khoản demo

Tài khoản demo:
 - Admin: admin - admin
 - User: tmquyen - 123456, hieu1904 - 123456
5. Cấu trúc thư mục

   Repo gồm 3 phần chính:

1_SOURCE/

├─ admin_dashboard/     → Frontend Admin (quản trị nội dung)

├─ Client/food_promote/ → Frontend Public (website cho người dùng cuối)

└─ Server/              → Backend API (Express + MongoDB)

1. admin_dashboard (Trang quản trị)
admin_dashboard/

├─ public/          → index.html

├─ src/

│  ├─ api/          → gọi API (userAPI, productAPI,...)

│  ├─ assets/       → hình ảnh / icon dùng trong dashboard

│  ├─ components/   → component dùng lại (table, modal, form,…)

│  ├─ enums/        → hằng số / ROLE / STATUS (hiện đang là "emun")

│  ├─ features/     → logic theo chức năng (vd quản lý user, món ăn)

│  ├─ hooks/        → custom hooks

│  ├─ layouts/      → khung giao diện admin (sidebar, header)

│  ├─ pages/        → từng màn hình (User Management, Category, Post,…)

│  ├─ routes/       → định tuyến + bảo vệ route admin

│  └─ utils/        → hàm tiện ích

├─ App.js / index.js

└─ package.json


Vai trò: Dành cho Admin để xem dashboard thống kê và CRUD: danh mục, món ăn, nhà hàng, bài viết, người dùng.

2. Client/food_promote (Website người dùng)

Client/food_promote/

├─ public/          → index.html

├─ src/

│  ├─ apis/         → gọi API public (món ăn, quán ăn, blog,…)

│  ├─ assets/       → hình ảnh, banner, icon

│  ├─ common/       → thành phần chung/constant nhỏ

│  ├─ components/   → component UI tái sử dụng (cards, rating,…)

│  ├─ hook/         → custom hooks (fetch data, pagination,…)

│  ├─ layouts/      → header/footer/layout trang công khai

│  ├─ pages/        → Home, Danh sách món, Chi tiết nhà hàng, Blog, Profile

│  └─ utils/        → hàm tiện ích (format dữ liệu, v.v.)

├─ App.js / index.js

└─ package.json


Vai trò: Giao diện public cho du khách: xem món đặc sản, địa điểm ăn uống, bản đồ chỉ đường, đọc blog, đánh giá, lưu yêu thích.

3. Server (Backend API)
   
Server/

├─ config/

│  └─ MongoDb.js        → kết nối MongoDB

├─ data/                → dữ liệu mẫu (category, product, restaurant,...)

├─ Middleware/

│  ├─ AuthMiddleware.js → kiểm tra JWT / phân quyền admin

│  ├─ Errors.js         → xử lý lỗi chung

│  ├─ Upload.js         → upload hình (Cloudinary/multer)

│  └─ UploadExcel.js    → import dữ liệu từ Excel

├─ Models/              → schema Mongoose (User, Product, Restaurant,...)

├─ Routes/              → các REST API (UserRouter, ProductRouter,...)

├─ utils/

│  ├─ cloudinary.js     → cấu hình upload ảnh

│  └─ generateToken.js  → tạo JWT

├─ DataImport.js        → script seed DB từ thư mục /data

├─ index.js             → khởi động Express server

├─ .env                 → MONGO_URI, JWT_SECRET, CLOUDINARY_*, PORT,...

├─ Procfile / vercel.json

└─ package.json


Vai trò:

Cung cấp API cho cả website public và dashboard admin

Xử lý đăng ký / đăng nhập / JWT

CRUD món ăn, quán ăn, bài viết, danh mục

Review, yêu thích, tìm kiếm, gợi ý, định vị bản đồ

Seed dữ liệu nhanh qua DataImport.js

6. Kịch bản demo (use cases chính)

Kịch bản 1: Du khách tìm món ăn đặc sản và đường đi đến quán

Bước 1: Vào trang chủ / trang “Món ăn địa phương”
UI hiển thị slider danh mục đầu tiên (tối đa 10 danh mục đầu tiên cho trang chủ). API GET /api/getSlide trong CategoriesRouter được dùng để lấy dữ liệu này. 


UI cũng hiển thị danh sách món ăn nổi bật, hình ảnh món ăn 


Bước 2: Tìm kiếm món ăn cụ thể
Frontend gọi ProductRouter:

GET /api/search?q=<tên>&page=<số trang> để tìm món ăn theo tên/mô tả, có phân trang. 



GET /api/:id để lấy chi tiết món ăn, kèm thông tin nhà hàng (có restaurantName). 




UI trang chi tiết món ăn hiển thị mô tả, hình ảnh, đánh giá từ người dùng và gợi ý món tương tự . 



Bước 3: Xem quán ăn/nhà hàng bán món đó

Frontend gọi RestaurantRouter:

GET /api/search?q=<từ-khóa>&page=<trang> để tìm nhà hàng. 


GET /api/:id để xem thông tin chi tiết nhà hàng. 


UI trang chi tiết nhà hàng hiển thị món ăn đặc trưng, bình luận, và bản đồ chỉ đường . 


Bước 4: Xem bản đồ / chỉ đường đến quán
Frontend gọi GeocodeRouter:

GET /api (GeocodeRouter) → server gọi Google Geocoding API với toạ độ lat/long, yêu cầu API key của Google. 


UI hiển thị map + marker dẫn đường tới quán . 


Bước 5 (nếu đã đăng nhập): Đánh giá món ăn / quán ăn

Gửi đánh giá món ăn: POST /api//:id/review (ProductRouter). Mỗi user chỉ được review 1 lần trên 1 món. 


Gửi đánh giá quán ăn: POST /api/:id/review (RestaurantRouter). 

UI thể hiện phần “đánh giá bình luận”.

Kịch bản 2: Người dùng tạo tài khoản, đăng nhập và lưu quán/món yêu thích

Bước 1: Đăng ký

POST /api/ trong userRouter: tạo tài khoản mới, backend trả về thông tin và token sau khi tạo thành công. 


Bước 2: Đăng nhập

POST /api/login: gửi username + password, nhận lại token và role (user/admin). 



API dùng JWT token để xác thực và phân quyền cho các request sau. 


Bước 3: Thêm vào danh sách yêu thích

Thêm món ăn yêu thích: POST /api/favoriteProduct. 


Thêm nhà hàng yêu thích: POST /api/favoriteRetaurant. 


Các API này yêu cầu đăng nhập (cần token hợp lệ). 


UI trang cá nhân hiển thị danh sách món ăn và nhà hàng yêu thích (Hình 48–50). 


Bước 4: Xem và chỉnh sửa hồ sơ cá nhân

GET /api/profile: lấy thông tin hồ sơ người dùng hiện tại.

PUT /api/profile: cập nhật thông tin hồ sơ.

PUT /api/change-password: đổi mật khẩu.

Tất cả yêu cầu đăng nhập. 

Kịch bản 3: Admin quản trị nội dung + Dashboard thống kê

Bước 1: Đăng nhập bằng tài khoản Admin (role=admin)
Sau đăng nhập, Admin có token với quyền Admin. 


Bước 2: Quản lý danh mục / món ăn / nhà hàng / bài đăng / người dùng

Danh mục: GET /api/all để lấy toàn bộ danh mục không phân trang (chỉ Admin), POST /api để tạo mới, PUT /api/:id để cập nhật, DELETE /api/:id để xóa. 



Món ăn: Admin có thể tạo món (POST /api), cập nhật (PUT /api/:id), xóa (DELETE /api/:id). 




Nhà hàng: Admin có thể thêm quán, chỉnh sửa thông tin, xóa quán, và xem danh sách có phân trang hoặc full list. 





Bài đăng (blog): Admin thêm/sửa/xóa bài viết, hệ thống cũng cung cấp endpoint GET /api/recomment để gợi ý 4 bài viết đề xuất. 




Người dùng: Admin lấy danh sách người dùng (GET /api/), xem chi tiết (GET /api/:id), cập nhật (PUT /api/:id). 



Bước 3: Xem Dashboard thống kê
Admin mở trang dashboard để xem các chỉ số: lượt truy cập tổng, người dùng mới, ranking món ăn/quán ăn được xem nhiều nhất, biểu đồ trực quan và khả năng xuất báo cáo. 


