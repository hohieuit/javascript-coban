// 1. Xuất ra log tên sp người dùng nhập vào
// BƯớc 1: Viết hàm lắng nghe sự kiện onclick them spÏ
// Bước 2: truy cập node input có id = ten-sp và lấy giá trị người dùng nhập vào

function onClickThemSanPham() {
  console.log("click button them sp");

  // lấy giá trị nhập
  let nodeTenSP = document.getElementById("ten-sp");
  console.log(nodeTenSP);

  console.log(nodeTenSP.value);
}
