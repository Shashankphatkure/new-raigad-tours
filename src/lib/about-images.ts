/**
 * Imagery for the About page.
 *
 * `hero` reuses the real Raigad Fort photograph already sourced for the
 * Tours destination page — the fort the company is named after. `story`
 * is still a placeholder pending a real Raigad Tours group/team photo.
 */

const img = (base: string) => `${base}?w=1600&q=75&auto=format&fit=crop`;

export const ABOUT_IMAGES: Record<string, { src: string; alt: string }> = {
  hero: {
    src: "/images/maharashtra/raigad-fort.png",
    alt: "The fortified stone stairway and ramparts of Raigad Fort along a Sahyadri ridge",
  },
  story: {
    src: img("https://images.unsplash.com/photo-1692269725836-fbd72e98883f"),
    alt: "Young children in school uniforms seated together in an Indian classroom",
  },
};
