interface BadgeCollageProps {
  badges: Array<{ src?: string; alt: string }>;
  caption?: string;
}

export function BadgeCollage({ badges, caption }: BadgeCollageProps) {
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] flex items-center justify-center overflow-hidden"
          >
            {badge.src ? (
              <img
                src={badge.src}
                alt={badge.alt}
                className="w-full h-full object-contain p-3"
              />
            ) : (
              <span
                className="opacity-20 text-center px-2"
                style={{
                  fontSize: 'var(--text-caption)',
                }}
              >
                {badge.alt}
              </span>
            )}
          </div>
        ))}
      </div>
      {caption && (
        null
      )}
    </div>
  );
}
