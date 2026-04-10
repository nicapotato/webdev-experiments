const c = "mindtricks_player_id", l = "mindtricks_player_username";
function i() {
  const e = localStorage.getItem(c);
  if (e) return e;
  const r = Date.now(), t = Math.floor(Math.random() * 1e3), n = `Player${((r + t) % 1e6).toString().padStart(6, "0").slice(-3)}`;
  return localStorage.setItem(c, n), n;
}
function d() {
  const e = localStorage.getItem(l);
  if (e) return e;
  const t = i().replace("Player", ""), a = ["Swift", "Bold", "Clever", "Brave", "Quick", "Smart", "Sharp", "Fast", "Cool", "Epic"], o = ["Tiger", "Eagle", "Wolf", "Bear", "Lion", "Hawk", "Dragon", "Falcon", "Shark", "Panda"], n = parseInt(t) % a.length, m = parseInt(t) * 7 % o.length, s = `${a[n]}${o[m]}${t}`;
  return localStorage.setItem(l, s), s;
}
function u() {
  return { playerId: i(), username: d() };
}
const p = "https://webdev-experiments.nicapotato.com";
function I(e, r) {
  return `${p}/multiplayer/${e}/${r}`;
}
export {
  u as g,
  I as m
};
