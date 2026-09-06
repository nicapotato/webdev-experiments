const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Game-05MmDeUc.js","assets/index-CTfEbLlb.js","assets/index-Bn_9_iny.css"])))=>i.map(i=>d[i]);
import { j as e, r as a, _ as t, __tla as __tla_0 } from "./index-CTfEbLlb.js";
let i;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const s = a.lazy(() => t(() => import("./Game-05MmDeUc.js").then(async (m) => {
    await m.__tla;
    return m;
  }).then((l) => l.as), __vite__mapDeps([0,1,2])).then((l) => ({
    default: l.Game
  })));
  i = function() {
    return e.jsx("div", {
      className: "w-full h-full min-h-0 flex-1 bg-black flex flex-col",
      children: e.jsx(a.Suspense, {
        fallback: e.jsx("div", {
          className: "w-full flex-1 bg-black flex items-center justify-center text-white",
          children: "Loading game..."
        }),
        children: e.jsx(s, {})
      })
    });
  };
});
export {
  __tla,
  i as default
};
