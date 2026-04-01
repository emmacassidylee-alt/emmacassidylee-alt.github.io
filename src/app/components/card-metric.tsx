interface CardMetricProps {
  value: string;
  label: string;
  context?: string;
}

export function CardMetric({ value, label, context }: CardMetricProps) {
  return (
    <div className="p-8 border border-[#EDEDED] rounded bg-white">
      <div
        className="mb-2"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-display-l)',
          lineHeight: 'var(--line-display-l)',
          fontWeight: 'var(--weight-display-l)',
          letterSpacing: '-0.01em',
        }}
      >
        {value}
      </div>
      <div
        className="mb-2"
        style={{
          fontSize: 'var(--text-caption)',
          lineHeight: 'var(--line-caption)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          opacity: 0.6,
        }}
      >
        {label}
      </div>
      {context && (
        <div
          className="opacity-70"
          style={{
            fontSize: 'var(--text-body-m)',
            lineHeight: 'var(--line-body-m)',
          }}
        >
          {context}
        </div>
      )}
    </div>
  );
}
