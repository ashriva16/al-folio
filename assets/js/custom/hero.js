(function () {
  const section = document.querySelector(".hero-banner");
  const canvas = document.getElementById("hero-canvas");
  if (!section || !canvas) return;

  const mode = (section.getAttribute("data-bg") || "net").toLowerCase();
  const ctx = canvas.getContext("2d", { alpha: true });
  const dpr = Math.max(1, window.devicePixelRatio || 1);

  function isDark() {
    return document.documentElement.getAttribute("data-theme") === "dark";
  }

  function colorPalette() {
    const root = getComputedStyle(document.documentElement);
    return {
      fg: root.getPropertyValue("--global-theme-color").trim(),
      grid: root.getPropertyValue("--global-divider-color").trim(),
      ink: root.getPropertyValue("--global-text-color").trim(),
      band: root.getPropertyValue("--global-secondary-theme-color").trim(),
      mean: root.getPropertyValue("--global-theme-color").trim(),
    };
  }

  // NEW: scale everything by viewport so small screens don’t crop visuals
  function viewportTuning(w, h) {
    const short = Math.min(w, h);
    // Smooth piecewise scale for amplitudes/densities
    const base = short >= 900 ? 1.0 : short >= 720 ? 0.9 : short >= 600 ? 0.82 : short >= 480 ? 0.72 : short >= 360 ? 0.64 : 0.58;

    // Slightly reduce more on high-DPR tiny phones (prevents fat lines)
    const s = dpr > 1 && short < 480 ? base * 0.92 : base;

    // Looser grid on small screens to reduce clutter
    const gridStep = short >= 900 ? 80 : short >= 600 ? 88 : 96;

    // Net parameters: lower density and link distance on small screens
    const netDensity = 0.0007 * Math.pow(s, 1.2);
    const linkDist = 80 * s;

    return { s, gridStep, netDensity, linkDist };
  }

  function resize() {
    const w = section.clientWidth,
      h = section.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    section.classList.add("has-canvas");
    draw(w, h);
  }

  function drawBackgroundGrid(w, h) {
    const { grid } = colorPalette();
    const { gridStep } = viewportTuning(w, h);
    ctx.save();
    ctx.strokeStyle = grid;
    ctx.lineWidth = 1;
    for (let x = 0; x <= w; x += gridStep) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y <= h; y += gridStep) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }
    ctx.restore();
  }

  function drawSineWaves(w, h) {
    const { s } = viewportTuning(w, h);
    function sine(A, f, ph, y0, thick) {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, isDark() ? "#b3e5fc" : "#56ccf2");
      g.addColorStop(0.5, isDark() ? "#6ee7f9" : "#2dc6d6");
      g.addColorStop(1, isDark() ? "#60f0be" : "#22c55e");
      ctx.strokeStyle = g;
      ctx.lineWidth = Math.max(1, thick * (0.85 + 0.15 * s)); // gently thinner on phones
      ctx.beginPath();
      for (let x = 0; x <= w; x++) {
        const t = (x / w) * 6 * Math.PI;
        const y = y0 + A * s * Math.sin(f * t + ph);
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.stroke();
    }
    sine(70, 1.0, 0.0, h * 0.35, 3.0);
    sine(52, 1.6, 0.8, h * 0.4, 2.2);
    sine(40, 2.3, 1.4, h * 0.45, 1.8);
  }

  function drawNet(w, h) {
    const { fg } = colorPalette();
    const { netDensity, linkDist } = viewportTuning(w, h);
    const dotMin = 0.8,
      dotMax = 2.2;
    const N = Math.floor(w * h * netDensity);
    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: dotMin + Math.random() * (dotMax - dotMin),
    }));
    ctx.lineWidth = 1;
    for (let i = 0; i < N; i++)
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x,
          dy = pts[i].y - pts[j].y,
          d = Math.hypot(dx, dy);
        if (d <= linkDist) {
          const a = 0.18 * (1 - d / linkDist);
          ctx.strokeStyle = fg.replace("1)", `${a.toFixed(3)})`);
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
    for (const p of pts) {
      ctx.fillStyle = fg.replace("1)", "0.6)");
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawUQ(w, h) {
    const { band, mean } = colorPalette();
    const { s } = viewportTuning(w, h);

    // tighter margins on phones to keep the full band visible
    const mTop = h < 520 ? 28 : 40;
    const mBot = h < 520 ? 56 : 80;
    const m = { l: 0, r: 0, t: mTop, b: mBot };

    const W = w - m.l - m.r,
      H = h - m.t - m.b;
    const L = 600,
      xs = Array.from({ length: L }, (_, i) => i / (L - 1));

    // scale the waveform and the uncertainty by s
    const mu = xs.map((t) => 0.2 + 0.25 * s * Math.sin(4 * Math.PI * t) * Math.exp(1.2 * t));
    const sig = xs.map((t) => 0.18 * s * (0.6 + 0.4 * Math.cos(2 * Math.PI * t)) * (0.4 + 0.6 * (1 - t)));

    const X = (t) => m.l + t * W;
    // expand y-range a touch on short viewports so extremes don’t clip
    const y0 = h < 520 ? -0.9 : -0.8;
    const y1 = h < 520 ? 0.95 : 0.9;
    const Y = (v) => m.t + (1 - (v - y0) / (y1 - y0)) * H;

    // ctx.clearRect(m.l - 1, m.t - 1, W + 2, H + 2); // optional hard clear

    // band
    ctx.fillStyle = band;
    ctx.beginPath();
    ctx.moveTo(X(xs[0]), Y(mu[0] + sig[0]));
    for (let i = 1; i < L; i++) ctx.lineTo(X(xs[i]), Y(mu[i] + sig[i]));
    for (let i = L - 1; i >= 0; i--) ctx.lineTo(X(xs[i]), Y(mu[i] - sig[i]));
    ctx.closePath();
    ctx.fill();

    // mean
    ctx.strokeStyle = mean;
    ctx.lineWidth = 3 * (0.9 + 0.1 * s);
    ctx.beginPath();
    for (let i = 0; i < L; i++) {
      const x = X(xs[i]),
        y = Y(mu[i]);
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    }
    ctx.stroke();
  }

  function drawSurface(w, h) {
    // ... your existing surface code unchanged ...
  }

  function draw(w, h) {
    ctx.clearRect(0, 0, w, h);
    drawBackgroundGrid(w, h);
    if (mode === "sine") drawSineWaves(w, h);
    if (mode === "net") drawNet(w, h);
    else if (mode === "sine") {
      /* ribbons only */
    } else if (mode === "uq") drawUQ(w, h);
    else drawSurface(w, h);
  }

  let rAF;
  function onResize() {
    cancelAnimationFrame(rAF);
    rAF = requestAnimationFrame(resize);
  }
  window.addEventListener("resize", onResize, { passive: true });

  const mo = new MutationObserver(() => draw(section.clientWidth, section.clientHeight));
  mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

  resize();
})();
