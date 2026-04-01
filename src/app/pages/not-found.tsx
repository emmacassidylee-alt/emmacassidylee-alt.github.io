import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-20 py-16 md:py-24">
      <div className="text-center">
        <h1 className="mb-6">Page Not Found</h1>
        <p
          className="mb-8 opacity-80"
          style={{
            fontSize: 'var(--text-body-l)',
            lineHeight: 'var(--line-body-l)',
          }}
        >
          The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded transition-opacity hover:opacity-90"
          style={{
            fontSize: 'var(--text-body-m)',
            fontWeight: 600,
          }}
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
