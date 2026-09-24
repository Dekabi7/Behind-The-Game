# Image credits

Provenance record for article imagery. All article covers are now Behind the Game's own
photography from the Howard pilot — no stock remains on the route.

## Articles

| File | Original | Credit |
| --- | --- | --- |
| `five-ways-to-break-into-sports-business.jpg` | `Images/DSC05935.jpeg` | Behind the Game |
| `inside-the-howard-symposium.jpg` | `Images/DSC05873.jpeg` | Behind the Game |
| `why-the-industry-needs-more-hbcu-voices.jpg` | `Images/IMG_6731.jpeg` | Behind the Game |

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
