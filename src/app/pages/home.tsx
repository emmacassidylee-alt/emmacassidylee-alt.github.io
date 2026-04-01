import { Link } from "react-router";
import { TagChip } from "../components/tag-chip";
import { ArrowRight } from "lucide-react";
import sageLogoImg from "../../assets/sage-logo.png";
import geLogoImg from "../../assets/ge-logo.png";
import wurldtechLogoImg from "../../assets/wt-logo.png";
import heroImage from "../../assets/hero.png";

export function Home() {
  const companies = [
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    },
    {
      name: "Sage",
      logo: sageLogoImg,
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    },
    {
      name: "Wurldtech",
      logo: wurldtechLogoImg,
    },
    {
      name: "GE",
      logo: geLogoImg,
    },
  ];

  const caseStudyTeasers = [
    {
      title: "Edge gateway — from start to finish",
      outcome:
        "Shipped complete UI content system and comprehensive documentation from zero to production",
      anchor: "#ibm-edge-gateway",
    },
    {
      title: "Design system content — Carbon at Sage",
      outcome:
        "Embedded content guidance into design system, improving consistency and adoption across products",
      anchor: "#sage-design-system",
    },
    {
      title: "Guardium Cryptography Manager — from chaos to clarity",
      outcome:
        "Transformed complex security terminology into clear, consistent UI patterns that reduced cognitive load",
      anchor: "#ibm-gcm",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="mb-6">Lead Content Designer</h1>
            <p
              className="mb-8 opacity-80"
              style={{
                fontSize: "var(--text-body-l)",
                lineHeight: "var(--line-body-l)",
              }}
            >
              I create clear, human-centered content for enterprise software.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A0A] text-white rounded transition-opacity hover:opacity-90"
                style={{
                  fontSize: "var(--text-body-m)",
                  fontWeight: 600,
                }}
              >
                View case studies
                <ArrowRight size={18} strokeWidth={2} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] rounded transition-all hover:bg-[#0A0A0A] hover:text-white"
                style={{
                  fontSize: "var(--text-body-m)",
                  fontWeight: 600,
                }}
              >
                About me
              </Link>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="order-first lg:order-last">
            <div className="aspect-[4/5] rounded overflow-hidden border border-transparent">
              <img
                src={heroImage}
                alt="Content design in enterprise software"
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="max-w-[1200px] mx-auto px-8 md:px-20 py-8 md:py-6 mb-0">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company) => (
            <div
              key={company.name}
              className="h-20 w-40 flex items-center justify-center border border-transparent p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-full object-contain"
                style={
                  company.name === "IBM"
                    ? { transform: "scale(0.75)" }
                    : undefined
                }
              />
            </div>
          ))}
        </div>
      </section>

      {/* Selected Case Studies Teaser */}
    </div>
  );
}
