// Tạo chuỗi ngẫu nhiên độ dài 8
function generateRandomString(length = 8) {
  return Math.random().toString(36).substring(2, 2 + length);
}
