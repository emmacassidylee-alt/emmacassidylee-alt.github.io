import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Case studies", path: "/case-studies" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const footer = document.getElementById("contact");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#EDEDED]">
      <div className="max-w-[1200px] mx-auto px-8 md:px-20">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark */}
          <Link 
            to="/" 
            className="tracking-tight transition-opacity hover:opacity-70"
            style={{ 
              fontFamily: 'var(--font-display)',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '0.02em'
            }}
          >
            EMMA CASSIDY
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-m)',
                  fontWeight: location.pathname === link.path ? 600 : 400,
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#0A0A0A]" />
                )}
              </Link>
            ))}
            <button
              onClick={handleContactClick}
              className="transition-opacity hover:opacity-70"
              style={{
                fontSize: 'var(--text-body-m)',
                fontWeight: 400,
              }}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} strokeWidth={1.5} />
            ) : (
              <Menu size={24} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#EDEDED]">
          <nav className="flex flex-col px-8 py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-l)',
                  fontWeight: location.pathname === link.path ? 600 : 400,
                }}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={(e) => {
                handleContactClick(e);
                setMobileMenuOpen(false);
              }}
              className="text-left transition-opacity hover:opacity-70"
              style={{
                fontSize: 'var(--text-body-l)',
                fontWeight: 400,
              }}
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}