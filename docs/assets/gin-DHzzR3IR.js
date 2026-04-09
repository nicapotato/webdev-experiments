function t() {
  const r = "wss://www.mindtricks.ai/go-backend";
  if (String(r).trim() === "") throw new Error("Missing VITE_GIN_WS_HOST");
  return String(r).replace(/\/$/, "");
}
function i() {
  const r = "https://www.mindtricks.ai/go-backend";
  if (String(r).trim() === "") throw new Error("Missing VITE_GIN_HTTP_HOST");
  return String(r).replace(/\/$/, "");
}
export {
  t as a,
  i as g
};
