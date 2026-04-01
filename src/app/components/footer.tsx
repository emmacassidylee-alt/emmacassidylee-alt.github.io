import { Mail, Linkedin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#FAFAFA] border-t border-[#EDEDED] mt-32">
      <div className="max-w-[1200px] mx-auto px-8 md:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Column A: Contact */}
          <div>
            <h3 className="mb-6">Let's connect</h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:emmacassidylee@gmail.com"
                className="flex items-center gap-3 group transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--line-body-l)',
                }}
              >
                <Mail size={20} strokeWidth={1.5} />
                <span>emmacassidylee@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/emma-cassidy-3a96b46"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--line-body-l)',
                }}
              >
                <Linkedin size={20} strokeWidth={1.5} />
                <span>LinkedIn profile</span>
                <ExternalLink size={16} strokeWidth={1.5} className="opacity-50" />
              </a>
            </div>
          </div>

          {/* Column B: Links */}
          <div>
            <h3 className="mb-6">Links</h3>
            <div className="flex flex-col gap-4">
              <a
                href="https://www.meetup.com/content-designers-ireland/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--line-body-l)',
                }}
              >
                <span>Content Designers Ireland Meetup</span>
                <ExternalLink size={16} strokeWidth={1.5} className="opacity-50" />
              </a>
              <a
                href="https://medium.com/sage-design/we-baked-content-into-the-design-system-and-it-is-marvellous-a10577e38fbf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group transition-opacity hover:opacity-70"
                style={{
                  fontSize: 'var(--text-body-l)',
                  lineHeight: 'var(--line-body-l)',
                }}
              >
                <span>Medium posts</span>
                <ExternalLink size={16} strokeWidth={1.5} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal note */}
        <div 
          className="mt-16 pt-8 border-t border-[#EDEDED] opacity-60"
          style={{
            fontSize: 'var(--text-caption)',
            lineHeight: 'var(--line-caption)',
          }}
        >
          <p>© {new Date().getFullYear()} Emma Cassidy. All case studies and work samples are used with permission and respect institutional guidelines.</p>
        </div>
      </div>
    </footer>
  );
}