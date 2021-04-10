// 1. Local storage chỉ lưu trữ đc nội dung text
// 2. Để lưu được một đối tượng hoặc mảng xuống local => chuyển đối tượng/mảng thành dạng text
// JSON: Để thể hiện đối tượng/mảng thành dang text

let ip5 = {
  ten: "ip5",
  gia: 5,
};
console.log(ip5);

let jsonIp5 = JSON.stringify(ip5);
console.log(jsonIp5);

localStorage.setItem("ip5", jsonIp5);

// 2. Mang
let mang = [
  {
    ten: "ip5",
    gia: 5,
  },
  {
    ten: "ip6",
    gia: 6,
  },
];
let jsonMang = JSON.stringify(mang);
console.log(mang);
console.log(jsonMang);
localStorage.setItem("mang", jsonMang);
