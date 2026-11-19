import { J as t, d as o } from "./C_U2Xa4J.js";
var r = {};
function e(e, n, s) {
  let u = 2166136261;
  for (let t = 0; t < n; t++) {
    u ^= e[t].uid;
    u = Math.imul(u, 16777619);
    u >>>= 0;
  }
  return r[u] || function (e, n, s, u) {
    const c = {};
    let l = 0;
    for (let o = 0; o < u; o++) {
      const r = o < n ? e[o] : t.EMPTY.source;
      c[l++] = r.source;
      c[l++] = r.style;
    }
    const a = new o(c);
    r[s] = a;
    return a;
  }(e, n, u, s);
}
export { e as t };
