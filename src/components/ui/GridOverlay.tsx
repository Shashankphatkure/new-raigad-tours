export function GridOverlay() {
  return (
    <div className="grid h-32 grid-cols-12 gap-4 sm:gap-6">
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={i}
          className="flex items-end justify-center rounded-sm bg-forest/10 pb-2 text-xs text-forest"
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
