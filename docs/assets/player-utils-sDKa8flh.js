const c = "mindtricks_player_id", l = "mindtricks_player_username";
function d() {
  const e = localStorage.getItem(c);
  if (e) return e;
  const o = Date.now(), t = Math.floor(Math.random() * 1e3), r = `Player${((o + t) % 1e6).toString().padStart(6, "0").slice(-3)}`;
  return localStorage.setItem(c, r), r;
}
function m() {
  const e = localStorage.getItem(l);
  if (e) return e;
  const t = d().replace("Player", ""), n = ["Swift", "Bold", "Clever", "Brave", "Quick", "Smart", "Sharp", "Fast", "Cool", "Epic"], a = ["Tiger", "Eagle", "Wolf", "Bear", "Lion", "Hawk", "Dragon", "Falcon", "Shark", "Panda"], r = parseInt(t) % n.length, i = parseInt(t) * 7 % a.length, s = `${n[r]}${a[i]}${t}`;
  return localStorage.setItem(l, s), s;
}
function u() {
  return { playerId: d(), username: m() };
}
export {
  u as g
};
