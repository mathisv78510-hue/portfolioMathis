import { BlobShape } from "./blob-shape";

export function PageBlobs() {
  return (
    <div className="page-decor" aria-hidden="true">
      <BlobShape
        id="page-blob-a"
        className="blob page-blob-a"
        colors={["#7fe8a6", "#cdeb8a", "#f0ec8a"]}
        strokeWidth={60}
        highlight={{ x: 55, y: 45 }}
        path="M35,55 C75,30 110,55 125,90 C138,118 125,135 110,140"
      />
      <BlobShape
        id="page-blob-b"
        className="blob page-blob-b"
        colors={["#8a94e8", "#c489e0", "#ec8ac0"]}
        strokeWidth={70}
        highlight={{ x: 85, y: 55 }}
        path="M40,70 C75,35 130,35 160,65 C178,85 170,115 140,130"
      />
    </div>
  );
}
