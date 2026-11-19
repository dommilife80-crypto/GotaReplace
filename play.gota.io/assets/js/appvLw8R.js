import { I as t, K as e, Z as a, bt as i, pt as n } from "./C_U2Xa4J.js";
var r;
var o = class extends a {
  constructor(t) {
    super(t);
    this.uploadMethodId = "image";
    this.autoGarbageCollect = true;
  }
  static test(t) {
    return globalThis.HTMLImageElement && t instanceof HTMLImageElement || typeof ImageBitmap != "undefined" && t instanceof ImageBitmap || globalThis.VideoFrame && t instanceof VideoFrame;
  }
};
function s(e) {
  const a = t.get().createCanvas(6, 1);
  const i = a.getContext("2d");
  i.fillStyle = e;
  i.fillRect(0, 0, 6, 1);
  return a;
}
function c() {
  if (r !== undefined) {
    return r;
  }
  try {
    const e = s("#ff00ff");
    const a = s("#ffff00");
    const i = t.get().createCanvas(6, 1).getContext("2d");
    i.globalCompositeOperation = "multiply";
    i.drawImage(e, 0, 0);
    i.drawImage(a, 2, 0);
    const n = i.getImageData(2, 0, 1, 1);
    if (n) {
      const t = n.data;
      r = t[0] === 255 && t[1] === 0 && t[2] === 0;
    } else {
      r = false;
    }
  } catch (e) {
    r = false;
  }
  return r;
}
o.extension = i.TextureSource;
var h = {
  canvas: null,
  convertTintToImage: false,
  cacheStepsPerColorChannel: 8,
  _canUseMultiply: undefined,
  get canUseMultiply() {
    return this._canUseMultiply ??= c();
  },
  set canUseMultiply(t) {
    this._canUseMultiply = t;
  },
  _tintMethod: null,
  get tintMethod() {
    return this._tintMethod ??= this.canUseMultiply ? this.tintWithMultiply : this.tintWithPerPixel;
  },
  set tintMethod(t) {
    this._tintMethod = t;
  },
  _canvasSourceCache: new WeakMap(),
  _unpremultipliedCache: new WeakMap(),
  getCanvasSource: e => {
    const a = e.source;
    const i = a?.resource;
    if (!i) {
      return null;
    }
    const n = a.alphaMode === "premultiplied-alpha";
    const r = a.resourceWidth ?? a.pixelWidth;
    const o = a.resourceHeight ?? a.pixelHeight;
    const s = r !== a.pixelWidth || o !== a.pixelHeight;
    if (n) {
      if ((i instanceof HTMLCanvasElement || typeof OffscreenCanvas != "undefined" && i instanceof OffscreenCanvas) && !s) {
        return i;
      }
      const t = h._unpremultipliedCache.get(a);
      if (t?.resourceId === a._resourceId) {
        return t.canvas;
      }
    }
    if (i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Int8Array || i instanceof Uint16Array || i instanceof Int16Array || i instanceof Uint32Array || i instanceof Int32Array || i instanceof Float32Array || i instanceof ArrayBuffer) {
      const e = h._canvasSourceCache.get(a);
      if (e?.resourceId === a._resourceId) {
        return e.canvas;
      }
      const n = t.get().createCanvas(a.pixelWidth, a.pixelHeight);
      const r = n.getContext("2d");
      const o = r.createImageData(a.pixelWidth, a.pixelHeight);
      const s = o.data;
      const c = i instanceof ArrayBuffer ? new Uint8Array(i) : new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
      if (a.format === "bgra8unorm") {
        for (let t = 0; t < s.length && t + 3 < c.length; t += 4) {
          s[t] = c[t + 2];
          s[t + 1] = c[t + 1];
          s[t + 2] = c[t];
          s[t + 3] = c[t + 3];
        }
      } else {
        s.set(c.subarray(0, s.length));
      }
      r.putImageData(o, 0, 0);
      h._canvasSourceCache.set(a, {
        canvas: n,
        resourceId: a._resourceId
      });
      return n;
    }
    if (n) {
      const e = t.get().createCanvas(a.pixelWidth, a.pixelHeight);
      const n = e.getContext("2d", {
        willReadFrequently: true
      });
      e.width = a.pixelWidth;
      e.height = a.pixelHeight;
      n.drawImage(i, 0, 0);
      const r = n.getImageData(0, 0, e.width, e.height);
      const o = r.data;
      for (let t = 0; t < o.length; t += 4) {
        const e = o[t + 3];
        if (e > 0) {
          const a = 255 / e;
          o[t] = Math.min(255, o[t] * a + 0.5);
          o[t + 1] = Math.min(255, o[t + 1] * a + 0.5);
          o[t + 2] = Math.min(255, o[t + 2] * a + 0.5);
        }
      }
      n.putImageData(r, 0, 0);
      h._unpremultipliedCache.set(a, {
        canvas: e,
        resourceId: a._resourceId
      });
      return e;
    }
    if (s) {
      const e = h._canvasSourceCache.get(a);
      if (e?.resourceId === a._resourceId) {
        return e.canvas;
      }
      const n = t.get().createCanvas(a.pixelWidth, a.pixelHeight);
      const r = n.getContext("2d");
      n.width = a.pixelWidth;
      n.height = a.pixelHeight;
      r.drawImage(i, 0, 0);
      h._canvasSourceCache.set(a, {
        canvas: n,
        resourceId: a._resourceId
      });
      return n;
    }
    return i;
  },
  getTintedCanvas: (a, i) => {
    const n = a.texture;
    const r = e.shared.setValue(i).toHex();
    const o = n.tintCache ||= {};
    const s = o[r];
    const c = n.source._resourceId;
    if (s?.tintId === c) {
      return s;
    }
    const l = s && "getContext" in s ? s : t.get().createCanvas();
    h.tintMethod(n, i, l);
    l.tintId = c;
    if (h.convertTintToImage && l.toDataURL !== undefined) {
      const e = t.get().createImage();
      e.src = l.toDataURL();
      e.tintId = c;
      o[r] = e;
    } else {
      o[r] = l;
    }
    return o[r];
  },
  getTintedPattern: (a, i) => {
    const n = e.shared.setValue(i).toHex();
    const r = a.patternCache ||= {};
    const o = a.source._resourceId;
    let s = r[n];
    if (s?.tintId !== o) {
      h.canvas ||= t.get().createCanvas();
      h.tintMethod(a, i, h.canvas);
      s = h.canvas.getContext("2d").createPattern(h.canvas, "repeat");
      s.tintId = o;
      r[n] = s;
    }
    return s;
  },
  applyPatternTransform: (t, e, a = true) => {
    if (!e) {
      return;
    }
    const i = t;
    if (!i.setTransform) {
      return;
    }
    const n = globalThis.DOMMatrix;
    if (!n) {
      return;
    }
    const r = new n([e.a, e.b, e.c, e.d, e.tx, e.ty]);
    i.setTransform(a ? r.inverse() : r);
  },
  tintWithMultiply: (t, a, i) => {
    const r = i.getContext("2d");
    const o = t.frame.clone();
    const s = t.source._resolution ?? t.source.resolution ?? 1;
    const c = t.rotate;
    o.x *= s;
    o.y *= s;
    o.width *= s;
    o.height *= s;
    const l = n.isVertical(c);
    const d = l ? o.height : o.width;
    const u = l ? o.width : o.height;
    i.width = Math.ceil(d);
    i.height = Math.ceil(u);
    r.save();
    if (a !== 16777215) {
      r.fillStyle = e.shared.setValue(a).toHex();
      r.fillRect(0, 0, d, u);
      r.globalCompositeOperation = "multiply";
    }
    const g = h.getCanvasSource(t);
    if (g) {
      if (c) {
        h._applyInverseRotation(r, c, o.width, o.height);
      }
      r.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
      if (a !== 16777215) {
        r.globalCompositeOperation = "destination-atop";
        r.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
      }
      r.restore();
    } else {
      r.restore();
    }
  },
  tintWithOverlay: (t, a, i) => {
    const r = i.getContext("2d");
    const o = t.frame.clone();
    const s = t.source._resolution ?? t.source.resolution ?? 1;
    const c = t.rotate;
    o.x *= s;
    o.y *= s;
    o.width *= s;
    o.height *= s;
    const l = n.isVertical(c);
    const d = l ? o.height : o.width;
    const u = l ? o.width : o.height;
    i.width = Math.ceil(d);
    i.height = Math.ceil(u);
    r.save();
    r.globalCompositeOperation = "copy";
    r.fillStyle = e.shared.setValue(a).toHex();
    r.fillRect(0, 0, d, u);
    r.globalCompositeOperation = "destination-atop";
    const g = h.getCanvasSource(t);
    if (g) {
      if (c) {
        h._applyInverseRotation(r, c, o.width, o.height);
      }
      r.drawImage(g, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height);
      r.restore();
    } else {
      r.restore();
    }
  },
  tintWithPerPixel: (t, e, a) => {
    const i = a.getContext("2d");
    const r = t.frame.clone();
    const o = t.source._resolution ?? t.source.resolution ?? 1;
    const s = t.rotate;
    r.x *= o;
    r.y *= o;
    r.width *= o;
    r.height *= o;
    const c = n.isVertical(s);
    const l = c ? r.height : r.width;
    const d = c ? r.width : r.height;
    a.width = Math.ceil(l);
    a.height = Math.ceil(d);
    i.save();
    i.globalCompositeOperation = "copy";
    const u = h.getCanvasSource(t);
    if (!u) {
      i.restore();
      return;
    }
    if (s) {
      h._applyInverseRotation(i, s, r.width, r.height);
    }
    i.drawImage(u, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
    i.restore();
    const g = e >> 16 & 255;
    const p = e >> 8 & 255;
    const f = e & 255;
    const m = i.getImageData(0, 0, l, d);
    const v = m.data;
    for (let n = 0; n < v.length; n += 4) {
      v[n] = v[n] * g / 255;
      v[n + 1] = v[n + 1] * p / 255;
      v[n + 2] = v[n + 2] * f / 255;
    }
    i.putImageData(m, 0, 0);
  },
  _applyInverseRotation: (t, e, a, i) => {
    const r = n.inv(e);
    const o = n.uX(r);
    const s = n.uY(r);
    const c = n.vX(r);
    const h = n.vY(r);
    const l = -Math.min(0, o * a, c * i, o * a + c * i);
    const d = -Math.min(0, s * a, h * i, s * a + h * i);
    t.transform(o, s, c, h, l, d);
  }
};
export { c as n, o as r, h as t };
