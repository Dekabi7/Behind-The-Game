# Image credits

Provenance record for article imagery. All article covers are now Behind the Game's own
photography from the Howard pilot — no stock remains on the route.

## Articles

| File | Original | Credit |
| --- | --- | --- |
| `five-ways-to-break-into-sports-business-a0bbb764.jpg` | `Images/DSC05935.jpeg` | Behind the Game |
| `inside-the-howard-symposium-9b0adfa8.jpg` | `Images/DSC05873.jpeg` | Behind the Game |
| `why-the-industry-needs-more-hbcu-voices-6b530d2e.jpg` | `Images/IMG_6731.jpeg` | Behind the Game |

All files live in `public/images/articles/`, resized and re-encoded from the originals in
`Images/` with EXIF stripped. The originals stay untouched as the master copies.

Note that `IMG_6731.jpeg` stores its orientation in EXIF (raw 4032x3024, portrait once
applied). Read phone photos through `ImageOps.exif_transpose` or equivalent, or they land on
their side.

## Cropping

Article images render twice: a 4:3 card on `/articles` and a 21:9 hero on the article page.
Anything that doesn't crop well from centre at both ratios needs an `imagePosition` in the MDX
frontmatter, which maps to CSS `object-position`:

```yaml
image: "/images/articles/inside-the-howard-symposium.jpg"
imagePosition: "center 10%"
```

Portrait shots always need one — at default centre a 21:9 hero crops to knees and misses every
face. Landscape shots generally don't. Current values:

| Article | Orientation | `imagePosition` |
| --- | --- | --- |
| Five Ways | landscape | none — centre is fine |
| Howard symposium | portrait | `center 10%` |
| HBCU voices | portrait | `center 30%` — past ~34% the screen headline clips |

**Check both crops after swapping any image in.**

## Filenames carry a content hash — keep it that way

Each file ends in the first 8 hex of its own SHA-1, and the frontmatter `image:` points at that
exact name. This is not decoration. Next's image optimizer caches optimized output keyed by the
request URL, and this version has no way to invalidate it:

> "There is no mechanism to invalidate the cache at this time, so its best to keep
> `minimumCacheTTL` low. Otherwise you may need to manually change the `src` prop or delete the
> cached file `<distDir>/cache/images`."
> — `node_modules/next/dist/docs/01-app/03-api-reference/02-components/image.md`

Overwrite an image while keeping its filename and the URL never changes, so the optimizer, the
CDN and every visitor's browser keep serving the *old* photo indefinitely — the deploy looks
clean and the site still shows the previous picture. Static image imports would hash
automatically, but these paths come from frontmatter, so the hash is maintained by hand.

**When swapping an image:** write the new file, rename it to `<slug>-<first 8 of sha1>.jpg`, and
update `image:` in the MDX to match. Deleting `.next/cache/images` only fixes your own machine.
