import { n as r, u as n, r as i, t as u } from "./index-DvisUQ82.js";
const s = (t, e) => `mp_join:${t}:${e}`;
function p(t, e) {
  sessionStorage.setItem(s(t, e), "1");
}
function l(t, e) {
  return sessionStorage.getItem(s(t, e)) === "1";
}
function c(t) {
  const e = r(), a = n(), o = e.roomId;
  return i.useEffect(() => {
    o && (l(o, t) || (u.info("Join multiplayer games from the lobby."), a("/multiplayer", { replace: true })));
  }, [o, t, a]), o;
}
export {
  p as a,
  c as u
};
