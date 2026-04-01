type TagChipVariant = "default" | "success" | "informational";

interface TagChipProps {
  label: string;
  variant?: TagChipVariant;
}

export function TagChip({ label, variant = "default" }: TagChipProps) {
  const variantStyles = {
    default: "bg-[#EDEDED] text-[#0A0A0A]",
    success: "bg-[#E8F5E9] text-[#2E7D32]",
    informational: "bg-[#E3F2FD] text-[#1565C0]",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded ${variantStyles[variant]}`}
      style={{
        fontSize: 'var(--text-caption)',
        lineHeight: 'var(--line-caption)',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </span>
  );
}
