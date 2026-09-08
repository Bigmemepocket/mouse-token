# $MOUSE — Hold the Mouse Tight 🖱️

A meme coin landing page for the **$MOUSE** token. The meme: to catch the next 1000x gem you have to scroll through hundreds of tokens — so **hold the mouse tight**.

Built as a static site (HTML + CSS + vanilla JS) — no build step, no backend. Deploys straight to **GitHub Pages** for free.

---

## ✨ Features

- **Editable Contract Address (CA)** — set one variable in `script.js` and the whole page (hero nav, CA card, copy buttons) updates instantly. Copy-to-clipboard works with a fallback for older browsers.
- **Fully responsive** — desktop, tablet, mobile with a hamburger menu.
- **Interactive & animated**:
  - Animated custom particle field (cheese, mice, gems floating up)
  - Scroll-reveal animations on every section
  - Parallax hero coin + glowing pulse + spinning dashed ring
  - Sticky scroll-aware header + scroll-progress bar
  - Scrolling hype marquee
- **Sections**: Hero, Contract Address, Lore, Tokenomics, How to Buy, Roadmap, Art Gallery (X promo images), Join CTA, Footer with disclaimer.
- **6 generated brand images** — token logo + 5 promo images for X posting (optimized WebP, ~80–220 KB each).
- **Accessible** — semantic HTML, ARIA labels, `prefers-reduced-motion` respected.
- **SEO ready** — Open Graph + Twitter card meta tags, descriptive alt text.

---

## 🖼️ Adding the Contract Address

Open [`script.js`](./script.js) and edit the top line:

```js
const CONTRACT_ADDRESS = "0xYourContractAddressHere";
```

That's it. The page shows "Coming soon — CA not set yet" until you fill it in, then the CA card, copy button, and nav "CA" button all light up. No HTML editing required.

> Tip: when you redeploy the token, just change this one string and repush.

---

## 🚀 Deploy to GitHub Pages

1. **Create a repository** on GitHub (e.g. `mouse-token`). It can be public or private.

2. **Push these files** to the repo. Everything in this folder goes to the repo root:
   ```bash
   git init
   git add .
   git commit -m "Hold the mouse tight"
   git branch -M main
   git remote add origin https://github.com/<your-username>/mouse-token.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to **Settings → Pages** in the repo.
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Set **Branch** = `main`, **Folder** = `/ (root)`, then **Save**.

4. Wait ~1 minute. Your site goes live at:
   ```
   https://<your-username>.github.io/mouse-token/
   ```

> Want a custom domain (like `holdthemouse.xyz`)? Add a `CNAME` file containing your domain, then point your DNS to GitHub. See [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

### Update flow

Edit any file → `git add . && git commit -m "..." && git push` → GitHub Pages auto-redeploys.

---

## 📂 Project structure

```
mouse-token/
├── index.html          # page markup
├── styles.css          # all styling
├── script.js           # CA, copy, animations, particles
├── README.md           # this file
└── assets/
    ├── mouse-token-logo.webp        # token mascot (hero + favicon)
    ├── mouse-promo-hunt.webp        # gallery
    ├── mouse-promo-mountain.webp    # gallery
    ├── mouse-promo-grip.webp        # gallery
    ├── mouse-promo-tothemoon.webp   # gallery (wide) + social card
    ├── mouse-promo-late-night.webp  # gallery
    ├── favicon.ico / favicon.png    # browser icons
    └── *.png                        # full-res originals for X posts
```

---

## 📱 X / Twitter promo images

The `assets/` folder includes 5 ready-to-post promo images (full-res PNGs) plus the token logo. Suggested captions:

- **tothemoon**: "Hold the mouse tight. We're going to the moon. 🌙🖱️ #MOUSE"
- **hunt**: "Scrolling for the next 1000x. The grip is real. 🧀💎 #MOUSE"
- **mountain**: "Secured the cheese. 🧀🏔️ #MOUSE"
- **grip**: "Never let go. The tighter the grip, the bigger the gem. 🖱️💪 #MOUSE"
- **late-night**: "Late-night grip sessions. We never sleep. 🌙 #MOUSE"

---

## ⚠️ Disclaimer

$MOUSE is a meme coin with no intrinsic value or expectation of financial return. Nothing on this site is financial advice. Crypto is volatile — do your own research and only risk what you can afford to lose.
