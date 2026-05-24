# Portfolio Editing Guide

A practical walkthrough for editing your portfolio (`index.html`). The whole site is a single self-contained file — no build step, no Node, no dependencies. Open it in any text editor (VS Code, Notepad++, Sublime, even Notepad) and edit. Refresh the browser to see changes.

> **Looking to deploy or share the portfolio?** See `LAUNCH_GUIDE.md` for: which GitHub repo to use, the full GitHub Pages deployment walkthrough, getting a free `pardhasaradhi-chandana.is-a.dev` custom domain, og:image preview setup, and ready-to-paste LinkedIn / Twitter / WhatsApp post templates.

---

## Table of contents

1. [File anatomy at a glance](#1-file-anatomy-at-a-glance)
2. [How to preview your edits](#2-how-to-preview-your-edits)
3. [Section-by-section editing](#3-section-by-section-editing)
4. [Visual systems — canvas mesh, radar, telemetry](#4-visual-systems--canvas-mesh-radar-telemetry)
5. [Changing colors, fonts, and motion](#5-changing-colors-fonts-and-motion)
6. [Custom cursor — how it works](#6-custom-cursor--how-it-works)
7. [Deploying to GitHub Pages](#7-deploying-to-github-pages)
8. [Sharing on LinkedIn](#8-sharing-on-linkedin)
9. [Common edits — quick recipes](#9-common-edits--quick-recipes)
10. [Troubleshooting](#10-troubleshooting)
11. [Asset locations — resume, photo, certificate images](#11-asset-locations--resume-photo-certificate-images)

---

## 1. File anatomy at a glance

The file has three parts in this order:

| Part | Roughly which lines | What it does |
|------|---------------------|--------------|
| `<head>` + `<style>` | Top of file (~lines 1–550) | Meta tags, fonts, all CSS |
| `<body>` content | Middle (~lines 555–900) | Every section the visitor sees |
| `<script>` at the bottom | Last ~150 lines | Cursor, magnetic buttons, scroll reveal, counters |

You'll spend 95% of your editing time in the **middle section** (the HTML body). Search for the comment markers like `<!-- Hero -->`, `<!-- Work -->`, `<!-- Capabilities -->` — they mark each section.

---

## 2. How to preview your edits

You have two easy options:

**Option A — Open directly in browser**
Double-click `index.html`. It opens in your default browser. After each edit, save the file and refresh the browser tab (`Ctrl + R`).

**Option B — Live reload in VS Code (recommended)**
1. Install VS Code
2. Install the extension **Live Server** (by Ritwick Dey)
3. Right-click `index.html` → **Open with Live Server**
4. The browser auto-refreshes every time you save

---

## 3. Section-by-section editing

Each section in the HTML is marked with a comment like `<!-- Hero -->`. Use `Ctrl + F` to jump straight to it.

### 3.1 Page title and meta tags (top of file, in `<head>`)

These control how the page appears in browser tabs, Google search results, and LinkedIn previews.

```html
<title>Pardha Saradhi Chandana — RAN / Radio System & Automation Test Engineer</title>
<meta name="description" content="RAN / Radio System & Automation Test Engineer with 4+ years..." />
<meta property="og:title" content="Pardha Saradhi Chandana — RAN / Automation Test Engineer" />
<meta property="og:description" content="Validating LTE & 5G NR networks..." />
```

**To edit:** change the text inside `content="..."`. The `og:` tags are what LinkedIn / Twitter use when someone shares your link.

### 3.2 Top navigation — `<!-- Top nav -->`

```html
<a href="#top" class="brand">
  <span class="mark">PSC</span>
  <span>Pardha&nbsp;Saradhi</span>
</a>
```

- Change `PSC` to your preferred initials
- The links `<a href="#work">Work</a>` etc. correspond to section IDs further down (`#about`, `#work`, `#capabilities`, `#focus`, `#recognition`, `#contact`). If you rename a section ID, update the link.

### 3.3 Hero — `<!-- Hero -->`

The big top section. Three things to know:

**a) Availability badge:**
```html
<span>AVAILABLE FOR RAN / 5G ROLES · BANGALORE / REMOTE</span>
```
Change this freely. To remove it, delete the whole `<div class="available reveal">…</div>` block.

**b) Name with letter-by-letter reveal:**
```html
<span class="split" id="splitName">
  <span class="ch">P</span><span class="ch">a</span>...
</span>
```
Each `<span class="ch">` is one character (use `&nbsp;` for a space). If you change your name, you'll need to wrap each character in `<span class="ch">…</span>` for the animation to work. If you don't want the animation, replace the whole `<span class="split">…</span>` with plain text.

**c) Last name + tagline:**
```html
<span class="sub-mark"></span><span class="it">Chandana.</span>
```
`.it` makes it italic gold. `.sub-mark` is the horizontal line before the surname.

**d) The lede paragraph and meta block:**
```html
<p>
  <strong>RAN / Radio System & Automation Test Engineer</strong> validating LTE...
</p>
<div class="meta">
  <span><span class="k">01 ·</span> Bangalore, IN</span>
  ...
</div>
```
Edit the paragraph and the three meta lines.

**e) Buttons:**
```html
<a href="#work" class="btn btn-primary" data-cursor="hover" data-magnetic>
  Explore work <span class="arr">↗</span>
</a>
```
Change the text inside the `<a>` to whatever you want. Keep `data-cursor="hover"` and `data-magnetic` to keep the cursor + magnetic effects.

### 3.4 Marquee strip — `<!-- Marquee -->`

The scrolling band of skills under the hero. The list of `<span>` items is **duplicated** so the loop is seamless — when you edit, **edit both halves identically**, or the animation will visually jump.

```html
<div class="marquee-track">
  <span>5G NR</span><span class="dot">●</span>
  <span>LTE Advanced</span><span class="dot">●</span>
  ...
  <!-- duplicate for seamless loop -->
  <span>5G NR</span><span class="dot">●</span>
  ...
</div>
```

### 3.5 About — `<!-- About -->`

Three paragraphs and a "signature" line on the left, four stat tiles on the right.

```html
<div class="about-text">
  <p>I spend my days...</p>
  <p>Currently at <strong>Parallel Wireless</strong>...</p>
  <p>Before that, four years at <strong>Mavenir Systems</strong>...</p>
  <div class="signature">— Stable. Scalable. Signal-true.</div>
</div>
```

Stats use a counter that animates from 0 up:

```html
<div class="num"><span class="counter" data-to="4">0</span><span class="unit">+ years</span></div>
<div class="lbl">RAN testing & automation</div>
```

- `data-to="4"` is the final number it counts up to. Change it to count to a different value.
- `.unit` is the small italic label after the number (e.g. `+ years`, `Gbps`, `h`)
- `.lbl` is the small uppercase line below

### 3.6 Work — `<!-- Work -->`

Each role is an `<article class="work-item">`. To **add a new role**, copy any existing `<article>` block and edit:

```html
<article class="work-item reveal">
  <div class="idx">01 / 04</div>           <!-- Position number; update across all items -->
  <div>
    <h3>Company Name <span class="role">— Your Title</span></h3>
    <div class="where">City, Country <span class="client">Clients · Name1 · Name2</span></div>
    <ul>
      <li>Bullet about what you did. Wrap key words in <strong>tags</strong>.</li>
      <li>Another bullet.</li>
    </ul>
  </div>
  <div class="when">Start Date<br/>— End Date</div>
</article>
```

**Tips:**
- Use `<strong>…</strong>` to highlight important phrases (they appear in cream-white instead of muted)
- Update the `01 / 04`, `02 / 04` counters if you add or remove roles
- The "Education" entry is also a `work-item` — keep or move as you prefer

### 3.7 Capabilities — `<!-- Capabilities -->`

Six cards in a 2-column grid, each with a number, heading, and a list of chips.

```html
<div class="cap reveal">
  <div class="num">01</div>
  <h4>Wireless Technologies</h4>
  <div class="chips">
    <span class="chip">LTE TDD / FDD</span>
    <span class="chip">5G SA TDD / FDD</span>
    ...
  </div>
</div>
```

- To add a chip: copy a `<span class="chip">…</span>` line
- To add a whole new category: copy one `<div class="cap reveal">…</div>` block
- Alternate `reveal` and `reveal d-1` on consecutive cards for a staggered fade-in

### 3.8 Focus areas — `<!-- Focus -->`

Four full-width cards highlighting specific competencies. Each `<article class="focus">` has:

```html
<article class="focus reveal" data-cursor="hover">
  <div class="f-no">01.</div>
  <div>
    <div class="meta-tag">Automation Framework</div>
    <h3>Multi-UE stability & throughput</h3>
  </div>
  <p>Description...</p>
  <div class="stack">
    <span>Python</span><span>Robot</span><span>LTE</span><span>Multi-UE</span>
  </div>
</article>
```

### 3.9 Recognition — `<!-- Recognition -->`

Awards and credentials. Each card:

```html
<div class="recog reveal">
  <div class="ribbon">
    <svg ...> <!-- Icon SVG --> </svg>
  </div>
  <div class="type">Spotlight Award</div>
  <h4>Customer Focus</h4>
  <p class="issuer">Mavenir Systems · 2024</p>
</div>
```

To swap an icon, replace the `<svg>…</svg>`. You can grab free SVG icons from [feathericons.com](https://feathericons.com/) — just copy any icon's SVG markup in.

### 3.10 Contact — `<!-- Contact -->`

```html
<h2>Let's build something <span class="it">signal-true.</span></h2>
<p class="blurb">Open to RAN / Radio System &amp; Automation Test Engineer roles...</p>
<a href="mailto:pardhasaradhi7477@gmail.com" class="mail-link">
  pardhasaradhi7477@gmail.com
  ...
</a>
<div class="contact-meta">
  <span>Bangalore, India</span>
  <a href="tel:+918247087692">+91 82470 87692</a>
  <a href="https://www.linkedin.com/in/...">LinkedIn ↗</a>
  <a href="https://github.com/...">GitHub ↗</a>
</div>
```

Update the email in **both** the `href="mailto:..."` and the visible text.

### 3.11 Footer

The huge `PSC.` is just text:
```html
<div class="logo-big">PSC.</div>
```
Change it freely.

---

## 4. Visual systems — canvas mesh, radar, telemetry

These are the three "alive" visual elements unique to this build. Edit them sparingly — they're tuned to feel atmospheric, not loud.

### 4.1 Background particle mesh (canvas)

A full-page canvas of drifting dots connected by faint lines. Some dots are labeled with skill names (`5G NR`, `LTE`, etc.) in amber. The mesh reacts to your cursor — dots are gently pushed away when the mouse gets near.

**Where it lives in the HTML:**
```html
<canvas id="meshCanvas" aria-hidden="true"></canvas>
```
Right after `<body>`. The canvas is `position: fixed` and sits behind everything.

**Where to edit the behavior** (in the `<script>` block near the bottom, look for the comment "Network mesh canvas"):

| What you'll see | What to change |
|------|------|
| `const SKILLS = ['5G NR', 'LTE', 'ORAN', ...]` | The labeled skill nodes. Add/remove as you wish — the first N particles get these labels. |
| `count = W < 700 ? 38 : (W < 1200 ? 60 : 80)` | Number of particles. Smaller = quieter. Bigger = busier (cap at ~120 for perf). |
| `vx: (Math.random() - 0.5) * 0.18` | Drift speed. `0.18` is slow. Increase to `0.4` for livelier motion. |
| `link2 = 18000` | Distance² at which dots draw lines between each other. Lower = sparser web. |
| `mouseR2 = 22500` | Distance² at which cursor pushes dots away. `150` pixel radius squared. |
| `(1 - d / 150) * 0.5` | Strength of repulsion. `0.5` is gentle. `1.2` is aggressive. |

**Where to edit the look** (in the `<style>` block):
- `#meshCanvas { opacity: 0.85; }` — overall canvas opacity
- In the script's `tick()` function, the strings `rgba(227, 176, 75, 0.55)` (skill dots), `rgba(239, 232, 219, 0.20)` (regular dots), and `rgba(239, 232, 219, ' + alpha + ')` (lines) control particle colors

**To disable the mesh entirely:**
Either delete the `<canvas id="meshCanvas">` element, or set `#meshCanvas { display: none; }` in CSS.

### 4.2 Phased-array radar (SVG)

The animated radar in the hero — rotating sweep beam, range rings, compass markers, pinging UE blips, pulsing center node.

**Where it lives:** `<svg class="radar-svg" viewBox="-100 -100 200 200">` inside the `.radar-stage` div.

**Things you might want to edit:**

| Edit | How |
|------|-----|
| Sweep rotation speed | CSS: `.radar-svg .sweep { animation: radar-rotate 6s linear infinite; }` — change `6s` |
| Range labels | The `<text class="range-lbl">` elements (`100m`, `300m`, `1km`) |
| Number of UE blips | Add or remove `<circle class="blip bN">` elements (each needs a unique `bN` class for animation timing) |
| Pulsing center node speed | CSS: `.radar-svg .pulse { animation: pulse-grow 2.6s ease-out infinite; }` |
| Corner annotations (CELL gNB-001, TDD 3.5GHz, SWEEP 6.0s, ACTIVE UE 05) | The four `<div class="radar-corner">` blocks |

**To move a blip:** change its `cx` and `cy` (range −95 to +95 in the SVG coordinate system, with `(0,0)` as the radar center).

**To change radar size:** in CSS, `.radar-stage { max-width: 380px; }`.

### 4.3 Live telemetry HUD

The small monospace panel below the radar showing RSRP / SINR / DL / UL / RTT / STATE. The numeric values are randomly jittered every 1.4 seconds to look "live."

**Where it lives:** the `<div class="telemetry">` block, right after `.radar-stage`.

**To change the labels or add rows:** edit the `<div class="row">` items. Each row needs:
```html
<div class="row"><span class="k">KEY</span><span class="v" id="someId">value</span></div>
```

**To wire up new live values:** in the `<script>` block, find the "Live telemetry" section and add to the `update()` function:
```javascript
set('someId', jit(base, range, decimals) + ' unit');
```

`jit(base, range, dp)` returns a number jittered randomly around `base` ± `range/2`, formatted to `dp` decimal places. Example: `jit(-78, 6, 0)` returns "-75" to "-81".

**To freeze the telemetry** (no jittering, static values): in the `update()` function comment out the `set('rsrp', ...)` etc. lines, and just leave the timestamp updating.

**To remove the HUD entirely:** delete the `<div class="telemetry">…</div>` block.

### 4.4 Orbital skill constellation (in Capabilities section)

A circular widget with three dashed orbital rings, a central RF antenna hub (concentric pulse rings around a 5G antenna icon), and ~15 skill chips orbiting at different speeds, directions, and colors. Hover anywhere on the widget to pause; mouse out to resume. Text stays upright on every chip at every angle.

**Where it lives:** inside `<section id="capabilities">`, the `<aside class="protocol-stage">` block. The widget itself is `<div class="orbit-stage" id="orbitStage">`.

**Adding, removing, or editing a chip:**
```html
<div class="orbit-chip"
     data-radius="48"
     data-angle="90"
     data-speed="-8"
     data-color="amber"><span>QXDM</span></div>
```
- `data-radius` — distance from center, **as a percentage** of half the stage width. The three rings are roughly at `32` (inner), `48` (middle), and `65` (outer). You can place chips between rings too.
- `data-angle` — starting angle in degrees. `0` = right, `90` = down, `180` = left, `270` = up.
- `data-speed` — degrees per second. **Positive = clockwise, negative = counter-clockwise.** Use the same value for all chips on the same ring so they orbit together. The defaults are inner `13`, middle `-8`, outer `5`.
- `data-color` — pick one: `amber`, `cyan`, `sage`, `lavender`, `coral`, `yellow`. Controls the chip's text color, border, and glow.

To add a new chip just copy any existing line and change the values. To remove one, delete the line. The animation picks up the change on the next page load.

**Changing the center icon:** the SVG inside `<div class="core">` is the antenna. Swap it for any other SVG — keep it ~26×26 px and use `stroke="currentColor"` so it inherits the amber tint.

**Speed feel:**
- All slower: divide every `data-speed` by 2.
- Reverse direction of a ring: flip the sign on every chip on that ring.
- Stop completely: set all `data-speed` to `0` (chips stay where you placed them).

**Disable pause-on-hover:** in CSS remove `.orbit-stage:hover .orbit-ring { animation-play-state: paused; }`, and in the script remove the `stage.addEventListener('mouseenter', …)` and `mouseleave` handlers.

**Restore the old protocol stack visualization instead of the orbit:** ask the assistant to swap it back — the layout container stays the same, so it's a clean swap.

**Remove the widget entirely:** delete the whole `<aside class="protocol-stage">…</aside>` block, then change `.capabilities-layout { grid-template-columns: 0.85fr 2fr; }` to `1fr` so the cap-grid uses full width.

### 4.5 Scroll cue at the bottom of the hero

The tiny animated dot saying `SCROLL` with a thin line falling. It's just decoration:
```html
<div class="scroll-cue" aria-hidden="true">
  <span>SCROLL</span>
  <span class="ln"></span>
</div>
```
Delete the whole `<div>` if you don't want it.

---

## 5. Changing colors, fonts, and motion

Everything visual is controlled by CSS variables at the **very top of the `<style>` block** (~line 18):

```css
:root {
  --bg:        #0c0c0d;          /* page background */
  --bg-soft:   #131316;          /* slightly lighter surface */
  --surface:   #16171b;          /* card backgrounds */
  --hairline:  rgba(239,232,219,0.08);   /* faint borders */
  --hairline-strong: rgba(239,232,219,0.18);

  --ink:       #efe8db;          /* main text colour (warm cream) */
  --ink-dim:   #b8b1a4;          /* secondary text */
  --ink-faint: #6f6a62;          /* tertiary / labels */

  --accent:    #e3b04b;          /* amber accent — change for a new vibe */
  --accent-soft: rgba(227,176,75,0.12);
  --signal:    #7ec4a8;          /* "live" badge green */
}
```

### Try a different accent

Change `--accent` to any hex. A few sophisticated options:

| Vibe | Accent |
|------|--------|
| Burnt orange / RF heat | `#d97706` |
| Electric cyan (signal) | `#22d3ee` |
| Muted sage | `#84a98c` |
| Crimson | `#dc2626` |
| Soft lavender | `#a78bfa` |

When you change `--accent`, also update `--accent-soft` to match — keep the same color but with `0.12` opacity, e.g. `rgba(217, 119, 6, 0.12)`.

### Go full light mode

Swap a few variables:
```css
--bg:      #fafaf7;
--bg-soft: #f0eee8;
--ink:     #1a1a1a;
--ink-dim: #555;
--ink-faint: #888;
```
The custom cursor uses `mix-blend-mode: difference` so it auto-inverts and stays visible.

### Fonts

The Google Fonts import at the top of `<head>` loads:
- **Fraunces** (serif headings)
- **Inter** (body sans)
- **JetBrains Mono** (labels)

To swap a font: pick any from [fonts.google.com](https://fonts.google.com/), grab the `<link>` snippet, replace the existing one, and update `--serif`, `--sans`, or `--mono` in CSS.

---

## 6. Custom cursor — how it works

The cursor has two parts:
- **Outer ring** (34px) — follows your mouse with a slight lag (the "magnetic" drift)
- **Inner dot** (6px) — follows instantly

Both use `mix-blend-mode: difference`, which auto-inverts against whatever's behind — so it stays visible on dark and light backgrounds.

### Cursor states on hover

Any element with one of these attributes triggers a state change:

```html
data-cursor="hover"   → ring scales to 64px, becomes amber
data-cursor="link"    → ring scales to 80px (used for big call-to-action mail link)
data-cursor="text"    → ring becomes a thin vertical bar (text-input feel)
```

Add `data-cursor="hover"` to any element you want to amplify on hover.

### Magnetic buttons

Add `data-magnetic` to any button or link and it'll be gently pulled toward the cursor when the mouse is near. Already applied to hero CTAs and the contact mail link.

### Touch devices

The cursor automatically hides on phones / tablets (anything without a fine pointer). No extra work needed.

---

## 7. Deploying to GitHub Pages

You already have the repo: `pardha-saradhi411/pardhasaradhichandana.github.io`.

### Easiest: drag-and-drop on the GitHub web UI

1. Go to https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io
2. Click the existing `index.html`
3. Click the pencil icon (Edit)
4. **Select all → delete**
5. Open your new `index.html` in a text editor, **copy everything**, and paste in
6. Scroll down → **Commit changes**
7. Wait ~30–60 seconds, then visit `https://pardha-saradhi411.github.io/pardhasaradhichandana.github.io/`

### Cleaner: use Git locally

```bash
git clone https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io.git
cd pardhasaradhichandana.github.io
# Replace index.html with the new one
git add index.html
git commit -m "Refresh portfolio with new design"
git push
```

### Custom domain (optional)

If you ever want `pardhasaradhi.dev` (or similar):
1. Buy domain from Namecheap / Cloudflare / GoDaddy
2. Add a `CNAME` file to your repo containing just `pardhasaradhi.dev`
3. In your domain's DNS, add a CNAME record pointing to `pardha-saradhi411.github.io`
4. In repo Settings → Pages → set the custom domain
5. Wait ~10 minutes for DNS

Free domain alternative: `is-a.dev` (like Ravi uses). Apply at https://github.com/is-a-dev/register.

---

## 8. Sharing on LinkedIn

When you paste your URL into a LinkedIn post, LinkedIn fetches the `<meta property="og:..."` tags from your `<head>` and shows a preview card. You have these set up:

```html
<meta property="og:title" content="Pardha Saradhi Chandana — RAN / Automation Test Engineer" />
<meta property="og:description" content="Validating LTE & 5G NR networks across feature, performance, and stability." />
<meta property="og:type" content="profile" />
```

### To add a preview image (highly recommended)

LinkedIn previews look 10× better with an image. Add this inside `<head>`:

```html
<meta property="og:image" content="https://pardha-saradhi411.github.io/pardhasaradhichandana.github.io/preview.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

Create a 1200×630 image (use Canva, Figma, or a screenshot of the hero), save as `preview.jpg`, commit it to the repo root.

### LinkedIn caches previews aggressively

If LinkedIn shows an old preview after you change the meta tags, force a refresh at:
https://www.linkedin.com/post-inspector/ → paste your URL → "Inspect".

### Suggested LinkedIn post template

> Just refreshed my portfolio. A look at four years of LTE / 5G NR validation across Parallel Wireless and Mavenir — automation, ORAN, root-cause analysis, and the long-running tests that catch what no one else does.
>
> Open to RAN / Radio System and Automation Test Engineer roles.
>
> 🔗 https://pardha-saradhi411.github.io/pardhasaradhichandana.github.io/
>
> #5G #LTE #RAN #ORAN #TestAutomation #RobotFramework #Python

---

## 9. Common edits — quick recipes

### Add a profile photo to the hero

In the hero section, just before `<h1>`, add:

```html
<img src="profile.jpg" alt="Pardha Saradhi Chandana"
     style="width:90px;height:90px;border-radius:50%;border:1px solid var(--hairline-strong);margin-bottom:24px;display:block;" />
```

Save your photo as `profile.jpg` next to `index.html`.

### Add a "Download Resume" button

In the hero CTA row:

```html
<a href="resume.pdf" download class="btn btn-ghost" data-cursor="hover" data-magnetic>
  Download CV ↓
</a>
```

Drop your PDF as `resume.pdf` in the repo root.

### Slow down (or speed up) the marquee

In CSS, find:
```css
.marquee-track { animation: scroll 40s linear infinite; }
```
Change `40s` — bigger = slower.

### Disable the custom cursor entirely

In the `<script>` section, find the cursor block and add `return;` as the first line inside the function. Or simply delete the two `<div class="cursor-...">` elements and the `body, body * { cursor: none ... }` CSS rule.

### Change "AVAILABLE FOR..." badge color

The green pulse comes from `--signal`. Change to amber:
```css
--signal: var(--accent);
```

---

## 10. Troubleshooting

**The page looks broken after I edited it**
HTML is picky about closing tags. The most common cause is a missing `</div>`, `</a>`, or `</section>`. In VS Code: right-click → Format Document — it'll re-indent and the mismatch becomes visible.

**Fonts look wrong / generic**
Your browser couldn't load Google Fonts. Make sure the `<link>` tag in `<head>` is intact and you have internet. If you're hosting offline, download the fonts and host them yourself.

**Custom cursor doesn't appear**
Check that you didn't accidentally delete `<div class="cursor-outer">` and `<div class="cursor-inner">` near the top of `<body>`. Also: it's intentionally hidden on touch devices.

**Counters show "0" forever**
You probably removed the `<script>` block at the bottom. The counter animation lives there.

**LinkedIn preview still shows the old version**
LinkedIn caches for ~7 days. Use the [Post Inspector](https://www.linkedin.com/post-inspector/) to force a refresh.

**Layout looks off on mobile**
The site is responsive, but if you've added long unbreakable strings (URLs, code, etc.), wrap them in `<span style="word-break:break-all">…</span>`.

---

## 11. Asset locations — resume, photo, certificate images

Everything the portfolio displays lives in your portfolio repo: **`pardha-saradhi411/pardhasaradhichandana.github.io`**. Files in the root of the repo are served at the root of your site URL. Subfolders work too — you'll reference them with relative paths.

### 11.1 Resume PDF

**Repo path:** `resume.pdf` (exactly that filename, in the root of the repo)
**Referenced by:** the "Download Resume" button on the profile card in the Contact section, plus the "Resume ↓" link in the footer.

**How to upload:**
1. Go to https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io
2. Click **Add file → Upload files**
3. Drag in your PDF. If it's named like `Pardha Saradhi Chandana resume.pdf`, **rename it to exactly `resume.pdf`** before or during the upload (lowercase, no spaces).
4. Commit message: `Add resume PDF`
5. Click **Commit changes**

Until you do this step, both download buttons will return a 404.

**Format notes:**
- PDF only — `.docx` and `.pages` won't preview in the browser
- Keep under ~2 MB for fast downloads (use Acrobat → Reduce File Size, or [smallpdf.com](https://smallpdf.com) → Compress)
- Embed fonts when exporting so it renders the same on every machine
- Re-upload (with the same filename) every time you update your resume

### 11.2 Profile picture

**Repo path:** `profile_picture.jpg` (already in your repo)
**Referenced by:** the circular 64×64 avatar on the profile card.

In `index.html` the reference looks like:
```html
<img src="profile_picture.jpg" alt="Pardha Saradhi Chandana"
     onerror="this.parentElement.textContent='PSC'; ..." />
```

**To replace with a different photo:**
- Easiest: keep the same filename. Upload a new image to the repo with the name `profile_picture.jpg` — GitHub will overwrite the old one. The portfolio shows the new photo on next refresh.
- If you want a different filename, also update the `src=` in `index.html`.

**Format notes:**
- Square aspect ratio, minimum 256×256 (will be displayed at 64×64 but high-density screens render at 128px or more)
- JPG or PNG — JPG is smaller for photos, PNG if there's transparency
- Crop to your face — the circular mask trims edges

**Built-in fallback:** if the image fails to load, the avatar circle falls back to showing "PSC" initials. Useful safety net but you don't need to rely on it.

### 11.3 Certificate images (currently icons — optional upgrade)

The Recognition section currently uses SVG icons (ribbon, document, certificate, checkmark) on the front of each flip card. If you have actual scans / photos of your certificates, you can swap them in.

**Suggested repo structure:**
```
pardhasaradhichandana.github.io/
├── index.html
├── resume.pdf
├── profile_picture.jpg
├── assets/
│   └── certs/
│       ├── spotlight-2024.jpg     ← Mavenir Customer Focus award
│       ├── python-2021.jpg        ← Udemy Python for Everybody
│       ├── btech-2021.jpg         ← CMRIT B.Tech degree
│       └── 3gpp.jpg               ← optional 3GPP badge
├── EDITING_GUIDE.md
└── LAUNCH_GUIDE.md
```

**How to upload images into a subfolder on GitHub:**
1. In your repo, click **Add file → Create new file**
2. In the filename field, type: `assets/certs/spotlight-2024.jpg` (typing slashes creates folders automatically)
3. Hit backspace once to clear the name, then click "Cancel"
4. Now use **Add file → Upload files** — drag your images into the upload area, GitHub keeps them in the folder you created.
5. Commit

(Alternative: just create the folder in your local repo clone, drop images in, and `git push`.)

**Wiring images into the flip cards:**

In `index.html`, find the first flip card. Look for this block (inside `flip-card-front`):

```html
<div class="ribbon">
  <svg width="16" height="16" viewBox="0 0 24 24" ...>
    <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/>
  </svg>
</div>
```

Replace it with:

```html
<div class="cert-image">
  <img src="assets/certs/spotlight-2024.jpg" alt="Customer Focus Award" />
</div>
```

Then add this CSS once, anywhere in the `<style>` block (near the flip-card styles is logical):

```css
.cert-image {
  width: 100%;
  height: 110px;
  margin-bottom: 14px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid var(--hairline);
}
.cert-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
```

Repeat the same swap for each of the four flip cards (Python, B.Tech, 3GPP) — each gets its own image.

**Format notes for cert images:**
- Minimum 600×400, JPG or PNG
- Landscape aspect ratio fits the 110px-tall slot best
- For sensitive certificates (with personal info / certificate numbers), redact them in an image editor before uploading — they'll be public on the internet
- Filenames lowercase with hyphens, no spaces: `spotlight-2024.jpg`, not `Spotlight Award 2024.jpg`

### 11.4 Anything else (screenshots, lab photos, project images)

Same pattern: put files in `assets/` (or a sub-folder), reference them with relative paths.

```html
<img src="assets/lab-setup.jpg" alt="LTE B4/B7 lab setup" />
```

**Useful tools for prepping images:**
- Compress before uploading: [tinypng.com](https://tinypng.com) (works for JPG too despite the name) or [squoosh.app](https://squoosh.app)
- Crop / resize: [photopea.com](https://www.photopea.com) (free in-browser Photoshop)
- Convert to web-friendly format: [cloudconvert.com](https://cloudconvert.com)

### 11.5 Quick checklist

Once you've added everything, your repo root should look like:

```
✅ index.html                      ← portfolio
✅ resume.pdf                      ← upload this
✅ profile_picture.jpg             ← already there
⬜ preview.jpg                     ← optional, for LinkedIn previews (1200×630)
⬜ CNAME                           ← only AFTER is-a.dev PR is merged
⬜ assets/certs/*.jpg              ← optional, if swapping out cert icons
✅ EDITING_GUIDE.md
✅ LAUNCH_GUIDE.md
```

Old template files (`assets/`, `css/`, `js/`, `scss/`, `vendor/`, `forms/`, `*-details.html` files) can be deleted whenever you're ready — the new `index.html` doesn't depend on any of them.

---

## Need anything specific?

The whole site is one HTML file you fully own — no proprietary framework, no JavaScript build, no surprises. Edit fearlessly. The worst case is `Ctrl + Z`.
