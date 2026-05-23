# Launch & Share Guide

Everything you need to put your portfolio online and get it in front of people. Pair this with `EDITING_GUIDE.md` (which covers editing the actual file).

---

## Table of contents

1. [Which repo should you use?](#1-which-repo-should-you-use)
2. [Fastest path to live (5 minutes)](#2-fastest-path-to-live-5-minutes)
3. [Step-by-step deployment](#3-step-by-step-deployment)
4. [Optional: cleaner GitHub Pages URL](#4-optional-cleaner-github-pages-url)
5. [Free custom domain — `pardhasaradhi-chandana.is-a.dev`](#5-free-custom-domain--pardhasaradhi-chandanais-a-dev)
6. [Make link previews look pro (og:image)](#6-make-link-previews-look-pro-ogimage)
7. [Sharing on LinkedIn](#7-sharing-on-linkedin)
8. [Sharing on Twitter / X](#8-sharing-on-twitter--x)
9. [Sharing on Instagram, WhatsApp, Telegram](#9-sharing-on-instagram-whatsapp-telegram)
10. [Wire it into your job hunt](#10-wire-it-into-your-job-hunt)
11. [Tracking visits (optional)](#11-tracking-visits-optional)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Which repo should you use?

You have two:

| Repo | Where it would live | Verdict |
|------|-------|---------|
| `pardha-saradhi411/pardhasaradhichandana.github.io` | `pardha-saradhi411.github.io/pardhasaradhichandana.github.io/` | **Use this one.** It's already configured, already live. Just replace `index.html`. |
| `pardha-saradhi411/pardhasaradhichandana` | `pardha-saradhi411.github.io/pardhasaradhichandana/` | Skip / delete / use as a backup. Redundant. |

**Important context to understand the naming.** GitHub Pages only treats a repo as a "user page" (served at the bare `username.github.io` URL) if the repo is named **exactly** `username.github.io`. Your GitHub username is `pardha-saradhi411`, so:

- `pardha-saradhi411.github.io` → would be served at `https://pardha-saradhi411.github.io/`  ← clean URL
- `pardhasaradhichandana.github.io` → served at `https://pardha-saradhi411.github.io/pardhasaradhichandana.github.io/`  ← project page, ugly URL

The repo you currently have is misnamed for that purpose — but **it does not matter** once you put a custom `is-a.dev` domain in front of it. Visitors will only ever see `pardhasaradhi-chandana.is-a.dev` regardless of what GitHub serves underneath.

**Recommendation:** keep using the `pardhasaradhichandana.github.io` repo. Drop or ignore the other one.

---

## 2. Fastest path to live (5 minutes)

1. Open https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io
2. Click the existing `index.html` file
3. Click the pencil icon (top-right) to edit
4. Select all (Ctrl + A) → delete
5. Open the new `index.html` from your folder, copy the entire contents, paste in
6. Scroll down → "Commit changes" → "Commit directly to the `main` branch"
7. Wait ~30–60 seconds
8. Visit `https://pardha-saradhi411.github.io/pardhasaradhichandana.github.io/`

That's the bare-minimum path. The rest of this guide takes you to a polished, properly-shareable version.

---

## 3. Step-by-step deployment

### Option A — Web UI (no Git knowledge needed)

For each file (`index.html`, then `EDITING_GUIDE.md` and `LAUNCH_GUIDE.md` if you want them in the repo too):

1. Go to your repo
2. Click "Add file" → "Upload files" — or click an existing file and use the pencil to edit
3. Either drag-drop the new file in, or paste the contents
4. Commit message: `Refresh portfolio with new design` (or similar)
5. Click "Commit changes"

GitHub Pages auto-rebuilds. Check the **Actions** tab in the repo — a green checkmark on the latest workflow run means your site is live.

### Option B — Git CLI (cleaner for repeat updates)

```bash
# One time: clone the repo
git clone https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io.git
cd pardhasaradhichandana.github.io

# Every time you want to update
# (copy the new index.html into this folder, replacing the old one)
git add index.html
git commit -m "Refresh portfolio with new design"
git push
```

If this is your first time using git on this machine, set up your identity once:
```bash
git config --global user.name "Pardha Saradhi Chandana"
git config --global user.email "pardhasaradhi7477@gmail.com"
```

### Option C — GitHub Desktop (visual git)

Download from https://desktop.github.com. Sign in, "Add repository" → clone yours. Drop your new `index.html` into the local folder; the app shows the diff, you write a commit message and click "Commit", then "Push origin". Done.

---

## 4. Optional: cleaner GitHub Pages URL

If you don't want a custom domain but still want a cleaner default URL, create a fresh repo specifically named `pardha-saradhi411.github.io` (matching your username exactly). It then serves at `https://pardha-saradhi411.github.io/` with no subpath.

Steps:
1. New repo on GitHub, name: `pardha-saradhi411.github.io`, public, do NOT add README
2. Upload your `index.html` to the new repo's root
3. Settings → Pages → ensure "Source" is set to `main` branch, `/ (root)` folder
4. Wait ~1 minute, visit `https://pardha-saradhi411.github.io/`

This is purely cosmetic, but it's a noticeably cleaner URL to put on a resume.

**Skip this entire step if you're going to set up `is-a.dev` (next section) — the custom domain makes the underlying GitHub URL irrelevant.**

---

## 5. Free custom domain — `pardhasaradhi-chandana.is-a.dev`

[`is-a.dev`](https://www.is-a.dev) gives free subdomains to developers. Process takes ~1–7 days for review, then ~10 min for DNS to propagate.

### Step 1 — Pick your subdomain

Subdomain names allow `a-z`, `0-9`, and `-`. So `pardhasaradhi-chandana` works; `Pardha_Saradhi` does not. Check availability at https://www.is-a.dev/registry — search for your desired name. Suggestions:
- `pardhasaradhi-chandana`
- `pardha-chandana`
- `psc-ran`
- `pardhasaradhi`

For the rest of this guide I'll assume you picked **`pardhasaradhi-chandana`**.

### Step 2 — Fork the register repo

1. Go to https://github.com/is-a-dev/register
2. Click "Fork" (top-right) → fork it to your account

### Step 3 — Create your JSON file

In your fork:
1. Navigate to the `domains/` folder
2. "Add file" → "Create new file"
3. Filename: `pardhasaradhi-chandana.json` (must exactly match your chosen subdomain, lowercase, no spaces)
4. Paste this content, edited with your details:

```json
{
  "description": "Portfolio of Pardha Saradhi Chandana — RAN / Radio System & Automation Test Engineer.",
  "repo": "https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io",
  "owner": {
    "username": "pardha-saradhi411",
    "email": "pardhasaradhi7477@gmail.com"
  },
  "record": {
    "CNAME": "pardha-saradhi411.github.io"
  },
  "proxied": false
}
```

5. Commit directly to main

### Step 4 — Open a pull request

1. Go to your fork's main page
2. Click "Contribute" → "Open pull request"
3. PR title: `Register pardhasaradhi-chandana.is-a.dev`
4. PR description: short — mention you're a developer wanting a portfolio subdomain. Fill in the PR template if one appears.
5. Submit

### Step 5 — Wait for review

A maintainer reviews. Usually 1–7 days. If they ask for changes (typos, missing fields), update the JSON and push the change to your branch — the PR updates automatically.

When merged, your subdomain is registered. DNS propagation usually takes minutes but can take a few hours.

### Step 6 — Tell your GitHub Pages repo to expect that domain

After the PR is merged:

1. In your portfolio repo (`pardhasaradhichandana.github.io`), create a new file at the root named exactly **`CNAME`** (no extension)
2. Inside, write a single line:
   ```
   pardhasaradhi-chandana.is-a.dev
   ```
3. Commit
4. In repo **Settings → Pages**, scroll to "Custom domain". Type `pardhasaradhi-chandana.is-a.dev`, save.
5. Check the "Enforce HTTPS" box once it becomes available (may take a few minutes after step 4)

### Step 7 — Visit your site

`https://pardhasaradhi-chandana.is-a.dev` should now load your portfolio. If you see a 404 or DNS error, wait 30 more minutes — DNS propagation isn't instant.

---

## 6. Make link previews look pro (og:image)

When you paste a URL on LinkedIn, Twitter, Slack, WhatsApp, etc., those platforms fetch the page and look for `og:image` metadata to generate a preview card. A good preview card has roughly **3–4× the click-through rate** of a plain link.

### Create the image

Make a 1200 × 630 PNG / JPG containing:
- Your name
- Your role ("RAN / Radio System & Automation Test Engineer")
- A subtle hint of the site's visual identity (dark, warm amber)

Quickest tools:
- [Canva](https://canva.com) — search "social media preview 1200x630"
- [Figma](https://figma.com) — free, design from scratch
- Screenshot of your hero section, cropped to 1200×630

### Wire it into the site

1. Save the image as `preview.jpg` in your repo root (same level as `index.html`)
2. In `index.html` `<head>`, add these tags (paste right under the existing `og:` tags):

```html
<meta property="og:image" content="https://pardhasaradhi-chandana.is-a.dev/preview.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Pardha Saradhi Chandana — RAN / Automation Test Engineer" />
<meta name="twitter:image" content="https://pardhasaradhi-chandana.is-a.dev/preview.jpg" />
```

Commit and push.

### Verify the preview

Caches are aggressive — platforms hold the old preview for days. Force-refresh each platform:
- **LinkedIn:** https://www.linkedin.com/post-inspector/ → paste your URL → "Inspect"
- **Twitter / X:** https://cards-dev.twitter.com/validator (sign in, paste URL)
- **Facebook / Meta:** https://developers.facebook.com/tools/debug/ → "Debug" → "Scrape Again"

---

## 7. Sharing on LinkedIn

This is the highest-leverage channel for telecom and engineering roles. Two approaches: a single post when you publish, and ongoing presence after.

### A. The launch post

Three lengths — pick what fits your style. Add a 1-line break between each line for readability on mobile (LinkedIn renders cramped text).

**Short, confident:**
> Just published my portfolio.
>
> Four years across LTE / 5G NR RAN testing — Parallel Wireless, Mavenir engagements for DTAG, VMO2, and NEC. Automation, ORAN, protocol-stack debug, the long-running stability tests that catch what humans miss.
>
> Open to RAN / Radio System & Automation Test Engineer roles.
>
> 🔗 https://pardhasaradhi-chandana.is-a.dev
>
> #5G #LTE #RAN #ORAN #TestAutomation #Telecom

**Medium, story-driven:**
> RAN testing rarely makes for a tidy story — it's the messy intersection of protocol stacks, real hardware, and customer expectations.
>
> Four years in, I finally put together a portfolio that captures the work. Multi-UE stability frameworks in Robot Framework + Python. 5G SA / ORAN end-to-end validation across CU/DU/RU. Carrier Aggregation up to 1.4 Gbps DL. The long-run endurance tests that uncover what a 30-minute sanity run never will.
>
> Open to RAN / Radio System & Automation Test Engineer roles, contract validation work, or just a conversation about interesting RF problems.
>
> 🔗 https://pardhasaradhi-chandana.is-a.dev
>
> #5G #LTE #RAN #ORAN #RobotFramework #Python #Telecom #Networking

**Long, depth-led:**
> A short note on what I do and what I've shipped — written as a portfolio, because the year felt right for one.
>
> Currently at Parallel Wireless in the Radio R&D group, building Robot Framework + Python automation for dual-band LTE B4/B7 stability — multi-UE TCP/UDP throughput, attach/detach endurance, RSRP-controlled long-run validation. Before this, four years at Mavenir Systems validating LTE and 5G SA/NSA features for Deutsche Telekom, Virgin Media O2, and NEC — Carrier Aggregation (4DL/2UL → 1.4 Gbps), X2/S1 + intra/inter DU mobility, ORAN architecture (CP/UP/DU/RU), and the deep protocol-stack debug that customers usually only see in a root-cause report.
>
> If you work in RAN, lab automation, or anywhere downstream of an antenna, I'd love to compare notes.
>
> Open for: RAN / Radio System & Automation Test Engineer roles · ORAN consulting · contract validation work.
>
> 🔗 https://pardhasaradhi-chandana.is-a.dev
>
> #5G #LTE #RAN #ORAN #TestAutomation #RobotFramework #Python #Telecom #Networking #Engineering

### B. After the launch

A few things to do that compound over time:

1. **Pin the post** to the top of your LinkedIn profile — click the three dots on your post → "Feature on top of profile."
2. **Update your LinkedIn headline** to match your portfolio: `RAN / Radio System & Automation Test Engineer · LTE & 5G NR · Open to roles`
3. **Add the URL to your LinkedIn profile**:
   - Edit profile → Contact info → Website → add `https://pardhasaradhi-chandana.is-a.dev` with the label "Portfolio"
4. **Add to your "Featured" section** (the carousel below your bio). Add a new feature → Link → paste your portfolio URL. It renders with your og:image preview.

### C. Recruiter DMs

When recruiters message you, respond with a one-line + link instead of repeating your background each time:

> Thanks for reaching out — happy to chat. Quick context: https://pardhasaradhi-chandana.is-a.dev (4+ years LTE/5G RAN, currently at Parallel Wireless, open to roles). What did you have in mind?

---

## 8. Sharing on Twitter / X

Twitter's character limit forces brevity. Two takes:

**Tight, professional:**
> 4 years building & breaking 5G/LTE radio networks.
> Just published my portfolio.
>
> 🔗 https://pardhasaradhi-chandana.is-a.dev
>
> #5G #LTE #RAN #TestAutomation

**Builder-vibe:**
> shipped my portfolio.
>
> radar visualizations. live (simulated) telemetry. orbiting skill constellation. 4 years of RAN testing on the inside.
>
> 🔗 https://pardhasaradhi-chandana.is-a.dev

Twitter's preview card uses the same `og:image` you set up. Verify with the validator linked in section 6.

---

## 9. Sharing on Instagram, WhatsApp, Telegram

**Instagram**: doesn't allow links in regular posts. Two workarounds:
- Add `https://pardhasaradhi-chandana.is-a.dev` to your **bio** (under "Website")
- Share it as a **Story** — use the link sticker (available to everyone since 2021). Story stickers are tappable.

**WhatsApp Status / WhatsApp message**: paste the URL — WhatsApp automatically renders a preview card if `og:image` is set up. Add a one-liner:
> Updated my portfolio — open to RAN / 5G roles. https://pardhasaradhi-chandana.is-a.dev

**Telegram**: same as WhatsApp. Pasting the URL renders a preview card.

---

## 10. Wire it into your job hunt

Places to add the URL beyond social posts:

1. **Resume** — top of page, right next to your name and email. Just `pardhasaradhi-chandana.is-a.dev` (no `https://`, looks cleaner on paper).
2. **Email signature** — `Pardha Saradhi Chandana · RAN / Automation Test Engineer · pardhasaradhi-chandana.is-a.dev`
3. **Naukri / Indeed / Glassdoor profiles** — most platforms have a "personal website" or "portfolio link" field.
4. **GitHub profile** — edit your profile bio, add the URL in the "Website" field.
5. **Stack Overflow / community profiles** — same.
6. **WhatsApp About / status** — quick credibility signal in chats.
7. **Cover letters** — sentence like: *"You can see a deeper view of my work at pardhasaradhi-chandana.is-a.dev."*

---

## 11. Tracking visits (optional)

If you want to know who's visiting (and from where), drop in a privacy-friendly analytics tool. Two free options:

**Plausible** (lightweight, no cookies, ~1 KB script):
- Sign up at https://plausible.io (free trial; paid after)
- Or self-host the open-source version

**Goatcounter** (free for personal sites):
1. Sign up at https://www.goatcounter.com
2. They give you a one-line `<script>` tag
3. Paste it just before `</body>` in your `index.html`
4. Commit and push

You'll get a dashboard showing daily visits, top referrers (LinkedIn, Twitter, etc.), and which countries are visiting.

Skip Google Analytics — heavy script, cookie-banner overhead, privacy implications. For a personal portfolio, Goatcounter or Plausible is the right call.

---

## 12. Troubleshooting

**My site shows the old version after I pushed**
GitHub Pages caches aggressively. Hard-refresh your browser: Ctrl + Shift + R (or Cmd + Shift + R on Mac). Still old? Check the repo's "Actions" tab — if the latest workflow run hasn't completed, wait a few seconds.

**LinkedIn / Twitter preview shows wrong image or old metadata**
Use the inspectors in section 6. They force a fresh fetch.

**`is-a.dev` PR has been open for two weeks with no response**
Politely comment on the PR pinging the maintainers, or check the project's Discord (link in their README). They're volunteers, occasional delays happen.

**My custom domain shows "DNS_PROBE_FINISHED_NXDOMAIN"**
DNS hasn't propagated yet. Wait ~30 min after the PR is merged. Test from a different network (mobile data) — sometimes your local DNS cache is stale.

**Settings → Pages says "Custom domain not properly configured"**
Open a terminal and run `dig pardhasaradhi-chandana.is-a.dev`. You should see a CNAME record pointing to `pardha-saradhi411.github.io`. If you don't, the PR may not be merged yet or DNS hasn't propagated.

**HTTPS isn't working on my custom domain**
GitHub issues the SSL certificate automatically after the domain is properly configured. Wait up to 24 hours. Once "Enforce HTTPS" becomes clickable in Settings → Pages, enable it.

**Mobile users see a broken layout**
Open the site on your phone. If anything's off, share a screenshot and the assistant can patch it. The CSS is mobile-tested but every device has quirks.

**The orbital skill widget runs warm on older laptops**
The constellation is the most CPU-intensive element. If reviews suggest slowdown, ask the assistant to drop in a "low-motion" toggle that disables the orbiting on click.

---

## Quick reference — the URLs once you're set up

- **Live portfolio:** `https://pardhasaradhi-chandana.is-a.dev`
- **GitHub source:** `https://github.com/pardha-saradhi411/pardhasaradhichandana.github.io`
- **LinkedIn:** `https://www.linkedin.com/in/pardha-saradhi-chandana-system-engineer/`

Drop these everywhere they fit and the portfolio starts paying off.
