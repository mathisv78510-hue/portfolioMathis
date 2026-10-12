import { BlobShape } from "./blob-shape";

export function PageBlobs() {
  return (
    <div className="page-decor" aria-hidden="true">
      <BlobShape
          id="blob-1"
          className="blob blob-1"
          colors={["#696563", "#333230", "#CFCAC2"]}
          strokeWidth={105}
          highlight={{ x: 55, y: 45 }}
          path="M35,55 C75,30 110,55 125,90 C138,118 125,135 110,140"
        />
        <BlobShape
          id="blob-2"
          className="blob blob-2"
          colors={["#696563", "#CFCAC2", "#333230"]}
          strokeWidth={112}
          highlight={{ x: 100, y: 55 }}
          path="M60,35 C115,25 155,50 158,90 C160,118 138,135 115,132"
        />
        <BlobShape
          id="blob-3"
          className="blob blob-3"
          colors={["#333230", "#CFCAC2", "#696563"]}
          strokeWidth={128}
          highlight={{ x: 85, y: 55 }}
          path="M40,70 C75,35 130,35 160,65 C178,85 170,115 140,130"
        />
        <BlobShape
          id="blob-4"
          className="blob blob-4"
          colors={["#333230", "#CFCAC2"]}
          strokeWidth={82}
          highlight={{ x: 35, y: 150 }}
          path="M45,155 C25,120 70,118 92,95 C118,68 78,55 95,25"
        />
        <BlobShape
          id="blob-5"
          className="blob blob-5"
          colors={["#696563", "#CFCAC2"]}
          strokeWidth={77}
          highlight={{ x: 48, y: 90 }}
          path="M40,95 C65,45 135,45 160,85"
        />
    </div>
  );
}
