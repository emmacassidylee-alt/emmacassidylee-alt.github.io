import imgMediaFrame from "../../assets/gcm-sample-1.png";
import imgMediaFrame1 from "../../assets/gcm-sample-2.png";
import imgMediaFrame2 from "../../assets/gcm-sample-3.png";
import imgMediaFrame3 from "../../assets/gdsc-sample-1.png";
import imgMediaFrame4 from "../../assets/gdsc-sample-2.png";
import imgMediaFrame5 from "../../assets/gdsc-sample-3.png";
import imgMediaFrame6 from "../../assets/design-system-1.png";
import imgMediaFrame7 from "../../assets/design-system-2.png";
import imgMediaFrame8 from "../../assets/crm-help-1.png";
import imgMediaFrame9 from "../../assets/crm-help-2.png";
import ibmLogo from "../../assets/ibm-logo.png";
import sageLogo from "../../assets/sage-logo.png";
import { ArrowUp } from "lucide-react";

export function CaseStudies() {
  return (
    <div className="bg-white">
      <div className="max-w-[1162px] mx-auto px-20 pt-20 pb-32">
        {/* Page Header */}
        <div className="mb-12">
          <h1
            className="mb-8"
            style={{
              fontSize: "44px",
              fontWeight: 700,
              lineHeight: "52px",
              letterSpacing: "-0.44px",
            }}
          >
            Case studies
          </h1>
        </div>

        {/* Case Study Navigation Tiles */}
        <div
          id="case-study-navigation"
          className="grid grid-cols-4 gap-6 mb-24"
        >
          <a
            href="#guardium-cryptography-manager"
            className="bg-white border border-[#ededed] rounded p-6 flex flex-col items-start hover:border-black transition-colors"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-start mb-4">
              <img
                src={ibmLogo}
                alt="IBM"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Guardium Cryptography Manager
            </div>
          </a>

          <a
            href="#guardium-data-security-center"
            className="bg-white border border-[#ededed] rounded p-6 flex flex-col items-start hover:border-black transition-colors"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-start mb-4">
              <img
                src={ibmLogo}
                alt="IBM"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Guardium Data Security Center
            </div>
          </a>

          <a
            href="#design-system"
            className="bg-white border border-[#ededed] rounded p-6 flex flex-col items-start hover:border-black transition-colors"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-start mb-4">
              <img
                src={sageLogo}
                alt="Sage"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              Design System
            </div>
          </a>

          <a
            href="#crm-help"
            className="bg-white border border-[#ededed] rounded p-6 flex flex-col items-start hover:border-black transition-colors"
          >
            <div className="w-[60px] h-[60px] flex items-center justify-start mb-4">
              <img
                src={sageLogo}
                alt="Sage"
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "26px",
              }}
            >
              CRM Help
            </div>
          </a>
        </div>

        {/* Guardium Cryptography Manager */}
        <article className="mb-32" id="guardium-cryptography-manager">
          {/* IBM Logo */}
          <div className="mb-8 w-[120px] h-[120px] flex items-center justify-start">
            <img
              src={ibmLogo}
              alt="IBM"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Guardium Cryptography Manager
            </h2>
            <a
              href="#case-study-navigation"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} strokeWidth={2} />
            </a>
          </div>

          {/* Outcome */}
          <div className="mb-12 max-w-[800px]">
            <h3
              className="mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Outcome
            </h3>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Transformed a complex cryptography management product with
              inconsistent terminology and UI content into a clear, cohesive
              user experience for security administrators, contributing to
              customer trust and adoption in regulated sectors. Cryptography
              management combined with certificate lifecycle management is a
              strategic differentiator for IBM Security, with GCM serving as its
              flagship offering.
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Metrics
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  100%
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Terminology alignment
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Eliminated variants across UI
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  16+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  product features
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Improved UI content
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  30+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  approved terms
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Included in glossary
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Process
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    01
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Researched terminology
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Audited existing terminology used in GCM and identified
                    inconsistencies.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Researched industry standards and conducted unmoderated user
                    testing.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    02
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Compiled glossary
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Standardised terminology across UI for unified experience
                    and reduced cognative load.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Compiled comprehensive product glossary for internal and
                    external users.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    03
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Leveraged Jobs-to-Be-Done framework
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Worked with UXR to define JTBD statements and outcome
                    mappings for GCM flows.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Based UI content on JTBD statements to ground it in real
                    user needs.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    04
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Built repeatable content patterns
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Built product-specific library of content patterns for
                    consistency and efficiency.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created content guidelines for designers and developers to
                    reduce content rework.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Samples */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Samples
            </h3>
            <div className="space-y-8">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame}
                  alt="GCM sample 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame1}
                  alt="GCM sample 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame2}
                  alt="GCM sample 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Guardium Data Security Center */}
        <article className="mb-32" id="guardium-data-security-center">
          {/* IBM Logo */}
          <div className="mb-8 w-[120px] h-[120px] flex items-center justify-start">
            <img
              src={ibmLogo}
              alt="IBM"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Guardium Data Security Center
            </h2>
            <a
              href="#case-study-navigation"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} strokeWidth={2} />
            </a>
          </div>

          {/* Outcome */}
          <div className="mb-12 max-w-[800px]">
            <h3
              className="mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Outcome
            </h3>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Simplified complex mapping flows and introduced clear content
              patterns to minimise user friction when configuring inbound and
              outbound API integrations. This feature work significantly reduced
              onboarding time for advanced Guardium SaaS users in internal
              usability reviews.
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Metrics
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  25%
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  reduction in onboarding time
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Intuitive flows and clear guidance
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  100%
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  error coverage
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  UI error message for every error state
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  8
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  interviews
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Technical sellers to understand user expectations
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Process
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    01
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Planned strategically
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created <em>content journey maps</em> to identify where
                    content would have greatest impact.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Built <em>content models</em> to align terminology and
                    metrics across integrations.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    02
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Participated in user research
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Conducted interviews to identify industry terminology and
                    existing knowledge.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Synthesised usability testing results to validate early
                    designs.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    03
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Delivered error guidance
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Worked with developers to minimise opportunities for users
                    to hit error states.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created error messages with next steps to reduce frustration
                    and increase task completion.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    04
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Collaborated with content developers
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Documented design phase insights to minimise rework.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Streamlined content creation and improved the relevance of
                    UI content and documentation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Samples */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Samples
            </h3>
            <div className="space-y-8">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame3}
                  alt="GDSC sample 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame4}
                  alt="GDSC sample 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame5}
                  alt="GDSC sample 3"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Design System */}
        <article className="mb-32" id="design-system">
          {/* Sage Logo */}
          <div className="mb-8 w-[120px] h-[120px] flex items-center justify-start">
            <img
              src={sageLogo}
              alt="Sage"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              Design System
            </h2>
            <a
              href="#case-study-navigation"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} strokeWidth={2} />
            </a>
          </div>

          {/* Outcome */}
          <div className="mb-12 max-w-[800px]">
            <h3
              className="mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Outcome
            </h3>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Transformed Sage's Design System from a component‑only resource
              into a content‑powered ecosystem, unifying writing standards,
              terminology and guidance across the company. What began as
              individual content designers embedded in different products became
              a cross‑organisational content movement with active communities,
              clinics and scalable governance.
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Metrics
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  60+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Components
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Content guidance and examples
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  40+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Content designers
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Community of practice with alignment across products
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  8+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Products
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Multilingual terminology in glossary
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Process
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    01
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Identified gaps
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created content guidelines and examples for design system
                    components and patterns.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Worked with product teams to evaluate existing components
                    and patterns.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    02
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Strengthened terminology consistency
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Took ownership of the company glossary, shaping it into a
                    trusted source for internal and customer‑facing terminology.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    03
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Centralised content foundations
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Grew style guide committee into a cross‑department group.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Added writing basics, inclusive wording, and accessibility
                    guidance to style guide.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    04
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Operationalised adoption
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Set up weekly clinics and monthly sharing sessions to
                    showcase best practices, making the style guide accessible
                    to everyone, not just content professionals.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Samples */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Samples
            </h3>
            <div className="space-y-8">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame6}
                  alt="Design System sample 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame7}
                  alt="Design System sample 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </article>

        {/* CRM Help */}
        <article className="mb-32" id="crm-help">
          {/* Sage Logo */}
          <div className="mb-8 w-[120px] h-[120px] flex items-center justify-start">
            <img
              src={sageLogo}
              alt="Sage"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "36px",
              }}
            >
              CRM Help
            </h2>
            <a
              href="#case-study-navigation"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-black hover:bg-black hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={16} strokeWidth={2} />
            </a>
          </div>

          {/* Outcome */}
          <div className="mb-12 max-w-[800px]">
            <h3
              className="mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Outcome
            </h3>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "30px",
              }}
            >
              Redesigned Sage CRM product documentation and videos to improve
              user success, reduce support tickets and enhance user confidence.
              Created topic-based documentation with clear visuals and
              progressive disclosure, directly contributing to measurable
              business value.
            </p>
          </div>

          {/* Metrics */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Metrics
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  15+
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Product videos
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Instructional tutorials for CRM
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  25%
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  Reduction in support tickets
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Related to documented tasks
                </p>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-8">
                <div
                  className="mb-2"
                  style={{
                    fontSize: "44px",
                    fontWeight: 700,
                    lineHeight: "52px",
                    letterSpacing: "-0.44px",
                  }}
                >
                  7
                </div>
                <div
                  className="mb-2 opacity-60"
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "18px",
                    letterSpacing: "0.65px",
                    textTransform: "uppercase",
                  }}
                >
                  languages supported
                </div>
                <p
                  className="opacity-70"
                  style={{
                    fontSize: "16px",
                    lineHeight: "26px",
                  }}
                >
                  Localised documentation and videos
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Process
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    01
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Redesigned product help
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Analysed existing documentation structure and gaps.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created templates for tasks, concepts, and reference topics.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    02
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Delivered complete documentation set
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Created online Developer help, System administrator help and
                    User help, patch release notes, What's New overviews and
                    Implementation workbooks.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    03
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Engaged with CRM Community Hub
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Engaged with partners and users to resolve questions and
                    identify recurring issues.
                  </li>
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Fed insights into documentation, reducing friction and
                    improving user success.
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-[#ededed] rounded p-6">
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="opacity-40"
                    style={{
                      fontSize: "13px",
                      fontWeight: 700,
                      lineHeight: "18px",
                      letterSpacing: "0.65px",
                    }}
                  >
                    04
                  </span>
                  <h4
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "30px",
                    }}
                  >
                    Built product video library
                  </h4>
                </div>
                <ul className="space-y-2 ml-5">
                  <li
                    style={{
                      fontSize: "16px",
                      lineHeight: "26px",
                    }}
                  >
                    Produced end‑to‑end library of product walkthrough and
                    how‑to videos as a fast-track alternative to reading
                    documentation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Samples */}
          <div className="mb-12">
            <h3
              className="mb-6"
              style={{
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
              }}
            >
              Samples
            </h3>
            <div className="space-y-8">
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame8}
                  alt="CRM Help sample 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden">
                <img
                  src={imgMediaFrame9}
                  alt="CRM Help sample 2"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
