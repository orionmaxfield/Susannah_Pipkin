# Latter-Day Sex — podcast website

Static website for the **Latter-Day Sex** podcast (“Keep it Passionate”), hosted by
Dr. Susannah Pipkin and Dr. Annie Bryner. Plain HTML, CSS, and a little JavaScript.
No build step, no framework. Works on GitHub Pages, Netlify, Cloudflare Pages, or any
static host.

## Site map

| Page | Purpose |
| --- | --- |
| `index.html` | Home: hero, why-us, latest episode, topics, hosts, newsletter, FAQ |
| `episodes/index.html` | Episode list |
| `episodes/01-….html` | Episode 1 page (synopsis, takeaways, quotes, listen links) |
| `topics/index.html` | Topic hub (SEO landing pages) |
| `topics/*.html` | One page per topic: desire differences, shame & faith, talking about sex, pornography, dating & engagement, newlyweds |
| `about.html` | Host bios |
| `free-guide.html` | Lead magnet + newsletter signup (marketing funnel) |
| `ask.html` | Anonymous question form |
| `privacy.html`, `404.html` | Utility pages |
| `sitemap.xml`, `robots.txt`, `site.webmanifest` | SEO / PWA basics |
| `_templates/episode.html` | Copy-and-fill template for new episodes (folders starting with `_` are not published by GitHub Pages) |

Shared files live in `assets/`:

- `assets/css/style.css` — all styling. Brand colors are CSS variables at the top.
- `assets/js/config.js` — **the one file to edit for links.** YouTube, Spotify, Apple,
  social handles, contact email, and form endpoints. Empty values show a “soon” badge
  instead of a dead link.
- `assets/js/main.js` — mobile menu, link filling, form handling.
- `assets/img/` — logo variants and host photos.

## Before launch checklist

1. **Links** — fill in `assets/js/config.js` once the show is live on each platform.
2. **Forms** — create a free [Formspree](https://formspree.io) form (or a Kit / Mailchimp
   form) and paste the endpoint into `newsletterAction` and `questionAction` in
   `config.js`. Until then, submitting shows a “not connected yet” note.
3. **Domain** — replace `https://latterdaysex.com` in every page’s `<link rel="canonical">`
   and `og:url`, plus `sitemap.xml` and `robots.txt`, with the real domain.
   A find-and-replace across the repo handles all of it.
4. **Bios** — the credential lines on `about.html` (degrees, license type, years in
   practice) were written from the hosts’ descriptions and should be confirmed with
   each host. Their Psychology Today profiles are linked in the HTML comments.
5. **Photos** — swap `assets/img/*.jpg` for the professional photos when they arrive.
   Keep the same filenames and nothing else needs to change.
6. **Privacy policy** — review `privacy.html` against the services actually in use.
7. **Episode 1** — when it publishes, open its page and replace the placeholder block
   with the YouTube embed (an HTML comment shows exactly what to paste), then put the
   episode-specific platform URLs on its listen buttons. Update the date in the
   episode card on `index.html` and `episodes/index.html`.

## Adding an episode

1. Copy `_templates/episode.html` to `episodes/NN-short-slug.html`.
2. Replace every CAPITALIZED placeholder (title, date, synopsis, takeaways, quotes,
   video ID, platform URLs, related topics).
3. Add an episode card to `episodes/index.html` (copy the existing `<article class="episode-card">`),
   and update the “Latest episode” card on `index.html`.
4. Add the episode card to each relevant `topics/*.html` page under “Episodes on …”
   (replace the “coming soon” callout the first time).
5. Add the new URL to `sitemap.xml`.

## Adding a topic page

Copy an existing `topics/*.html`, change the title, description, intro, “What we
believe” bullets, FAQ questions (these should match what people actually search for),
and the FAQ JSON-LD in the `<head>`. Then add a card for it on `topics/index.html`
and `index.html`, and add it to `sitemap.xml`.

## Hosting on GitHub Pages

Settings → Pages → Source: *Deploy from a branch* → `main` / root. If the site is
served under a sub-path (`username.github.io/repo/`), the absolute links on
`404.html` need that prefix; everything else uses relative links and works as-is.
With a custom domain, add a `CNAME` file containing the domain.

See `ROADMAP.md` for what comes next.
