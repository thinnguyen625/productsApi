 1. Xây dụng API server cho phép chia sẻ dữ liệu thông qua nhiều các tài nguyên khác nhau như 
cho phép view products, product-detail và cho phép đẩy dữ liệu mới vô luôn
- npm init --y: khởi tạo project
- npm i express
- đặt tiên cho tài nguyên là tạo url là root ko trùng với thằng nào
- thư viện lowdb giúp thêm dữ liệu vào file json

2. Bây giờ thay vì mình đẩy trực tiếp thì có thể truyền từ client vào 
- Đầu tiên là khai báo để sử dụng body-parser
- khai báo middle-ware của express để nó pạc từ file json qua
- Postman đóng vai trò giống như 1 http client

# end
