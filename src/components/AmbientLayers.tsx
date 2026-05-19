/**
 * Couches fixes très légères : vignette + grain pour profondeur « atelier / pellicule ».
 * z-[1] — sous le contenu relatif (z-10+) et sous le header (z-100).
 */
export default function AmbientLayers() {
  return (
    <>
      <div
        className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(ellipse_95%_65%_at_50%_-8%,rgba(250,246,239,0.45)_0%,transparent_52%),radial-gradient(ellipse_80%_55%_at_100%_100%,rgba(201,162,39,0.04)_0%,transparent_50%),radial-gradient(ellipse_70%_50%_at_0%_80%,rgba(107,33,168,0.045)_0%,transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04] mix-blend-multiply bg-grain-light"
        aria-hidden
      />
    </>
  );
}
