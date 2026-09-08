/* ============ $MOUSE — Hold the Mouse Tight ============
   CONTRACT_ADDRESS: paste your deployed token contract address below.
   Leave empty ("") to show "Coming Soon" placeholder.
   ========================================================== */
const CONTRACT_ADDRESS = "";

// ---------- CA card ----------
(function initCA() {
  const caValue = document.getElementById("caValue");
  const copyBtn = document.getElementById("copyCa");
  const copyLabel = document.getElementById("copyCaLabel");
  const status = document.getElementById("caStatus");
  const quickCopy = document.getElementById("ca-quick-copy");

  const ca = (CONTRACT_ADDRESS || "").trim();
  if (ca) {
    caValue.textContent = ca;
    if (quickCopy) quickCopy.setAttribute("data-copy", ca);
  } else {
    caValue.textContent = "Coming soon — CA not set yet";
    caValue.style.color = "var(--text-dim)";
    if (copyBtn) copyBtn.disabled = true;
    if (copyBtn) copyBtn.style.opacity = "0.5";
    if (quickCopy) {
      quickCopy.textContent = "CA soon";
      quickCopy.disabled = true;
      quickCopy.style.opacity = "0.5";
    }
  }

  async function copy(text) {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    }
  }

  function flash(label, msg) {
    if (label) label.textContent = "Copied!";
    if (status) { status.textContent = msg; status.style.color = "var(--cheese)"; }
    caValue.classList.add("copied");
    setTimeout(() => {
      if (label) label.textContent = "Copy";
      if (status) { status.textContent = ""; }
      caValue.classList.remove("copied");
    }, 1800);
  }

  if (copyBtn) copyBtn.addEventListener("click", async () => {
    if (!ca) return;
    const ok = await copy(ca);
    flash(copyLabel, ok ? "Address copied to clipboard." : "Copy failed — select manually.");
  });
  if (quickCopy) quickCopy.addEventListener("click", async () => {
    if (!ca) return;
    const ok = await copy(ca);
    flash(null, ok ? "Address copied." : "Copy failed.");
  });
})();

// ---------- header scroll state + mobile menu ----------
(function initHeader() {
  const header = document.getElementById("header");
  const toggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".nav");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", open);
  });
  // close mobile menu on link click
  document.querySelectorAll(".nav-links a").forEach(a =>
    a.addEventListener("click", () => { nav.classList.remove("nav-open"); toggle.setAttribute("aria-expanded", "false"); })
  );
})();

// ---------- scroll progress bar ----------
(function initProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  const onScroll = () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight);
    bar.style.width = (Math.max(0, Math.min(1, scrolled)) * 100) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

// ---------- reveal on scroll ----------
(function initReveal() {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));
})();

// ---------- floating particles ----------
(function initParticles() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wrap = document.getElementById("particles");
  if (!wrap || reduce) return;
  const emojis = ["🧀", "🖱️", "💎", "🚀", "🧀", "🖱️"];
  const N = 14;
  for (let i = 0; i < N; i++) {
    const s = document.createElement("span");
    s.className = "particle";
    s.textContent = emojis[i % emojis.length];
    const dur = 9 + Math.random() * 10;
    const delay = -Math.random() * dur;
    const left = Math.random() * 100;
    const size = 0.8 + Math.random() * 0.9;
    s.style.left = left + "vw";
    s.style.fontSize = size + "rem";
    s.style.animationDuration = dur + "s";
    s.style.animationDelay = delay + "s";
    wrap.appendChild(s);
  }
})();

// ---------- parallax coin ----------
(function initParallax() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const coin = document.querySelector(".coin-wrap");
  if (!coin || reduce) return;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    coin.style.transform = `translateY(${y * 0.06}px)`;
  }, { passive: true });
})();
