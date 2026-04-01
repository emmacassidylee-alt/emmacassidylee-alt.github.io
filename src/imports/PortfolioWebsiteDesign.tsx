import clsx from "clsx";
import svgPaths from "./svg-8eu12b60tc";
import imgImageWithFallback from "998d50269078f69f1594e073affa6d6c689bae8d.png";
import imgContainer from "c19abefaa7e1fc9a06c59c14166d1559bc1ed3b9.png";
import imgContainer1 from "51196ddf7e28cb5d78bc978a039715703d9a542f.png";
import imgContainer2 from "edb2df30d124519f247187908eada784774471d6.png";
import imgContainer3 from "9cc05140c649269cd5e0d4788c7b5fa9fc14c07c.png";
import imgContainer4 from "3d0b0190d1baa5fefd14e641fb9c45df06b475a4.png";
import imgContainer5 from "bbf3d3ef086a94c49dbf6cf8591fe6aeb11e6037.png";
import imgImageWithFallback1 from "4ce694221383f39f50708366cae88d9a7f32ec86.png";
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
        "absolute pointer-events-none rounded-[4px] size-[155.156px] top-0",
        additionalClassNames,
      )}
    >
      <div aria-hidden="true" className="absolute inset-0 rounded-[4px]">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 rounded-[4px]"
      />
    </div>
  );
}
type DivProps = {
  additionalClassNames?: string;
};

function Div({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<DivProps>) {
  return (
    <div
      className={clsx(
        "bg-[#ededed] relative rounded-[15252000px] shrink-0",
        additionalClassNames,
      )}
    >
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.909px] relative rounded-[inherit] size-full">
        {children}
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[15252000px]"
      />
    </div>
  );
}

