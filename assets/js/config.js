/* ==========================================================================
   SITE CONFIG — the one place to update links and form endpoints.
   Leave a value as "" and the matching button shows a "soon" badge
   instead of a dead link. Every page loads this file.
   ========================================================================== */
window.SITE = {
  // Podcast platforms (show-level links). Fill these in when the show is live.
  youtube: "https://www.youtube.com/@latterdaysexpodcast",          // e.g. "https://www.youtube.com/@latterdaysex"
  spotify: "https://open.spotify.com/show/3y75dExCayG4yu6rVW3I3X",          // e.g. "https://open.spotify.com/show/..."
  apple: "",            // add once Apple Podcasts approves the show. e.g. "https://podcasts.apple.com/us/podcast/..."
  rss: "https://anchor.fm/s/118ecdad8/podcast/rss",              // podcast RSS feed URL (from your host: Buzzsprout, Spotify for Creators, etc.)

  // Social
  instagram: "https://www.instagram.com/latterdaysexpodcast/",
  facebook: "https://www.facebook.com/latterdaysex",
  tiktok: "",

  // Contact
  email: "hello@latterdaysex.net",            // e.g. "hello@latterdaysex.net"

  // Forms. Easiest free option: Formspree (https://formspree.io) — create a form,
  // paste its endpoint here. For the newsletter you can instead point at a
  // Kit / Mailchimp / MailerLite form action URL.
  newsletterAction: "https://formsubmit.co/hello@latterdaysex.net",  // e.g. "https://formspree.io/f/abcdwxyz"
  questionAction: "https://formsubmit.co/hello@latterdaysex.net"     // e.g. "https://formspree.io/f/abcdwxyz"
};
