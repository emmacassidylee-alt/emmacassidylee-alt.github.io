interface CardFailureProps {
  whatFailed: string;
  why: string;
  whatLearned: string;
}

export function CardFailure({ whatFailed, why, whatLearned }: CardFailureProps) {
  return (
    <div className="p-8 border border-[#EDEDED] rounded bg-[#FAFAFA]">
      <h4 className="mb-6 opacity-60" style={{ fontSize: 'var(--text-caption)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
        Why it failed
      </h4>
      <div className="space-y-4">
        <div>
          <div className="mb-1 opacity-60" style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>
            What failed
          </div>
          <p style={{ fontSize: 'var(--text-body-m)', lineHeight: 'var(--line-body-m)' }}>
            {whatFailed}
          </p>
        </div>
        <div>
          <div className="mb-1 opacity-60" style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>
            Why
          </div>
          <p style={{ fontSize: 'var(--text-body-m)', lineHeight: 'var(--line-body-m)' }}>
            {why}
          </p>
        </div>
        <div>
          <div className="mb-1 opacity-60" style={{ fontSize: 'var(--text-caption)', fontWeight: 600 }}>
            What I learned
          </div>
          <p style={{ fontSize: 'var(--text-body-m)', lineHeight: 'var(--line-body-m)' }}>
            {whatLearned}
          </p>
        </div>
      </div>
    </div>
  );
}
