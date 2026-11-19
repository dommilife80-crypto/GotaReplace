self.onmessage = async ({
  data: e
}) => {
  const {
    id: t,
    url: r,
    mode: a,
    credentials: s,
    referrer: i,
    buffer: o,
    mime: n,
    size: c,
    side: l,
    clip: f,
    at: g,
    span: m
  } = e;
  try {
    let e;
    if (o && o.byteLength > 0) {
      e = new Blob([o], {
        type: n
      });
    } else {
      const t = await fetch(r, {
        mode: a,
        credentials: s,
        referrer: i,
        referrerPolicy: "strict-origin-when-cross-origin",
        cache: "default"
      });
      if (!t.ok) {
        throw new Error(`HTTP ${t.status}`);
      }
      e = await t.blob();
    }
    const d = await createImageBitmap(e);
    let w;
    try {
      const e = new OffscreenCanvas(c, c);
      const t = e.getContext("2d");
      if (!t) {
        throw new Error("skin-worker context unavailable");
      }
      t.clearRect(0, 0, l, l);
      if (f > 0) {
        t.beginPath();
        t.arc(l / 2, l / 2, f, 0, Math.PI * 2, false);
        t.closePath();
        t.fill();
        t.globalCompositeOperation = "source-in";
      }
      t.drawImage(d, g, g, m, m);
      w = e.transferToImageBitmap();
    } finally {
      try {
        d.close();
      } catch {}
    }
    postMessage({
      id: t,
      ok: true,
      bitmap: w,
      size: c
    }, [w]);
  } catch (d) {
    postMessage({
      id: t,
      ok: false,
      error: d?.message || String(d)
    });
  }
};
