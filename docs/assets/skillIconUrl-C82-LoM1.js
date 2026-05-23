const e = { sailing: "sailing.png" };
function i(n) {
  const s = n.toLowerCase().replace(/\s+/g, "-");
  return `/osrs-assets/${e[s] ?? `${s}-icon.png`}`;
}
export {
  i as s
};
