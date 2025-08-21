# Homepage Hero Video

Place your background hero video files in this `videos/` folder.

Required filenames (referenced by `index.html`):
- hero.mp4  (primary source)
- hero.webm (optional fallback)

Optional poster image (referenced in `<video poster>`):
- images/hero-poster.jpg

Recommendations:
- Duration: 5–10 seconds, subtle motion, seamless loop.
- Content: soft, professional scene related to home services (bokeh, light movement, office/home ambience). Avoid heavy movement.
- Codec: H.264 (MP4) + optional VP9/AV1 (WebM).
- Resolution: 1920x1080 (1080p) is sufficient; compress to keep file < 3–5 MB if possible.
- Export settings: 24–30 fps, high profile, fast start (web optimized), bitrate ~3–6 Mbps.
- Audio: remove/keep muted. The tag already uses `muted playsinline`.

Performance:
- Keep a lightweight `images/hero-poster.jpg` (120–200 KB, 1920x1080 WebP/JPG) for quick first paint.
- The CSS includes a dark green overlay for readability and brand alignment.

Accessibility:
- Users with reduced motion preference will see the static poster automatically due to the `prefers-reduced-motion` rule.
