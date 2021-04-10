let mang = [
  {
    ten: "samsung s8",
    gia: 50,
  },
  {
    ten: "samsung s10",
    gia: 30,
  },
  {
    ten: "samsung s8",
    gia: 10,
  },
];

/**
 *
 * @param {[]} mang
 */
function hienThiDanhSach(mang) {
  mang.forEach((obj) => {
    document.write(`${obj.ten} co gia la ${obj.gia}`);
  });
}

/**
 *
 * @param {[]} mang
 * @param {string} ten
 * @returns
 */
function timSanPhamTheoTen(mang, ten) {
  return mang.filter((obj) => obj.ten == ten);
}

// 9.
let kq = timSanPhamTheoTen(mang, "samsung s8");
hienThiDanhSach(kq);
