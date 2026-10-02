type BlobShapeProps = {
  id: string;
  path: string;
  strokeWidth: number;
  colors: string[];
  highlight: { x: number; y: number };
  className: string;
};

export function BlobShape({
  id,
  path,
  strokeWidth,
  colors,
  highlight,
  className,
}: BlobShapeProps) {
  return (
    <svg className={className} viewBox="-45 -45 290 290" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          {colors.map((color, index) => (
            <stop
              key={color}
              offset={`${(index / (colors.length - 1)) * 100}%`}
              stopColor={color}
            />
          ))}
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx={highlight.x}
        cy={highlight.y}
        rx={strokeWidth * 0.26}
        ry={strokeWidth * 0.18}
        fill="#ffffff"
        opacity="0.4"
      />
    </svg>
  );
}
