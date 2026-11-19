import { B as e, G as t, I as s, J as i, K as r, Q as n, R as h, T as o, V as a, W as d, Z as l, at as u, bt as c, c as p, dt as _, et as f, g, gt as m, ht as x, mt as y, nt as C, ot as b, q as T, st as w, vt as v, xt as G, yt as R, z as M } from "./C_U2Xa4J.js";
var S = class e {
  constructor(e, t, s) {
    this._x = t || 0;
    this._y = s || 0;
    this._observer = e;
  }
  clone(t) {
    return new e(t ?? this._observer, this._x, this._y);
  }
  set(e = 0, t = e) {
    if (this._x !== e || this._y !== t) {
      this._x = e;
      this._y = t;
      this._observer._onUpdate(this);
    }
    return this;
  }
  copyFrom(e) {
    if (this._x !== e.x || this._y !== e.y) {
      this._x = e.x;
      this._y = e.y;
      this._observer._onUpdate(this);
    }
    return this;
  }
  copyTo(e) {
    e.set(this._x, this._y);
    return e;
  }
  equals(e) {
    return e.x === this._x && e.y === this._y;
  }
  toString() {
    return `[pixi.js/math:ObservablePoint x=${this._x} y=${this._y} scope=${this._observer}]`;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    if (this._x !== e) {
      this._x = e;
      this._observer._onUpdate(this);
    }
  }
  get y() {
    return this._y;
  }
  set y(e) {
    if (this._y !== e) {
      this._y = e;
      this._observer._onUpdate(this);
    }
  }
};
function k(e, t, s) {
  const {
    width: i,
    height: r
  } = s.orig;
  const n = s.trim;
  if (n) {
    const s = n.width;
    const h = n.height;
    e.minX = n.x - t._x * i;
    e.maxX = e.minX + s;
    e.minY = n.y - t._y * r;
    e.maxY = e.minY + h;
  } else {
    e.minX = -t._x * i;
    e.maxX = e.minX + i;
    e.minY = -t._y * r;
    e.maxY = e.minY + r;
  }
}
var I = {
  cullArea: null,
  cullable: false,
  cullableChildren: true
};
var A = {
  get isCachedAsTexture() {
    return !!this.renderGroup?.isCachedAsTexture;
  },
  cacheAsTexture(e) {
    if (typeof e == "boolean" && e === false) {
      this.disableRenderGroup();
    } else {
      this.enableRenderGroup();
      this.renderGroup.enableCacheAsTexture(e === true ? {} : e);
    }
  },
  updateCacheTexture() {
    this.renderGroup?.updateCacheTexture();
  },
  get cacheAsBitmap() {
    return this.isCachedAsTexture;
  },
  set cacheAsBitmap(e) {
    u("v8.6.0", "cacheAsBitmap is deprecated, use cacheAsTexture instead.");
    this.cacheAsTexture(e);
  }
};
function F(e, t, s) {
  const i = e.length;
  let r;
  if (t >= i || s === 0) {
    return;
  }
  const n = i - (s = t + s > i ? i - t : s);
  for (r = t; r < n; ++r) {
    e[r] = e[r + s];
  }
  e.length = n;
}
var D = {
  allowChildren: true,
  removeChildren(e = 0, t) {
    const s = t ?? this.children.length;
    const i = s - e;
    const r = [];
    if (i > 0 && i <= s) {
      for (let i = s - 1; i >= e; i--) {
        const e = this.children[i];
        if (e) {
          r.push(e);
          e.parent = null;
        }
      }
      F(this.children, e, i);
      const t = this.renderGroup || this.parentRenderGroup;
      if (t) {
        t.removeChildren(r);
      }
      for (let e = 0; e < r.length; ++e) {
        const t = r[e];
        t.parentRenderLayer?.detach(t);
        this.emit("childRemoved", t, this, e);
        r[e].emit("removed", this);
      }
      if (r.length > 0) {
        this._didViewChangeTick++;
      }
      return r;
    }
    if (i === 0 && this.children.length === 0) {
      return r;
    }
    throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
  },
  removeChildAt(e) {
    const t = this.getChildAt(e);
    return this.removeChild(t);
  },
  getChildAt(e) {
    if (e < 0 || e >= this.children.length) {
      throw new Error(`getChildAt: Index (${e}) does not exist.`);
    }
    return this.children[e];
  },
  setChildIndex(e, t) {
    if (t < 0 || t >= this.children.length) {
      throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
    }
    this.getChildIndex(e);
    this.addChildAt(e, t);
  },
  getChildIndex(e) {
    const t = this.children.indexOf(e);
    if (t === -1) {
      throw new Error("The supplied Container must be a child of the caller");
    }
    return t;
  },
  addChildAt(e, t) {
    if (!this.allowChildren) {
      u(b, "addChildAt: Only Containers will be allowed to add children in v8.0.0");
    }
    const {
      children: s
    } = this;
    if (t < 0 || t > s.length) {
      throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${s.length}`);
    }
    const i = e.parent === this;
    if (e.parent) {
      const s = e.parent.children.indexOf(e);
      if (i) {
        if (s === t) {
          return e;
        }
        e.parent.children.splice(s, 1);
      } else {
        e.removeFromParent();
      }
    }
    if (t === s.length) {
      s.push(e);
    } else {
      s.splice(t, 0, e);
    }
    const r = this.renderGroup || this.parentRenderGroup;
    if (this.sortableChildren) {
      this.sortDirty = true;
    }
    if (i) {
      if (r) {
        r.structureDidChange = true;
      }
      return e;
    } else {
      e.parent = this;
      e.didChange = true;
      e._updateFlags = 15;
      if (r) {
        r.addChild(e);
      }
      this.emit("childAdded", e, this, t);
      e.emit("added", this);
      return e;
    }
  },
  swapChildren(e, t) {
    if (e === t) {
      return;
    }
    const s = this.getChildIndex(e);
    const i = this.getChildIndex(t);
    this.children[s] = t;
    this.children[i] = e;
    const r = this.renderGroup || this.parentRenderGroup;
    if (r) {
      r.structureDidChange = true;
    }
    this._didContainerChangeTick++;
  },
  removeFromParent() {
    this.parent?.removeChild(this);
  },
  reparentChild(...e) {
    if (e.length === 1) {
      return this.reparentChildAt(e[0], this.children.length);
    } else {
      e.forEach(e => this.reparentChildAt(e, this.children.length));
      return e[0];
    }
  },
  reparentChildAt(e, t) {
    if (e.parent === this) {
      this.setChildIndex(e, t);
      return e;
    }
    const s = e.worldTransform.clone();
    e.removeFromParent();
    this.addChildAt(e, t);
    const i = this.worldTransform.clone();
    i.invert();
    s.prepend(i);
    e.setFromMatrix(s);
    return e;
  },
  replaceChild(e, t) {
    e.updateLocalTransform();
    this.addChildAt(t, this.getChildIndex(e));
    t.setFromMatrix(e.localTransform);
    t.updateLocalTransform();
    this.removeChild(e);
  }
};
var O = {
  collectRenderables(e, t, s) {
    if ((!this.parentRenderLayer || this.parentRenderLayer === s) && !(this.globalDisplayStatus < 7) && !!this.includeInBuild) {
      if (this.sortableChildren) {
        this.sortChildren();
      }
      if (this.isSimple) {
        this.collectRenderablesSimple(e, t, s);
      } else if (this.renderGroup) {
        t.renderPipes.renderGroup.addRenderGroup(this.renderGroup, e);
      } else {
        this.collectRenderablesWithEffects(e, t, s);
      }
    }
  },
  collectRenderablesSimple(e, t, s) {
    const i = this.children;
    const r = i.length;
    for (let n = 0; n < r; n++) {
      i[n].collectRenderables(e, t, s);
    }
  },
  collectRenderablesWithEffects(e, t, s) {
    const {
      renderPipes: i
    } = t;
    for (let r = 0; r < this.effects.length; r++) {
      const t = this.effects[r];
      i[t.pipe].push(t, this, e);
    }
    this.collectRenderablesSimple(e, t, s);
    for (let r = this.effects.length - 1; r >= 0; r--) {
      const t = this.effects[r];
      i[t.pipe].pop(t, this, e);
    }
  }
};
var E = class {
  constructor() {
    this.pipe = "filter";
    this.priority = 1;
  }
  destroy() {
    for (let e = 0; e < this.filters.length; e++) {
      this.filters[e].destroy();
    }
    this.filters = null;
    this.filterArea = null;
  }
};
var P = class {
  constructor() {
    this._effectClasses = [];
    this._tests = [];
    this._initialized = false;
  }
  init() {
    if (!this._initialized) {
      this._initialized = true;
      this._effectClasses.forEach(e => {
        this.add({
          test: e.test,
          maskClass: e
        });
      });
    }
  }
  add(e) {
    this._tests.push(e);
  }
  getMaskEffect(e) {
    if (!this._initialized) {
      this.init();
    }
    for (let t = 0; t < this._tests.length; t++) {
      const s = this._tests[t];
      if (s.test(e)) {
        return a.get(s.maskClass, e);
      }
    }
    return e;
  }
  returnMaskEffect(e) {
    a.return(e);
  }
};
var B = new P();
G.handleByList(c.MaskEffect, B._effectClasses);
var L = {
  _maskEffect: null,
  _maskOptions: {
    inverse: false,
    channel: "red"
  },
  _filterEffect: null,
  effects: [],
  _markStructureAsChanged() {
    const e = this.renderGroup || this.parentRenderGroup;
    if (e) {
      e.structureDidChange = true;
    }
  },
  addEffect(e) {
    if (this.effects.indexOf(e) === -1) {
      this.effects.push(e);
      this.effects.sort((e, t) => e.priority - t.priority);
      this._markStructureAsChanged();
      this._updateIsSimple();
    }
  },
  removeEffect(e) {
    const t = this.effects.indexOf(e);
    if (t !== -1) {
      this.effects.splice(t, 1);
      this._markStructureAsChanged();
      this._updateIsSimple();
    }
  },
  set mask(e) {
    const t = this._maskEffect;
    if (t?.mask !== e) {
      if (t) {
        this.removeEffect(t);
        B.returnMaskEffect(t);
        this._maskEffect = null;
      }
      if (e != null) {
        this._maskEffect = B.getMaskEffect(e);
        this.addEffect(this._maskEffect);
      }
    }
  },
  get mask() {
    return this._maskEffect?.mask;
  },
  setMask(e) {
    this._maskOptions = {
      ...this._maskOptions,
      ...e
    };
    if (e.mask) {
      this.mask = e.mask;
    }
    this._markStructureAsChanged();
  },
  set filters(e) {
    if (!Array.isArray(e) && e) {
      e = [e];
    }
    const t = this._filterEffect ||= new E();
    const s = e?.length > 0;
    const i = s !== t.filters?.length > 0;
    e = Array.isArray(e) ? e.slice(0) : e;
    t.filters = Object.freeze(e);
    if (i) {
      if (s) {
        this.addEffect(t);
      } else {
        this.removeEffect(t);
        t.filters = e ?? null;
      }
    }
  },
  get filters() {
    return this._filterEffect?.filters;
  },
  set filterArea(e) {
    this._filterEffect ||= new E();
    this._filterEffect.filterArea = e;
  },
  get filterArea() {
    return this._filterEffect?.filterArea;
  }
};
var U = {
  label: null,
  get name() {
    u(b, "Container.name property has been removed, use Container.label instead");
    return this.label;
  },
  set name(e) {
    u(b, "Container.name property has been removed, use Container.label instead");
    this.label = e;
  },
  getChildByName(e, t = false) {
    return this.getChildByLabel(e, t);
  },
  getChildByLabel(e, t = false) {
    const s = this.children;
    for (let i = 0; i < s.length; i++) {
      const t = s[i];
      if (t.label === e || e instanceof RegExp && e.test(t.label)) {
        return t;
      }
    }
    if (t) {
      for (let i = 0; i < s.length; i++) {
        const t = s[i].getChildByLabel(e, true);
        if (t) {
          return t;
        }
      }
    }
    return null;
  },
  getChildrenByLabel(e, t = false, s = []) {
    const i = this.children;
    for (let r = 0; r < i.length; r++) {
      const t = i[r];
      if (t.label === e || e instanceof RegExp && e.test(t.label)) {
        s.push(t);
      }
    }
    if (t) {
      for (let r = 0; r < i.length; r++) {
        i[r].getChildrenByLabel(e, true, s);
      }
    }
    return s;
  }
};
var N = a.getPool(y);
var z = a.getPool(T);
var Y = new y();
var V = {
  getFastGlobalBounds(e, t) {
    t ||= new T();
    t.clear();
    this._getGlobalBoundsRecursive(!!e, t, this.parentRenderLayer);
    if (!t.isValid) {
      t.set(0, 0, 0, 0);
    }
    const s = this.renderGroup || this.parentRenderGroup;
    t.applyMatrix(s.worldTransform);
    return t;
  },
  _getGlobalBoundsRecursive(e, t, s) {
    let i = t;
    if (e && this.parentRenderLayer && this.parentRenderLayer !== s) {
      return;
    }
    if (this.localDisplayStatus !== 7 || !this.measurable) {
      return;
    }
    const r = !!this.effects.length;
    if (this.renderGroup || r) {
      i = z.get().clear();
    }
    if (this.boundsArea) {
      t.addRect(this.boundsArea, this.worldTransform);
    } else {
      if (this.renderPipeId) {
        const e = this.bounds;
        i.addFrame(e.minX, e.minY, e.maxX, e.maxY, this.groupTransform);
      }
      const t = this.children;
      for (let r = 0; r < t.length; r++) {
        t[r]._getGlobalBoundsRecursive(e, i, s);
      }
    }
    if (r) {
      let e = false;
      const s = this.renderGroup || this.parentRenderGroup;
      for (let t = 0; t < this.effects.length; t++) {
        if (this.effects[t].addBounds) {
          if (!e) {
            e = true;
            i.applyMatrix(s.worldTransform);
          }
          this.effects[t].addBounds(i, true);
        }
      }
      if (e) {
        i.applyMatrix(s.worldTransform.copyTo(Y).invert());
      }
      t.addBounds(i);
      z.return(i);
    } else if (this.renderGroup) {
      t.addBounds(i, this.relativeGroupTransform);
      z.return(i);
    }
  }
};
function W(e, t, s) {
  let i;
  let r;
  s.clear();
  if (e.parent) {
    if (t) {
      i = e.parent.worldTransform;
    } else {
      r = N.get().identity();
      i = q(e, r);
    }
  } else {
    i = y.IDENTITY;
  }
  X(e, s, i, t);
  if (r) {
    N.return(r);
  }
  if (!s.isValid) {
    s.set(0, 0, 0, 0);
  }
  return s;
}
function X(e, t, s, i) {
  if (!e.visible || !e.measurable) {
    return;
  }
  let r;
  if (i) {
    r = e.worldTransform;
  } else {
    e.updateLocalTransform();
    r = N.get();
    r.appendFrom(e.localTransform, s);
  }
  const n = t;
  const h = !!e.effects.length;
  if (h) {
    t = z.get().clear();
  }
  if (e.boundsArea) {
    t.addRect(e.boundsArea, r);
  } else {
    const s = e.bounds;
    if (s && !s.isEmpty()) {
      t.matrix = r;
      t.addBounds(s);
    }
    for (let n = 0; n < e.children.length; n++) {
      X(e.children[n], t, r, i);
    }
  }
  if (h) {
    for (let s = 0; s < e.effects.length; s++) {
      e.effects[s].addBounds?.(t);
    }
    n.addBounds(t, y.IDENTITY);
    z.return(t);
  }
  if (!i) {
    N.return(r);
  }
}
function q(e, t) {
  const s = e.parent;
  if (s) {
    q(s, t);
    s.updateLocalTransform();
    t.append(s.localTransform);
  }
  return t;
}
var H = 16777215;
function $(t, s) {
  if (t === H) {
    return s;
  } else if (s === H) {
    return t;
  } else {
    return e(t, s);
  }
}
function j(e) {
  return ((e & 255) << 16) + (e & 65280) + (e >> 16 & 255);
}
var K = {
  getGlobalAlpha(e) {
    if (e) {
      if (this.renderGroup) {
        return this.renderGroup.worldAlpha;
      } else if (this.parentRenderGroup) {
        return this.parentRenderGroup.worldAlpha * this.alpha;
      } else {
        return this.alpha;
      }
    }
    let t = this.alpha;
    let s = this.parent;
    while (s) {
      t *= s.alpha;
      s = s.parent;
    }
    return t;
  },
  getGlobalTransform(e = new y(), t) {
    if (t) {
      return e.copyFrom(this.worldTransform);
    }
    this.updateLocalTransform();
    const s = q(this, N.get().identity());
    e.appendFrom(this.localTransform, s);
    N.return(s);
    return e;
  },
  getGlobalTint(e) {
    if (e) {
      if (this.renderGroup) {
        return j(this.renderGroup.worldColor);
      } else if (this.parentRenderGroup) {
        return j($(this.localColor, this.parentRenderGroup.worldColor));
      } else {
        return this.tint;
      }
    }
    let t = this.localColor;
    let s = this.parent;
    while (s) {
      t = $(t, s.localColor);
      s = s.parent;
    }
    return j(t);
  }
};
function J(e, t, s) {
  t.clear();
  s ||= y.IDENTITY;
  Q(e, t, s, e, true);
  if (!t.isValid) {
    t.set(0, 0, 0, 0);
  }
  return t;
}
function Q(e, t, s, i, r) {
  let n;
  if (r) {
    n = N.get();
    n = s.copyTo(n);
  } else {
    if (!e.visible || !e.measurable) {
      return;
    }
    e.updateLocalTransform();
    const t = e.localTransform;
    n = N.get();
    n.appendFrom(t, s);
  }
  const h = t;
  const o = !!e.effects.length;
  if (o) {
    t = z.get().clear();
  }
  if (e.boundsArea) {
    t.addRect(e.boundsArea, n);
  } else {
    if (e.renderPipeId) {
      t.matrix = n;
      t.addBounds(e.bounds);
    }
    const s = e.children;
    for (let e = 0; e < s.length; e++) {
      Q(s[e], t, n, i, false);
    }
  }
  if (o) {
    for (let s = 0; s < e.effects.length; s++) {
      e.effects[s].addLocalBounds?.(t, i);
    }
    h.addBounds(t, y.IDENTITY);
    z.return(t);
  }
  N.return(n);
}
function Z(e, t) {
  const s = e.children;
  for (let i = 0; i < s.length; i++) {
    const e = s[i];
    const r = e.uid;
    const n = (e._didViewChangeTick & 65535) << 16 | e._didContainerChangeTick & 65535;
    const h = t.index;
    if (t.data[h] !== r || t.data[h + 1] !== n) {
      t.data[t.index] = r;
      t.data[t.index + 1] = n;
      t.didChange = true;
    }
    t.index = h + 2;
    if (e.children.length) {
      Z(e, t);
    }
  }
  return t.didChange;
}
var ee = new y();
var te = {
  _localBoundsCacheId: -1,
  _localBoundsCacheData: null,
  _setWidth(e, t) {
    const s = Math.sign(this.scale.x) || 1;
    this.scale.x = t !== 0 ? e / t * s : s;
  },
  _setHeight(e, t) {
    const s = Math.sign(this.scale.y) || 1;
    this.scale.y = t !== 0 ? e / t * s : s;
  },
  getLocalBounds() {
    this._localBoundsCacheData ||= {
      data: [],
      index: 1,
      didChange: false,
      localBounds: new T()
    };
    const e = this._localBoundsCacheData;
    e.index = 1;
    e.didChange = false;
    if (e.data[0] !== this._didViewChangeTick) {
      e.didChange = true;
      e.data[0] = this._didViewChangeTick;
    }
    Z(this, e);
    if (e.didChange) {
      J(this, e.localBounds, ee);
    }
    return e.localBounds;
  },
  getBounds(e, t) {
    return W(this, e, t || new T());
  }
};
var se = {
  _onRender: null,
  set onRender(e) {
    const t = this.renderGroup || this.parentRenderGroup;
    if (!e) {
      if (this._onRender) {
        t?.removeOnRender(this);
      }
      this._onRender = null;
      return;
    }
    if (!this._onRender) {
      t?.addOnRender(this);
    }
    this._onRender = e;
  },
  get onRender() {
    return this._onRender;
  }
};
var ie = {
  _zIndex: 0,
  sortDirty: false,
  sortableChildren: false,
  get zIndex() {
    return this._zIndex;
  },
  set zIndex(e) {
    if (this._zIndex !== e) {
      this._zIndex = e;
      this.depthOfChildModified();
    }
  },
  depthOfChildModified() {
    if (this.parent) {
      this.parent.sortableChildren = true;
      this.parent.sortDirty = true;
    }
    if (this.parentRenderGroup) {
      this.parentRenderGroup.structureDidChange = true;
    }
  },
  sortChildren() {
    if (this.sortDirty) {
      this.sortDirty = false;
      this.children.sort(re);
    }
  }
};
function re(e, t) {
  return e._zIndex - t._zIndex;
}
var ne = {
  getGlobalPosition(e = new x(), t = false) {
    if (this.parent) {
      this.parent.toGlobal(this._position, e, t);
    } else {
      e.x = this._position.x;
      e.y = this._position.y;
    }
    return e;
  },
  toGlobal(e, t, s = false) {
    const i = this.getGlobalTransform(N.get(), s);
    t = i.apply(e, t);
    N.return(i);
    return t;
  },
  toLocal(e, t, s, i) {
    if (t) {
      e = t.toGlobal(e, s, i);
    }
    const r = this.getGlobalTransform(N.get(), i);
    s = r.applyInverse(e, s);
    N.return(r);
    return s;
  }
};
var he = 0;
var oe = 32767;
var ae = Object.create(null);
var de = 0;
function le(e, t, s, i, r, n) {
  return (e << 17) + (t << 2) + ((i ? 1 : 0) << 1) + (s ? 1 : 0) + (n === "nearest" ? 1 : 0) * 4294967296 + function (e) {
    const t = ae[e];
    if (t !== undefined) {
      return t;
    } else {
      return ae[e] = de++;
    }
  }(r) * 8589934592;
}
var ue = class extends R {
  constructor(e) {
    super();
    this._buckets = new Map();
    this._poolKey = Object.create(null);
    this._poolStyle = Object.create(null);
    this._screens = new h();
    this._enableFullScreen = false;
    this.textureOptions = e || {};
  }
  get textureStyle() {
    u(w, "TexturePool.textureStyle is no longer used, pooled textures carry their own style. Pass scaleMode in the request instead.");
    this._textureStyle ||= new n(this.textureOptions);
    return this._textureStyle;
  }
  set textureStyle(e) {
    u(w, "TexturePool.textureStyle is no longer used, pooled textures carry their own style. Pass scaleMode in the request instead.");
    this._textureStyle = e;
  }
  get enableFullScreen() {
    u(w, "TexturePool.enableFullScreen is no longer used, the pool sizes textures to the screens registered with setScreenSize.");
    return this._enableFullScreen;
  }
  set enableFullScreen(e) {
    u(w, "TexturePool.enableFullScreen is no longer used, the pool sizes textures to the screens registered with setScreenSize.");
    this._enableFullScreen = e;
  }
  createTexture(...e) {
    let t = e[0];
    if (typeof t == "number") {
      u(w, "TexturePool.createTexture params are now an options object. See params: { width, height, antialias, autoGenerateMipmaps }");
      t = {
        width: t,
        height: e[1],
        antialias: e[2] ?? false,
        autoGenerateMipmaps: e[3] ?? false
      };
    }
    const s = t.format ?? this.textureOptions.format ?? l.defaultOptions.format;
    const r = t.scaleMode ?? this.textureOptions.scaleMode ?? n.defaultOptions.scaleMode;
    const h = new l({
      ...this.textureOptions,
      width: t.width,
      height: t.height,
      resolution: 1,
      antialias: t.antialias ?? false,
      autoGarbageCollect: false,
      autoGenerateMipmaps: t.autoGenerateMipmaps ?? false,
      format: s,
      scaleMode: r
    });
    return new i({
      source: h,
      label: "texturePool_" + he++
    });
  }
  getOptimalTexture(...e) {
    let t = e[0];
    if (typeof t == "number") {
      u(w, "TexturePool.getOptimalTexture params are now an options object. See params: { width, height, resolution, antialias, autoGenerateMipmaps }");
      t = {
        width: t,
        height: e[1],
        resolution: e[2] ?? 1,
        antialias: e[3] ?? false,
        autoGenerateMipmaps: e[4] ?? false
      };
    }
    const {
      width: s,
      height: i
    } = this.getOptimalSize(t.width, t.height, t.resolution ?? 1);
    return this._getTexture(s, i, t);
  }
  getAlignedTexture(e, t, s) {
    const i = e.source;
    const r = t / i._resolution;
    return this._getTexture(Math.ceil(i.pixelWidth * r - 0.000001), Math.ceil(i.pixelHeight * r - 0.000001), {
      width: e.frame.width,
      height: e.frame.height,
      resolution: t,
      format: s
    });
  }
  _getTexture(e, s, i) {
    const r = i.width;
    const h = i.height;
    const o = i.resolution ?? 1;
    const a = i.antialias ?? false;
    const d = i.autoGenerateMipmaps ?? false;
    const u = i.format ?? this.textureOptions.format ?? l.defaultOptions.format;
    const c = i.scaleMode ?? this.textureOptions.scaleMode ?? n.defaultOptions.scaleMode;
    if (e > oe || s > oe) {
      t(`TexturePool: ${e}x${s} is larger than the 32767px pool key limit, textures of this size may be pooled together`);
    }
    const p = le(e, s, a, d, u, c);
    let _ = this._buckets.get(p);
    if (!_) {
      _ = [];
      this._buckets.set(p, _);
    }
    let f = _.pop();
    if (!f) {
      f = this.createTexture({
        width: e,
        height: s,
        antialias: a,
        autoGenerateMipmaps: d,
        format: u,
        scaleMode: c
      });
      this._poolStyle[f.uid] = f.source.style;
    }
    f.source._resolution = o;
    f.source.width = e / o;
    f.source.height = s / o;
    f.source.pixelWidth = e;
    f.source.pixelHeight = s;
    f.frame.x = 0;
    f.frame.y = 0;
    f.frame.width = r;
    f.frame.height = h;
    f.updateUvs();
    this._poolKey[f.uid] = p;
    return f;
  }
  getOptimalSize(e, t, s = 1) {
    const i = Math.ceil(e * s - 0.000001);
    const r = Math.ceil(t * s - 0.000001);
    const n = C(i);
    const h = this._screens.getFittingWidth(i, s);
    const o = C(r);
    const a = this._screens.getFittingHeight(r, s);
    return {
      width: h !== undefined ? Math.min(h, n) : n,
      height: a !== undefined ? Math.min(a, o) : o
    };
  }
  getSameSizeTexture(e, t = false) {
    const s = e.source;
    return this.getOptimalTexture({
      width: e.width,
      height: e.height,
      resolution: s._resolution,
      antialias: t
    });
  }
  returnTexture(e, s = false) {
    const i = e.uid;
    const r = this._poolKey[i];
    if (r === undefined) {
      t("TexturePool: returnTexture was passed a texture that did not come from this pool, ignoring it");
      return;
    }
    const n = this._poolStyle[i];
    if (s && e.source.style !== n) {
      e.source.style = n;
    }
    const h = this._buckets.get(r);
    if (h) {
      h.push(e);
    } else {
      this._dropTextures([e], true);
    }
  }
  setScreenSize(e, t, s, i = 1) {
    if (this._screens.set(e, t, s, i)) {
      this._pruneScreenTextures();
    }
  }
  removeScreen(e) {
    if (this._screens.remove(e)) {
      this._pruneScreenTextures();
    }
  }
  _pruneScreenTextures() {
    for (const [e, t] of this._buckets) {
      const s = e >>> 0;
      const i = s >>> 17;
      const r = s >>> 2 & 32767;
      if (!f(i) && !this._screens.hasWidth(i) || !f(r) && !this._screens.hasHeight(r)) {
        this._dropTextures(t, true);
        this._buckets.delete(e);
      }
    }
  }
  _dropTextures(e, t) {
    if (t && e.length > 0) {
      this.emit("evict");
    }
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      delete this._poolKey[i.uid];
      delete this._poolStyle[i.uid];
      if (t) {
        i.destroy(true);
      }
    }
  }
  clear(e) {
    for (const t of this._buckets.values()) {
      this._dropTextures(t, e !== false);
    }
    this._buckets.clear();
  }
};
var ce = new ue();
d.register(ce);
var pe = class {
  constructor() {
    this.renderPipeId = "renderGroup";
    this.root = null;
    this.canBundle = false;
    this.renderGroupParent = null;
    this.renderGroupChildren = [];
    this.worldTransform = new y();
    this.worldColorAlpha = 4294967295;
    this.worldColor = 16777215;
    this.worldAlpha = 1;
    this.childrenToUpdate = Object.create(null);
    this.updateTick = 0;
    this.gcTick = 0;
    this.childrenRenderablesToUpdate = {
      list: [],
      index: 0
    };
    this.structureDidChange = true;
    this.instructionSet = new M();
    this._onRenderContainers = [];
    this.textureNeedsUpdate = true;
    this.isCachedAsTexture = false;
    this._matrixDirty = 7;
  }
  init(e) {
    this.root = e;
    if (e._onRender) {
      this.addOnRender(e);
    }
    e.didChange = true;
    const t = e.children;
    for (let s = 0; s < t.length; s++) {
      const e = t[s];
      e._updateFlags = 15;
      this.addChild(e);
    }
  }
  enableCacheAsTexture(e = {}) {
    this.textureOptions = e;
    this.isCachedAsTexture = true;
    this.textureNeedsUpdate = true;
  }
  disableCacheAsTexture() {
    this.isCachedAsTexture = false;
    if (this.texture) {
      ce.returnTexture(this.texture);
      this.texture = null;
    }
  }
  updateCacheTexture() {
    this.textureNeedsUpdate = true;
    const e = this._parentCacheAsTextureRenderGroup;
    if (e && !e.textureNeedsUpdate) {
      e.updateCacheTexture();
    }
  }
  reset() {
    this.renderGroupChildren.length = 0;
    for (const e in this.childrenToUpdate) {
      const t = this.childrenToUpdate[e];
      t.list.fill(null);
      t.index = 0;
    }
    this.childrenRenderablesToUpdate.index = 0;
    this.childrenRenderablesToUpdate.list.fill(null);
    this.root = null;
    this.updateTick = 0;
    this.structureDidChange = true;
    this._onRenderContainers.length = 0;
    this.renderGroupParent = null;
    this.disableCacheAsTexture();
  }
  get localTransform() {
    return this.root.localTransform;
  }
  addRenderGroupChild(e) {
    if (e.renderGroupParent) {
      e.renderGroupParent._removeRenderGroupChild(e);
    }
    e.renderGroupParent = this;
    this.renderGroupChildren.push(e);
  }
  _removeRenderGroupChild(e) {
    const t = this.renderGroupChildren.indexOf(e);
    if (t > -1) {
      this.renderGroupChildren.splice(t, 1);
    }
    e.renderGroupParent = null;
  }
  addChild(e) {
    this.structureDidChange = true;
    e.parentRenderGroup = this;
    e.updateTick = -1;
    if (e.parent === this.root) {
      e.relativeRenderGroupDepth = 1;
    } else {
      e.relativeRenderGroupDepth = e.parent.relativeRenderGroupDepth + 1;
    }
    e.didChange = true;
    this.onChildUpdate(e);
    if (e.renderGroup) {
      this.addRenderGroupChild(e.renderGroup);
      return;
    }
    if (e._onRender) {
      this.addOnRender(e);
    }
    const t = e.children;
    for (let s = 0; s < t.length; s++) {
      this.addChild(t[s]);
    }
  }
  removeChild(e) {
    this.structureDidChange = true;
    if (e._onRender) {
      if (!e.renderGroup) {
        this.removeOnRender(e);
      }
    }
    e.parentRenderGroup = null;
    if (e.renderGroup) {
      this._removeRenderGroupChild(e.renderGroup);
      return;
    }
    const t = e.children;
    for (let s = 0; s < t.length; s++) {
      this.removeChild(t[s]);
    }
  }
  removeChildren(e) {
    for (let t = 0; t < e.length; t++) {
      this.removeChild(e[t]);
    }
  }
  onChildUpdate(e) {
    let t = this.childrenToUpdate[e.relativeRenderGroupDepth];
    t ||= this.childrenToUpdate[e.relativeRenderGroupDepth] = {
      index: 0,
      list: []
    };
    t.list[t.index++] = e;
  }
  updateRenderable(e) {
    if (!(e.globalDisplayStatus < 7)) {
      this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e);
      e.didViewUpdate = false;
    }
  }
  onChildViewUpdate(e) {
    this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++] = e;
  }
  get isRenderable() {
    return this.root.localDisplayStatus === 7 && this.worldAlpha > 0;
  }
  addOnRender(e) {
    if (this._onRenderContainers.indexOf(e) === -1) {
      this._onRenderContainers.push(e);
    }
  }
  removeOnRender(e) {
    const t = this._onRenderContainers.indexOf(e);
    if (t !== -1) {
      this._onRenderContainers.splice(t, 1);
    }
  }
  runOnRender(e) {
    for (let t = 0; t < this._onRenderContainers.length; t++) {
      this._onRenderContainers[t]._onRender(e);
    }
  }
  destroy() {
    this.disableCacheAsTexture();
    this.renderGroupParent = null;
    this.root = null;
    this.childrenRenderablesToUpdate = null;
    this.childrenToUpdate = null;
    this.renderGroupChildren = null;
    this._onRenderContainers = null;
    this.instructionSet?.destroy();
    this.instructionSet = null;
  }
  getChildren(e = []) {
    const t = this.root.children;
    for (let s = 0; s < t.length; s++) {
      this._getChildren(t[s], e);
    }
    return e;
  }
  _getChildren(e, t = []) {
    t.push(e);
    if (e.renderGroup) {
      return t;
    }
    const s = e.children;
    for (let i = 0; i < s.length; i++) {
      this._getChildren(s[i], t);
    }
    return t;
  }
  invalidateMatrices() {
    this._matrixDirty = 7;
  }
  get inverseWorldTransform() {
    if (this._matrixDirty & 1) {
      this._matrixDirty &= -2;
      this._inverseWorldTransform ||= new y();
      return this._inverseWorldTransform.copyFrom(this.worldTransform).invert();
    } else {
      return this._inverseWorldTransform;
    }
  }
  get textureOffsetInverseTransform() {
    if (this._matrixDirty & 2) {
      this._matrixDirty &= -3;
      this._textureOffsetInverseTransform ||= new y();
      return this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x, -this._textureBounds.y);
    } else {
      return this._textureOffsetInverseTransform;
    }
  }
  get inverseParentTextureTransform() {
    if (!(this._matrixDirty & 4)) {
      return this._inverseParentTextureTransform;
    }
    this._matrixDirty &= -5;
    const e = this._parentCacheAsTextureRenderGroup;
    if (e) {
      this._inverseParentTextureTransform ||= new y();
      return this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x, -e._textureBounds.y);
    } else {
      return this.worldTransform;
    }
  }
  get cacheToLocalTransform() {
    if (this.isCachedAsTexture) {
      return this.textureOffsetInverseTransform;
    } else if (this._parentCacheAsTextureRenderGroup) {
      return this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform;
    } else {
      return null;
    }
  }
};
function _e(e, t, s = {}) {
  for (const i in t) {
    if (!s[i] && t[i] !== undefined) {
      e[i] = t[i];
    }
  }
}
var fe = new S(null);
var ge = new S(null);
var me = new S(null, 1, 1);
var xe = new S(null);
var ye = class e extends R {
  constructor(e = {}) {
    super();
    this.uid = _("renderable");
    this._updateFlags = 15;
    this.renderGroup = null;
    this.parentRenderGroup = null;
    this.parentRenderGroupIndex = 0;
    this.didChange = false;
    this.didViewUpdate = false;
    this.relativeRenderGroupDepth = 0;
    this.children = [];
    this.parent = null;
    this.includeInBuild = true;
    this.measurable = true;
    this.isSimple = true;
    this.parentRenderLayer = null;
    this.updateTick = -1;
    this.localTransform = new y();
    this.relativeGroupTransform = new y();
    this.groupTransform = this.relativeGroupTransform;
    this.destroyed = false;
    this._position = new S(this, 0, 0);
    this._scale = me;
    this._pivot = ge;
    this._origin = xe;
    this._skew = fe;
    this._cx = 1;
    this._sx = 0;
    this._cy = 0;
    this._sy = 1;
    this._rotation = 0;
    this.localColor = 16777215;
    this.localAlpha = 1;
    this.groupAlpha = 1;
    this.groupColor = 16777215;
    this.groupColorAlpha = 4294967295;
    this.localBlendMode = "inherit";
    this.groupBlendMode = "normal";
    this.localDisplayStatus = 7;
    this.globalDisplayStatus = 7;
    this._didContainerChangeTick = 0;
    this._didViewChangeTick = 0;
    this._didLocalTransformChangeId = -1;
    this.effects = [];
    _e(this, e, {
      children: true,
      parent: true,
      effects: true
    });
    e.children?.forEach(e => this.addChild(e));
    e.parent?.addChild(this);
  }
  static mixin(t) {
    u("8.8.0", "Container.mixin is deprecated, please use extensions.mixin instead.");
    G.mixin(e, t);
  }
  set _didChangeId(e) {
    this._didViewChangeTick = e >> 12 & 4095;
    this._didContainerChangeTick = e & 4095;
  }
  get _didChangeId() {
    return this._didContainerChangeTick & 4095 | (this._didViewChangeTick & 4095) << 12;
  }
  addChild(...e) {
    if (!this.allowChildren) {
      u(b, "addChild: Only Containers will be allowed to add children in v8.0.0");
    }
    if (e.length > 1) {
      for (let t = 0; t < e.length; t++) {
        this.addChild(e[t]);
      }
      return e[0];
    }
    const t = e[0];
    const s = this.renderGroup || this.parentRenderGroup;
    if (t.parent === this) {
      this.children.splice(this.children.indexOf(t), 1);
      this.children.push(t);
      if (s) {
        s.structureDidChange = true;
      }
      return t;
    } else {
      if (t.parent) {
        t.parent.removeChild(t);
      }
      this.children.push(t);
      if (this.sortableChildren) {
        this.sortDirty = true;
      }
      t.parent = this;
      t.didChange = true;
      t._updateFlags = 15;
      if (s) {
        s.addChild(t);
      }
      this.emit("childAdded", t, this, this.children.length - 1);
      t.emit("added", this);
      this._didViewChangeTick++;
      if (t._zIndex !== 0) {
        t.depthOfChildModified();
      }
      return t;
    }
  }
  removeChild(...e) {
    if (e.length > 1) {
      for (let t = 0; t < e.length; t++) {
        this.removeChild(e[t]);
      }
      return e[0];
    }
    const t = e[0];
    const s = this.children.indexOf(t);
    if (s > -1) {
      this._didViewChangeTick++;
      this.children.splice(s, 1);
      if (this.renderGroup) {
        this.renderGroup.removeChild(t);
      } else if (this.parentRenderGroup) {
        this.parentRenderGroup.removeChild(t);
      }
      if (t.parentRenderLayer) {
        t.parentRenderLayer.detach(t);
      }
      t.parent = null;
      this.emit("childRemoved", t, this, s);
      t.emit("removed", this);
    }
    return t;
  }
  _onUpdate(e) {
    if (e && e === this._skew) {
      this._updateSkew();
    }
    this._didContainerChangeTick++;
    if (!this.didChange) {
      this.didChange = true;
      if (this.parentRenderGroup) {
        this.parentRenderGroup.onChildUpdate(this);
      }
    }
  }
  set isRenderGroup(e) {
    if (!!this.renderGroup !== e) {
      if (e) {
        this.enableRenderGroup();
      } else {
        this.disableRenderGroup();
      }
    }
  }
  get isRenderGroup() {
    return !!this.renderGroup;
  }
  enableRenderGroup() {
    if (this.renderGroup) {
      return;
    }
    const e = this.parentRenderGroup;
    e?.removeChild(this);
    this.renderGroup = a.get(pe, this);
    this.groupTransform = y.IDENTITY;
    e?.addChild(this);
    this._updateIsSimple();
  }
  disableRenderGroup() {
    if (!this.renderGroup) {
      return;
    }
    const e = this.parentRenderGroup;
    e?.removeChild(this);
    a.return(this.renderGroup);
    this.renderGroup = null;
    this.groupTransform = this.relativeGroupTransform;
    e?.addChild(this);
    this._updateIsSimple();
  }
  _updateIsSimple() {
    this.isSimple = !this.renderGroup && this.effects.length === 0;
  }
  get worldTransform() {
    this._worldTransform ||= new y();
    if (this.renderGroup) {
      this._worldTransform.copyFrom(this.renderGroup.worldTransform);
    } else if (this.parentRenderGroup) {
      this._worldTransform.appendFrom(this.relativeGroupTransform, this.parentRenderGroup.worldTransform);
    }
    return this._worldTransform;
  }
  get x() {
    return this._position.x;
  }
  set x(e) {
    this._position.x = e;
  }
  get y() {
    return this._position.y;
  }
  set y(e) {
    this._position.y = e;
  }
  get position() {
    return this._position;
  }
  set position(e) {
    this._position.copyFrom(e);
  }
  get rotation() {
    return this._rotation;
  }
  set rotation(e) {
    if (this._rotation !== e) {
      this._rotation = e;
      this._onUpdate(this._skew);
    }
  }
  get angle() {
    return this.rotation * v;
  }
  set angle(e) {
    this.rotation = e * m;
  }
  get pivot() {
    if (this._pivot === ge) {
      this._pivot = new S(this, 0, 0);
    }
    return this._pivot;
  }
  set pivot(e) {
    if (this._pivot === ge) {
      this._pivot = new S(this, 0, 0);
      if (this._origin !== xe) {
        t("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.");
      }
    }
    if (typeof e == "number") {
      this._pivot.set(e);
    } else {
      this._pivot.copyFrom(e);
    }
  }
  get skew() {
    if (this._skew === fe) {
      this._skew = new S(this, 0, 0);
    }
    return this._skew;
  }
  set skew(e) {
    if (this._skew === fe) {
      this._skew = new S(this, 0, 0);
    }
    this._skew.copyFrom(e);
  }
  get scale() {
    if (this._scale === me) {
      this._scale = new S(this, 1, 1);
    }
    return this._scale;
  }
  set scale(e) {
    if (this._scale === me) {
      this._scale = new S(this, 0, 0);
    }
    if (typeof e == "string") {
      e = parseFloat(e);
    }
    if (typeof e == "number") {
      this._scale.set(e);
    } else {
      this._scale.copyFrom(e);
    }
  }
  get origin() {
    if (this._origin === xe) {
      this._origin = new S(this, 0, 0);
    }
    return this._origin;
  }
  set origin(e) {
    if (this._origin === xe) {
      this._origin = new S(this, 0, 0);
      if (this._pivot !== ge) {
        t("Setting both a pivot and origin on a Container is not recommended. This can lead to unexpected behavior if not handled carefully.");
      }
    }
    if (typeof e == "number") {
      this._origin.set(e);
    } else {
      this._origin.copyFrom(e);
    }
  }
  get width() {
    return Math.abs(this.scale.x * this.getLocalBounds().width);
  }
  set width(e) {
    const t = this.getLocalBounds().width;
    this._setWidth(e, t);
  }
  get height() {
    return Math.abs(this.scale.y * this.getLocalBounds().height);
  }
  set height(e) {
    const t = this.getLocalBounds().height;
    this._setHeight(e, t);
  }
  getSize(e) {
    e ||= {};
    const t = this.getLocalBounds();
    e.width = Math.abs(this.scale.x * t.width);
    e.height = Math.abs(this.scale.y * t.height);
    return e;
  }
  setSize(e, t) {
    const s = this.getLocalBounds();
    if (typeof e == "object") {
      t = e.height ?? e.width;
      e = e.width;
    } else {
      t ??= e;
    }
    if (e !== undefined) {
      this._setWidth(e, s.width);
    }
    if (t !== undefined) {
      this._setHeight(t, s.height);
    }
  }
  _updateSkew() {
    const e = this._rotation;
    const t = this._skew;
    this._cx = Math.cos(e + t._y);
    this._sx = Math.sin(e + t._y);
    this._cy = -Math.sin(e - t._x);
    this._sy = Math.cos(e - t._x);
  }
  updateTransform(e) {
    this.position.set(typeof e.x == "number" ? e.x : this.position.x, typeof e.y == "number" ? e.y : this.position.y);
    this.scale.set(typeof e.scaleX == "number" ? e.scaleX : this.scale.x, typeof e.scaleY == "number" ? e.scaleY : this.scale.y);
    this.rotation = typeof e.rotation == "number" ? e.rotation : this.rotation;
    this.skew.set(typeof e.skewX == "number" ? e.skewX : this.skew.x, typeof e.skewY == "number" ? e.skewY : this.skew.y);
    this.pivot.set(typeof e.pivotX == "number" ? e.pivotX : this.pivot.x, typeof e.pivotY == "number" ? e.pivotY : this.pivot.y);
    this.origin.set(typeof e.originX == "number" ? e.originX : this.origin.x, typeof e.originY == "number" ? e.originY : this.origin.y);
    return this;
  }
  setFromMatrix(e) {
    e.decompose(this);
  }
  updateLocalTransform() {
    const e = this._didContainerChangeTick;
    if (this._didLocalTransformChangeId === e) {
      return;
    }
    this._didLocalTransformChangeId = e;
    const t = this.localTransform;
    const s = this._scale;
    const i = this._pivot;
    const r = this._origin;
    const n = this._position;
    const h = s._x;
    const o = s._y;
    const a = i._x;
    const d = i._y;
    const l = -r._x;
    const u = -r._y;
    t.a = this._cx * h;
    t.b = this._sx * h;
    t.c = this._cy * o;
    t.d = this._sy * o;
    t.tx = n._x - (a * t.a + d * t.c) + (l * t.a + u * t.c) - l;
    t.ty = n._y - (a * t.b + d * t.d) + (l * t.b + u * t.d) - u;
  }
  set alpha(e) {
    if (e !== this.localAlpha) {
      this.localAlpha = e;
      this._updateFlags |= 1;
      this._onUpdate();
    }
  }
  get alpha() {
    return this.localAlpha;
  }
  set tint(e) {
    const t = typeof e == "number" ? j(e) : r.shared.setValue(e ?? 16777215).toBgrNumber();
    if (t !== this.localColor) {
      this.localColor = t;
      this._updateFlags |= 1;
      this._onUpdate();
    }
  }
  get tint() {
    return j(this.localColor);
  }
  set blendMode(e) {
    if (this.localBlendMode !== e) {
      if (this.parentRenderGroup) {
        this.parentRenderGroup.structureDidChange = true;
      }
      this._updateFlags |= 2;
      this.localBlendMode = e;
      this._onUpdate();
    }
  }
  get blendMode() {
    return this.localBlendMode;
  }
  get visible() {
    return !!(this.localDisplayStatus & 2);
  }
  set visible(e) {
    const t = e ? 2 : 0;
    if ((this.localDisplayStatus & 2) !== t) {
      if (this.parentRenderGroup) {
        this.parentRenderGroup.structureDidChange = true;
      }
      this._updateFlags |= 4;
      this.localDisplayStatus ^= 2;
      this._onUpdate();
      this.emit("visibleChanged", e);
    }
  }
  get culled() {
    return !(this.localDisplayStatus & 4);
  }
  set culled(e) {
    const t = e ? 0 : 4;
    if ((this.localDisplayStatus & 4) !== t) {
      if (this.parentRenderGroup) {
        this.parentRenderGroup.structureDidChange = true;
      }
      this._updateFlags |= 4;
      this.localDisplayStatus ^= 4;
      this._onUpdate();
    }
  }
  get renderable() {
    return !!(this.localDisplayStatus & 1);
  }
  set renderable(e) {
    const t = e ? 1 : 0;
    if ((this.localDisplayStatus & 1) !== t) {
      this._updateFlags |= 4;
      this.localDisplayStatus ^= 1;
      if (this.parentRenderGroup) {
        this.parentRenderGroup.structureDidChange = true;
      }
      this._onUpdate();
    }
  }
  get isRenderable() {
    return this.localDisplayStatus === 7 && this.groupAlpha > 0;
  }
  destroy(e = false) {
    if (this.destroyed) {
      return;
    }
    let t;
    this.destroyed = true;
    if (this.children.length) {
      t = this.removeChildren(0, this.children.length);
    }
    this.removeFromParent();
    this.parent = null;
    this._maskEffect = null;
    this._filterEffect = null;
    this.effects = null;
    this._position = null;
    this._scale = null;
    this._pivot = null;
    this._origin = null;
    this._skew = null;
    this.emit("destroyed", this);
    this.removeAllListeners();
    if ((typeof e == "boolean" ? e : e?.children) && t) {
      for (let s = 0; s < t.length; ++s) {
        t[s].destroy(e);
      }
    }
    this.renderGroup?.destroy();
    this.renderGroup = null;
  }
};
G.mixin(ye, D, V, ne, se, te, L, U, ie, I, A, K, O);
var Ce = class extends ye {
  constructor(e) {
    super(e);
    this.canBundle = true;
    this.allowChildren = false;
    this._roundPixels = 0;
    this._lastUsed = -1;
    this._gpuData = Object.create(null);
    this.autoGarbageCollect = true;
    this._gcLastUsed = -1;
    this._bounds = new T(0, 1, 0, 0);
    this._boundsDirty = true;
    this.autoGarbageCollect = e.autoGarbageCollect ?? true;
  }
  get bounds() {
    if (this._boundsDirty) {
      this.updateBounds();
      this._boundsDirty = false;
      return this._bounds;
    } else {
      return this._bounds;
    }
  }
  get roundPixels() {
    return !!this._roundPixels;
  }
  set roundPixels(e) {
    this._roundPixels = e ? 1 : 0;
  }
  containsPoint(e) {
    const t = this.bounds;
    const {
      x: s,
      y: i
    } = e;
    return s >= t.minX && s <= t.maxX && i >= t.minY && i <= t.maxY;
  }
  onViewUpdate() {
    this._didViewChangeTick++;
    this._boundsDirty = true;
    if (this.didViewUpdate) {
      return;
    }
    this.didViewUpdate = true;
    const e = this.renderGroup || this.parentRenderGroup;
    if (e) {
      e.onChildViewUpdate(this);
    }
  }
  unload() {
    this.emit("unload", this);
    for (const e in this._gpuData) {
      this._gpuData[e]?.destroy();
    }
    this._gpuData = Object.create(null);
    this.onViewUpdate();
  }
  destroy(e) {
    this.unload();
    super.destroy(e);
    this._bounds = null;
  }
  collectRenderablesSimple(e, t, s) {
    const {
      renderPipes: i
    } = t;
    i.blendMode.pushBlendMode(this, this.groupBlendMode, e);
    const r = i[this.renderPipeId];
    if (r?.addRenderable) {
      r.addRenderable(this, e);
    }
    this.didViewUpdate = false;
    const n = this.children;
    const h = n.length;
    for (let o = 0; o < h; o++) {
      n[o].collectRenderables(e, t, s);
    }
    i.blendMode.popBlendMode(e);
  }
};
var be = class e extends Ce {
  constructor(e = i.EMPTY) {
    if (e instanceof i) {
      e = {
        texture: e
      };
    }
    const {
      texture: t = i.EMPTY,
      anchor: s,
      roundPixels: r,
      width: n,
      height: h,
      ...o
    } = e;
    super({
      label: "Sprite",
      ...o
    });
    this.renderPipeId = "sprite";
    this.batched = true;
    this._visualBounds = {
      minX: 0,
      maxX: 1,
      minY: 0,
      maxY: 0
    };
    this._anchor = new S({
      _onUpdate: () => {
        this.onViewUpdate();
      }
    });
    if (s) {
      this.anchor = s;
    } else if (t.defaultAnchor) {
      this.anchor = t.defaultAnchor;
    }
    this.texture = t;
    this.allowChildren = false;
    this.roundPixels = r ?? false;
    if (n !== undefined) {
      this.width = n;
    }
    if (h !== undefined) {
      this.height = h;
    }
  }
  static from(t, s = false) {
    return new e(t instanceof i ? t : i.from(t, s));
  }
  set texture(e) {
    e ||= i.EMPTY;
    const t = this._texture;
    if (t !== e) {
      if (t && t.dynamic) {
        t.off("update", this.onViewUpdate, this);
      }
      if (e.dynamic) {
        e.on("update", this.onViewUpdate, this);
      }
      this._texture = e;
      if (this._width) {
        this._setWidth(this._width, this._texture.orig.width);
      }
      if (this._height) {
        this._setHeight(this._height, this._texture.orig.height);
      }
      this.onViewUpdate();
    }
  }
  get texture() {
    return this._texture;
  }
  get visualBounds() {
    k(this._visualBounds, this._anchor, this._texture);
    return this._visualBounds;
  }
  get sourceBounds() {
    u("8.6.1", "Sprite.sourceBounds is deprecated, use visualBounds instead.");
    return this.visualBounds;
  }
  updateBounds() {
    const e = this._anchor;
    const t = this._texture;
    const s = this._bounds;
    const {
      width: i,
      height: r
    } = t.orig;
    s.minX = -e._x * i;
    s.maxX = s.minX + i;
    s.minY = -e._y * r;
    s.maxY = s.minY + r;
  }
  destroy(e = false) {
    super.destroy(e);
    if (typeof e == "boolean" ? e : e?.texture) {
      const t = typeof e == "boolean" ? e : e?.textureSource;
      this._texture.destroy(t);
    }
    this._texture = null;
    this._visualBounds = null;
    this._bounds = null;
    this._anchor = null;
  }
  get anchor() {
    return this._anchor;
  }
  set anchor(e) {
    if (typeof e == "number") {
      this._anchor.set(e);
    } else {
      this._anchor.copyFrom(e);
    }
  }
  get width() {
    return Math.abs(this.scale.x) * this._texture.orig.width;
  }
  set width(e) {
    this._setWidth(e, this._texture.orig.width);
    this._width = e;
  }
  get height() {
    return Math.abs(this.scale.y) * this._texture.orig.height;
  }
  set height(e) {
    this._setHeight(e, this._texture.orig.height);
    this._height = e;
  }
  getSize(e) {
    e ||= {};
    e.width = Math.abs(this.scale.x) * this._texture.orig.width;
    e.height = Math.abs(this.scale.y) * this._texture.orig.height;
    return e;
  }
  setSize(e, t) {
    if (typeof e == "object") {
      t = e.height ?? e.width;
      e = e.width;
    } else {
      t ??= e;
    }
    if (e !== undefined) {
      this._setWidth(e, this._texture.orig.width);
    }
    if (t !== undefined) {
      this._setHeight(t, this._texture.orig.height);
    }
  }
};
var Te = class extends l {
  constructor(e) {
    e.resource ||= s.get().createCanvas();
    if (!e.width) {
      e.width = e.resource.width;
      if (!e.autoDensity) {
        e.width /= e.resolution;
      }
    }
    if (!e.height) {
      e.height = e.resource.height;
      if (!e.autoDensity) {
        e.height /= e.resolution;
      }
    }
    super(e);
    this.uploadMethodId = "image";
    this.autoDensity = e.autoDensity;
    this.resizeCanvas();
    this.transparent = !!e.transparent;
  }
  resizeCanvas() {
    if (this.autoDensity && "style" in this.resource) {
      this.resource.style.width = `${this.width}px`;
      this.resource.style.height = `${this.height}px`;
    }
    if (this.resource.width !== this.pixelWidth || this.resource.height !== this.pixelHeight) {
      this.resource.width = this.pixelWidth;
      this.resource.height = this.pixelHeight;
    }
  }
  resize(e = this.width, t = this.height, s = this._resolution) {
    const i = super.resize(e, t, s);
    if (i) {
      this.resizeCanvas();
    }
    return i;
  }
  static test(e) {
    return globalThis.HTMLCanvasElement && e instanceof HTMLCanvasElement || globalThis.OffscreenCanvas && e instanceof OffscreenCanvas;
  }
  get context2D() {
    return this._context2D ||= this.resource.getContext("2d");
  }
};
Te.extension = c.TextureSource;
var we = (e => {
  e[e.INTERACTION = 50] = "INTERACTION";
  e[e.HIGH = 25] = "HIGH";
  e[e.NORMAL = 0] = "NORMAL";
  e[e.LOW = -25] = "LOW";
  e[e.UTILITY = -50] = "UTILITY";
  return e;
})(we || {});
var ve = class {
  constructor(e, t = null, s = 0, i = false) {
    this.next = null;
    this.previous = null;
    this._destroyed = false;
    this._fn = e;
    this._context = t;
    this.priority = s;
    this._once = i;
  }
  match(e, t = null) {
    return this._fn === e && this._context === t;
  }
  emit(e) {
    if (this._fn) {
      if (this._context) {
        this._fn.call(this._context, e);
      } else {
        this._fn(e);
      }
    }
    const t = this.next;
    if (this._once) {
      this.destroy(true);
    }
    if (this._destroyed) {
      this.next = null;
    }
    return t;
  }
  connect(e) {
    this.previous = e;
    if (e.next) {
      e.next.previous = this;
    }
    this.next = e.next;
    e.next = this;
  }
  destroy(e = false) {
    this._destroyed = true;
    this._fn = null;
    this._context = null;
    if (this.previous) {
      this.previous.next = this.next;
    }
    if (this.next) {
      this.next.previous = this.previous;
    }
    const t = this.next;
    this.next = e ? null : t;
    this.previous = null;
    return t;
  }
};
var Ge = class e {
  constructor() {
    this.autoStart = false;
    this.deltaTime = 1;
    this.lastTime = -1;
    this.speed = 1;
    this.started = false;
    this._requestId = null;
    this._maxElapsedMS = 100;
    this._minElapsedMS = 0;
    this._protected = false;
    this._lastFrame = -1;
    this._head = new ve(null, null, Infinity);
    this.deltaMS = 1 / e.targetFPMS;
    this.elapsedMS = 1 / e.targetFPMS;
    this._tick = e => {
      this._requestId = null;
      if (this.started) {
        this.update(e);
        if (this.started && this._requestId === null && this._head.next) {
          this._requestId = requestAnimationFrame(this._tick);
        }
      }
    };
  }
  _requestIfNeeded() {
    if (this._requestId === null && this._head.next) {
      this.lastTime = performance.now();
      this._lastFrame = this.lastTime;
      this._requestId = requestAnimationFrame(this._tick);
    }
  }
  _cancelIfNeeded() {
    if (this._requestId !== null) {
      cancelAnimationFrame(this._requestId);
      this._requestId = null;
    }
  }
  _startIfPossible() {
    if (this.started) {
      this._requestIfNeeded();
    } else if (this.autoStart) {
      this.start();
    }
  }
  add(e, t, s = we.NORMAL) {
    return this._addListener(new ve(e, t, s));
  }
  addOnce(e, t, s = we.NORMAL) {
    return this._addListener(new ve(e, t, s, true));
  }
  _addListener(e) {
    let t = this._head.next;
    let s = this._head;
    if (t) {
      while (t) {
        if (e.priority > t.priority) {
          e.connect(s);
          break;
        }
        s = t;
        t = t.next;
      }
      if (!e.previous) {
        e.connect(s);
      }
    } else {
      e.connect(s);
    }
    this._startIfPossible();
    return this;
  }
  remove(e, t) {
    let s = this._head.next;
    while (s) {
      s = s.match(e, t) ? s.destroy() : s.next;
    }
    if (!this._head.next) {
      this._cancelIfNeeded();
    }
    return this;
  }
  get count() {
    if (!this._head) {
      return 0;
    }
    let e = 0;
    let t = this._head;
    while (t = t.next) {
      e++;
    }
    return e;
  }
  start() {
    if (!this.started) {
      this.started = true;
      this._requestIfNeeded();
    }
  }
  stop() {
    if (this.started) {
      this.started = false;
      this._cancelIfNeeded();
    }
  }
  destroy() {
    if (!this._protected) {
      this.stop();
      let e = this._head.next;
      while (e) {
        e = e.destroy(true);
      }
      this._head.destroy();
      this._head = null;
    }
  }
  update(t = performance.now()) {
    let s;
    if (t > this.lastTime) {
      s = this.elapsedMS = t - this.lastTime;
      if (s > this._maxElapsedMS) {
        s = this._maxElapsedMS;
      }
      s *= this.speed;
      if (this._minElapsedMS) {
        const e = t - this._lastFrame | 0;
        if (e < this._minElapsedMS) {
          return;
        }
        this._lastFrame = t - e % this._minElapsedMS;
      }
      this.deltaMS = s;
      this.deltaTime = this.deltaMS * e.targetFPMS;
      const i = this._head;
      let r = i.next;
      while (r) {
        r = r.emit(this);
      }
      if (!i.next) {
        this._cancelIfNeeded();
      }
    } else {
      this.deltaTime = this.deltaMS = this.elapsedMS = 0;
    }
    this.lastTime = t;
  }
  get FPS() {
    return 1000 / this.elapsedMS;
  }
  get minFPS() {
    return 1000 / this._maxElapsedMS;
  }
  set minFPS(t) {
    const s = Math.min(Math.max(0, t) / 1000, e.targetFPMS);
    this._maxElapsedMS = 1 / s;
    if (this._minElapsedMS && t > this.maxFPS) {
      this.maxFPS = t;
    }
  }
  get maxFPS() {
    if (this._minElapsedMS) {
      return Math.round(1000 / this._minElapsedMS);
    } else {
      return 0;
    }
  }
  set maxFPS(e) {
    if (e === 0) {
      this._minElapsedMS = 0;
    } else {
      if (e < this.minFPS) {
        this.minFPS = e;
      }
      this._minElapsedMS = 1 / (e / 1000);
    }
  }
  static get shared() {
    if (!e._shared) {
      const t = e._shared = new e();
      t.autoStart = true;
      t._protected = true;
    }
    return e._shared;
  }
  static get system() {
    if (!e._system) {
      const t = e._system = new e();
      t.autoStart = true;
      t._protected = true;
    }
    return e._system;
  }
};
Ge.targetFPMS = 0.06;
var Re = Ge;
var Me = {
  normal: 0,
  add: 1,
  multiply: 2,
  screen: 3,
  overlay: 4,
  erase: 5,
  "normal-npm": 6,
  "add-npm": 7,
  "screen-npm": 8,
  min: 9,
  max: 10
};
var Se = {
  BLEND: 0,
  OFFSET: 1,
  CULLING: 2,
  DEPTH_TEST: 3,
  WINDING: 4,
  DEPTH_MASK: 5
};
var {
  BLEND: ke,
  OFFSET: Ie,
  CULLING: Ae,
  DEPTH_TEST: Fe,
  WINDING: De,
  DEPTH_MASK: Oe
} = Se;
var Ee = class e {
  constructor() {
    this.data = 0;
    this.blendMode = "normal";
    this.polygonOffset = 0;
    this.blend = true;
    this.depthMask = true;
  }
  get blend() {
    return !!(this.data & 1 << ke);
  }
  set blend(e) {
    if (!!(this.data & 1 << ke) !== e) {
      this.data ^= 1 << ke;
    }
  }
  get offsets() {
    return !!(this.data & 1 << Ie);
  }
  set offsets(e) {
    if (!!(this.data & 1 << Ie) !== e) {
      this.data ^= 1 << Ie;
    }
  }
  set cullMode(e) {
    if (e !== "none") {
      this.culling = true;
      this.clockwiseFrontFace = e === "front";
    } else {
      this.culling = false;
    }
  }
  get cullMode() {
    if (this.culling) {
      if (this.clockwiseFrontFace) {
        return "front";
      } else {
        return "back";
      }
    } else {
      return "none";
    }
  }
  get culling() {
    return !!(this.data & 1 << Ae);
  }
  set culling(e) {
    if (!!(this.data & 1 << Ae) !== e) {
      this.data ^= 1 << Ae;
    }
  }
  get depthTest() {
    return !!(this.data & 1 << Fe);
  }
  set depthTest(e) {
    if (!!(this.data & 1 << Fe) !== e) {
      this.data ^= 1 << Fe;
    }
  }
  get depthMask() {
    return !!(this.data & 1 << Oe);
  }
  set depthMask(e) {
    if (!!(this.data & 1 << Oe) !== e) {
      this.data ^= 1 << Oe;
    }
  }
  get clockwiseFrontFace() {
    return !!(this.data & 1 << De);
  }
  set clockwiseFrontFace(e) {
    if (!!(this.data & 1 << De) !== e) {
      this.data ^= 1 << De;
    }
  }
  get blendMode() {
    return this._blendMode;
  }
  set blendMode(e) {
    this.blend = e !== "none";
    this._blendMode = e;
    this._blendModeId = Me[e] || 0;
  }
  get polygonOffset() {
    return this._polygonOffset;
  }
  set polygonOffset(e) {
    this.offsets = !!e;
    this._polygonOffset = e;
  }
  toString() {
    return `[pixi.js/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`;
  }
  static for2d() {
    const t = new e();
    t.depthTest = false;
    t.depthMask = false;
    t.blend = true;
    return t;
  }
};
Ee.default2d = Ee.for2d();
var Pe = Ee;
var Be = class e extends p {
  constructor(t) {
    super(t = {
      ...e.defaultOptions,
      ...t
    });
    this.enabled = true;
    this._state = Pe.for2d();
    this.blendMode = t.blendMode;
    this.padding = t.padding;
    if (typeof t.antialias == "boolean") {
      this.antialias = t.antialias ? "on" : "off";
    } else {
      this.antialias = t.antialias;
    }
    this.resolution = t.resolution;
    this.blendRequired = t.blendRequired;
    this.clipToViewport = t.clipToViewport;
    this.addResource("uTexture", 0, 1);
    if (t.blendRequired) {
      this.addResource("uBackTexture", 0, 3);
    }
  }
  apply(e, t, s, i) {
    e.applyFilter(this, t, s, i);
  }
  get blendMode() {
    return this._state.blendMode;
  }
  set blendMode(e) {
    this._state.blendMode = e;
  }
  static from(t) {
    const {
      gpu: s,
      gl: i,
      ...r
    } = t;
    let n;
    let h;
    if (s) {
      n = g.from(s);
    }
    if (i) {
      h = o.from(i);
    }
    return new e({
      gpuProgram: n,
      glProgram: h,
      ...r
    });
  }
};
Be.defaultOptions = {
  blendMode: "normal",
  resolution: 1,
  padding: 0,
  antialias: "off",
  blendRequired: false,
  clipToViewport: true
};
var Le = Be;
export { L as A, S as B, $ as C, z as D, V as E, D as F, F as I, A as L, P as M, E as N, N as O, O as P, I as R, K as S, q as T, se as _, ve as a, J as b, be as c, _e as d, pe as f, ie as g, ne as h, Re as i, B as j, U as k, Ce as l, ue as m, Se as n, we as o, ce as p, Pe as r, Te as s, Le as t, ye as u, te as v, W as w, j as x, Z as y, k as z };
