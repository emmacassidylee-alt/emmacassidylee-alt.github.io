interface CardProcessStepProps {
  stepNumber: number;
  stepName: string;
  takeaways: string[];
}

export function CardProcessStep({ stepNumber, stepName, takeaways }: CardProcessStepProps) {
  return (
    <div className="p-6 border border-[#EDEDED] rounded bg-white">
      <div className="flex items-baseline gap-4 mb-4">
        <span
          className="opacity-40"
          style={{
            fontSize: 'var(--text-caption)',
            lineHeight: 'var(--line-caption)',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          {stepNumber.toString().padStart(2, '0')}
        </span>
        <h4
          style={{
            fontSize: 'var(--text-body-l)',
            lineHeight: 'var(--line-body-l)',
            fontWeight: 600,
          }}
        >
          {stepName}
        </h4>
      </div>
      <ul className="space-y-2 ml-12">
        {takeaways.map((takeaway, index) => (
          <li
            key={index}
            className="flex gap-3"
            style={{
              fontSize: 'var(--text-body-m)',
              lineHeight: 'var(--line-body-m)',
            }}
          >
            <span className="opacity-40 mt-1">•</span>
            <span>{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
