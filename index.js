// Bài 1
// Bước 1: Cho người dùng nhập 3 số nguyên
// Bước 2: dùng sort để xếp số
// Bước 3: xuất kết quả

document.getElementById("xep").onclick = function () {
  var soNguyen1 = +document.getElementById("soNguyen1").value;
  var soNguyen2 = +document.getElementById("soNguyen2").value;
  var soNguyen3 = +document.getElementById("soNguyen3").value;

  var mang = new Float64Array([soNguyen1, soNguyen2, soNguyen3]);
  var ketQua = mang.sort();
  console.log(ketQua);
  document.getElementById("ketQua").innerHTML = ketQua;
};

// Bài 2:
// Bước 1: cho người dùng nhập tên
// Bước 2: dùng switch case để xem người dùng chọn thuộc tính gì
// Bước 3: xuất kết quả
document.getElementById("dangNhap").onclick = function () {
  var ten = document.getElementById("ten").value;
  var quanHe = document.getElementById("quanHe").value;
  var ketQua;
  console.log(quanHe);
  switch (quanHe) {
    case "father":
      ketQua = "Hello father! " + ten;
      break;
    case "mom":
      ketQua = "Hello mom! " + ten;
      break;
    case "brother":
      ketQua = "Hello brother! " + ten;
      break;
    case "sister":
      ketQua = "Hello sister! " + ten;
      break;
  }
  document.getElementById("ketQua2").innerHTML = ketQua;
};

// Bài 3:
// Bước 1: cho người dùng nhập vào 3 số nguyên
// Bước 2: sử dụng if else để tìm ra số chẵn lẽ, số nào chia hết cho 2 là chẵn ngược lại là lẽ
// Bước 3: xuất kết quả

document.getElementById("btnTinh").onclick = function () {
  var soNguyen1 = +document.getElementById("soNguyen11").value;
  var soNguyen2 = +document.getElementById("soNguyen22").value;
  var soNguyen3 = +document.getElementById("soNguyen33").value;

  var ketQua3;
  var chan = 0;
  var le = 0;

  if (soNguyen1 % 2 === 0) {
    chan += 1;
  } else {
    le += 1;
  }

  if (soNguyen2 % 2 === 0) {
    chan += 1;
  } else {
    le += 1;
  }

  if (soNguyen3 % 2 === 0) {
    chan += 1;
  } else {
    le += 1;
  }

  ketQua3 = "Số chẵn " + chan + ";" + " Số lẽ: " + le;

  document.getElementById("ketQua3").innerHTML = ketQua3;
};

// Bài 4:
// Bước 1: Cho người dùng nhập vào 3 cạnh
// Bước 2: dùng if else để xác định xem 3 cạnh nhập vào cho ra tam giác nào
// Bước 3: xuất kết quả

document.getElementById("btnKiemTra").onclick = function () {
  var a = +document.getElementById("canhA").value;
  var b = +document.getElementById("canhB").value;
  var c = +document.getElementById("canhC").value;

  var ketQua4;

  if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
      ketQua4 = "tam giác đều";
    } else if (a == b || a == c || b == c) {
      ketQua4 = "tam giác cân";
    } else if (
      a * a == b * b + c * c ||
      b * b == a * a + c * c ||
      c * c == a * a + b * b
    ) {
      ketQua4 = "tam giác vuông";
    } else if (
      a * a > b * b + c * c ||
      b * b > a * a + c * c ||
      c * c > a * a + b * b
    ) {
      ketQua4 = "tam giác tù";
    } else {
      ketQua4 = "tam giác nhọn";
    }
  } else {
    ketQua4 = " Yêu cầu nhập thỏa a+b>c && a+c>b && b+c>a";
  }

  document.getElementById("ketQua4").innerHTML = ketQua4;
};
