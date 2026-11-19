import { G as e, I as t, J as r, K as n, T as s, V as i, W as a, Y as o, Z as l, at as d, bt as h, d as u, dt as c, f as p, ft as m, g as f, ht as g, mt as _, ot as x, q as b, rt as v, st as y, t as T, u as S, xt as C, yt as k } from "./C_U2Xa4J.js";
import { C as w, N as M, b as G, c as R, f as P, i as A, p as B, r as U, s as O, t as I, u as E, w as L } from "./CKWBsu03.js";
import { F as z, n as D } from "./CcWEjvQM.js";
var F;
var H = [];
async function W(e) {
  if (!e) {
    for (let t = 0; t < H.length; t++) {
      const e = H[t];
      if (e.value.test()) {
        await e.value.load();
        return;
      }
    }
  }
}
async function j(e) {
  return W(!e);
}
function N() {
  if (typeof F == "boolean") {
    return F;
  }
  try {
    F = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
      a: "b"
    }, "a", "b") === true;
  } catch (e) {
    F = false;
  }
  return F;
}
C.handleByNamedList(h.Environment, H);
var V = (e => {
  e[e.NONE = 0] = "NONE";
  e[e.COLOR = 16384] = "COLOR";
  e[e.STENCIL = 1024] = "STENCIL";
  e[e.DEPTH = 256] = "DEPTH";
  e[e.COLOR_DEPTH = 16640] = "COLOR_DEPTH";
  e[e.COLOR_STENCIL = 17408] = "COLOR_STENCIL";
  e[e.DEPTH_STENCIL = 1280] = "DEPTH_STENCIL";
  e[e.ALL = 17664] = "ALL";
  return e;
})(V || {});
var Y = class {
  constructor(e) {
    this.items = [];
    this._name = e;
  }
  emit(e, t, r, n, s, i, a, o) {
    const {
      name: l,
      items: d
    } = this;
    for (let h = 0, u = d.length; h < u; h++) {
      d[h][l](e, t, r, n, s, i, a, o);
    }
    return this;
  }
  add(e) {
    if (e[this._name]) {
      this.remove(e);
      this.items.push(e);
    }
    return this;
  }
  remove(e) {
    const t = this.items.indexOf(e);
    if (t !== -1) {
      this.items.splice(t, 1);
    }
    return this;
  }
  contains(e) {
    return this.items.indexOf(e) !== -1;
  }
  removeAll() {
    this.items.length = 0;
    return this;
  }
  destroy() {
    this.removeAll();
    this.items = null;
    this._name = null;
  }
  get empty() {
    return this.items.length === 0;
  }
  get name() {
    return this._name;
  }
};
var $ = ["init", "destroy", "contextChange", "resolutionChange", "resetState", "renderEnd", "renderStart", "render", "update", "postrender", "prerender"];
var q = class e extends k {
  constructor(e) {
    super();
    this.tick = 0;
    this.uid = c("renderer");
    this.runners = Object.create(null);
    this.renderPipes = Object.create(null);
    this._initOptions = {};
    this._systemsHash = Object.create(null);
    this.type = e.type;
    this.name = e.name;
    this.config = e;
    const t = [...$, ...(this.config.runners ?? [])];
    this._addRunners(...t);
    this._unsafeEvalCheck();
  }
  async init(t = {}) {
    const r = t.skipExtensionImports === true || t.manageImports === false;
    await W(r);
    if (!r && this.config.loaders) {
      await Promise.all(this.config.loaders.map(e => e.value.load()));
    }
    this._addSystems(this.config.systems);
    this._addPipes(this.config.renderPipes, this.config.renderPipeAdaptors);
    for (const e in this._systemsHash) {
      t = {
        ...this._systemsHash[e].constructor.defaultOptions,
        ...t
      };
    }
    t = {
      ...e.defaultOptions,
      ...t
    };
    this._roundPixels = t.roundPixels ? 1 : 0;
    for (let e = 0; e < this.runners.init.items.length; e++) {
      await this.runners.init.items[e].init(t);
    }
    this._initOptions = t;
  }
  render(e, t) {
    this.tick++;
    let r = e;
    if (r instanceof E) {
      r = {
        container: r
      };
      if (t) {
        d(x, "passing a second argument is deprecated, please use render options instead");
        r.target = t.renderTexture;
      }
    }
    r.target ||= this.view.renderTarget;
    if (r.target === this.view.renderTarget) {
      this._lastObjectRendered = r.container;
      r.clearColor ??= this.background.colorRgba;
      r.clear ??= this.background.clearBeforeRender;
    }
    if (r.clearColor) {
      const e = Array.isArray(r.clearColor) && r.clearColor.length === 4;
      r.clearColor = e ? r.clearColor : n.shared.setValue(r.clearColor).toArray();
    }
    if (!r.transform) {
      r.container.updateLocalTransform();
      r.transform = r.container.localTransform;
    }
    if (r.container.visible) {
      r.container.enableRenderGroup();
      this.runners.prerender.emit(r);
      this.runners.renderStart.emit(r);
      this.runners.render.emit(r);
      this.runners.renderEnd.emit(r);
      this.runners.postrender.emit(r);
    }
  }
  resize(e, t, r) {
    const n = this.view.resolution;
    this.view.resize(e, t, r);
    this.emit("resize", this.view.screen.width, this.view.screen.height, this.view.resolution);
    if (r !== undefined && r !== n) {
      this.runners.resolutionChange.emit(r);
    }
  }
  clear(e = {}) {
    e.target ||= this.renderTarget.renderTarget;
    e.clearColor ||= this.background.colorRgba;
    e.clear ??= V.ALL;
    const {
      clear: t,
      clearColor: r,
      target: s,
      mipLevel: i,
      layer: a
    } = e;
    n.shared.setValue(r ?? this.background.colorRgba);
    this.renderTarget.clear(s, t, n.shared.toArray(), i ?? 0, a ?? 0);
  }
  get resolution() {
    return this.view.resolution;
  }
  set resolution(e) {
    this.view.resolution = e;
    this.runners.resolutionChange.emit(e);
  }
  get width() {
    return this.view.texture.frame.width;
  }
  get height() {
    return this.view.texture.frame.height;
  }
  get canvas() {
    return this.view.canvas;
  }
  get lastObjectRendered() {
    return this._lastObjectRendered;
  }
  get renderingToScreen() {
    return this.renderTarget.renderingToScreen;
  }
  get screen() {
    return this.view.screen;
  }
  _addRunners(...e) {
    e.forEach(e => {
      this.runners[e] = new Y(e);
    });
  }
  _addSystems(e) {
    let t;
    for (t in e) {
      const r = e[t];
      this._addSystem(r.value, r.name);
    }
  }
  _addSystem(e, t) {
    const r = new e(this);
    if (this[t]) {
      throw new Error(`Whoops! The name "${t}" is already in use`);
    }
    this[t] = r;
    this._systemsHash[t] = r;
    for (const n in this.runners) {
      this.runners[n].add(r);
    }
    return this;
  }
  _addPipes(e, t) {
    const r = t.reduce((e, t) => {
      e[t.name] = t.value;
      return e;
    }, {});
    e.forEach(e => {
      const t = e.value;
      const n = e.name;
      const s = r[n];
      this.renderPipes[n] = new t(this, s ? new s() : null);
      this.runners.destroy.add(this.renderPipes[n]);
    });
  }
  destroy(e = false) {
    this.runners.destroy.items.reverse();
    this.runners.destroy.emit(e);
    if (e === true || typeof e == "object" && e.releaseGlobalResources) {
      a.release();
    }
    Object.values(this.runners).forEach(e => {
      e.destroy();
    });
    this._systemsHash = null;
    this.renderPipes = null;
    this.removeAllListeners();
  }
  generateTexture(e) {
    return this.textureGenerator.generateTexture(e);
  }
  get roundPixels() {
    return !!this._roundPixels;
  }
  _unsafeEvalCheck() {
    if (!N()) {
      throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.");
    }
  }
  resetState() {
    this.runners.resetState.emit();
  }
};
q.defaultOptions = {
  resolution: 1,
  failIfMajorPerformanceCaveat: false,
  roundPixels: false
};
var K = q;
var J = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
var X = "8.23.0";
var Q = class {
  static init() {
    globalThis.__PIXI_APP_INIT__?.(this, X);
  }
  static destroy() {}
};
Q.extension = h.Application;
var Z = class {
  constructor(e) {
    this._renderer = e;
  }
  init() {
    globalThis.__PIXI_RENDERER_INIT__?.(this._renderer, X);
  }
  destroy() {
    this._renderer = null;
  }
};
Z.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem],
  name: "initHook",
  priority: -10
};
var ee = "in vec2 vMaskCoord;\nin vec2 vTextureCoord;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMaskTexture;\n\nuniform float uAlpha;\nuniform vec4 uMaskClamp;\nuniform float uInverse;\nuniform float uChannel;\n\nout vec4 finalColor;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(uMaskClamp.x, vMaskCoord.x) +\n        step(uMaskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, uMaskClamp.z) +\n        step(vMaskCoord.y, uMaskClamp.w));\n\n    // TODO look into why this is needed\n    float npmAlpha = uAlpha;\n    vec4 original = texture(uTexture, vTextureCoord);\n    vec4 masky = texture(uMaskTexture, vMaskCoord);\n\n    float a;\n    if (uChannel == 1.0) {\n        a = masky.a * npmAlpha * clip;\n    } else {\n        float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n        a = alphaMul * masky.r * npmAlpha * clip;\n    }\n\n    if (uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    finalColor = original * a;\n}\n";
var te = "in vec2 aPosition;\n\nout vec2 vTextureCoord;\nout vec2 vMaskCoord;\n\n\nuniform vec4 uInputSize;\nuniform vec4 uOutputFrame;\nuniform vec4 uOutputTexture;\nuniform mat3 uFilterMatrix;\n\nvec4 filterVertexPosition(  vec2 aPosition )\n{\n    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;\n       \n    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord(  vec2 aPosition )\n{\n    return aPosition * (uOutputFrame.zw * uInputSize.zw);\n}\n\nvec2 getFilterCoord( vec2 aPosition )\n{\n    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}   \n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition(aPosition);\n    vTextureCoord = filterTextureCoord(aPosition);\n    vMaskCoord = getFilterCoord(aPosition);\n}\n";
var re = "struct GlobalFilterUniforms {\n  uInputSize:vec4<f32>,\n  uInputPixel:vec4<f32>,\n  uInputClamp:vec4<f32>,\n  uOutputFrame:vec4<f32>,\n  uGlobalFrame:vec4<f32>,\n  uOutputTexture:vec4<f32>,\n};\n\nstruct MaskUniforms {\n  uFilterMatrix:mat3x3<f32>,\n  uMaskClamp:vec4<f32>,\n  uAlpha:f32,\n  uInverse:f32,\n  uChannel:f32,\n};\n\n@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;\n@group(0) @binding(1) var uTexture: texture_2d<f32>;\n@group(0) @binding(2) var uSampler : sampler;\n\n@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;\n@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;\n\nstruct VSOutput {\n    @builtin(position) position: vec4<f32>,\n    @location(0) uv : vec2<f32>,\n    @location(1) filterUv : vec2<f32>,\n};\n\nfn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>\n{\n    var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;\n\n    position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;\n    position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;\n\n    return vec4(position, 0.0, 1.0);\n}\n\nfn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n    return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);\n}\n\nfn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);\n}\n\nfn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>\n{\n  return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;\n}\n\nfn getSize() -> vec2<f32>\n{\n  return gfu.uGlobalFrame.zw;\n}\n\n@vertex\nfn mainVertex(\n  @location(0) aPosition : vec2<f32>,\n) -> VSOutput {\n  return VSOutput(\n   filterVertexPosition(aPosition),\n   filterTextureCoord(aPosition),\n   getFilterCoord(aPosition)\n  );\n}\n\n@fragment\nfn mainFragment(\n  @location(0) uv: vec2<f32>,\n  @location(1) filterUv: vec2<f32>,\n  @builtin(position) position: vec4<f32>\n) -> @location(0) vec4<f32> {\n\n    var maskClamp = filterUniforms.uMaskClamp;\n    var uAlpha = filterUniforms.uAlpha;\n\n    var clip = step(3.5,\n      step(maskClamp.x, filterUv.x) +\n      step(maskClamp.y, filterUv.y) +\n      step(filterUv.x, maskClamp.z) +\n      step(filterUv.y, maskClamp.w));\n\n    var mask = textureSample(uMaskTexture, uSampler, filterUv);\n    var source = textureSample(uTexture, uSampler, uv);\n\n    var a: f32;\n    if (filterUniforms.uChannel == 1.0) {\n        a = mask.a * uAlpha * clip;\n    } else {\n        var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);\n        a = alphaMul * mask.r * uAlpha * clip;\n    }\n\n    if (filterUniforms.uInverse == 1.0) {\n        a = 1.0 - a;\n    }\n\n    return source * a;\n}\n";
var ne = class extends I {
  constructor(e) {
    const {
      sprite: t,
      ...r
    } = e;
    const n = new o(t.texture);
    const i = new p({
      uFilterMatrix: {
        value: new _(),
        type: "mat3x3<f32>"
      },
      uMaskClamp: {
        value: n.uClampFrame,
        type: "vec4<f32>"
      },
      uAlpha: {
        value: 1,
        type: "f32"
      },
      uInverse: {
        value: e.inverse ? 1 : 0,
        type: "f32"
      },
      uChannel: {
        value: e.channel === "alpha" ? 1 : 0,
        type: "f32"
      }
    });
    super({
      ...r,
      gpuProgram: f.from({
        vertex: {
          source: re,
          entryPoint: "mainVertex"
        },
        fragment: {
          source: re,
          entryPoint: "mainFragment"
        }
      }),
      glProgram: s.from({
        vertex: te,
        fragment: ee,
        name: "mask-filter"
      }),
      clipToViewport: false,
      resources: {
        filterUniforms: i,
        uMaskTexture: t.texture.source
      }
    });
    this.sprite = t;
    this._textureMatrix = n;
  }
  setSprite(e) {
    this.sprite = e;
    const t = this._getSafeTexture();
    this._textureMatrix.texture = t;
    this.resources.uMaskTexture = t.source;
  }
  set inverse(e) {
    this.resources.filterUniforms.uniforms.uInverse = e ? 1 : 0;
  }
  get inverse() {
    return this.resources.filterUniforms.uniforms.uInverse === 1;
  }
  set channel(e) {
    this.resources.filterUniforms.uniforms.uChannel = e === "alpha" ? 1 : 0;
  }
  get channel() {
    if (this.resources.filterUniforms.uniforms.uChannel === 1) {
      return "alpha";
    } else {
      return "red";
    }
  }
  apply(e, t, r, n) {
    const s = this._getSafeTexture();
    this._textureMatrix.texture = s;
    e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix, this.sprite).prepend(this._textureMatrix.mapCoord);
    this.resources.uMaskTexture = s.source;
    e.applyFilter(this, t, r, n);
  }
  _getSafeTexture() {
    const t = this.sprite.texture;
    if (t.destroyed || !t.source || t.source.destroyed) {
      e("[MaskFilter] The mask texture was destroyed while the mask is still in use. Remove the mask before destroying its texture.");
      return r.EMPTY;
    } else {
      return t;
    }
  }
  destroy(e = false) {
    this._textureMatrix.destroy();
    super.destroy(e);
  }
};
function se(e, t, r, n) {
  r[n++] = (e >> 16 & 255) / 255;
  r[n++] = (e >> 8 & 255) / 255;
  r[n++] = (e & 255) / 255;
  r[n++] = t;
}
function ie(e, t, r) {
  const n = (e >> 24 & 255) / 255;
  t[r++] = (e & 255) / 255 * n;
  t[r++] = (e >> 8 & 255) / 255 * n;
  t[r++] = (e >> 16 & 255) / 255 * n;
  t[r++] = n;
}
var ae = class {
  constructor() {
    this.batcherName = "default";
    this.topology = "triangle-list";
    this.attributeSize = 4;
    this.indexSize = 6;
    this.packAsQuad = true;
    this.roundPixels = 0;
    this._attributeStart = 0;
    this._batcher = null;
    this._batch = null;
  }
  get blendMode() {
    return this.renderable.groupBlendMode;
  }
  get color() {
    return this.renderable.groupColorAlpha;
  }
  reset() {
    this.renderable = null;
    this.texture = null;
    this._batcher = null;
    this._batch = null;
    this.bounds = null;
  }
  destroy() {
    this.reset();
  }
};
var oe = class e {
  constructor(e, t) {
    this.state = U.for2d();
    this._batchersByInstructionSet = Object.create(null);
    this._activeBatches = Object.create(null);
    this.renderer = e;
    this._adaptor = t;
    this._adaptor.init?.(this);
  }
  static getBatcher(e, t) {
    return new this._availableBatchers[e]({
      maxTextures: t
    });
  }
  buildStart(e) {
    let t = this._batchersByInstructionSet[e.uid];
    if (!t) {
      t = this._batchersByInstructionSet[e.uid] = Object.create(null);
      t.default ||= new D({
        maxTextures: this.renderer.limits.maxBatchableTextures
      });
    }
    this._activeBatches = t;
    this._activeBatch = this._activeBatches.default;
    for (const r in this._activeBatches) {
      this._activeBatches[r].begin();
    }
  }
  addToBatch(t, r) {
    if (this._activeBatch.name !== t.batcherName) {
      this._activeBatch.break(r);
      let n = this._activeBatches[t.batcherName];
      if (!n) {
        n = this._activeBatches[t.batcherName] = e.getBatcher(t.batcherName, this.renderer.limits.maxBatchableTextures);
        n.begin();
      }
      this._activeBatch = n;
    }
    this._activeBatch.add(t);
  }
  break(e) {
    this._activeBatch.break(e);
  }
  buildEnd(e) {
    this._activeBatch.break(e);
    const t = this._activeBatches;
    for (const r in t) {
      const e = t[r];
      const n = e.geometry;
      n.indexBuffer.setDataWithSize(e.indexBuffer, e.indexSize, true);
      n.buffers[0].setDataWithSize(e.attributeBuffer.float32View, e.attributeSize, false);
    }
  }
  upload(e) {
    const t = this._batchersByInstructionSet[e.uid];
    for (const r in t) {
      const e = t[r];
      const n = e.geometry;
      if (e.dirty) {
        e.dirty = false;
        n.buffers[0].update(e.attributeSize * 4);
      }
    }
  }
  execute(e) {
    if (e.action === "startBatch") {
      const t = e.batcher;
      const r = t.geometry;
      const n = t.shader;
      this._adaptor.start(this, r, n);
    }
    this._adaptor.execute(this, e);
  }
  destroyInstructionSet(e) {
    const t = this._batchersByInstructionSet[e.uid];
    if (t) {
      for (const e in t) {
        t[e].destroy();
      }
      delete this._batchersByInstructionSet[e.uid];
      if (this._activeBatches === t) {
        this._activeBatches = Object.create(null);
        this._activeBatch = null;
      }
    }
  }
  destroy() {
    this.state = null;
    this.renderer = null;
    this._adaptor = null;
    for (const e in this._activeBatches) {
      this._activeBatches[e].destroy();
    }
    this._activeBatches = null;
  }
};
oe.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "batch"
};
oe._availableBatchers = Object.create(null);
var le = oe;
C.handleByMap(h.Batcher, le._availableBatchers);
C.add(D);
var de = new b();
var he = class extends M {
  constructor() {
    super();
    this._placeholderSprite = new R(r.EMPTY);
    this.filters = [new ne({
      sprite: this._placeholderSprite,
      inverse: false,
      resolution: "inherit",
      antialias: "inherit"
    })];
  }
  get sprite() {
    return this.filters[0].sprite;
  }
  set sprite(e) {
    this.filters[0].setSprite(e);
  }
  get inverse() {
    return this.filters[0].inverse;
  }
  set inverse(e) {
    this.filters[0].inverse = e;
  }
  get channel() {
    return this.filters[0].channel;
  }
  set channel(e) {
    this.filters[0].channel = e;
  }
  reset() {
    this._placeholderSprite.texture = r.EMPTY;
    this.sprite = this._placeholderSprite;
  }
};
var ue = class {
  constructor(e) {
    this._activeMaskStage = [];
    this._usedEffects = [];
    this._renderer = e;
    e.runners.postrender.add(this);
  }
  push(e, t, r) {
    const n = this._renderer;
    n.renderPipes.batch.break(r);
    r.add({
      renderPipeId: "alphaMask",
      action: "pushMaskBegin",
      mask: e,
      inverse: t._maskOptions.inverse,
      canBundle: false,
      maskedContainer: t
    });
    e.inverse = t._maskOptions.inverse;
    e.channel = t._maskOptions.channel ?? "red";
    if (e.renderMaskToTexture) {
      const t = e.mask;
      t.includeInBuild = true;
      t.collectRenderables(r, n, null);
      t.includeInBuild = false;
    }
    n.renderPipes.batch.break(r);
    r.add({
      renderPipeId: "alphaMask",
      action: "pushMaskEnd",
      mask: e,
      maskedContainer: t,
      inverse: t._maskOptions.inverse,
      canBundle: false
    });
  }
  pop(e, t, r) {
    this._renderer.renderPipes.batch.break(r);
    r.add({
      renderPipeId: "alphaMask",
      action: "popMaskEnd",
      mask: e,
      inverse: t._maskOptions.inverse,
      canBundle: false
    });
  }
  execute(e) {
    const t = this._renderer;
    const r = e.mask.renderMaskToTexture;
    if (e.action === "pushMaskBegin") {
      const n = i.get(he);
      n.inverse = e.inverse;
      n.channel = e.mask.channel;
      if (r) {
        e.mask.mask.measurable = true;
        const r = L(e.mask.mask, true, de);
        e.mask.mask.measurable = false;
        r.ceil();
        const s = t.renderTarget.renderTarget.colorTexture.source;
        const i = B.getOptimalTexture({
          width: r.width,
          height: r.height,
          resolution: s._resolution,
          antialias: s.antialias
        });
        t.renderTarget.push({
          target: i,
          clear: true
        });
        t.globalUniforms.push({
          offset: r,
          worldColor: 4294967295
        });
        const a = n.sprite;
        a.texture = i;
        a.worldTransform.tx = r.minX;
        a.worldTransform.ty = r.minY;
        this._activeMaskStage.push({
          filterEffect: n,
          maskedContainer: e.maskedContainer,
          filterTexture: i
        });
      } else {
        n.sprite = e.mask.mask;
        this._activeMaskStage.push({
          filterEffect: n,
          maskedContainer: e.maskedContainer
        });
      }
    } else if (e.action === "pushMaskEnd") {
      const e = this._activeMaskStage[this._activeMaskStage.length - 1];
      if (r) {
        if (t.type === S.WEBGL) {
          t.renderTarget.finishRenderPass();
        }
        t.renderTarget.pop();
        t.globalUniforms.pop();
      }
      t.filter.push({
        renderPipeId: "filter",
        action: "pushFilter",
        container: e.maskedContainer,
        filterEffect: e.filterEffect,
        canBundle: false
      });
    } else if (e.action === "popMaskEnd") {
      t.filter.pop();
      const e = this._activeMaskStage.pop();
      if (r) {
        B.returnTexture(e.filterTexture);
      }
      this._usedEffects.push(e.filterEffect);
    }
  }
  postrender() {
    const e = this._usedEffects;
    for (let t = 0; t < e.length; t++) {
      i.return(e[t]);
    }
    e.length = 0;
  }
  destroy() {
    this.postrender();
    this._renderer.runners.postrender.remove(this);
    this._renderer = null;
    this._activeMaskStage = null;
    this._usedEffects = null;
  }
};
ue.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "alphaMask"
};
var ce = class {
  constructor(e) {
    this._colorStack = [];
    this._colorStackIndex = 0;
    this._currentColor = 0;
    this._renderer = e;
  }
  buildStart() {
    this._colorStack[0] = 15;
    this._colorStackIndex = 1;
    this._currentColor = 15;
  }
  push(e, t, r) {
    this._renderer.renderPipes.batch.break(r);
    const n = this._colorStack;
    n[this._colorStackIndex] = n[this._colorStackIndex - 1] & e.mask;
    const s = this._colorStack[this._colorStackIndex];
    if (s !== this._currentColor) {
      this._currentColor = s;
      r.add({
        renderPipeId: "colorMask",
        colorMask: s,
        canBundle: false
      });
    }
    this._colorStackIndex++;
  }
  pop(e, t, r) {
    this._renderer.renderPipes.batch.break(r);
    const n = this._colorStack;
    this._colorStackIndex--;
    const s = n[this._colorStackIndex - 1];
    if (s !== this._currentColor) {
      this._currentColor = s;
      r.add({
        renderPipeId: "colorMask",
        colorMask: s,
        canBundle: false
      });
    }
  }
  execute(e) {
    this._renderer.colorMask.setMask(e.colorMask);
  }
  destroy() {
    this._renderer = null;
    this._colorStack = null;
  }
};
ce.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes],
  name: "colorMask"
};
var pe = class {
  constructor(e) {
    this._maskHash = new WeakMap();
    this._renderer = e;
  }
  push(e, t, r) {
    const n = e;
    const s = this._renderer;
    s.renderPipes.batch.break(r);
    s.renderPipes.blendMode.setBlendMode(n.mask, "none", r);
    r.add({
      renderPipeId: "stencilMask",
      action: "pushMaskBegin",
      mask: e,
      inverse: t._maskOptions.inverse,
      canBundle: false
    });
    const i = n.mask;
    i.includeInBuild = true;
    if (!this._maskHash.has(n)) {
      this._maskHash.set(n, {
        instructionsStart: 0,
        instructionsLength: 0
      });
    }
    const a = this._maskHash.get(n);
    a.instructionsStart = r.instructionSize;
    i.collectRenderables(r, s, null);
    i.includeInBuild = false;
    s.renderPipes.batch.break(r);
    r.add({
      renderPipeId: "stencilMask",
      action: "pushMaskEnd",
      mask: e,
      inverse: t._maskOptions.inverse,
      canBundle: false
    });
    a.instructionsLength = r.instructionSize - a.instructionsStart - 1;
  }
  pop(e, t, r) {
    const n = e;
    const s = this._renderer;
    s.renderPipes.batch.break(r);
    s.renderPipes.blendMode.setBlendMode(n.mask, "none", r);
    r.add({
      renderPipeId: "stencilMask",
      action: "popMaskBegin",
      inverse: t._maskOptions.inverse,
      canBundle: false
    });
    const i = this._maskHash.get(e);
    for (let a = 0; a < i.instructionsLength; a++) {
      r.instructions[r.instructionSize++] = r.instructions[i.instructionsStart++];
    }
    r.add({
      renderPipeId: "stencilMask",
      action: "popMaskEnd",
      canBundle: false
    });
  }
  execute(e) {
    const t = this._renderer;
    const r = t.renderTarget.getGpuRenderTarget(t.renderTarget.renderTarget);
    let n = r.maskStackIndex;
    if (e.action === "pushMaskBegin") {
      t.renderTarget.ensureDepthStencil();
      t.stencil.setStencilMode(z.RENDERING_MASK_ADD, n);
      n++;
      t.colorMask.setMask(0);
    } else if (e.action === "pushMaskEnd") {
      if (e.inverse) {
        t.stencil.setStencilMode(z.INVERSE_MASK_ACTIVE, n);
      } else {
        t.stencil.setStencilMode(z.MASK_ACTIVE, n);
      }
      t.colorMask.setMask(15);
    } else if (e.action === "popMaskBegin") {
      t.colorMask.setMask(0);
      if (n !== 0) {
        t.stencil.setStencilMode(z.RENDERING_MASK_REMOVE, n);
      } else {
        t.renderTarget.clear(null, V.STENCIL);
        t.stencil.setStencilMode(z.DISABLED, n);
      }
      n--;
    } else if (e.action === "popMaskEnd") {
      if (e.inverse) {
        t.stencil.setStencilMode(z.INVERSE_MASK_ACTIVE, n);
      } else {
        t.stencil.setStencilMode(z.MASK_ACTIVE, n);
      }
      t.colorMask.setMask(15);
    }
    r.maskStackIndex = n;
  }
  destroy() {
    this._renderer = null;
    this._maskHash = null;
  }
};
pe.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes],
  name: "stencilMask"
};
var me = class {
  constructor(e) {
    this._renderer = e;
  }
  updateRenderable() {}
  destroyRenderable() {}
  validateRenderable() {
    return false;
  }
  addRenderable(e, t) {
    this._renderer.renderPipes.batch.break(t);
    t.add(e);
  }
  execute(e) {
    if (e.isRenderable) {
      e.render(this._renderer);
    }
  }
  destroy() {
    this._renderer = null;
  }
};
function fe(e, t) {
  const r = e.instructionSet;
  const n = r.instructions;
  for (let s = 0; s < r.instructionSize; s++) {
    const e = n[s];
    t[e.renderPipeId].execute(e);
  }
}
me.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "customRender"
};
var ge = class {
  constructor(e) {
    this._renderer = e;
  }
  addRenderGroup(e, t) {
    if (e.isCachedAsTexture) {
      this._addRenderableCacheAsTexture(e, t);
    } else {
      this._addRenderableDirect(e, t);
    }
  }
  execute(e) {
    if (e.isRenderable) {
      if (e.isCachedAsTexture) {
        this._executeCacheAsTexture(e);
      } else {
        this._executeDirect(e);
      }
    }
  }
  destroy() {
    this._renderer = null;
  }
  _addRenderableDirect(e, t) {
    this._renderer.renderPipes.batch.break(t);
    if (e._batchableRenderGroup) {
      i.return(e._batchableRenderGroup);
      e._batchableRenderGroup = null;
    }
    t.add(e);
  }
  _addRenderableCacheAsTexture(e, t) {
    const r = e._batchableRenderGroup ??= i.get(ae);
    r.renderable = e.root;
    r.transform = e.root.relativeGroupTransform;
    r.texture = e.texture;
    r.bounds = e._textureBounds;
    t.add(e);
    this._renderer.renderPipes.blendMode.pushBlendMode(e, e.root.groupBlendMode, t);
    this._renderer.renderPipes.batch.addToBatch(r, t);
    this._renderer.renderPipes.blendMode.popBlendMode(t);
  }
  _executeCacheAsTexture(e) {
    if (e.textureNeedsUpdate) {
      e.textureNeedsUpdate = false;
      const t = new _().translate(-e._textureBounds.x, -e._textureBounds.y);
      this._renderer.renderTarget.push({
        target: e.texture,
        clear: true,
        frame: e.texture.frame
      });
      this._renderer.globalUniforms.push({
        worldTransformMatrix: t,
        worldColor: 4294967295,
        offset: {
          x: 0,
          y: 0
        }
      });
      fe(e, this._renderer.renderPipes);
      this._renderer.renderTarget.finishRenderPass();
      this._renderer.renderTarget.pop();
      this._renderer.globalUniforms.pop();
    }
    const t = e._batchableRenderGroup;
    const r = t._batcher;
    r.updateElement(t);
    r.geometry.buffers[0].update(t.attributeSize * r.vertexSize * 4, t._attributeStart * 4);
  }
  _executeDirect(e) {
    this._renderer.globalUniforms.push({
      worldTransformMatrix: e.inverseParentTextureTransform,
      worldColor: e.worldColorAlpha
    });
    fe(e, this._renderer.renderPipes);
    this._renderer.globalUniforms.pop();
  }
};
ge.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "renderGroup"
};
var _e = class {
  constructor(e) {
    this._renderer = e;
  }
  addRenderable(e, t) {
    const r = this._getGpuSprite(e);
    if (e.didViewUpdate) {
      this._updateBatchableSprite(e, r);
    }
    this._renderer.renderPipes.batch.addToBatch(r, t);
  }
  updateRenderable(e) {
    const t = this._getGpuSprite(e);
    if (e.didViewUpdate) {
      this._updateBatchableSprite(e, t);
    }
    t._batcher.updateElement(t);
  }
  validateRenderable(e) {
    const t = this._getGpuSprite(e);
    return !t._batcher.checkAndUpdateTexture(t, e._texture);
  }
  _updateBatchableSprite(e, t) {
    t.bounds = e.visualBounds;
    t.texture = e._texture;
  }
  _getGpuSprite(e) {
    return e._gpuData[this._renderer.uid] || this._initGPUSprite(e);
  }
  _initGPUSprite(e) {
    const t = new ae();
    t.renderable = e;
    t.transform = e.groupTransform;
    t.texture = e._texture;
    t.bounds = e.visualBounds;
    t.roundPixels = this._renderer._roundPixels | e._roundPixels;
    e._gpuData[this._renderer.uid] = t;
    return t;
  }
  destroy() {
    this._renderer = null;
  }
};
_e.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "sprite"
};
var xe = {};
C.handle(h.BlendMode, e => {
  if (!e.name) {
    throw new Error("BlendMode extension must have a name property");
  }
  xe[e.name] = e.ref;
}, e => {
  delete xe[e.name];
});
var be = class {
  constructor(e) {
    this._blendModeStack = [];
    this._isAdvanced = false;
    this._filterHash = Object.create(null);
    this._renderer = e;
    this._renderer.runners.prerender.add(this);
  }
  prerender() {
    this._activeBlendMode = "normal";
    this._isAdvanced = false;
  }
  pushBlendMode(e, t, r) {
    this._blendModeStack.push(t);
    this.setBlendMode(e, t, r);
  }
  popBlendMode(e) {
    this._blendModeStack.pop();
    const t = this._blendModeStack[this._activeBlendMode.length - 1] ?? "normal";
    this.setBlendMode(null, t, e);
  }
  setBlendMode(e, t, r) {
    const n = e instanceof P;
    if (this._activeBlendMode !== t) {
      if (this._isAdvanced) {
        this._endAdvancedBlendMode(r);
      }
      this._activeBlendMode = t;
      if (e) {
        this._isAdvanced = !!xe[t];
        if (this._isAdvanced) {
          this._beginAdvancedBlendMode(e, r);
        }
      }
    } else if (this._isAdvanced && e && !n) {
      this._renderableList?.push(e);
    }
  }
  _beginAdvancedBlendMode(t, r) {
    this._renderer.renderPipes.batch.break(r);
    const n = this._activeBlendMode;
    if (!xe[n]) {
      e(`Unable to assign BlendMode: '${n}'. You may want to include: import 'pixi.js/advanced-blend-modes'`);
      return;
    }
    const s = this._ensureFilterEffect(n);
    const i = t instanceof P;
    const a = {
      renderPipeId: "filter",
      action: "pushFilter",
      filterEffect: s,
      renderables: i ? null : [t],
      container: i ? t.root : null,
      canBundle: false
    };
    this._renderableList = a.renderables;
    r.add(a);
  }
  _ensureFilterEffect(e) {
    let t = this._filterHash[e];
    if (!t) {
      t = this._filterHash[e] = new M();
      t.filters = [new xe[e]()];
    }
    return t;
  }
  _endAdvancedBlendMode(e) {
    this._isAdvanced = false;
    this._renderableList = null;
    this._renderer.renderPipes.batch.break(e);
    e.add({
      renderPipeId: "filter",
      action: "popFilter",
      canBundle: false
    });
  }
  buildStart() {
    this._isAdvanced = false;
  }
  buildEnd(e) {
    if (this._isAdvanced) {
      this._endAdvancedBlendMode(e);
    }
  }
  destroy() {
    this._renderer = null;
    this._renderableList = null;
    for (const e in this._filterHash) {
      this._filterHash[e].destroy();
    }
    this._filterHash = null;
  }
};
function ve(e, t) {
  t ||= 0;
  for (let r = t; r < e.length && e[r]; r++) {
    e[r] = null;
  }
}
be.extension = {
  type: [h.WebGLPipes, h.WebGPUPipes, h.CanvasPipes],
  name: "blendMode"
};
var ye = new E();
function Te(e, t = false) {
  Se(e);
  const r = e.childrenToUpdate;
  const n = e.updateTick++;
  for (const s in r) {
    const t = Number(s);
    const i = r[s];
    const a = i.list;
    const o = i.index;
    for (let r = 0; r < o; r++) {
      const s = a[r];
      if (s.parentRenderGroup === e && s.relativeRenderGroupDepth === t) {
        Ce(s, n, 0);
      }
    }
    ve(a, o);
    i.index = 0;
  }
  if (t) {
    for (let s = 0; s < e.renderGroupChildren.length; s++) {
      Te(e.renderGroupChildren[s], t);
    }
  }
}
function Se(e) {
  const t = e.root;
  let r;
  if (e.renderGroupParent) {
    const n = e.renderGroupParent;
    e.worldTransform.appendFrom(t.relativeGroupTransform, n.worldTransform);
    e.worldColor = w(t.groupColor, n.worldColor);
    r = t.groupAlpha * n.worldAlpha;
  } else {
    e.worldTransform.copyFrom(t.localTransform);
    e.worldColor = t.localColor;
    r = t.localAlpha;
  }
  r = r < 0 ? 0 : r > 1 ? 1 : r;
  e.worldAlpha = r;
  e.worldColorAlpha = e.worldColor + (r * 255 << 24);
}
function Ce(e, t, r) {
  if (t === e.updateTick) {
    return;
  }
  e.updateTick = t;
  e.didChange = false;
  const n = e.localTransform;
  e.updateLocalTransform();
  const s = e.parent;
  if (s && !s.renderGroup) {
    r |= e._updateFlags;
    e.relativeGroupTransform.appendFrom(n, s.relativeGroupTransform);
    if (r & 7) {
      ke(e, s, r);
    }
  } else {
    r = e._updateFlags;
    e.relativeGroupTransform.copyFrom(n);
    if (r & 7) {
      ke(e, ye, r);
    }
  }
  if (!e.renderGroup) {
    const n = e.children;
    const s = n.length;
    for (let e = 0; e < s; e++) {
      Ce(n[e], t, r);
    }
    const i = e.parentRenderGroup;
    const a = e;
    if (a.renderPipeId && !i.structureDidChange) {
      i.updateRenderable(a);
    }
  }
}
function ke(e, t, r) {
  if (r & 1) {
    e.groupColor = w(e.localColor, t.groupColor);
    let r = e.localAlpha * t.groupAlpha;
    r = r < 0 ? 0 : r > 1 ? 1 : r;
    e.groupAlpha = r;
    e.groupColorAlpha = e.groupColor + (r * 255 << 24);
  }
  if (r & 2) {
    e.groupBlendMode = e.localBlendMode === "inherit" ? t.groupBlendMode : e.localBlendMode;
  }
  if (r & 4) {
    e.globalDisplayStatus = e.localDisplayStatus & t.globalDisplayStatus;
  }
  e._updateFlags = 0;
}
function we(e, t) {
  const {
    list: r
  } = e.childrenRenderablesToUpdate;
  let n = false;
  for (let s = 0; s < e.childrenRenderablesToUpdate.index; s++) {
    const e = r[s];
    n = t[e.renderPipeId].validateRenderable(e);
    if (n) {
      break;
    }
  }
  e.structureDidChange = n;
  return n;
}
var Me = new _();
var Ge = class {
  constructor(e) {
    this._renderer = e;
  }
  render({
    container: e,
    transform: t
  }) {
    const r = e.parent;
    const n = e.renderGroup.renderGroupParent;
    e.parent = null;
    e.renderGroup.renderGroupParent = null;
    const s = this._renderer;
    const i = Me;
    if (t) {
      i.copyFrom(e.renderGroup.localTransform);
      e.renderGroup.localTransform.copyFrom(t);
    }
    const a = s.renderPipes;
    this._updateCachedRenderGroups(e.renderGroup, null);
    this._updateRenderGroups(e.renderGroup);
    s.globalUniforms.start({
      worldTransformMatrix: t ? e.renderGroup.localTransform : e.renderGroup.worldTransform,
      worldColor: e.renderGroup.worldColorAlpha
    });
    fe(e.renderGroup, a);
    if (a.uniformBatch) {
      a.uniformBatch.renderEnd();
    }
    if (t) {
      e.renderGroup.localTransform.copyFrom(i);
    }
    e.parent = r;
    e.renderGroup.renderGroupParent = n;
  }
  destroy() {
    this._renderer = null;
  }
  _updateCachedRenderGroups(e, t) {
    e._parentCacheAsTextureRenderGroup = t;
    if (e.isCachedAsTexture) {
      if (!e.textureNeedsUpdate) {
        return;
      }
      t = e;
    }
    for (let r = e.renderGroupChildren.length - 1; r >= 0; r--) {
      this._updateCachedRenderGroups(e.renderGroupChildren[r], t);
    }
    e.invalidateMatrices();
    if (e.isCachedAsTexture) {
      if (e.textureNeedsUpdate) {
        const t = e.root.getLocalBounds();
        const r = this._renderer;
        const n = e.textureOptions.resolution || r.view.resolution;
        const s = e.textureOptions.antialias ?? r.view.antialias;
        const i = e.textureOptions.scaleMode ?? "linear";
        const a = e.texture;
        t.ceil();
        if (e.texture) {
          B.returnTexture(e.texture);
        }
        e.texture = B.getOptimalTexture({
          width: t.width,
          height: t.height,
          resolution: n,
          antialias: s,
          scaleMode: i
        });
        e._textureBounds ||= new b();
        e._textureBounds.copyFrom(t);
        if (a !== e.texture && e.renderGroupParent) {
          e.renderGroupParent.structureDidChange = true;
        }
      }
    } else if (e.texture) {
      B.returnTexture(e.texture);
      e.texture = null;
    }
  }
  _updateRenderGroups(e) {
    const t = this._renderer;
    const r = t.renderPipes;
    e.runOnRender(t);
    e.instructionSet.renderPipes = r;
    if (e.structureDidChange) {
      ve(e.childrenRenderablesToUpdate.list, 0);
    } else {
      we(e, r);
    }
    Te(e);
    if (e.structureDidChange) {
      e.structureDidChange = false;
      this._buildInstructions(e, t);
    } else {
      this._updateRenderables(e);
    }
    e.childrenRenderablesToUpdate.index = 0;
    t.renderPipes.batch.upload(e.instructionSet);
    if (!e.isCachedAsTexture || e.textureNeedsUpdate) {
      for (let n = 0; n < e.renderGroupChildren.length; n++) {
        this._updateRenderGroups(e.renderGroupChildren[n]);
      }
    }
  }
  _updateRenderables(e) {
    const {
      list: t,
      index: r
    } = e.childrenRenderablesToUpdate;
    for (let n = 0; n < r; n++) {
      const r = t[n];
      if (r.didViewUpdate) {
        e.updateRenderable(r);
      }
    }
    ve(t, r);
  }
  _buildInstructions(e, t) {
    const r = e.root;
    const n = e.instructionSet;
    n.reset();
    const s = t.renderPipes ? t : t.batch.renderer;
    const i = s.renderPipes;
    i.batch.buildStart(n);
    i.blendMode.buildStart();
    i.colorMask.buildStart();
    if (r.sortableChildren) {
      r.sortChildren();
    }
    r.collectRenderablesWithEffects(n, s, null);
    i.batch.buildEnd(n);
    i.blendMode.buildEnd(n);
  }
};
Ge.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "renderGroup"
};
var Re = class t {
  constructor() {
    this.clearBeforeRender = true;
    this._backgroundColor = new n(0);
    this.color = this._backgroundColor;
    this.alpha = 1;
  }
  init(e) {
    e = {
      ...t.defaultOptions,
      ...e
    };
    this.clearBeforeRender = e.clearBeforeRender;
    this.color = e.background || e.backgroundColor || this._backgroundColor;
    this.alpha = e.backgroundAlpha;
    this._backgroundColor.setAlpha(e.backgroundAlpha);
  }
  get color() {
    return this._backgroundColor;
  }
  set color(t) {
    if (n.shared.setValue(t).alpha < 1 && this._backgroundColor.alpha === 1) {
      e("Cannot set a transparent background on an opaque canvas. To enable transparency, set backgroundAlpha < 1 when initializing your Application.");
    }
    this._backgroundColor.setValue(t);
  }
  get alpha() {
    return this._backgroundColor.alpha;
  }
  set alpha(e) {
    this._backgroundColor.setAlpha(e);
  }
  get colorRgba() {
    return this._backgroundColor.toArray();
  }
  destroy() {}
};
Re.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "background",
  priority: 0
};
Re.defaultOptions = {
  backgroundAlpha: 1,
  backgroundColor: 0,
  clearBeforeRender: true
};
var Pe = Re;
function Ae(e, t = false) {
  const r = e.source.format;
  if (r.endsWith("float") || v(r) || r.startsWith("depth") || r === "stencil8") {
    if (t) {
      e.destroy(true);
    }
    throw new Error(`[ExtractSystem] can't read ${r} textures: extract reads 8-bit color only. Extract a Mesh whose shader reads the texture and outputs color instead.`);
  }
}
var Be = {
  png: "image/png",
  jpg: "image/jpeg",
  webp: "image/webp"
};
var Ue = class e {
  constructor(e) {
    this._renderer = e;
  }
  _normalizeOptions(e, t = {}) {
    if (e instanceof E || e instanceof r) {
      return {
        target: e,
        ...t
      };
    } else {
      return {
        ...t,
        ...e
      };
    }
  }
  async image(e) {
    const r = t.get().createImage();
    r.src = await this.base64(e);
    return r;
  }
  async base64(t) {
    t = this._normalizeOptions(t, e.defaultImageOptions);
    const {
      format: r,
      quality: n
    } = t;
    const s = this.canvas(t);
    if (s.toBlob !== undefined) {
      return new Promise((e, t) => {
        s.toBlob(r => {
          if (!r) {
            t(new Error("ICanvas.toBlob failed!"));
            return;
          }
          const n = new FileReader();
          n.onload = () => e(n.result);
          n.onerror = t;
          n.readAsDataURL(r);
        }, Be[r], n);
      });
    }
    if (s.toDataURL !== undefined) {
      return s.toDataURL(Be[r], n);
    }
    if (s.convertToBlob !== undefined) {
      const e = await s.convertToBlob({
        type: Be[r],
        quality: n
      });
      return new Promise((t, r) => {
        const n = new FileReader();
        n.onload = () => t(n.result);
        n.onerror = r;
        n.readAsDataURL(e);
      });
    }
    throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented");
  }
  canvas(e) {
    const t = (e = this._normalizeOptions(e)).target;
    const n = this._renderer;
    if (t instanceof r) {
      Ae(t);
      return n.texture.generateCanvas(t);
    }
    const s = n.textureGenerator.generateTexture(e);
    Ae(s, true);
    const i = n.texture.generateCanvas(s);
    s.destroy(true);
    return i;
  }
  pixels(e) {
    const t = (e = this._normalizeOptions(e)).target;
    const n = this._renderer;
    const s = t instanceof r ? t : n.textureGenerator.generateTexture(e);
    Ae(s, !(t instanceof r));
    const i = n.texture.getPixels(s);
    if (t instanceof E) {
      s.destroy(true);
    }
    return i;
  }
  texture(e) {
    if ((e = this._normalizeOptions(e)).target instanceof r) {
      return e.target;
    } else {
      return this._renderer.textureGenerator.generateTexture(e);
    }
  }
  download(e) {
    e = this._normalizeOptions(e);
    const t = this.canvas(e);
    const r = document.createElement("a");
    r.download = e.filename ?? "image.png";
    r.href = t.toDataURL("image/png");
    document.body.appendChild(r);
    r.click();
    document.body.removeChild(r);
  }
  log(e) {
    const t = e.width ?? 200;
    e = this._normalizeOptions(e);
    ["font-size: 1px;", `padding: ${t}px 300px;`, `background: url(${this.canvas(e).toDataURL()}) no-repeat;`, "background-size: contain;"].join(" ");
  }
  destroy() {
    this._renderer = null;
  }
};
Ue.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "extract"
};
Ue.defaultImageOptions = {
  format: "png",
  quality: 1
};
var Oe = Ue;
var Ie = class e extends r {
  static create(t) {
    const {
      dynamic: r,
      textureOptions: n,
      ...s
    } = t;
    return new e({
      ...n,
      source: new l(s),
      dynamic: r ?? false
    });
  }
  resize(e, t, r) {
    this.source.resize(e, t, r);
    return this;
  }
};
var Ee = new m();
var Le = new b();
var ze = [0, 0, 0, 0];
var De = class {
  constructor(e) {
    this._renderer = e;
  }
  generateTexture(e) {
    if (e instanceof E) {
      e = {
        target: e,
        frame: undefined,
        textureSourceOptions: {},
        resolution: undefined
      };
    }
    const t = e.resolution || this._renderer.resolution;
    const r = e.antialias || this._renderer.view.antialias;
    const s = e.target;
    let i = e.clearColor;
    i = i ? Array.isArray(i) && i.length === 4 ? i : n.shared.setValue(i).toArray() : ze;
    const a = e.frame?.copyTo(Ee) || G(s, Le).rectangle;
    const o = e.defaultAnchor && {
      defaultAnchor: e.defaultAnchor
    };
    a.width = Math.max(a.width, 1 / t) | 0;
    a.height = Math.max(a.height, 1 / t) | 0;
    const l = Ie.create({
      ...e.textureSourceOptions,
      width: a.width,
      height: a.height,
      resolution: t,
      antialias: r,
      textureOptions: o
    });
    const d = _.shared.translate(-a.x, -a.y);
    this._renderer.render({
      container: s,
      transform: d,
      target: l,
      clearColor: i
    });
    l.source.updateMipmaps();
    return l;
  }
  destroy() {
    this._renderer = null;
  }
};
function Fe(e) {
  let t = false;
  for (const n in e) {
    if (e[n] == null) {
      t = true;
      break;
    }
  }
  if (!t) {
    return e;
  }
  const r = Object.create(null);
  for (const n in e) {
    const t = e[n];
    if (t) {
      r[n] = t;
    }
  }
  return r;
}
function He(e) {
  let t = 0;
  for (let r = 0; r < e.length; r++) {
    if (e[r] == null) {
      t++;
    } else {
      e[r - t] = e[r];
    }
  }
  e.length -= t;
  return e;
}
De.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "textureGenerator"
};
var We = class e {
  constructor(e) {
    this._managedResources = [];
    this._managedResourceHashes = [];
    this._managedCollections = [];
    this._ready = false;
    this._running = false;
    this._renderer = e;
  }
  init(t) {
    t = {
      ...e.defaultOptions,
      ...t
    };
    this.maxUnusedTime = t.gcMaxUnusedTime;
    this._frequency = t.gcFrequency;
    this.enabled = t.gcActive;
    this.now = performance.now();
  }
  get enabled() {
    return !!this._handler;
  }
  set enabled(e) {
    if (this.enabled !== e) {
      if (e) {
        this._handler = this._renderer.scheduler.repeat(() => {
          this._ready = true;
        }, this._frequency, false);
        this._collectionsHandler = this._renderer.scheduler.repeat(() => {
          for (const e of this._managedCollections) {
            const {
              context: t,
              collection: r,
              type: n
            } = e;
            t[r] = n === "hash" ? Fe(t[r]) : He(t[r]);
          }
        }, this._frequency);
      } else {
        this._renderer.scheduler.cancel(this._handler);
        this._renderer.scheduler.cancel(this._collectionsHandler);
        this._handler = 0;
        this._collectionsHandler = 0;
      }
    }
  }
  prerender({
    container: e
  }) {
    this.now = performance.now();
    e.renderGroup.gcTick = this._renderer.tick++;
    this._updateInstructionGCTick(e.renderGroup, e.renderGroup.gcTick);
  }
  postrender() {
    if (this._ready && this.enabled) {
      this.run();
      this._ready = false;
    }
  }
  _updateInstructionGCTick(e, t) {
    e.instructionSet.gcTick = t;
    e.gcTick = t;
    for (const r of e.renderGroupChildren) {
      this._updateInstructionGCTick(r, t);
    }
  }
  addCollection(e, t, r) {
    this._managedCollections.push({
      context: e,
      collection: t,
      type: r
    });
  }
  addResource(e, t) {
    if (e._gcLastUsed !== -1) {
      e._gcLastUsed = this.now;
      e._onTouch?.(this.now);
      return;
    }
    e._gcData = {
      index: this._managedResources.length,
      type: t
    };
    e._gcLastUsed = this.now;
    e._onTouch?.(this.now);
    e.once("unload", this.removeResource, this);
    this._managedResources.push(e);
  }
  removeResource(e) {
    const t = e._gcData;
    if (!t) {
      return;
    }
    const r = t.index;
    const n = this._managedResources.length - 1;
    if (this._running) {
      this._managedResources[r] = null;
    } else {
      if (r !== n) {
        const e = this._managedResources[n];
        this._managedResources[r] = e;
        e._gcData.index = r;
      }
      this._managedResources.length--;
    }
    e._gcData = null;
    e._gcLastUsed = -1;
  }
  addResourceHash(e, t, r, n = 0) {
    this._managedResourceHashes.push({
      context: e,
      hash: t,
      type: r,
      priority: n
    });
    this._managedResourceHashes.sort((e, t) => e.priority - t.priority);
  }
  run() {
    if (this._running) {
      return;
    }
    const e = performance.now();
    const t = this._managedResourceHashes;
    const r = this._managedResources;
    this._running = true;
    try {
      for (const r of t) {
        this.runOnHash(r, e);
      }
      const n = r.length;
      for (let t = 0; t < n; t++) {
        const n = r[t];
        if (n) {
          this.runOnResource(n, e);
        }
      }
    } finally {
      let e = 0;
      for (let t = 0; t < r.length; t++) {
        const n = r[t];
        if (n) {
          if (e !== t) {
            r[e] = n;
            n._gcData.index = e;
          }
          e++;
        }
      }
      r.length = e;
      this._running = false;
    }
  }
  updateRenderableGCTick(e, t) {
    const r = e.renderGroup ?? e.parentRenderGroup;
    const n = r?.instructionSet?.gcTick ?? -1;
    if ((r?.gcTick ?? 0) === n) {
      e._gcLastUsed = t;
      e._onTouch?.(t);
    }
  }
  runOnResource(e, t) {
    if (e._gcData.type === "renderable") {
      this.updateRenderableGCTick(e, t);
    }
    if (!(t - e._gcLastUsed < this.maxUnusedTime) && !!e.autoGarbageCollect) {
      e.off("unload", this.removeResource, this);
      e.unload();
      this.removeResource(e);
    }
  }
  _createHashClone(e, t) {
    const r = Object.create(null);
    for (const n in e) {
      if (n === t) {
        break;
      }
      if (e[n] !== null) {
        r[n] = e[n];
      }
    }
    return r;
  }
  runOnHash(e, t) {
    const {
      context: r,
      hash: n,
      type: s
    } = e;
    const i = r[n];
    let a = null;
    let o = 0;
    for (const l in i) {
      const e = i[l];
      if (e !== null) {
        if (e._gcLastUsed !== -1) {
          if (s === "renderable") {
            this.updateRenderableGCTick(e, t);
          }
          if (t - e._gcLastUsed < this.maxUnusedTime || !e.autoGarbageCollect) {
            if (a) {
              a[l] = e;
            }
          } else {
            if (s === "renderable") {
              const t = e;
              const r = t.renderGroup ?? t.parentRenderGroup;
              if (r) {
                r.structureDidChange = true;
              }
            }
            e.unload();
            e._gcData = null;
            e._gcLastUsed = -1;
            if (!a) {
              if (o + 1 !== 10000) {
                i[l] = null;
                o++;
              } else {
                a = this._createHashClone(i, l);
              }
            }
          }
        } else {
          e._gcLastUsed = t;
          e._onTouch?.(t);
          if (a) {
            a[l] = e;
          }
        }
      } else {
        o++;
        if (o === 10000 && !a) {
          a = this._createHashClone(i, l);
        }
      }
    }
    if (a) {
      r[n] = a;
    }
  }
  destroy() {
    this.enabled = false;
    this._managedResources.forEach(e => {
      e?.off("unload", this.removeResource, this);
    });
    this._managedResources.length = 0;
    this._managedResourceHashes.length = 0;
    this._managedCollections.length = 0;
    this._renderer = null;
  }
};
We.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "gc",
  priority: 0
};
We.defaultOptions = {
  gcActive: true,
  gcMaxUnusedTime: 60000,
  gcFrequency: 30000
};
var je = We;
var Ne = class {
  constructor(e) {
    this._stackIndex = 0;
    this._globalUniformDataStack = [];
    this._uniformsPool = [];
    this._activeUniforms = [];
    this._bindGroupPool = [];
    this._activeBindGroups = [];
    this._renderer = e;
  }
  reset() {
    this._stackIndex = 0;
    for (let e = 0; e < this._activeUniforms.length; e++) {
      this._uniformsPool.push(this._activeUniforms[e]);
    }
    for (let e = 0; e < this._activeBindGroups.length; e++) {
      this._bindGroupPool.push(this._activeBindGroups[e]);
    }
    this._activeUniforms.length = 0;
    this._activeBindGroups.length = 0;
  }
  start(e) {
    this.reset();
    this.push(e);
  }
  bind({
    size: e,
    projectionMatrix: t,
    worldTransformMatrix: r,
    worldColor: n,
    offset: s
  }) {
    const i = this._renderer.renderTarget.renderTarget;
    const a = this._stackIndex ? this._globalUniformDataStack[this._stackIndex - 1] : {
      projectionData: i,
      worldTransformMatrix: new _(),
      worldColor: 4294967295,
      offset: new g()
    };
    const o = {
      projectionMatrix: t || this._renderer.renderTarget.projectionMatrix,
      resolution: e || i.size,
      worldTransformMatrix: r || a.worldTransformMatrix,
      worldColor: n || a.worldColor,
      offset: s || a.offset,
      bindGroup: null
    };
    const l = this._uniformsPool.pop() || this._createUniforms();
    this._activeUniforms.push(l);
    const d = l.uniforms;
    let h;
    d.uProjectionMatrix = o.projectionMatrix;
    d.uResolution = o.resolution;
    d.uWorldTransformMatrix.copyFrom(o.worldTransformMatrix);
    d.uWorldTransformMatrix.tx -= o.offset.x;
    d.uWorldTransformMatrix.ty -= o.offset.y;
    ie(o.worldColor, d.uWorldColorAlpha, 0);
    l.update();
    if (this._renderer.renderPipes.uniformBatch) {
      h = this._renderer.renderPipes.uniformBatch.getUniformBindGroup(l, false);
    } else {
      h = this._bindGroupPool.pop() || new u();
      this._activeBindGroups.push(h);
      h.setResource(l, 0);
    }
    o.bindGroup = h;
    this._currentGlobalUniformData = o;
  }
  push(e) {
    this.bind(e);
    this._globalUniformDataStack[this._stackIndex++] = this._currentGlobalUniformData;
  }
  pop() {
    this._currentGlobalUniformData = this._globalUniformDataStack[--this._stackIndex - 1];
    if (this._renderer.type === S.WEBGL) {
      this._currentGlobalUniformData.bindGroup.resources[0].update();
    }
  }
  get bindGroup() {
    return this._currentGlobalUniformData.bindGroup;
  }
  get globalUniformData() {
    return this._currentGlobalUniformData;
  }
  get uniformGroup() {
    return this._currentGlobalUniformData.bindGroup.resources[0];
  }
  _createUniforms() {
    return new p({
      uProjectionMatrix: {
        value: new _(),
        type: "mat3x3<f32>"
      },
      uWorldTransformMatrix: {
        value: new _(),
        type: "mat3x3<f32>"
      },
      uWorldColorAlpha: {
        value: new Float32Array(4),
        type: "vec4<f32>"
      },
      uResolution: {
        value: [0, 0],
        type: "vec2<f32>"
      }
    }, {
      isStatic: true
    });
  }
  destroy() {
    this._renderer = null;
    this._globalUniformDataStack.length = 0;
    this._uniformsPool.length = 0;
    this._activeUniforms.length = 0;
    this._bindGroupPool.length = 0;
    this._activeBindGroups.length = 0;
    this._currentGlobalUniformData = null;
  }
};
Ne.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "globalUniforms"
};
var Ve = 1;
var Ye = class {
  constructor() {
    this._tasks = [];
    this._offset = 0;
  }
  init() {
    A.system.add(this._update, this);
  }
  repeat(e, t, r = true) {
    const n = Ve++;
    let s = 0;
    if (r) {
      this._offset += 1000;
      s = this._offset;
    }
    this._tasks.push({
      func: e,
      duration: t,
      start: performance.now(),
      offset: s,
      last: performance.now(),
      repeat: true,
      id: n
    });
    return n;
  }
  cancel(e) {
    for (let t = 0; t < this._tasks.length; t++) {
      if (this._tasks[t].id === e) {
        this._tasks.splice(t, 1);
        return;
      }
    }
  }
  _update() {
    const e = performance.now();
    for (let t = 0; t < this._tasks.length; t++) {
      const r = this._tasks[t];
      if (e - r.offset - r.last >= r.duration) {
        const t = e - r.start;
        r.func(t);
        r.last = e;
      }
    }
  }
  destroy() {
    A.system.remove(this._update, this);
    this._tasks.length = 0;
  }
};
Ye.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "scheduler",
  priority: 0
};
var $e = false;
function qe(e) {
  if (!$e) {
    if (t.get().getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
      const t = [`%c  %c  %c  %c  %c PixiJS %c v${X} (${e}) http://www.pixijs.com/\n\n`, "background: #E72264; padding:5px 0;", "background: #6CA2EA; padding:5px 0;", "background: #B5D33D; padding:5px 0;", "background: #FED23F; padding:5px 0;", "color: #FFFFFF; background: #E72264; padding:5px 0;", "color: #E72264; background: #FFFFFF; padding:5px 0;"];
      globalThis.console.log(...t);
    } else if (globalThis.console) {
      globalThis.console.log(`PixiJS ${X} - ${e} - http://www.pixijs.com/`);
    }
    $e = true;
  }
}
var Ke = class {
  constructor(e) {
    this._renderer = e;
  }
  init(e) {
    if (e.hello) {
      let e = this._renderer.name;
      if (this._renderer.type === S.WEBGL) {
        e += ` ${this._renderer.context.webGLVersion}`;
      }
      qe(e);
    }
  }
};
Ke.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "hello",
  priority: -2
};
Ke.defaultOptions = {
  hello: false
};
var Je = class e {
  constructor(e) {
    this._renderer = e;
  }
  init(t) {
    t = {
      ...e.defaultOptions,
      ...t
    };
    this.maxUnusedTime = t.renderableGCMaxUnusedTime;
  }
  get enabled() {
    d("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.");
    return this._renderer.gc.enabled;
  }
  set enabled(e) {
    d("8.15.0", "RenderableGCSystem.enabled is deprecated, please use the GCSystem.enabled instead.");
    this._renderer.gc.enabled = e;
  }
  addManagedHash(e, t) {
    d("8.15.0", "RenderableGCSystem.addManagedHash is deprecated, please use the GCSystem.addCollection instead.");
    this._renderer.gc.addCollection(e, t, "hash");
  }
  addManagedArray(e, t) {
    d("8.15.0", "RenderableGCSystem.addManagedArray is deprecated, please use the GCSystem.addCollection instead.");
    this._renderer.gc.addCollection(e, t, "array");
  }
  addRenderable(e) {
    d("8.15.0", "RenderableGCSystem.addRenderable is deprecated, please use the GCSystem instead.");
    this._renderer.gc.addResource(e, "renderable");
  }
  run() {
    d("8.15.0", "RenderableGCSystem.run is deprecated, please use the GCSystem instead.");
    this._renderer.gc.run();
  }
  destroy() {
    this._renderer = null;
  }
};
Je.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "renderableGC",
  priority: 0
};
Je.defaultOptions = {
  renderableGCActive: true,
  renderableGCMaxUnusedTime: 60000,
  renderableGCFrequency: 30000
};
var Xe = Je;
var Qe = class e {
  get count() {
    return this._renderer.tick;
  }
  get checkCount() {
    return this._checkCount;
  }
  set checkCount(e) {
    d("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
    this._checkCount = e;
  }
  get maxIdle() {
    return this._renderer.gc.maxUnusedTime / 1000 * 60;
  }
  set maxIdle(e) {
    d("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
    this._renderer.gc.maxUnusedTime = e / 60 * 1000;
  }
  get checkCountMax() {
    return Math.floor(this._renderer.gc._frequency / 1000);
  }
  set checkCountMax(e) {
    d("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
  }
  get active() {
    return this._renderer.gc.enabled;
  }
  set active(e) {
    d("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
    this._renderer.gc.enabled = e;
  }
  constructor(e) {
    this._renderer = e;
    this._checkCount = 0;
  }
  init(t) {
    if (t.textureGCActive !== e.defaultOptions.textureGCActive) {
      this.active = t.textureGCActive;
    }
    if (t.textureGCMaxIdle !== e.defaultOptions.textureGCMaxIdle) {
      this.maxIdle = t.textureGCMaxIdle;
    }
    if (t.textureGCCheckCountMax !== e.defaultOptions.textureGCCheckCountMax) {
      this.checkCountMax = t.textureGCCheckCountMax;
    }
  }
  run() {
    d("8.15.0", "TextureGCSystem.run is deprecated, please use the GCSystem instead.");
    this._renderer.gc.run();
  }
  destroy() {
    this._renderer = null;
  }
};
Qe.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem],
  name: "textureGC"
};
Qe.defaultOptions = {
  textureGCActive: true,
  textureGCAMaxIdle: null,
  textureGCMaxIdle: 3600,
  textureGCCheckCountMax: 600
};
var Ze = Qe;
var et = class e extends k {
  constructor(e = {}) {
    super();
    this.uid = c("renderTarget");
    this.colorAttachments = [];
    this.dirtyId = 0;
    this.isRoot = false;
    this._size = new Float32Array(2);
    this._managedColorTextures = false;
    this._managedDepthStencilTexture = false;
    this._depth = false;
    this._stencil = false;
    this._colorTextures = null;
    const t = "colorAttachments" in e ? e : this._normalizeOptions(e);
    this.isRoot = t.isRoot ?? false;
    this.label = t.label;
    this.colorAttachments = t.colorAttachments;
    this.depthStencilAttachment = t.depthStencilAttachment;
    if (this.depthStencilAttachment) {
      const e = this.depthStencilAttachment.texture.format;
      this._depth ||= e.includes("depth");
      this._stencil ||= e.includes("stencil");
    }
    if (this.colorAttachments.length === 0 && !this.depthStencilAttachment) {
      throw new Error("[RenderTarget] no color textures or depth textures were provided. Provide a depthStencilTexture or set depth/stencil to true when using colorTextures: 0.");
    }
    if (this.colorAttachments.length > 0) {
      const e = this.colorTexture;
      this.resize(e.width, e.height, e._resolution);
    }
    if (this.sizeSource) {
      this.sizeSource.on("resize", this.onSourceResize, this);
    }
  }
  _normalizeOptions(t) {
    const n = {
      ...e.defaultOptions,
      ...t
    };
    const s = [];
    let i;
    if (typeof n.colorTextures == "number") {
      if (n.colorTextures > 0) {
        this._managedColorTextures = true;
        for (let e = 0; e < n.colorTextures; e++) {
          s.push({
            texture: new l({
              width: n.width,
              height: n.height,
              resolution: n.resolution,
              antialias: n.antialias
            }),
            storeOp: "store"
          });
        }
      }
    } else {
      n.colorTextures.forEach(e => {
        s.push({
          texture: e.source,
          storeOp: "store"
        });
      });
    }
    const a = n.depthStencilTexture === true;
    this._depth = !!n.depth || !!a;
    this._stencil = !!n.stencil || !!a;
    if (n.depthStencilTexture instanceof r || n.depthStencilTexture instanceof l) {
      if (n.isRoot) {
        throw new Error("[RenderTarget] cannot attach a depth-stencil texture to the screen — the canvas owns its own depth/stencil buffers. Render to a texture target instead.");
      }
      i = {
        texture: n.depthStencilTexture.source
      };
    } else if (a && !n.isRoot || (n.stencil || n.depth) && s.length === 0) {
      i = this._createDepthStencilTexture(n.width, n.height, n.resolution);
    }
    return {
      colorAttachments: s,
      depthStencilAttachment: i,
      isRoot: n.isRoot,
      label: n.label
    };
  }
  get size() {
    const e = this._size;
    e[0] = this.pixelWidth;
    e[1] = this.pixelHeight;
    return e;
  }
  get width() {
    return this.sizeSource.width;
  }
  get height() {
    return this.sizeSource.height;
  }
  get pixelWidth() {
    return this.sizeSource.pixelWidth;
  }
  get pixelHeight() {
    return this.sizeSource.pixelHeight;
  }
  get resolution() {
    return this.sizeSource._resolution;
  }
  get colorTextures() {
    this._colorTextures ||= this.colorAttachments.map(e => e.texture);
    return this._colorTextures;
  }
  get depthStencilTexture() {
    return this.depthStencilAttachment?.texture ?? null;
  }
  get depth() {
    return this._depth;
  }
  get stencil() {
    return this._stencil;
  }
  get colorTexture() {
    return this.colorAttachments[0]?.texture;
  }
  get sizeSource() {
    return this.colorAttachments[0]?.texture ?? this.depthStencilAttachment?.texture;
  }
  onSourceResize(e) {
    this.resize(e.width, e.height, e._resolution, true);
  }
  ensureDepthStencilTexture() {
    this._createDepthStencilTexture(this.sizeSource.width, this.sizeSource.height, this.sizeSource._resolution);
    this._depth = true;
    this._stencil = true;
  }
  resize(e, t, r = this.resolution, n = false) {
    this.dirtyId++;
    this.colorAttachments.forEach((s, i) => {
      if (!n || i !== 0) {
        s.texture.resize(e, t, r);
      }
    });
    if (this.depthStencilAttachment) {
      if (n && this.colorAttachments.length === 0) {
        return;
      }
      this.depthStencilAttachment.texture.resize(e, t, r);
    }
  }
  destroy() {
    if (this.colorAttachments || this.depthStencilAttachment) {
      this.emit("destroy", this);
      this.sizeSource.off("resize", this.onSourceResize, this);
      if (this._managedColorTextures) {
        this.colorAttachments.forEach(e => {
          e.texture.destroy();
        });
      }
      if (this.depthStencilAttachment) {
        if (this._managedDepthStencilTexture) {
          this.depthStencilAttachment.texture.destroy();
        }
        delete this.depthStencilAttachment;
      }
      this.colorAttachments = null;
      this._colorTextures = null;
      this.removeAllListeners();
    }
  }
  _createDepthStencilTexture(e, t, r) {
    if (this.depthStencilAttachment) {
      return this.depthStencilAttachment;
    }
    const n = new l({
      width: e,
      height: t,
      resolution: r,
      format: "depth24plus-stencil8",
      autoGenerateMipmaps: false,
      antialias: false,
      mipLevelCount: 1
    });
    n.resize(e, t, r);
    this._managedDepthStencilTexture = true;
    this.depthStencilAttachment = {
      texture: n
    };
    return this.depthStencilAttachment;
  }
};
et.defaultOptions = {
  width: 0,
  height: 0,
  resolution: 1,
  colorTextures: 1,
  stencil: false,
  depth: false,
  antialias: false,
  isRoot: false
};
var tt = et;
var rt = new Map();
function nt(e, t) {
  if (!rt.has(e)) {
    const n = new r({
      source: new O({
        resource: e,
        ...t
      })
    });
    const s = () => {
      if (rt.get(e) === n) {
        rt.delete(e);
      }
    };
    n.once("destroy", s);
    n.source.once("destroy", s);
    rt.set(e, n);
  }
  return rt.get(e);
}
function st(e) {
  return rt.has(e);
}
a.register(rt);
var it = class e {
  get autoDensity() {
    return this.texture.source.autoDensity;
  }
  set autoDensity(e) {
    this.texture.source.autoDensity = e;
  }
  get resolution() {
    return this.texture.source._resolution;
  }
  set resolution(e) {
    this.texture.source.resize(this.texture.source.width, this.texture.source.height, e);
  }
  constructor(e) {
    this._renderer = e;
  }
  init(r) {
    if ((r = {
      ...e.defaultOptions,
      ...r
    }).view) {
      d(x, "ViewSystem.view has been renamed to ViewSystem.canvas");
      r.canvas = r.view;
    }
    this.screen = new m(0, 0, r.width, r.height);
    this.canvas = r.canvas || t.get().createCanvas();
    this.antialias = !!r.antialias;
    const {
      depth: n,
      ...s
    } = r;
    if (!s.format && this._renderer.type === S.WEBGPU) {
      s.format = t.get().getNavigator().gpu.getPreferredCanvasFormat();
    }
    this.texture = nt(this.canvas, s);
    this.renderTarget = new tt({
      colorTextures: [this.texture],
      depth: !!n,
      isRoot: true
    });
    this.texture.source.transparent = r.backgroundAlpha < 1;
    this.texture.source.on("resize", this._updateScreenSize, this);
    this.resolution = r.resolution;
    this._updateScreenSize();
  }
  resize(e, t, r) {
    this.texture.source.resize(e, t, r);
    this._updateScreenSize();
    this.screen.width = this.texture.frame.width;
    this.screen.height = this.texture.frame.height;
  }
  destroy(e = false) {
    if ((typeof e == "boolean" ? e : e?.removeView) && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
    this.texture.source.off("resize", this._updateScreenSize, this);
    B.removeScreen(this._renderer.uid);
    T.removeScreen(this._renderer.uid);
    this.texture.destroy();
  }
  _updateScreenSize() {
    const {
      pixelWidth: e,
      pixelHeight: t
    } = this.texture.source;
    const r = this._renderer.uid;
    B.setScreenSize(r, e, t, this.resolution);
    T.setScreenSize(r, e, t);
  }
};
it.extension = {
  type: [h.WebGLSystem, h.WebGPUSystem, h.CanvasSystem],
  name: "view",
  priority: 0
};
it.defaultOptions = {
  width: 800,
  height: 600,
  autoDensity: false,
  antialias: false
};
var at = it;
var ot = [Pe, Ne, Ke, at, Ge, je, Ze, De, Oe, Z, Xe, Ye];
var lt = [be, le, _e, ge, ue, pe, ce, me];
function dt(e, t, r, n, s, i) {
  const a = i ? 1 : -1;
  e.identity();
  e.a = 1 / n * 2;
  e.d = a * (1 / s * 2);
  e.tx = -1 - t * e.a;
  e.ty = -a - r * e.d;
  return e;
}
function ht(e) {
  if (e.colorAttachments.length === 0) {
    return false;
  }
  const t = e.colorTexture.resource;
  return globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement && document.body.contains(t);
}
var ut = class {
  constructor(e) {
    this.rootViewPort = new m();
    this.viewport = new m();
    this.onRenderTargetChange = new Y("onRenderTargetChange");
    this.projectionMatrix = new _();
    this.defaultClearColor = [0, 0, 0, 0];
    this._renderSurfaceToRenderTargetHash = new Map();
    this._gpuRenderTargetHash = Object.create(null);
    this._renderTargetStack = [];
    this._bindState = {
      target: null,
      frame: undefined,
      mipLevel: 0,
      layer: 0,
      flipY: false
    };
    this._bindFrame = new m();
    this._renderer = e;
    e.gc.addCollection(this, "_gpuRenderTargetHash", "hash");
  }
  get renderSurface() {
    return this._bindState.target;
  }
  get mipLevel() {
    return this._bindState.mipLevel;
  }
  get layer() {
    return this._bindState.layer;
  }
  finishRenderPass() {
    this.adaptor.finishRenderPass(this.renderTarget);
  }
  renderStart(e) {
    this._renderTargetStack.length = 0;
    this.push(e);
    this.rootViewPort.copyFrom(this.viewport);
    this.rootRenderTarget = this.renderTarget;
    this.renderingToScreen = ht(this.rootRenderTarget);
    this.adaptor.prerender?.(this.rootRenderTarget);
  }
  postrender() {
    this.adaptor.postrender?.(this.rootRenderTarget);
  }
  bind(e, t = true, n, s, i = 0, a = 0, o) {
    let l;
    if ("target" in e) {
      l = e;
    } else {
      d("8.20.0", "RenderTargetSystem.bind: positional arguments are deprecated, please use an options object instead: bind({ target, clear, clearColor, frame, mipLevel, layer, flipY })");
      l = {
        target: e,
        clear: t,
        clearColor: n,
        frame: s,
        mipLevel: i,
        layer: a,
        flipY: o
      };
    }
    const h = l.target;
    t = l.clear ?? true;
    n = l.clearColor;
    i = (l.mipLevel ?? 0) | 0;
    a = (l.layer ?? 0) | 0;
    o = l.flipY;
    s = l.frame;
    const u = this.getRenderTarget(h);
    const c = this.renderTarget !== u || !!u.flipY != !!o;
    this.renderTarget = u;
    const p = this.getGpuRenderTarget(u);
    if (u.pixelWidth !== p.width || u.pixelHeight !== p.height) {
      this.adaptor.resizeGpuRenderTarget(u);
      p.width = u.pixelWidth;
      p.height = u.pixelHeight;
    }
    const m = u.colorAttachments[0]?.texture || u.depthStencilAttachment?.texture;
    const f = this.viewport;
    const g = m.dimension === "3d" ? Math.max(m.depth >> i, 1) : m.depthOrArrayLayers;
    if (a < 0 || a >= g) {
      throw new Error(`[RenderTargetSystem] layer ${a} is out of bounds (layer count=${g}).`);
    }
    const _ = this._bindState;
    _.target = h;
    _.frame = s ? this._bindFrame.copyFrom(s) : undefined;
    _.mipLevel = i;
    _.layer = a;
    _.flipY = o;
    const x = Math.max(m.pixelWidth >> i, 1);
    const b = Math.max(m.pixelHeight >> i, 1);
    if (!s && h instanceof r) {
      s = h.frame;
    }
    if (s) {
      const e = m._resolution;
      const t = 1 << Math.max(i, 0);
      const r = s.x * e + 0.5 | 0;
      const n = s.y * e + 0.5 | 0;
      const a = s.width * e + 0.5 | 0;
      const o = s.height * e + 0.5 | 0;
      let l = Math.floor(r / t);
      let d = Math.floor(n / t);
      let h = Math.ceil(a / t);
      let u = Math.ceil(o / t);
      if (l < 0) {
        h += l;
        l = 0;
      }
      if (d < 0) {
        u += d;
        d = 0;
      }
      l = Math.min(l, x - 1);
      d = Math.min(d, b - 1);
      h = Math.min(h, x - l);
      u = Math.min(u, b - d);
      h = Math.max(h, 1);
      u = Math.max(u, 1);
      f.x = l;
      f.y = d;
      f.width = h;
      f.height = u;
    } else {
      f.x = 0;
      f.y = 0;
      f.width = x;
      f.height = b;
    }
    u.flipY = o;
    dt(this.projectionMatrix, 0, 0, f.width / m.resolution, f.height / m.resolution, !u.isRoot != !!u.flipY);
    this.adaptor.startRenderPass(u, t, n, f, i, a);
    if (c) {
      this.onRenderTargetChange.emit(u);
    }
    return u;
  }
  getBindState(e) {
    if (!this.renderTarget) {
      throw new Error("[RenderTargetSystem] getBindState is only valid while a render surface is bound");
    }
    const t = this._bindState;
    e ??= {};
    e.target = t.target;
    e.clear = V.NONE;
    e.clearColor = undefined;
    if (t.frame) {
      if (e.frame) {
        e.frame.copyFrom(t.frame);
      } else {
        e.frame = t.frame.clone();
      }
    } else {
      e.frame = undefined;
    }
    e.mipLevel = t.mipLevel;
    e.layer = t.layer;
    e.flipY = !!t.flipY;
    return e;
  }
  isFrontFaceInverted(e, t) {
    if (!e) {
      if (!(e = this.renderTarget)) {
        return false;
      }
      t = e.flipY;
    }
    return !!t != (this._renderer.type === S.WEBGL && !e.isRoot);
  }
  get frontFaceInverted() {
    d(y, "RenderTargetSystem.frontFaceInverted is deprecated, use isFrontFaceInverted() instead");
    return this.isFrontFaceInverted();
  }
  clear(e, t = V.ALL, r, n = this.mipLevel, s = this.layer) {
    if (t) {
      e &&= this.getRenderTarget(e);
      this.adaptor.clear(e || this.renderTarget, t, r, this.viewport, n, s);
    }
  }
  contextChange() {
    this._gpuRenderTargetHash = Object.create(null);
  }
  push(e, t = V.ALL, r, n, s = 0, i = 0, a) {
    let o;
    if ("target" in e) {
      o = e;
    } else {
      d("8.20.0", "RenderTargetSystem.push: positional arguments are deprecated, please use an options object instead: push({ target, clear, clearColor, frame, mipLevel, layer, flipY })");
      o = {
        target: e,
        clear: t,
        clearColor: r,
        frame: n,
        mipLevel: s,
        layer: i,
        flipY: a
      };
    }
    const l = this.bind(o);
    this._renderTargetStack.push({
      target: o.target,
      clear: false,
      clearColor: undefined,
      frame: o.frame ? o.frame.clone() : undefined,
      mipLevel: o.mipLevel,
      layer: o.layer,
      flipY: o.flipY
    });
    return l;
  }
  pop() {
    this._renderTargetStack.pop();
    const e = this._renderTargetStack[this._renderTargetStack.length - 1];
    if (!e) {
      throw new Error("[RenderTargetSystem] pop: no previous binding to restore (unbalanced pop)");
    }
    return this.bind(e);
  }
  getRenderTarget(e) {
    if (e.isTexture) {
      e = e.source;
    }
    return this._renderSurfaceToRenderTargetHash.get(e) ?? this._initRenderTarget(e);
  }
  copyToTexture(e, t, r, n, s) {
    const i = this.getRenderTarget(e);
    if (r.x < 0) {
      n.width += r.x;
      s.x -= r.x;
      r.x = 0;
    }
    if (r.y < 0) {
      n.height += r.y;
      s.y -= r.y;
      r.y = 0;
    }
    const {
      pixelWidth: a,
      pixelHeight: o
    } = i;
    n.width = Math.min(n.width, a - r.x);
    n.height = Math.min(n.height, o - r.y);
    return this.adaptor.copyToTexture(i, t, r, n, s);
  }
  copyDepthTexture(t, r, n, s, i = {
    x: 0,
    y: 0
  }) {
    const a = this.getRenderTarget(t);
    if (!a.depthStencilAttachment) {
      e("[RenderTargetSystem] copyDepthTexture: the source render target has no depth attachment to copy from");
      return;
    }
    const o = r.source;
    if (!o.format.includes("depth") && !o.format.includes("stencil")) {
      e(`[RenderTargetSystem] copyDepthTexture: the destination texture must have a depth/stencil format (got '${o.format}')`);
      return;
    }
    let l = n.x;
    let d = n.y;
    let h = i.x;
    let u = i.y;
    let c = s.width;
    let p = s.height;
    if (l < 0) {
      c += l;
      h -= l;
      l = 0;
    }
    if (d < 0) {
      p += d;
      u -= d;
      d = 0;
    }
    c = Math.min(c, a.pixelWidth - l);
    p = Math.min(p, a.pixelHeight - d);
    c = Math.min(c, o.pixelWidth - h);
    p = Math.min(p, o.pixelHeight - u);
    if (!(c <= 0) && !(p <= 0)) {
      this.adaptor.copyDepthTexture(a, r, {
        x: l,
        y: d
      }, {
        width: c,
        height: p
      }, {
        x: h,
        y: u
      });
    }
  }
  ensureDepthStencil() {
    if (!this.renderTarget.stencil) {
      if (this.renderTarget.depthStencilTexture) {
        e(`[RenderTargetSystem] a stencil mask is being used, but the render target's depthStencilTexture format '${this.renderTarget.depthStencilTexture.format}' has no stencil aspect, so masking cannot work here. Use a 'depth24plus-stencil8' texture instead.`);
        return;
      }
      this.renderTarget._depth = true;
      this.renderTarget._stencil = true;
      this.adaptor.startRenderPass(this.renderTarget, false, null, this.viewport, 0, this.layer);
    }
  }
  destroy() {
    this._renderer = null;
    this._renderSurfaceToRenderTargetHash.forEach((e, t) => {
      if (e !== t) {
        this._releaseRenderTarget(t, e);
      } else {
        e.off("destroy", this._onRenderTargetDestroy, this);
      }
    });
    this._renderSurfaceToRenderTargetHash.clear();
    for (const e of Object.values(this._gpuRenderTargetHash)) {
      if (e) {
        this.adaptor.destroyGpuRenderTarget(e);
      }
    }
    this._gpuRenderTargetHash = Object.create(null);
  }
  _initRenderTarget(e) {
    let t = null;
    if (O.test(e)) {
      e = nt(e).source;
    }
    if (e instanceof tt) {
      t = e;
      e.once("destroy", this._onRenderTargetDestroy, this);
    } else if (e instanceof l) {
      const r = e.format;
      t = r.includes("depth") || r.includes("stencil") ? new tt({
        colorTextures: 0,
        depthStencilTexture: e
      }) : new tt({
        colorTextures: [e]
      });
      if (e.source instanceof O) {
        t.isRoot = true;
      }
      e.once("destroy", this._onRenderSurfaceDestroy, this);
    }
    this._renderSurfaceToRenderTargetHash.set(e, t);
    return t;
  }
  _onRenderSurfaceDestroy(e) {
    const t = this._renderSurfaceToRenderTargetHash.get(e);
    if (t) {
      this._releaseRenderTarget(e, t);
    }
  }
  _onRenderTargetDestroy(e) {
    this._renderSurfaceToRenderTargetHash.delete(e);
    this._releaseGpuRenderTarget(e);
  }
  _releaseRenderTarget(e, t) {
    t.destroy();
    this._renderSurfaceToRenderTargetHash.delete(e);
    e.off("destroy", this._onRenderSurfaceDestroy, this);
    this._releaseGpuRenderTarget(t);
  }
  _releaseGpuRenderTarget(e) {
    const t = this._gpuRenderTargetHash[e.uid];
    if (t) {
      this._gpuRenderTargetHash[e.uid] = null;
      this.adaptor.destroyGpuRenderTarget(t);
    }
  }
  getGpuRenderTarget(e) {
    return this._gpuRenderTargetHash[e.uid] ||= this._initGpuRenderTarget(e);
  }
  _initGpuRenderTarget(e) {
    const t = e.colorAttachments;
    if (t.some(e => e.texture.antialias)) {
      const e = t.findIndex(e => v(e.texture.format));
      if (e !== -1) {
        throw new Error(`[RenderTargetSystem] color attachment ${e} is ${t[e].texture.format}, an integer format, and integer formats can't be antialiased. Create the render target's textures without antialias.`);
      }
    }
    return this.adaptor.initGpuRenderTarget(e);
  }
  resetState() {
    this.renderTarget = null;
    this._bindState.target = null;
  }
};
export { j as $, _e as A, se as B, Ge as C, Ce as D, Te as E, ce as F, Q as G, re as H, ue as I, X as J, Z as K, le as L, fe as M, me as N, ve as O, pe as P, N as Q, ae as R, Pe as S, Se as T, te as U, ne as V, ee as W, Y as X, K as Y, V as Z, He as _, ot as a, Ie as b, st as c, Xe as d, W as et, Ke as f, je as g, Ne as h, lt as i, ge as j, be as k, tt as l, Ye as m, ht as n, at as o, qe as p, J as q, dt as r, nt as s, ut as t, Ze as u, Fe as v, we as w, Oe as x, De as y, ie as z };
