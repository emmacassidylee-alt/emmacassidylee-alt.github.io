interface CardNextProps {
  headline: string;
  bullets: string[];
  ctaText?: string;
  ctaLink?: string;
}

export function CardNext({ headline, bullets, ctaText, ctaLink }: CardNextProps) {
  return (
    <div className="p-8 border border-[#EDEDED] rounded bg-white">
      <h4 className="mb-6" style={{ fontSize: 'var(--text-headline)', lineHeight: 'var(--line-headline)', fontWeight: 600 }}>
        {headline}
      </h4>
      <ul className="space-y-3 mb-6">
        {bullets.map((bullet, index) => (
          <li
            key={index}
            className="flex gap-3"
            style={{
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--line-body-m)',
            }}
          >
            <span className="opacity-40 mt-1">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
      {ctaText && (
        <a
          href={ctaLink || "#"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded transition-opacity hover:opacity-90"
          style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 600,
          }}
        >
          {ctaText}
        </a>
      )}
    </div>
  );
}
