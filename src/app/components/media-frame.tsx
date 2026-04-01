import image_998d50269078f69f1594e073affa6d6c689bae8d from "../../assets/998d50269078f69f1594e073affa6d6c689bae8d.png";
import yogaCert from "../../assets/4ce694221383f39f50708366cae88d9a7f32ec86.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type AspectRatio = "16:9" | "4:3" | "1:1" | "4:5";

interface MediaFrameProps {
  src?: string;
  alt?: string;
  caption?: string;
  aspect?: AspectRatio;
}

export function MediaFrame({
  src,
  alt = "Media placeholder",
  caption,
  aspect = "16:9",
}: MediaFrameProps) {
  const aspectClasses = {
    "16:9": "aspect-video",
    "4:3": "aspect-[4/3]",
    "1:1": "aspect-square",
    "4:5": "aspect-[4/5]",
  };

  return (
    <figure className="w-3/4 mx-auto">
      <div
        className={`w-full ${aspectClasses[aspect]} bg-[#EDEDED] rounded-full overflow-hidden border border-[#EDEDED]`}
      >
        {src ? (
          <ImageWithFallback
            src={image_998d50269078f69f1594e073affa6d6c689bae8d}
            alt={alt}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center scale-[0.25]">
            <img
              src={yogaCert}
              alt="Iyengar Yoga Teacher Certification"
              className="max-h-full max-w-full object-contain p-4"
            />
          </div>
        )}
      </div>
      {caption && null}
    </figure>
  );
}
