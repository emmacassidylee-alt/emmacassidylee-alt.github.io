import { MediaFrame } from "../components/media-frame";
import { BadgeCollage } from "../components/badge-collage";
import { Mail, Linkedin, MapPin, ExternalLink } from "lucide-react";
import imgProfilePhoto from "../../assets/emma-profile.png";
import imgBadge1 from "../../assets/cert-badge-1.png";
import imgBadge2 from "../../assets/cert-badge-2.png";
import imgBadge3 from "../../assets/cert-badge-3.png";
import imgBadge4 from "../../assets/cert-badge-4.png";
import imgBadge5 from "../../assets/award-badge-2.png";
import imgBadge6 from "../../assets/award-badge.png";
import imgYogaCert from "../../assets/award-badge.png";

export function About() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 md:px-20 py-16 md:py-24">
      {/* Header */}
      <h2 className="mb-16">About me</h2>

      {/* Elevator Pitch */}
      <div className="mb-24">
        <div className="max-w-[900px]">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-8 md:p-12 bg-[#FAFAFA] border-l-4 border-[#0A0A0A]"
            style={{
              fontSize: "var(--text-body-l)",
              lineHeight: "var(--line-body-l)",
            }}
          >
            <div>
              <p className="mb-4">
                I specialise in creating clear, human-centered content for
                enterprise software in highly technical domains.
              </p>
              <p>
                My approach combines deep technical understanding with a
                commitment to accessibility and user research. I believe the
                best content empowers people to make confident decisions.
              </p>
            </div>
            <div>
              <p className="mb-4">
                I advocate for the critical role that content design plays in
                building great products. I'm especially focused on design
                systems, terminology management, and elevating content as a
                strategic discipline.
              </p>
              <p>
                Beyond software, I'm a certified Iyengar Yoga teacher, bringing
                the same precision and clarity to both practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photo and Bullet Points */}
      <div className="mb-24 grid grid-cols-1 md:grid-cols-[200px_1fr] gap-12 items-center">
        {/* Photo */}
        <div>
          <figure className="w-[200px] h-[200px]">
            <div className="w-[200px] h-[200px] bg-[#EDEDED] rounded-full overflow-hidden border border-[#EDEDED]">
              <img
                src={imgProfilePhoto}
                alt="Emma Cassidy"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </figure>
        </div>

        {/* Bullet Points */}
        <div className="max-w-[509px]">
          <p
            className="italic"
            style={{
              fontSize: "var(--text-body-l)",
              lineHeight: "var(--line-body-l)",
            }}
          >
            Consistent content delivers a clear, unified narrative that
            simplifies complexity and fosters trust and confidence in the user
            experience.
          </p>
        </div>
      </div>

      {/* Community Leadership */}
      <div className="mb-24">
        <h3 className="mb-6">Community leadership</h3>
        <div className="max-w-[700px] mb-6">
          <p
            style={{
              fontSize: "var(--text-body-l)",
              lineHeight: "var(--line-body-l)",
            }}
          >
            During 2025, I organised and facilitated the Content Designers
            Ireland Meetup, creating space for content professionals to share
            knowledge and build community across our field.
          </p>
        </div>
        <a
          href="https://www.meetup.com/content-designers-ireland/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-[#0A0A0A] rounded transition-all hover:bg-[#0A0A0A] hover:text-white"
          style={{
            fontSize: "var(--text-body-m)",
            fontWeight: 600,
          }}
        >
          Content Designers Ireland Meetup
          <ExternalLink size={16} strokeWidth={1.5} />
        </a>
      </div>

      {/* Iyengar Yoga */}
      <div className="mb-24">
        <h3 className="mb-6">Iyengar Yoga</h3>
        <div className="max-w-[700px]">
          <div className="max-w-[700px] mb-6">
            <p
              style={{
                fontSize: "var(--text-body-l)",
                lineHeight: "var(--line-body-l)",
              }}
            >
              I'm a certified Iyengar Yoga teacher. The practice emphasises
              precision, alignment, and progressive learning. These principles
              reflect my approach to content design.
            </p>
          </div>
        </div>
      </div>

      {/* Certifications and Awards */}
      <div className="mb-24">
        <h3 className="mb-8">Professional certifications</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div className="aspect-square rounded border border-[#EDEDED] overflow-hidden p-[5%] flex items-center justify-center">
            <img
              src={imgBadge6}
              alt="Award badge"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] overflow-hidden">
            <img
              src={imgBadge1}
              alt="Certification badge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] overflow-hidden">
            <img
              src={imgBadge2}
              alt="Certification badge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] overflow-hidden">
            <img
              src={imgBadge3}
              alt="Certification badge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] overflow-hidden">
            <img
              src={imgBadge4}
              alt="Certification badge"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-square bg-[#EDEDED] rounded border border-[#EDEDED] overflow-hidden">
            <img
              src={imgBadge5}
              alt="Award badge"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Contact */}
    </div>
  );
}
