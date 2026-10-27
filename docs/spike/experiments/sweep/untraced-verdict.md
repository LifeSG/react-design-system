# F17: the 18 untraced renders

Reproduce: `./repeat-check.sh timetable/loading fullscreen-image-carousel/custom-actions
fullscreen-image-carousel/default countdown-timer/right-aligned countdown-timer/left-aligned
animations/loading-dots-spinner-custom-colour` (results in `repeat-results.jsonl`, log in
`repeat-check.log`). Each story is rendered twice per library, in a fresh browser each
time, in all four modes, with the same settings as `sweep-shots.mjs`, and each library is
diffed against itself. 72 self-comparisons.

| Story                                                  | Differs from itself on the same library?    | Verdict                      |
| ------------------------------------------------------ | ------------------------------------------- | ---------------------------- |
| `timetable/loading`                                    | Yes, on all three libraries (1 to 1,196 px) | Noise: a loading skeleton    |
| `countdown-timer/left-aligned`                         | Yes, 44,748 px on `flat` and on `styleedge` | Noise: a running timer       |
| `countdown-timer/right-aligned`                        | Yes on `styleedge` (5,525 px)               | Noise, same component        |
| `animations/loading-dots-spinner-custom-colour`        | Yes, on all three (16 to 29 px)             | Noise: a spinner             |
| `fullscreen-image-carousel/custom-actions`, `/default` | No, 0 of 24 differ                          | Noise of another kind, below |

The two carousel renders do not differ from themselves, but the sweep diff is a single
one-pixel row of 225 px (x 75 to 299), and it is in only one render each:
`styleedge` dark-mobile `custom-actions` (row 487 is rgb 113 where every other render is
rgb 40) and `depth` light-mobile `default` (row 442 is rgb 72 where every other render is
rgb 237). Neither line appears in either repeat render of the same library and mode, and
`flat` never shows it. A layering change would appear on every render of that library;
this appeared once in 6 renders. It is a one-off rendering artefact (most likely a
scrollbar or image-loading frame caught mid-paint), not layering.

So the untraced renders are render noise. In `flat` vs `styleedge` that is 6 renders
(timetable 3, countdown-timer, fullscreen-image-carousel and the dots spinner 1 each); the
18 is the same stories counted across all three comparisons (flat vs styleedge, flat vs
depth, styleedge vs depth). With toast's 12 (its JS spring), that leaves 94 of the 112
`flat` vs `styleedge` renders caused by layering: navbar 34, otp-verification 24,
smart-app-banner 24, unit-number 12.
