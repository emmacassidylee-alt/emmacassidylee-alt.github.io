import clsx from "clsx";
import svgPaths from "./svg-gnetv8lvzc";
import imgContainer from "../assets/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgImageEmmaCassidy from "../assets/998d50269078f69f1594e073affa6d6c689bae8d.png";
import imgImageAwardBadge from "../assets/4ce694221383f39f50708366cae88d9a7f32ec86.png";
import imgImageCertificationBadge from "../assets/c19abefaa7e1fc9a06c59c14166d1559bc1ed3b9.png";
import imgImageCertificationBadge1 from "../assets/51196ddf7e28cb5d78bc978a039715703d9a542f.png";
import imgImageCertificationBadge2 from "../assets/edb2df30d124519f247187908eada784774471d6.png";
import imgImageCertificationBadge3 from "../assets/9cc05140c649269cd5e0d4788c7b5fa9fc14c07c.png";
import imgImageAwardBadge1 from "../assets/3d0b0190d1baa5fefd14e641fb9c45df06b475a4.png";
type LinkProps = {
  additionalClassNames?: string;
};

function Link({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<LinkProps>) {
  return (
    <div className={clsx("h-[30px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-center relative size-full">
        {children}
      </div>
    </div>
  );
}
type ContainerProps = {
  additionalClassNames?: string;
};

function Container({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<ContainerProps>) {
  return (
    <div
      className={clsx(
        "absolute bg-[#ededed] rounded-[4px] top-0",
        additionalClassNames,
      )}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.909px] relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[36.001px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
type Wrapper2Props = {
  additionalClassNames?: string;
};

function Wrapper2({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper2Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper1({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper1Props>) {
  return (
    <Wrapper2
      additionalClassNames={clsx("relative shrink-0", additionalClassNames)}
    >
      {children}
    </Wrapper2>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("size-[15.994px]", additionalClassNames)}>
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.9943 15.9943"
      >
        {children}
      </svg>
    </div>
  );
}

function Icon1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}
type LinkTextProps = {
  text: string;
  additionalClassNames?: string;
};

function LinkText({ text, additionalClassNames = "" }: LinkTextProps) {
  return (
    <div className={clsx("absolute h-[23.999px] top-0", additionalClassNames)}>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.73px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

function Icon() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="Icon" opacity="0.5">
        <path
          d={svgPaths.pfc3aa00}
          id="Vector"
          stroke="var(--stroke-0, #0A0A0A)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999645"
        />
        <path
          d={svgPaths.p1c7aaa00}
          id="Vector_2"
          stroke="var(--stroke-0, #0A0A0A)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999645"
        />
        <path
          d={svgPaths.p357bf100}
          id="Vector_3"
          stroke="var(--stroke-0, #0A0A0A)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.999645"
        />
      </g>
    </Wrapper>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <Wrapper2
      additionalClassNames={clsx(
        "h-[30px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {text}
      </p>
    </Wrapper2>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="absolute h-[36.001px] left-0 top-0 w-[1001.818px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return <Wrapper3>{text}</Wrapper3>;
}

export default function PortfolioWebsiteDesign() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Portfolio website design"
    >
      <div
        className="absolute bg-white content-stretch flex flex-col gap-[128.906px] h-[841.818px] items-start left-0 pt-[80.909px] top-0 w-[1161.818px]"
        data-name="Root"
      >
        <Wrapper1 additionalClassNames="h-[2003.409px] w-[1161.818px]">
          <div
            className="absolute h-[52.003px] left-[80px] top-[95.99px] w-[1001.818px]"
            data-name="Heading 2"
          >
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[52px] left-0 not-italic text-[#0a0a0a] text-[44px] top-[0.09px] tracking-[-0.44px] whitespace-nowrap">
              About me
            </p>
          </div>
          <div
            className="absolute bg-[#fafafa] border-[#0a0a0a] border-l-[3.636px] border-solid h-[320px] left-[80px] top-[212px] w-[900px]"
            data-name="Container"
          >
            <div
              className="absolute content-stretch flex flex-col gap-[15.994px] h-[224.006px] items-start left-[48px] top-[48px] w-[384.183px]"
              data-name="Container"
            >
              <div
                className="h-[78.004px] relative shrink-0 w-full"
                data-name="Paragraph"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[376px]">
                  I specialise in creating clear, human-centered content for
                  enterprise software in highly technical domains.
                </p>
              </div>
              <div
                className="h-[104.006px] relative shrink-0 w-full"
                data-name="Paragraph"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[375px]">
                  My approach combines deep technical understanding with a
                  commitment to accessibility and user research. I believe the
                  best content empowers people to make confident decisions.
                </p>
              </div>
            </div>
            <div
              className="absolute content-stretch flex flex-col gap-[15.994px] h-[224.006px] items-start left-[464.18px] top-[48px] w-[384.19px]"
              data-name="Container"
            >
              <div
                className="h-[130.007px] relative shrink-0 w-full"
                data-name="Paragraph"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[377px]">{`I advocate for the critical role that content design plays in building great products. I'm especially focused on design systems, terminology management, and elevating content as a strategic discipline.`}</p>
              </div>
              <div
                className="h-[78.004px] relative shrink-0 w-full"
                data-name="Paragraph"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[379px]">{`Beyond software, I'm a certified Iyengar Yoga teacher, bringing the same precision and clarity to both practices.`}</p>
              </div>
            </div>
          </div>
          <div
            className="absolute h-[300px] left-[80px] top-[627.99px] w-[1001.818px]"
            data-name="Container"
          >
            <div
              className="absolute content-stretch flex flex-col items-start left-[23px] size-[207px] top-[54.1px]"
              data-name="Figure"
            >
              <div
                className="relative rounded-[15252000px] shrink-0 size-[200px]"
                data-name="Container"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[15252000px]"
                >
                  <div className="absolute bg-[#ededed] inset-0 rounded-[15252000px]" />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover opacity-20 rounded-[15252000px] size-full"
                    src={imgContainer}
                  />
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip p-[0.909px] relative rounded-[inherit] size-full">
                  <div
                    className="h-[272px] relative rounded-[15252000px] shrink-0 w-full"
                    data-name="Image (Emma Cassidy)"
                  >
                    <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[15252000px]">
                      <img
                        alt=""
                        className="absolute h-full left-[-14.72%] max-w-none top-[-21.44%] w-[120.49%]"
                        src={imgImageEmmaCassidy}
                      />
                    </div>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[15252000px]"
                />
              </div>
            </div>
            <div
              className="absolute h-[90px] left-[348px] top-[105px] w-[508.999px]"
              data-name="Paragraph"
            >
              <p className="absolute font-['Inter:Italic',sans-serif] font-normal italic leading-[30px] left-0 text-[#0a0a0a] text-[20px] top-[-0.27px] w-[492px]">
                Consistent content delivers a clear, unified narrative that
                simplifies complexity and fosters trust and confidence in the
                user experience.
              </p>
            </div>
          </div>
          <div
            className="absolute h-[223.807px] left-[80px] top-[1023.98px] w-[1001.818px]"
            data-name="Container"
          >
            <Text text="Community leadership" />
            <div
              className="absolute h-[90px] left-0 top-[60px] w-[700px]"
              data-name="Paragraph"
            >
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[697px]">
                During 2025, I organised and facilitated the Content Designers
                Ireland Meetup, creating space for content professionals to
                share knowledge and build community across our field.
              </p>
            </div>
            <div
              className="absolute border-[#0a0a0a] border-[0.909px] border-solid h-[49.808px] left-0 rounded-[4px] top-[174px] w-[338.168px]"
              data-name="Link"
            >
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[24px] not-italic text-[#0a0a0a] text-[16px] top-[11.27px] whitespace-nowrap">
                Content Designers Ireland Meetup
              </p>
              <Wrapper additionalClassNames="absolute left-[296.36px] top-[15.99px]">
                <g id="Icon">
                  <path
                    d={svgPaths.pfc3aa00}
                    id="Vector"
                    stroke="var(--stroke-0, #0A0A0A)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.999645"
                  />
                  <path
                    d={svgPaths.p1c7aaa00}
                    id="Vector_2"
                    stroke="var(--stroke-0, #0A0A0A)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.999645"
                  />
                  <path
                    d={svgPaths.p357bf100}
                    id="Vector_3"
                    stroke="var(--stroke-0, #0A0A0A)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0.999645"
                  />
                </g>
              </Wrapper>
            </div>
          </div>
          <div
            className="absolute h-[150px] left-[80px] top-[1343.79px] w-[1001.818px]"
            data-name="Container"
          >
            <Text text="Iyengar Yoga" />
            <div
              className="absolute h-[90px] left-0 top-[60px] w-[700px]"
              data-name="Paragraph"
            >
              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[683px]">{`I'm a certified Iyengar Yoga teacher. The practice emphasises precision, alignment, and progressive learning. These principles reflect my approach to content design.`}</p>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[31.996px] h-[221.641px] items-start left-[80px] top-[1589.78px] w-[1001.818px]"
            data-name="Container"
          >
            <HeadingText text="Professional certifications" />
            <div
              className="h-[153.643px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="absolute left-0 rounded-[4px] size-[153.636px] top-0"
                data-name="Container"
              >
                <div className="content-stretch flex items-center justify-center overflow-clip px-[8.587px] py-[0.909px] relative rounded-[inherit] size-full">
                  <div
                    className="relative shrink-0 size-[136.463px]"
                    data-name="Image (Award badge)"
                  >
                    <img
                      alt=""
                      className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-contain pointer-events-none size-full"
                      src={imgImageAwardBadge}
                    />
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                />
              </div>
              <Container additionalClassNames="left-[169.63px] size-[153.643px]">
                <div
                  className="h-[151.825px] relative shrink-0 w-full"
                  data-name="Image (Certification badge)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageCertificationBadge}
                  />
                </div>
              </Container>
              <Container additionalClassNames="left-[339.27px] size-[153.636px]">
                <div
                  className="h-[151.818px] relative shrink-0 w-full"
                  data-name="Image (Certification badge)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageCertificationBadge1}
                  />
                </div>
              </Container>
              <Container additionalClassNames="left-[508.9px] size-[153.643px]">
                <div
                  className="h-[151.825px] relative shrink-0 w-full"
                  data-name="Image (Certification badge)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageCertificationBadge2}
                  />
                </div>
              </Container>
              <Container additionalClassNames="left-[678.54px] size-[153.643px]">
                <div
                  className="h-[151.825px] relative shrink-0 w-full"
                  data-name="Image (Certification badge)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageCertificationBadge3}
                  />
                </div>
              </Container>
              <Container additionalClassNames="left-[848.17px] size-[153.636px]">
                <div
                  className="h-[151.818px] relative shrink-0 w-full"
                  data-name="Image (Award badge)"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    src={imgImageAwardBadge1}
                  />
                </div>
              </Container>
            </div>
          </div>
        </Wrapper1>
        <div
          className="bg-[#fafafa] h-[450.888px] relative shrink-0 w-[1161.818px]"
          data-name="Footer"
        >
          <div
            aria-hidden="true"
            className="absolute border-black border-solid border-t-[0.909px] inset-0 pointer-events-none"
          />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[63.999px] items-start pt-[95.994px] px-[80px] relative size-full">
            <div
              className="h-[135.994px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-0 top-0 w-[468.906px]"
                data-name="Container"
              >
                <Wrapper3>{`Let's connect`}</Wrapper3>
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <Link additionalClassNames="w-[468.906px]">
                    <Icon1>
                      <path
                        d={svgPaths.pd919a80}
                        id="Vector"
                        stroke="var(--stroke-0, #0A0A0A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                      <path
                        d={svgPaths.p189c1170}
                        id="Vector_2"
                        stroke="var(--stroke-0, #0A0A0A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </Icon1>
                    <TextText
                      text="emmacassidylee@gmail.com"
                      additionalClassNames="w-[275.305px]"
                    />
                  </Link>
                  <Link additionalClassNames="w-[468.906px]">
                    <Icon1>
                      <path
                        d={svgPaths.peba4c00}
                        id="Vector"
                        stroke="var(--stroke-0, #0A0A0A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                      <path
                        d="M5 7.5H1.66667V17.5H5V7.5Z"
                        id="Vector_2"
                        stroke="var(--stroke-0, #0A0A0A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                      <path
                        d={svgPaths.p25677470}
                        id="Vector_3"
                        stroke="var(--stroke-0, #0A0A0A)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.25"
                      />
                    </Icon1>
                    <TextText
                      text="LinkedIn profile"
                      additionalClassNames="w-[145.405px]"
                    />
                    <Icon />
                  </Link>
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-[532.9px] top-0 w-[468.913px]"
                data-name="Container"
              >
                <HeadingText text="Links" />
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <Link additionalClassNames="w-[468.913px]">
                    <TextText
                      text="Content Designers Ireland Meetup"
                      additionalClassNames="w-[323.352px]"
                    />
                    <Icon />
                  </Link>
                  <Link additionalClassNames="w-[468.913px]">
                    <TextText
                      text="Medium posts"
                      additionalClassNames="w-[133.487px]"
                    />
                    <Icon />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="content-stretch flex flex-col h-[58.906px] items-start opacity-60 pt-[32.905px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                aria-hidden="true"
                className="absolute border-[#ededed] border-solid border-t-[0.909px] inset-0 pointer-events-none"
              />
              <div
                className="h-[26.001px] relative shrink-0 w-full"
                data-name="Paragraph"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] whitespace-nowrap">
                  © 2026 Emma Cassidy. All case studies and work samples are
                  used with permission and respect institutional guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bg-white content-stretch flex flex-col h-[80.909px] items-start left-0 pb-[0.909px] px-[80px] top-0 w-[1161.818px]"
        data-name="Header"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#ededed] border-b-[0.909px] border-solid inset-0 pointer-events-none"
        />
        <div
          className="h-[80px] relative shrink-0 w-full"
          data-name="Container"
        >
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between relative size-full">
              <Wrapper1 additionalClassNames="h-[26.996px] w-[146.499px]">
                <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.27px] tracking-[0.36px] whitespace-nowrap">
                  EMMA CASSIDY
                </p>
              </Wrapper1>
              <Wrapper1 additionalClassNames="h-[23.999px] w-[375.064px]">
                <div
                  className="absolute h-[23.999px] left-[315.65px] top-0 w-[59.411px]"
                  data-name="Button"
                >
                  <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] not-italic text-[#0a0a0a] text-[16px] text-center top-[-0.73px] whitespace-nowrap">
                    Contact
                  </p>
                </div>
                <div
                  className="absolute h-[23.999px] left-0 top-0 w-[46.818px]"
                  data-name="Link"
                >
                  <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.73px] whitespace-nowrap">
                    About
                  </p>
                  <div
                    className="absolute bg-[#0a0a0a] h-[1.996px] left-0 top-[26px] w-[46.818px]"
                    data-name="Header"
                  />
                </div>
                <LinkText
                  text="Case studies"
                  additionalClassNames="left-[78.81px] w-[97.536px]"
                />
                <LinkText
                  text="Education"
                  additionalClassNames="left-[208.35px] w-[75.313px]"
                />
              </Wrapper1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
