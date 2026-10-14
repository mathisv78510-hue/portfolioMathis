"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectGalleryProps = {
  photos: string[];
  title: string;
};

export function ProjectGallery({ photos, title }: ProjectGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const showPrev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [photos.length],
  );
  const showNext = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, showPrev, showNext]);

  return (
    <>
      <div className="project-gallery">
        {photos.map((src, index) => (
          <button
            type="button"
            className="gallery-item"
            key={src}
            onClick={() => setOpenIndex(index)}
            aria-label={`Agrandir l'image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`Capture d'ecran du projet ${title}`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button type="button" className="lightbox-close" onClick={close} aria-label="Fermer">
            ×
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Image precedente"
            >
              ‹
            </button>
          )}

          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}>
            <Image
              src={photos[openIndex]}
              alt={`Capture d'ecran du projet ${title}`}
              fill
              sizes="90vw"
              priority
            />
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Image suivante"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
