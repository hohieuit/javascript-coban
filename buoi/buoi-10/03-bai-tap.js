// 1. Tạo danh sách đối tượng gốm 2 sản phẩm iphone 5, iphone 6 và mỗi sp có 2 trường thông tin ten; gia
// 2. Tạo một form thêm sp, gồm 2 trường ten; gia
// 3. Viết hàm lắng nghe sự kiện onclick thêm sản phẩm
// 4. Xuất ra giá trị ten, gia người dùng nhập vào kh-i click vào button
// 5. Tạo một đối tượng spMoi từ giá trị người dùng nhập vào
// 6. Thêm đối tượng mới vào mảng đã tạo ở bước (1).

let mang = [
  {
    ten: "iphone 5",
    gia: 5,
  },
  {
    ten: "iphone 6",
    gia: 7,
  },
];

function onClickThemSp() {
  console.log("click button them sp");

  // 4. Xuất ra giá trị ten, gia người dùng nhập vào kh-i click vào button
  let nodeTenSP = document.getElementById("ten-sp");
  let nodeGiaSp = document.getElementById("gia-sp");
  console.log(`ten sp la ${nodeTenSP.value}; gia sp la ${nodeGiaSp.value}`);

  // 5. Tạo một đối tượng spMoi từ giá trị người dùng nhập vào
  let spMoi = {
    ten: nodeTenSP.value,
    gia: nodeGiaSp.value,
  };
  console.log(spMoi);

  // 6. Thêm đối tượng mới vào mảng đã tạo ở bước (1).
  mang.push(spMoi);
  console.log(mang);
}