function Wrapper5({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[36.001px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
type Wrapper4Props = {
  additionalClassNames?: string;
};

function Wrapper4({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper4Props>) {
  return (
    <div className={additionalClassNames}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}
type Wrapper3Props = {
  additionalClassNames?: string;
};

function Wrapper3({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<Wrapper3Props>) {
  return (
    <Wrapper4
      additionalClassNames={clsx("relative shrink-0", additionalClassNames)}
    >
      {children}
    </Wrapper4>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[30px] relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper1({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        {children}
      </svg>
    </div>
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

function ExternalLink() {
  return (
    <Wrapper additionalClassNames="relative shrink-0">
      <g id="ExternalLink" opacity="0.5">
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

function Linkedin() {
  return (
    <Wrapper1>
      <g id="Linkedin">
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
      </g>
    </Wrapper1>
  );
}
type AProps = {
  additionalClassNames?: string;
};

function A({ additionalClassNames = "" }: AProps) {
  return (
    <Wrapper2 additionalClassNames={additionalClassNames}>
      <Wrapper1>
        <g id="Mail">
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
        </g>
      </Wrapper1>
      <SpanText
        text="emmacassidylee@gmail.com"
        additionalClassNames="w-[275.305px]"
      />
    </Wrapper2>
  );
}
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <Wrapper4
      additionalClassNames={clsx(
        "h-[30px] relative shrink-0",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {text}
      </p>
    </Wrapper4>
  );
}
type PTextProps = {
  text: string;
};

function PText({ text }: PTextProps) {
  return (
    <div className="absolute h-[90px] left-0 top-[60px] w-[700px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[697px]">
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
  additionalClassNames?: string;
};

function Text({ text, additionalClassNames = "" }: TextProps) {
  return (
    <div
      className={clsx(
        "absolute h-[36.001px] left-0 w-[1010.909px]",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type HTextProps = {
  text: string;
};

function HText({ text }: HTextProps) {
  return <Wrapper5>{text}</Wrapper5>;
}

export default function PortfolioWebsiteDesign() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Portfolio website design"
    >
      <div
        className="absolute bg-white content-stretch flex flex-col gap-[128.906px] h-[668px] items-start left-0 pt-[80.909px] top-0 w-[1171px]"
        data-name="div"
      >
        <Wrapper3 additionalClassNames="h-[2642px] w-[361px]">
          <div
            className="absolute h-[52.003px] left-[80px] top-[95.99px] w-[1010.909px]"
            data-name="h2"
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
                data-name="p"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[376px]">
                  I specialise in creating clear, human-centered content for
                  enterprise software in highly technical domains.
                </p>
              </div>
              <div
                className="h-[104.006px] relative shrink-0 w-full"
                data-name="p"
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
                data-name="p"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[377px]">
                  I advocate for the critical role that content design plays in
                  building great products. I’m especially focused on design
                  systems, terminology management, and elevating content as a
                  strategic discipline.
                </p>
              </div>
              <div
                className="h-[78.004px] relative shrink-0 w-full"
                data-name="p"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[366px]">{`Beyond software, I'm a certified Iyengar Yoga teacher, bringing the same attention to precision and clarity to both practices.`}</p>
              </div>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col h-[288px] items-start left-[80px] top-[612.09px] w-[283px]"
            data-name="figure"
          >
            <Div additionalClassNames="size-[278px]">
              <div
                className="h-[277px] relative rounded-[15252000px] shrink-0 w-[276px]"
                data-name="ImageWithFallback"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15252000px] size-full"
                  src={imgImageWithFallback}
                />
              </div>
            </Div>
          </div>
          <div
            className="absolute h-[223.807px] left-[80px] top-[980.02px] w-[1010.909px]"
            data-name="Container"
          >
            <Text text="Community leadership" additionalClassNames="top-0" />
            <PText text="During 2025, I organised and facilitated the Content Designers Ireland Meetup, creating space for content professionals to share knowledge and build community across our field." />
            <PText text="During 2025, I organised and facilitated the Content Designers Ireland Meetup, creating space for content professionals to share knowledge and build community across our field." />
            <div
              className="absolute border-[#0a0a0a] border-[0.909px] border-solid h-[49.808px] left-0 rounded-[4px] top-[174px] w-[338.168px]"
              data-name="a"
            >
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-[24px] not-italic text-[#0a0a0a] text-[16px] top-[11.27px] whitespace-nowrap">
                Content Designers Ireland Meetup
              </p>
              <Wrapper additionalClassNames="absolute left-[296.36px] top-[15.99px]">
                <g id="ExternalLink">
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
            className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col gap-[31.996px] h-[223px] items-start left-[80px] top-[1300.09px] w-[1011px]"
            data-name="Container"
          >
            <HText text="Certifications and awards" />
            <div
              className="bg-[rgba(255,255,255,0)] h-[326.307px] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0)] shrink-0 w-full"
              data-name="Container"
            >
              <Container additionalClassNames="left-0">
                <div className="absolute bg-[rgba(237,237,237,0)] inset-0 rounded-[4px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[4px] size-full"
                  src={imgContainer}
                />
              </Container>
              <Container additionalClassNames="left-[171.15px]">
                <div className="absolute bg-[rgba(237,237,237,0)] inset-0 rounded-[4px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[4px] size-full"
                  src={imgContainer1}
                />
              </Container>
              <Container additionalClassNames="left-[342.3px]">
                <div className="absolute bg-[#ededed] inset-0 rounded-[4px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[4px] size-full"
                  src={imgContainer2}
                />
              </Container>
              <Container additionalClassNames="left-[513.45px]">
                <div className="absolute bg-[#ededed] inset-0 rounded-[4px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[4px] size-full"
                  src={imgContainer3}
                />
              </Container>
              <Container additionalClassNames="left-[684.6px]">
                <div className="absolute bg-[#ededed] inset-0 rounded-[4px]" />
                <img
                  alt=""
                  className="absolute max-w-none object-cover rounded-[4px] size-full"
                  src={imgContainer4}
                />
              </Container>
              <div
                className="absolute left-[855.75px] rounded-[4px] size-[155.156px] top-0"
                data-name="Container"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none rounded-[4px]"
                >
                  <div className="absolute bg-[#ededed] inset-0 rounded-[4px]" />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[4px] size-full"
                    src={imgContainer5}
                  />
                </div>
                <div className="content-stretch flex items-center justify-center overflow-clip pl-[0.909px] pr-[0.916px] py-[0.909px] relative rounded-[inherit] size-full">
                  <Wrapper3 additionalClassNames="h-[19.496px] opacity-20 w-[66.243px]">
                    <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[33.5px] not-italic text-[#0a0a0a] text-[13px] text-center top-[0.36px] whitespace-nowrap">
                      Award 2
                    </p>
                  </Wrapper3>
                </div>
                <div
                  aria-hidden="true"
                  className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[31.996px] h-[411px] items-start left-[80px] top-[1604.09px] w-[1011px]"
            data-name="Container"
          >
            <HText text="Iyengar Yoga" />
            <div
              className="h-[361.087px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="absolute h-[120px] left-0 top-0 w-[481.456px]"
                data-name="p"
              >
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[473px]">{`I'm a certified Iyengar Yoga teacher. The practice emphasises precision, alignment, and progressive learning. These principles reflect my approach to content design.`}</p>
              </div>
            </div>
          </div>
          <div
            className="absolute border-[#ededed] border-solid border-t-[0.909px] h-[264px] left-[80px] top-[1862.09px] w-[1011px]"
            data-name="Container"
          >
            <Text text="Get in touch" additionalClassNames="top-[48px]" />
            <div
              className="absolute content-stretch flex flex-col gap-[15.994px] h-[121.989px] items-start left-0 top-[108px] w-[600px]"
              data-name="Container"
            >
              <A additionalClassNames="w-[600px]" />
              <Wrapper2 additionalClassNames="w-[600px]">
                <Linkedin />
                <SpanText
                  text="LinkedIn Profile"
                  additionalClassNames="w-[145.93px]"
                />
                <ExternalLink />
              </Wrapper2>
              <Wrapper2 additionalClassNames="opacity-60 w-[600px]">
                <Wrapper1>
                  <g id="MapPin">
                    <path
                      d={svgPaths.p26ddc800}
                      id="Vector"
                      stroke="var(--stroke-0, #0A0A0A)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    />
                    <path
                      d={svgPaths.p35ba4680}
                      id="Vector_2"
                      stroke="var(--stroke-0, #0A0A0A)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                    />
                  </g>
                </Wrapper1>
                <SpanText
                  text="Dublin, Ireland"
                  additionalClassNames="w-[135.767px]"
                />
              </Wrapper2>
            </div>
          </div>
        </Wrapper3>
        <div
          className="bg-[#fafafa] h-[450.888px] relative shrink-0 w-[1170.909px]"
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
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-0 top-0 w-[473.452px]"
                data-name="Container"
              >
                <Wrapper5>{`Let's connect`}</Wrapper5>
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <A additionalClassNames="w-[473.452px]" />
                  <Wrapper2 additionalClassNames="w-[473.452px]">
                    <Linkedin />
                    <SpanText
                      text="LinkedIn profile"
                      additionalClassNames="w-[145.405px]"
                    />
                    <ExternalLink />
                  </Wrapper2>
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-[537.45px] top-0 w-[473.459px]"
                data-name="Container"
              >
                <HText text="Links" />
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <Wrapper2 additionalClassNames="w-[473.459px]">
                    <SpanText
                      text="Content Designers Ireland Meetup"
                      additionalClassNames="w-[323.352px]"
                    />
                    <ExternalLink />
                  </Wrapper2>
                  <Wrapper2 additionalClassNames="w-[473.459px]">
                    <SpanText
                      text="Medium posts"
                      additionalClassNames="w-[133.487px]"
                    />
                    <ExternalLink />
                  </Wrapper2>
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
                data-name="p"
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
        className="absolute h-[209px] left-[471px] top-[727px] w-[509px]"
        data-name="p"
      >
        <ul className="absolute block font-['Inter:Regular',sans-serif] font-normal h-[251px] leading-[0] left-0 list-disc not-italic text-[#0a0a0a] text-[20px] top-0 w-[509px] whitespace-pre-wrap">
          <li className="mb-0 ms-[30px]">
            <span className="leading-[30px]">
              Experience working on enterprise platforms in a highly technical
              domain.
            </span>
          </li>
          <li className="mb-0 ms-[30px]">
            <span className="leading-[30px]">
              Passionate about how content design can help build great products.
            </span>
          </li>
          <li className="ms-[30px]">
            <span className="leading-[30px]">
              Understanding of foundational work required for clarity and
              consistency.
            </span>
          </li>
        </ul>
      </div>
      <div
        className="absolute content-stretch flex flex-col h-[167px] items-center justify-center left-[626px] top-[1684px] w-[164px]"
        data-name="figure"
      >
        <Div additionalClassNames="h-[139px] w-[140px]">
          <div
            className="relative rounded-[15252000px] shrink-0 size-[138px]"
            data-name="ImageWithFallback"
          >
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[15252000px] size-full"
              src={imgImageWithFallback1}
            />
          </div>
        </Div>
      </div>
      <div
        className="absolute bg-white content-stretch flex flex-col h-[80.909px] items-start left-0 pb-[0.909px] px-[80px] top-0 w-[1170.909px]"
        data-name="header"
      >
        <div
          aria-hidden="true"
          className="absolute border-[#ededed] border-b-[0.909px] border-solid inset-0 pointer-events-none"
        />
        <div
          className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full"
          data-name="div"
        >
          <Wrapper3 additionalClassNames="h-[26.996px] w-[146.499px]">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.27px] tracking-[0.36px] whitespace-nowrap">
              EMMA CASSIDY
            </p>
          </Wrapper3>
          <Wrapper3 additionalClassNames="h-[24px] w-[296px]">
            <div
              className="absolute h-[23.999px] left-0 top-0 w-[46.818px]"
              data-name="Link"
            >
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.73px] whitespace-nowrap">
                About
              </p>
              <div
                className="absolute bg-[#0a0a0a] h-[1.996px] left-0 top-[26px] w-[46.818px]"
                data-name="span"
              />
            </div>
            <LinkText
              text="Education"
              additionalClassNames="left-[78.81px] w-[75.313px]"
            />
            <LinkText
              text="Case studies"
              additionalClassNames="left-[186.12px] w-[97.536px]"
            />
          </Wrapper3>
        </div>
      </div>
    </div>
  );
}
