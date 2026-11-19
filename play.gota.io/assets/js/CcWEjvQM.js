import { G as t, M as e, T as n, W as r, at as i, bt as a, c as s, dt as o, f as u, g as l, o as h, r as c, s as f } from "./C_U2Xa4J.js";
var d = class {
  constructor(t) {
    if (typeof t == "number") {
      this.rawBinaryData = new ArrayBuffer(t);
    } else if (t instanceof Uint8Array) {
      this.rawBinaryData = t.buffer;
    } else {
      this.rawBinaryData = t;
    }
    this.uint32View = new Uint32Array(this.rawBinaryData);
    this.float32View = new Float32Array(this.rawBinaryData);
    this.size = this.rawBinaryData.byteLength;
  }
  get int8View() {
    this._int8View ||= new Int8Array(this.rawBinaryData);
    return this._int8View;
  }
  get uint8View() {
    this._uint8View ||= new Uint8Array(this.rawBinaryData);
    return this._uint8View;
  }
  get int16View() {
    this._int16View ||= new Int16Array(this.rawBinaryData);
    return this._int16View;
  }
  get int32View() {
    this._int32View ||= new Int32Array(this.rawBinaryData);
    return this._int32View;
  }
  get float64View() {
    this._float64Array ||= new Float64Array(this.rawBinaryData);
    return this._float64Array;
  }
  get bigUint64View() {
    this._bigUint64Array ||= new BigUint64Array(this.rawBinaryData);
    return this._bigUint64Array;
  }
  view(t) {
    return this[`${t}View`];
  }
  destroy() {
    this.rawBinaryData = null;
    this.uint32View = null;
    this.float32View = null;
    this.uint16View = null;
    this._int8View = null;
    this._uint8View = null;
    this._int16View = null;
    this._int32View = null;
    this._float64Array = null;
    this._bigUint64Array = null;
  }
  static sizeOf(t) {
    switch (t) {
      case "int8":
      case "uint8":
        return 1;
      case "int16":
      case "uint16":
        return 2;
      case "int32":
      case "uint32":
      case "float32":
        return 4;
      default:
        throw new Error(`${t} isn't a valid view type`);
    }
  }
};
function x(t, e, n, r) {
  n ??= 0;
  r ??= Math.min(t.byteLength - n, e.byteLength);
  if (n & 7 || r & 7) {
    if (n & 3 || r & 3) {
      new Uint8Array(e).set(new Uint8Array(t, n, r));
    } else {
      const i = r / 4;
      new Float32Array(e, 0, i).set(new Float32Array(t, n, i));
    }
  } else {
    const i = r / 8;
    new Float64Array(e, 0, i).set(new Float64Array(t, n, i));
  }
}
var m = {
  normal: "normal-npm",
  add: "add-npm",
  screen: "screen-npm"
};
var v = (t => {
  t[t.DISABLED = 0] = "DISABLED";
  t[t.RENDERING_MASK_ADD = 1] = "RENDERING_MASK_ADD";
  t[t.MASK_ACTIVE = 2] = "MASK_ACTIVE";
  t[t.INVERSE_MASK_ACTIVE = 3] = "INVERSE_MASK_ACTIVE";
  t[t.RENDERING_MASK_REMOVE = 4] = "RENDERING_MASK_REMOVE";
  t[t.NONE = 5] = "NONE";
  return t;
})(v || {});
function b(t, e) {
  return e.alphaMode === "no-premultiply-alpha" && m[t] || t;
}
var p = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n");
function _(t) {
  let e = "";
  for (let n = 0; n < t; ++n) {
    if (n > 0) {
      e += "\nelse ";
    }
    if (n < t - 1) {
      e += `if(test == ${n}.0){}`;
    }
  }
  return e;
}
function g(t, e) {
  if (t === 0) {
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  }
  const n = e.createShader(e.FRAGMENT_SHADER);
  try {
    while (true) {
      const r = p.replace(/%forloop%/gi, _(t));
      e.shaderSource(n, r);
      e.compileShader(n);
      if (e.getShaderParameter(n, e.COMPILE_STATUS)) {
        break;
      }
      t = t / 2 | 0;
    }
  } finally {
    e.deleteShader(n);
  }
  return t;
}
var S = null;
function w() {
  if (S) {
    return S;
  }
  const t = e();
  S = g(S = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), t);
  t.getExtension("WEBGL_lose_context")?.loseContext();
  return S;
}
var y = class {
  constructor() {
    this.ids = Object.create(null);
    this.textures = [];
    this.count = 0;
  }
  clear() {
    for (let t = 0; t < this.count; t++) {
      const e = this.textures[t];
      this.textures[t] = null;
      this.ids[e.uid] = null;
    }
    this.count = 0;
  }
};
var A = class {
  constructor() {
    this.renderPipeId = "batch";
    this.action = "startBatch";
    this.start = 0;
    this.size = 0;
    this.textures = new y();
    this.blendMode = "normal";
    this.topology = "triangle-strip";
    this.canBundle = true;
  }
  destroy() {
    this.textures = null;
    this.gpuBindGroup = null;
    this.bindGroup = null;
    this.batcher = null;
    this.elements = null;
  }
};
var I = [];
var V = 0;
function T() {
  if (V > 0) {
    return I[--V];
  } else {
    return new A();
  }
}
function B(t) {
  t.elements = null;
  I[V++] = t;
}
r.register({
  clear: () => {
    if (I.length > 0) {
      for (const t of I) {
        if (t) {
          t.destroy();
        }
      }
    }
    I.length = 0;
    V = 0;
  }
});
var z = 0;
var E = class t {
  constructor(e) {
    this.uid = o("batcher");
    this.dirty = true;
    this.batchIndex = 0;
    this.batches = [];
    this._elements = [];
    if (!(e = {
      ...t.defaultOptions,
      ...e
    }).maxTextures) {
      i("v8.8.0", "maxTextures is a required option for Batcher now, please pass it in the options");
      e.maxTextures = w();
    }
    const {
      maxTextures: n,
      attributesInitialSize: r,
      indicesInitialSize: a
    } = e;
    this.attributeBuffer = new d(r * 4);
    this.indexBuffer = new Uint16Array(a);
    this.maxTextures = n;
  }
  begin() {
    this.elementSize = 0;
    this.elementStart = 0;
    this.indexSize = 0;
    this.attributeSize = 0;
    for (let t = 0; t < this.batchIndex; t++) {
      B(this.batches[t]);
    }
    this.batchIndex = 0;
    this._batchIndexStart = 0;
    this._batchIndexSize = 0;
    this.dirty = true;
  }
  add(t) {
    this._elements[this.elementSize++] = t;
    t._indexStart = this.indexSize;
    t._attributeStart = this.attributeSize;
    t._batcher = this;
    this.indexSize += t.indexSize;
    this.attributeSize += t.attributeSize * this.vertexSize;
  }
  checkAndUpdateTexture(t, e) {
    const n = t._batch.textures.ids[e._source.uid];
    return (!!n || n === 0) && (t._textureId = n, t.texture = e, true);
  }
  updateElement(t) {
    this.dirty = true;
    const e = this.attributeBuffer;
    if (t.packAsQuad) {
      this.packQuadAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId);
    } else {
      this.packAttributes(t, e.float32View, e.uint32View, t._attributeStart, t._textureId);
    }
  }
  break(t) {
    const e = this._elements;
    if (!e[this.elementStart]) {
      return;
    }
    let n = T();
    let r = n.textures;
    r.clear();
    const i = e[this.elementStart];
    let a = b(i.blendMode, i.texture._source);
    let s = i.topology;
    if (this.attributeSize * 4 > this.attributeBuffer.size) {
      this._resizeAttributeBuffer(this.attributeSize * 4);
    }
    if (this.indexSize > this.indexBuffer.length) {
      this._resizeIndexBuffer(this.indexSize);
    }
    const o = this.attributeBuffer.float32View;
    const u = this.attributeBuffer.uint32View;
    const l = this.indexBuffer;
    let h = this._batchIndexSize;
    let c = this._batchIndexStart;
    let f = "startBatch";
    let d = [];
    const x = this.maxTextures;
    for (let m = this.elementStart; m < this.elementSize; ++m) {
      const i = e[m];
      e[m] = null;
      const v = i.texture._source;
      const p = b(i.blendMode, v);
      const _ = a !== p || s !== i.topology;
      if (v._batchTick !== z || _) {
        if (r.count >= x || _) {
          this._finishBatch(n, c, h - c, r, a, s, t, f, d);
          f = "renderBatch";
          c = h;
          a = p;
          s = i.topology;
          n = T();
          r = n.textures;
          r.clear();
          d = [];
          ++z;
        }
        v._batchTick = z;
        i._textureId = v._textureBindLocation = r.count;
        r.ids[v.uid] = r.count;
        r.textures[r.count++] = v;
        i._batch = n;
        d.push(i);
        h += i.indexSize;
        if (i.packAsQuad) {
          this.packQuadAttributes(i, o, u, i._attributeStart, i._textureId);
          this.packQuadIndex(l, i._indexStart, i._attributeStart / this.vertexSize);
        } else {
          this.packAttributes(i, o, u, i._attributeStart, i._textureId);
          this.packIndex(i, l, i._indexStart, i._attributeStart / this.vertexSize);
        }
      } else {
        i._textureId = v._textureBindLocation;
        h += i.indexSize;
        if (i.packAsQuad) {
          this.packQuadAttributes(i, o, u, i._attributeStart, i._textureId);
          this.packQuadIndex(l, i._indexStart, i._attributeStart / this.vertexSize);
        } else {
          this.packAttributes(i, o, u, i._attributeStart, i._textureId);
          this.packIndex(i, l, i._indexStart, i._attributeStart / this.vertexSize);
        }
        i._batch = n;
        d.push(i);
      }
    }
    if (r.count > 0) {
      this._finishBatch(n, c, h - c, r, a, s, t, f, d);
      c = h;
      ++z;
    }
    this.elementStart = this.elementSize;
    this._batchIndexStart = c;
    this._batchIndexSize = h;
  }
  _finishBatch(t, e, n, r, i, a, s, o, u) {
    t.gpuBindGroup = null;
    t.bindGroup = null;
    t.action = o;
    t.batcher = this;
    t.textures = r;
    t.blendMode = i;
    t.topology = a;
    t.start = e;
    t.size = n;
    t.elements = u;
    ++z;
    this.batches[this.batchIndex++] = t;
    s.add(t);
  }
  finish(t) {
    this.break(t);
  }
  ensureAttributeBuffer(t) {
    if (!(t * 4 <= this.attributeBuffer.size)) {
      this._resizeAttributeBuffer(t * 4);
    }
  }
  ensureIndexBuffer(t) {
    if (!(t <= this.indexBuffer.length)) {
      this._resizeIndexBuffer(t);
    }
  }
  _resizeAttributeBuffer(t) {
    const e = Math.max(t, this.attributeBuffer.size * 2);
    const n = new d(e);
    x(this.attributeBuffer.rawBinaryData, n.rawBinaryData);
    this.attributeBuffer = n;
  }
  _resizeIndexBuffer(t) {
    const e = this.indexBuffer;
    let n = Math.max(t, e.length * 1.5);
    n += n % 2;
    const r = n > 65535 ? new Uint32Array(n) : new Uint16Array(n);
    if (r.BYTES_PER_ELEMENT !== e.BYTES_PER_ELEMENT) {
      for (let i = 0; i < e.length; i++) {
        r[i] = e[i];
      }
    } else {
      x(e.buffer, r.buffer);
    }
    this.indexBuffer = r;
  }
  packQuadIndex(t, e, n) {
    t[e] = n + 0;
    t[e + 1] = n + 1;
    t[e + 2] = n + 2;
    t[e + 3] = n + 0;
    t[e + 4] = n + 2;
    t[e + 5] = n + 3;
  }
  packIndex(t, e, n, r) {
    const i = t.indices;
    const a = t.indexSize;
    const s = t.indexOffset;
    const o = t.attributeOffset;
    for (let u = 0; u < a; u++) {
      e[n++] = r + i[u + s] - o;
    }
  }
  destroy(t = {}) {
    if (this.batches !== null) {
      for (let t = 0; t < this.batchIndex; t++) {
        B(this.batches[t]);
      }
      this.batches = null;
      this.geometry.destroy(true);
      this.geometry = null;
      if (t.shader) {
        this.shader?.destroy();
        this.shader = null;
      }
      for (let t = 0; t < this._elements.length; t++) {
        if (this._elements[t]) {
          this._elements[t]._batch = null;
        }
      }
      this._elements = null;
      this.indexBuffer = null;
      this.attributeBuffer.destroy();
      this.attributeBuffer = null;
    }
  }
};
E.defaultOptions = {
  maxTextures: null,
  attributesInitialSize: 4,
  indicesInitialSize: 6
};
var M = E;
var C = new Float32Array(1);
var U = new Uint32Array(1);
var D = class extends c {
  constructor() {
    const t = new h({
      data: C,
      label: "attribute-batch-buffer",
      usage: f.VERTEX | f.COPY_DST,
      shrinkToFit: false
    });
    super({
      attributes: {
        aPosition: {
          buffer: t,
          format: "float32x2",
          stride: 24,
          offset: 0
        },
        aUV: {
          buffer: t,
          format: "float32x2",
          stride: 24,
          offset: 8
        },
        aColor: {
          buffer: t,
          format: "unorm8x4",
          stride: 24,
          offset: 16
        },
        aTextureIdAndRound: {
          buffer: t,
          format: "uint16x2",
          stride: 24,
          offset: 20
        }
      },
      indexBuffer: new h({
        data: U,
        label: "index-batch-buffer",
        usage: f.INDEX | f.COPY_DST,
        shrinkToFit: false
      })
    });
  }
};
function P(e, n, r) {
  if (e) {
    for (const i in e) {
      const a = n[i.toLocaleLowerCase()];
      if (a) {
        let t = e[i];
        if (i === "header") {
          t = t.replace(/@in\s+[^;]+;\s*/g, "").replace(/@out\s+[^;]+;\s*/g, "");
        }
        if (r) {
          a.push(`//----${r}----//`);
        }
        a.push(t);
      } else {
        t(`${i} placement hook does not exist in shader`);
      }
    }
  }
}
var $ = /\{\{(.*?)\}\}/g;
function R(t) {
  const e = {};
  (t.match($)?.map(t => t.replace(/[{()}]/g, "")) ?? []).forEach(t => {
    e[t] = [];
  });
  return e;
}
function k(t, e) {
  let n;
  const r = /@in\s+([^;]+);/g;
  while ((n = r.exec(t)) !== null) {
    e.push(n[1]);
  }
}
function j(t, e, n = false) {
  const r = [];
  k(e, r);
  t.forEach(t => {
    if (t.header) {
      k(t.header, r);
    }
  });
  const i = r;
  if (n) {
    i.sort();
  }
  const a = i.map((t, e) => `       @location(${e}) ${t},`).join("\n");
  let s = e.replace(/@in\s+[^;]+;\s*/g, "");
  s = s.replace("{{in}}", `\n${a}\n`);
  return s;
}
function O(t, e) {
  let n;
  const r = /@out\s+([^;]+);/g;
  while ((n = r.exec(t)) !== null) {
    e.push(n[1]);
  }
}
function N(t, e) {
  const n = [];
  O(e, n);
  t.forEach(t => {
    if (t.header) {
      O(t.header, n);
    }
  });
  let r = 0;
  const i = n.sort().map(t => t.indexOf("builtin") > -1 ? t : `@location(${r++}) ${t}`).join(",\n");
  const a = n.sort().map(t => {
    return `       var ${e = t, e.replace(/@.*?\s+/g, "")};`;
    var e;
  }).join("\n");
  const s = `return VSOutput(\n            ${n.sort().map(t => ` ${function (t) {
    const e = /\b(\w+)\s*:/g.exec(t);
    if (e) {
      return e[1];
    } else {
      return "";
    }
  }(t)}`).join(",\n")});`;
  let o = e.replace(/@out\s+[^;]+;\s*/g, "");
  o = o.replace("{{struct}}", `\n${i}\n`);
  o = o.replace("{{start}}", `\n${a}\n`);
  o = o.replace("{{return}}", `\n${s}\n`);
  return o;
}
function G(t, e) {
  let n = t;
  for (const r in e) {
    const t = e[r];
    n = t.join("\n").length ? n.replace(`{{${r}}}`, `//-----${r} START-----//\n${t.join("\n")}\n//----${r} FINISH----//`) : n.replace(`{{${r}}}`, "");
  }
  return n;
}
var L = Object.create(null);
var F = new Map();
var W = 0;
function Q({
  template: t,
  bits: e
}) {
  const n = X(t, e);
  if (L[n]) {
    return L[n];
  }
  const {
    vertex: r,
    fragment: i
  } = function (t, e) {
    const n = e.map(t => t.vertex).filter(t => !!t);
    const r = e.map(t => t.fragment).filter(t => !!t);
    let i = j(n, t.vertex, true);
    i = N(n, i);
    const a = j(r, t.fragment, true);
    return {
      vertex: i,
      fragment: a
    };
  }(t, e);
  L[n] = Y(r, i, e);
  return L[n];
}
function K({
  template: t,
  bits: e
}) {
  const n = X(t, e);
  L[n] ||= Y(t.vertex, t.fragment, e);
  return L[n];
}
function X(t, e) {
  return e.map(t => {
    if (!F.has(t)) {
      F.set(t, W++);
    }
    return F.get(t);
  }).sort((t, e) => t - e).join("-") + t.vertex + t.fragment;
}
function Y(t, e, n) {
  const r = R(t);
  const i = R(e);
  n.forEach(t => {
    P(t.vertex, r, t.name);
    P(t.fragment, i, t.name);
  });
  return {
    vertex: G(t, r),
    fragment: G(e, i)
  };
}
var H = "\n    @in aPosition: vec2<f32>;\n    @in aUV: vec2<f32>;\n\n    @out @builtin(position) vPosition: vec4<f32>;\n    @out vUV : vec2<f32>;\n    @out vColor : vec4<f32>;\n\n    {{header}}\n\n    struct VSOutput {\n        {{struct}}\n    };\n\n    @vertex\n    fn main( {{in}} ) -> VSOutput {\n\n        var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;\n        var modelMatrix = mat3x3<f32>(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        var position = aPosition;\n        var uv = aUV;\n\n        {{start}}\n\n        vColor = vec4<f32>(1., 1., 1., 1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= globalUniforms.uWorldColorAlpha;\n\n        {{end}}\n\n        {{return}}\n    };\n";
var q = "\n    @in vUV : vec2<f32>;\n    @in vColor : vec4<f32>;\n\n    {{header}}\n\n    @fragment\n    fn main(\n        {{in}}\n      ) -> @location(0) vec4<f32> {\n\n        {{start}}\n\n        var outColor:vec4<f32>;\n\n        {{main}}\n\n        var finalColor:vec4<f32> = outColor * vColor;\n\n        {{end}}\n\n        return finalColor;\n      };\n";
var J = "\n    in vec2 aPosition;\n    in vec2 aUV;\n\n    out vec4 vColor;\n    out vec2 vUV;\n\n    {{header}}\n\n    void main(void){\n\n        mat3 worldTransformMatrix = uWorldTransformMatrix;\n        mat3 modelMatrix = mat3(\n            1.0, 0.0, 0.0,\n            0.0, 1.0, 0.0,\n            0.0, 0.0, 1.0\n          );\n        vec2 position = aPosition;\n        vec2 uv = aUV;\n\n        {{start}}\n\n        vColor = vec4(1.);\n\n        {{main}}\n\n        vUV = uv;\n\n        mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;\n\n        gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n\n        vColor *= uWorldColorAlpha;\n\n        {{end}}\n    }\n";
var Z = "\n\n    in vec4 vColor;\n    in vec2 vUV;\n\n    out vec4 finalColor;\n\n    {{header}}\n\n    void main(void) {\n\n        {{start}}\n\n        vec4 outColor;\n\n        {{main}}\n\n        finalColor = outColor * vColor;\n\n        {{end}}\n    }\n";
var tt = {
  name: "global-uniforms-bit",
  vertex: {
    header: "\n        struct GlobalUniforms {\n            uProjectionMatrix:mat3x3<f32>,\n            uWorldTransformMatrix:mat3x3<f32>,\n            uWorldColorAlpha: vec4<f32>,\n            uResolution: vec2<f32>,\n        }\n\n        @group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;\n        "
  }
};
var et = {
  name: "global-uniforms-ubo-bit",
  vertex: {
    header: "\n          uniform globalUniforms {\n            mat3 uProjectionMatrix;\n            mat3 uWorldTransformMatrix;\n            vec4 uWorldColorAlpha;\n            vec2 uResolution;\n          };\n        "
  }
};
var nt = {
  name: "global-uniforms-bit",
  vertex: {
    header: "\n          uniform mat3 uProjectionMatrix;\n          uniform mat3 uWorldTransformMatrix;\n          uniform vec4 uWorldColorAlpha;\n          uniform vec2 uResolution;\n        "
  }
};
function rt({
  bits: t,
  name: e
}) {
  const n = Q({
    template: {
      fragment: q,
      vertex: H
    },
    bits: [tt, ...t]
  });
  return l.from({
    name: e,
    vertex: {
      source: n.vertex,
      entryPoint: "main"
    },
    fragment: {
      source: n.fragment,
      entryPoint: "main"
    }
  });
}
function it({
  bits: t,
  name: e
}) {
  return new n({
    name: e,
    ...K({
      template: {
        vertex: J,
        fragment: Z
      },
      bits: [nt, ...t]
    })
  });
}
var at = {
  name: "color-bit",
  vertex: {
    header: "\n            @in aColor: vec4<f32>;\n        ",
    main: "\n            vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);\n        "
  }
};
var st = {
  name: "color-bit",
  vertex: {
    header: "\n            in vec4 aColor;\n        ",
    main: "\n            vColor *= vec4(aColor.rgb * aColor.a, aColor.a);\n        "
  }
};
var ot = {};
function ut(t) {
  const e = [];
  if (t === 1) {
    e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;");
    e.push("@group(1) @binding(1) var textureSampler1: sampler;");
  } else {
    let n = 0;
    for (let r = 0; r < t; r++) {
      e.push(`@group(1) @binding(${n++}) var textureSource${r + 1}: texture_2d<f32>;`);
      e.push(`@group(1) @binding(${n++}) var textureSampler${r + 1}: sampler;`);
    }
  }
  return e.join("\n");
}
function lt(t) {
  const e = [];
  if (t === 1) {
    e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);");
  } else {
    e.push("switch vTextureId {");
    for (let n = 0; n < t; n++) {
      if (n === t - 1) {
        e.push("  default:{");
      } else {
        e.push(`  case ${n}:{`);
      }
      e.push(`      outColor = textureSampleGrad(textureSource${n + 1}, textureSampler${n + 1}, vUV, uvDx, uvDy);`);
      e.push("      break;}");
    }
    e.push("}");
  }
  return e.join("\n");
}
function ht(t) {
  ot[t] ||= {
    name: "texture-batch-bit",
    vertex: {
      header: "\n                @in aTextureIdAndRound: vec2<u32>;\n                @out @interpolate(flat) vTextureId : u32;\n            ",
      main: "\n                vTextureId = aTextureIdAndRound.y;\n            ",
      end: "\n                if(aTextureIdAndRound.x == 1)\n                {\n                    vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);\n                }\n            "
    },
    fragment: {
      header: `\n                @in @interpolate(flat) vTextureId: u32;\n\n                ${ut(t)}\n            `,
      main: `\n                var uvDx = dpdx(vUV);\n                var uvDy = dpdy(vUV);\n\n                ${lt(t)}\n            `
    }
  };
  return ot[t];
}
var ct = {};
function ft(t) {
  const e = [];
  for (let n = 0; n < t; n++) {
    if (n > 0) {
      e.push("else");
    }
    if (n < t - 1) {
      e.push(`if(vTextureId < ${n}.5)`);
    }
    e.push("{");
    e.push(`\toutColor = texture(uTextures[${n}], vUV);`);
    e.push("}");
  }
  return e.join("\n");
}
function dt(t) {
  ct[t] ||= {
    name: "texture-batch-bit",
    vertex: {
      header: "\n                in vec2 aTextureIdAndRound;\n                out float vTextureId;\n\n            ",
      main: "\n                vTextureId = aTextureIdAndRound.y;\n            ",
      end: "\n                if(aTextureIdAndRound.x == 1.)\n                {\n                    gl_Position.xy = roundPixels(gl_Position.xy, uResolution);\n                }\n            "
    },
    fragment: {
      header: `\n                in float vTextureId;\n\n                uniform sampler2D uTextures[${t}];\n\n            `,
      main: `\n\n                ${ft(t)}\n            `
    }
  };
  return ct[t];
}
var xt = {
  name: "round-pixels-bit",
  vertex: {
    header: "\n            fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32>\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        "
  }
};
var mt = {
  name: "round-pixels-bit",
  vertex: {
    header: "\n            vec2 roundPixels(vec2 position, vec2 targetSize)\n            {\n                return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;\n            }\n        "
  }
};
var vt = {};
function bt(t) {
  let e = vt[t];
  if (e) {
    return e;
  }
  const n = new Int32Array(t);
  for (let r = 0; r < t; r++) {
    n[r] = r;
  }
  e = vt[t] = new u({
    uTextures: {
      value: n,
      type: "i32",
      size: t
    }
  }, {
    isStatic: true
  });
  return e;
}
var pt = class extends s {
  constructor(t) {
    super({
      glProgram: it({
        name: "batch",
        bits: [st, dt(t), mt]
      }),
      gpuProgram: rt({
        name: "batch",
        bits: [at, ht(t), xt]
      }),
      resources: {
        batchSamplers: bt(t)
      }
    });
    this.maxTextures = t;
  }
};
var _t = null;
var gt = class t extends M {
  constructor(e) {
    super(e);
    this.geometry = new D();
    this.name = t.extension.name;
    this.vertexSize = 6;
    _t ??= new pt(e.maxTextures);
    this.shader = _t;
  }
  packAttributes(t, e, n, r, i) {
    const a = i << 16 | t.roundPixels & 65535;
    const s = t.transform;
    const o = s.a;
    const u = s.b;
    const l = s.c;
    const h = s.d;
    const c = s.tx;
    const f = s.ty;
    const {
      positions: d,
      uvs: x
    } = t;
    const m = t.color;
    const v = t.attributeOffset;
    const b = v + t.attributeSize;
    for (let p = v; p < b; p++) {
      const t = p * 2;
      const i = d[t];
      const s = d[t + 1];
      e[r++] = o * i + l * s + c;
      e[r++] = h * s + u * i + f;
      e[r++] = x[t];
      e[r++] = x[t + 1];
      n[r++] = m;
      n[r++] = a;
    }
  }
  packQuadAttributes(t, e, n, r, i) {
    const a = t.texture;
    const s = t.transform;
    const o = s.a;
    const u = s.b;
    const l = s.c;
    const h = s.d;
    const c = s.tx;
    const f = s.ty;
    const d = t.bounds;
    const x = d.maxX;
    const m = d.minX;
    const v = d.maxY;
    const b = d.minY;
    const p = a.uvs;
    const _ = t.color;
    const g = i << 16 | t.roundPixels & 65535;
    e[r + 0] = o * m + l * b + c;
    e[r + 1] = h * b + u * m + f;
    e[r + 2] = p.x0;
    e[r + 3] = p.y0;
    n[r + 4] = _;
    n[r + 5] = g;
    e[r + 6] = o * x + l * b + c;
    e[r + 7] = h * b + u * x + f;
    e[r + 8] = p.x1;
    e[r + 9] = p.y1;
    n[r + 10] = _;
    n[r + 11] = g;
    e[r + 12] = o * x + l * v + c;
    e[r + 13] = h * v + u * x + f;
    e[r + 14] = p.x2;
    e[r + 15] = p.y2;
    n[r + 16] = _;
    n[r + 17] = g;
    e[r + 18] = o * m + l * v + c;
    e[r + 19] = h * v + u * m + f;
    e[r + 20] = p.x3;
    e[r + 21] = p.y3;
    n[r + 22] = _;
    n[r + 23] = g;
  }
  _updateMaxTextures(t) {
    if (this.shader.maxTextures !== t) {
      _t = new pt(t);
      this.shader = _t;
    }
  }
  destroy() {
    this.shader = null;
    super.destroy();
  }
};
gt.extension = {
  type: [a.Batcher],
  name: "default"
};
var St = gt;
var wt = class {
  constructor(t) {
    this.items = Object.create(null);
    const {
      renderer: e,
      type: n,
      onUnload: r,
      priority: i,
      name: a
    } = t;
    this._renderer = e;
    e.gc.addResourceHash(this, "items", n, i ?? 0);
    this._onUnload = r;
    this.name = a;
  }
  add(t) {
    return !this.items[t.uid] && (this.items[t.uid] = t, t.once("unload", this.remove, this), t._gcLastUsed = this._renderer.gc.now, true);
  }
  remove(t, ...e) {
    if (!this.items[t.uid]) {
      return;
    }
    const n = t._gpuData[this._renderer.uid];
    if (n) {
      this._onUnload?.(t, ...e);
      t.off("unload", this.remove, this);
      n.destroy();
      t._gpuData[this._renderer.uid] = null;
      this.items[t.uid] = null;
    }
  }
  removeAll(...t) {
    Object.values(this.items).forEach(e => e && this.remove(e, ...t));
  }
  destroy(...t) {
    this.removeAll(...t);
    this.items = Object.create(null);
    this._renderer = null;
    this._onUnload = null;
  }
};
export { y as A, N as C, D, P as E, v as F, x as I, d as L, g as M, b as N, A as O, m as P, G as S, R as T, Z as _, xt as a, Q as b, dt as c, it as d, rt as f, q as g, et as h, bt as i, w as j, M as k, at as l, nt as m, St as n, mt as o, tt as p, pt as r, ht as s, wt as t, st as u, H as v, j as w, K as x, J as y };
