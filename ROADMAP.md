# Roadmap

What the first iteration includes and what to build next. Rough priority order within each phase.

## Done in this iteration

- Multi-page static site with the brand logo and navy/warm palette
- Home page with best-practice hero (single headline + primary CTA), trust section, latest episode, topics, hosts, newsletter, FAQ
- Episode 1 page with synopsis, key takeaways, quotes, discussion questions, listen buttons, and a YouTube embed slot
- Episode list page and reusable episode template
- Six SEO topic landing pages built around real search phrases, each with FAQ structured data
- Host bio page with group photo and individual photos
- Free-guide / newsletter funnel page and signup blocks on every page
- Anonymous “ask a question” form
- Single config file for all platform, social, and form links
- Sitemap, robots, web manifest, Open Graph tags, PodcastSeries / PodcastEpisode / FAQPage schema
- Mobile navigation, responsive layout, accessibility basics (skip link, focus styles, labels)
- Disclaimer (not therapy, not an official Church publication, crisis line)

## Phase 1 — Launch (next few weeks)

- [ ] Confirm host credentials, degrees, and bio wording with Susannah and Annie
- [ ] Get Annie’s last name and title spelled exactly as she wants on air and in print
- [ ] Buy domain, set up hosting (GitHub Pages or Netlify), add CNAME, replace placeholder domain
- [ ] Set up podcast host (Spotify for Creators, Buzzsprout, etc.) and fill in `config.js`
- [ ] Create YouTube channel; add episode 1 embed and date when published
- [ ] Connect forms (Formspree or email-provider forms) for newsletter and questions
- [ ] Choose newsletter provider (Kit, MailerLite, Mailchimp) and set up the welcome email that delivers the PDF
- [ ] Write and design the free PDF guide (“The Faithful Couple’s Starter Guide to Better Sex” is a working title)
- [ ] Professional photos of the hosts; replace `assets/img/*.jpg`
- [ ] Review privacy policy; add Terms if needed
- [ ] Add Google Search Console + submit sitemap; add privacy-friendly analytics (Plausible, Fathom, or GA4)
- [ ] Social share image (1200×630) for Open Graph, replacing the square logo

## Phase 2 — Content engine

- [ ] Publish episodes weekly using the template; keep episode cards on home, episodes, and topic pages in sync
- [ ] Add transcripts to episode pages (big SEO win; most hosts auto-generate them)
- [ ] Embed an audio player per episode (podcast host embed or `<audio>` with the MP3 URL)
- [ ] Add more topic pages as episodes cover them: sexual pain, body image, intimacy after kids, menopause and midlife, betrayal trauma, LGBTQ family members, singles and sexuality, sex after 50, foreplay and arousal, orgasm difficulties
- [ ] Each topic page: 800–1500 words, 5–8 FAQ entries written as real search queries, internal links to episodes
- [ ] Blog / articles section for written content between episodes
- [ ] “Start here” guide for new listeners (best first three episodes by situation)
- [ ] Listener questions page: anonymized Q&A archive
- [ ] Resources page: recommended books, therapist directories, Church resources

## Phase 3 — Marketing funnel

- [ ] Weekly newsletter template and cadence
- [ ] Email sequence after guide download (5–7 emails introducing the show and core ideas)
- [ ] Exit-intent or scroll-triggered newsletter prompt (keep it polite)
- [ ] Second lead magnet (e.g., “10 conversation starters” or a desire-differences workbook)
- [ ] Short-form clips for Instagram/TikTok/YouTube Shorts linked from episode pages
- [ ] Episode-specific share images
- [ ] Testimonials / listener reviews section once there are some
- [ ] Press / media kit page (bios, headshots, logo files, show description)

## Phase 4 — Platform

- [ ] Move to a tiny static-site generator (Eleventy or Astro) once there are 20+ episodes, so episode cards and topic lists update from one data file instead of by hand
- [ ] Search across episodes and topics
- [ ] Courses, workshops, or paid resources (if desired)
- [ ] Therapist referral directory for faith-aligned sex therapists
- [ ] Automatic RSS-to-site episode import
