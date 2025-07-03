// Chuyển từ định dạng snake_case sang camelCase
function toCamelCase(str) {
  return str.replace(/_([a-z])/g, g => g[1].toUpperCase());
}
