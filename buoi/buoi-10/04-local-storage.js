// 1. Thêm dữ liệu vào local storage
localStorage.setItem("username", "hohieukn");
localStorage.setItem("password", "123456");

localStorage.setItem("username", "hohieukn1");

// 2. Lấy dữ liệu từ local
let username = localStorage.getItem("username");
console.log(username);

// 3. XOas
localStorage.removeItem("aaaa");

// 4. Lưu đối tượng vào local
let ip5 = {
  ten: "ip5",
  gia: 5,
};
localStorage.setItem("ip5", ip5);
