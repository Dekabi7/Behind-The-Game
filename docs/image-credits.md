# Image credits

Provenance record for article imagery. Two of the three are real Behind the Game event
photography; one is still stock standing in for a client-supplied shot.

## Articles

| File | Source | Credit |
| --- | --- | --- |
| `inside-the-howard-symposium.jpg` | Client photography — Howard pilot, `Images/DSC05873.jpeg` | Behind the Game |
| `why-the-industry-needs-more-hbcu-voices.jpg` | Client photography — Howard pilot, `Images/IMG_6731.jpeg` | Behind the Game |
| `five-ways-to-break-into-sports-business.jpg` | [Pexels 935949](https://www.pexels.com/photo/photo-of-men-having-conversation-935949/) — [Pexels License](https://www.pexels.com/license/), free for commercial use, no attribution required | nappy |

All files live in `public/images/articles/`. Client photos are resized and re-encoded from the
originals in `Images/`, with EXIF stripped — the originals stay untouched as the master copies.

## Cropping

Article images render twice: a 4:3 card on `/articles` and a 21:9 hero on the article page.
Anything that doesn't crop well from centre at both ratios needs an `imagePosition` in the
MDX frontmatter, which maps to CSS `object-position`:

```yaml
image: "/images/articles/inside-the-howard-symposium.jpg"
imagePosition: "center 10%"
```

Both client photos are portrait, so both need this — at default centre the 21:9 hero crops to
knees and misses every face. Landscape shots generally don't need it. **Check both crops after
swapping any image in.**

Note that `IMG_6731.jpeg` stores its orientation in EXIF (raw 4032x3024, portrait once applied).
Read it through `ImageOps.exif_transpose` or equivalent, or it lands on its side.

**Still to replace:** `five-ways-to-break-into-sports-business.jpg` is the last stock image on
the route — swap it for real photography when a suitable frame is available.
