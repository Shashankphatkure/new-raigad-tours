/**
 * Geometry for the illustrated India map.
 *
 * Everything is expressed in a single 1000x1100 viewBox so pins, routes and the
 * bus all share one coordinate space. The outline is a deliberately simplified
 * vector illustration — not a survey-accurate boundary — matching the
 * "minimal illustrated map, not Google Maps" brief.
 */

export const MAP_VIEWBOX = { width: 1000, height: 1100 };

/**
 * Simplified silhouette of mainland India. Traced as a smooth closed path so it
 * reads as an elegant illustration rather than a jagged data-derived shape.
 */
export const INDIA_OUTLINE = `
M 452 78
C 470 66, 498 62, 520 72
C 545 84, 560 104, 588 108
C 612 112, 632 100, 656 104
C 678 108, 690 126, 712 132
C 736 139, 762 130, 784 140
C 806 150, 812 174, 806 196
C 800 218, 782 232, 776 254
C 770 276, 780 296, 774 318
C 768 342, 744 352, 730 372
C 716 392, 716 418, 722 442
C 728 466, 744 484, 748 508
C 752 534, 738 556, 726 578
C 712 604, 700 630, 690 658
C 678 692, 668 726, 652 758
C 634 794, 610 826, 588 858
C 566 890, 548 924, 528 954
C 512 978, 496 1000, 476 1014
C 458 1026, 436 1024, 424 1008
C 410 990, 410 964, 404 940
C 396 908, 380 880, 366 850
C 350 816, 336 782, 328 746
C 320 710, 318 672, 310 636
C 302 600, 286 568, 270 536
C 252 500, 232 466, 218 428
C 206 396, 200 362, 186 332
C 172 302, 148 280, 138 248
C 129 220, 140 190, 164 174
C 188 158, 220 164, 246 156
C 272 148, 292 128, 318 116
C 348 102, 382 100, 412 92
C 428 88, 440 86, 452 78
Z
`;

/**
 * Soft interior contour lines — subtle "texture" suggesting terrain without
 * turning the illustration into a topographic chart.
 */
export const CONTOUR_LINES = [
  "M 250 300 C 330 268, 430 262, 520 284 C 600 304, 668 344, 726 392",
  "M 236 392 C 320 358, 424 352, 512 376 C 592 398, 656 442, 706 494",
  "M 292 508 C 360 478, 444 474, 518 496 C 584 516, 636 556, 676 604",
  "M 336 640 C 396 614, 466 612, 528 632 C 582 650, 624 684, 656 726",
  "M 386 776 C 432 756, 488 756, 536 774",
];

/**
 * Curved route between two points.
 *
 * The control point is offset perpendicular to the straight line, which gives
 * every journey a gentle arc (like a drawn travel route) and, importantly,
 * gives the bus a continuously changing tangent to rotate along.
 */
export function buildRoutePath(
  from: { x: number; y: number },
  to: { x: number; y: number },
  curvature = 0.18,
): string {
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2;
  const dx = to.x - from.x;
  const dy = to.y - from.y;

  // Perpendicular offset, scaled by distance so short hops curve less.
  const controlX = midX - dy * curvature;
  const controlY = midY + dx * curvature;

  return `M ${from.x} ${from.y} Q ${controlX} ${controlY} ${to.x} ${to.y}`;
}

/** Where the bus is parked before any destination is chosen (Maharashtra). */
export const HOME_POINT = { x: 352, y: 636 };
