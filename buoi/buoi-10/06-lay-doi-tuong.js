// 1. Lấy danh sách dưới local lên và log ra consolelog
let jsonMang = localStorage.getItem("mang");
console.log(jsonMang);

let mang = JSON.parse(jsonMang);
console.log(mang);

// 2.Thêm sp ip13 vào mảng
let ip13 = {
  ten: "ip13",
  gia: 13,
};

mang.push(ip13);

// 3. Lưu lại mảng mới vào local
let jsonMangMoi = JSON.stringify(mang);
localStorage.setItem("mang", jsonMangMoi);
