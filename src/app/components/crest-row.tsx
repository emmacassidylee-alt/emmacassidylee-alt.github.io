import dcuCrest from "../../assets/dcu-crest.png";
import griffithCrest from "../../assets/griffith-crest.png";

interface CrestRowProps {
  crests: Array<{ src?: string; alt: string; width?: number }>;
}

export function CrestRow({ crests }: CrestRowProps) {
  return (
    <div className="flex flex-wrap items-center gap-8">
      {crests.map((crest, index) => (
        <div
          key={index}
          className="h-20 flex items-center justify-center"
          style={{ width: crest.width || 100 }}
        >
          {crest.src ? (
            <img
              src={crest.src}
              alt={crest.alt}
              className="max-h-full max-w-full object-contain opacity-70"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={griffithCrest}
                alt={crest.alt}
                className="max-h-full max-w-full object-contain opacity-70"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
