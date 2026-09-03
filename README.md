# Kaiso — ISO readiness assessment landing page

Static preview of the Kaiso marketing / readiness-assessment page, exported from
Claude Design. **No backend yet** — the readiness quiz and lead form run entirely
in the browser and nothing is persisted. This repo exists only so the page can be
viewed on a deployed URL.

## Structure

| Path | What it is |
| --- | --- |
| `MarketingPage.dc.html` | The page. A Claude Design canvas document (`<x-dc>` template + inline logic). |
| `support.js` | Claude Design runtime. Self-loads React/Babel from unpkg and boots the `<x-dc>` template. |
| `ds-base.js` | Loads the design system (`_ds/…/_ds_bundle.js` + `styles.css`). |
| `_ds/kaiso-design-system-…/` | The bound design system — tokens, component bundle, manifest. |
| `assets/illustrations/`, `assets/kobi/` | SVGs referenced by the page. |
| `Assets_SVG/` | Original raw artwork export (Figma). Not used by the page; kept as source. |
| `uploads/` | Input doc used when generating the design. Not served. |

## Run locally

Any static file server from the repo root, then open `/MarketingPage.dc.html`:

```bash
python3 -m http.server 8000
```

Rendering needs network access (React + Google Fonts load from CDNs).

## Deploy (Vercel)

No build step. Import the repo in Vercel with **Framework Preset: Other** and the
default (root) output directory. `vercel.json` rewrites `/` to
`MarketingPage.dc.html`.
