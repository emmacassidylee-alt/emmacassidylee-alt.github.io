import clsx from "clsx";
import svgPaths from "./svg-br17jdqixu";
import imgContainer from "ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgContainer1 from "295200df89a7bafdcca51c3317b3944257a47e4d.png";
import imgContainer2 from "03781d75397e421ea7b6af942609e403e5e4738e.png";
import imgContainer3 from "43826b9b51b5de98af1b43099ad1961f2554594e.png";
type AProps = {
  additionalClassNames?: string;
};

function A({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<AProps>) {
  return (
    <div className={clsx("h-[30px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[11.996px] items-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper3({ children }: React.PropsWithChildren<{}>) {
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

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[80px] relative shrink-0 w-[100px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper2({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[36.001px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {children}
      </p>
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
    <div className={clsx("relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        {children}
      </div>
    </div>
  );
}

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <Wrapper1 additionalClassNames="h-[26.001px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] whitespace-nowrap">
        {children}
      </p>
    </Wrapper1>
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
    <div className="relative shrink-0 size-[15.994px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.9943 15.9943"
      >
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
      </svg>
    </div>
  );
}
type SpanText1Props = {
  text: string;
  additionalClassNames?: string;
};

function SpanText1({ text, additionalClassNames = "" }: SpanText1Props) {
  return <Wrapper additionalClassNames={additionalClassNames}>{text}</Wrapper>;
}
type HText1Props = {
  text: string;
};

function HText1({ text }: HText1Props) {
  return (
    <div className="h-[30px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type Text1Props = {
  text: string;
};

function Text1({ text }: Text1Props) {
  return (
    <div className="absolute h-[30px] left-0 opacity-70 top-[75.99px] w-[762.912px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return (
    <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type HTextProps = {
  text: string;
};

function HText({ text }: HTextProps) {
  return (
    <div className="absolute h-[36.001px] left-0 top-[32px] w-[762.912px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type SpanTextProps = {
  text: string;
  additionalClassNames?: string;
};

function SpanText({ text, additionalClassNames = "" }: SpanTextProps) {
  return (
    <div
      className={clsx(
        "absolute content-stretch flex h-[15.909px] items-start left-0 opacity-60 top-[5px]",
        additionalClassNames,
      )}
    >
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.5px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[0.65px] uppercase whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}

function Image() {
  return (
    <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
      <img
        alt=""
        className="absolute max-w-none object-cover opacity-0 size-full"
        src={imgContainer}
      />
      <img
        alt=""
        className="absolute max-w-none object-contain size-full"
        src={imgContainer1}
      />
    </div>
  );
}

export default function PortfolioWebsiteDesign() {
  return (
    <div
      className="bg-white relative size-full"
      data-name="Portfolio website design"
    >
      <div
        className="absolute bg-white content-stretch flex flex-col gap-[128.906px] h-[569px] items-start left-0 pt-[80.909px] top-0 w-[1171px]"
        data-name="div"
      >
        <Wrapper1 additionalClassNames="h-[1398.672px] w-[1170.909px]">
          <div
            className="absolute h-[52.003px] left-[80px] top-[95.99px] w-[1010.909px]"
            data-name="h2"
          >
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[52px] left-0 not-italic text-[#0a0a0a] text-[44px] top-[0.09px] tracking-[-0.44px] whitespace-nowrap">
              Education
            </p>
          </div>
          <div
            className="absolute content-stretch flex flex-col gap-[63.999px] h-[983.778px] items-start left-[80px] top-[212px] w-[1010.909px]"
            data-name="Container"
          >
            <div
              className="h-[296.896px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                aria-hidden="true"
                className="absolute border-[#ededed] border-b-[0.909px] border-solid inset-0 pointer-events-none"
              />
              <div
                className="absolute content-stretch flex h-[231.989px] items-start left-0 top-0 w-[200px]"
                data-name="Container"
              >
                <Image />
                <Wrapper1 additionalClassNames="h-[80px] w-[100px]">
                  <div
                    className="absolute content-stretch flex h-[80px] items-center justify-center left-0 top-0 w-[100px]"
                    data-name="Container"
                  >
                    <Container>
                      <div
                        className="h-[23.999px] opacity-70 shrink-0 w-[96.094px]"
                        data-name="img"
                      />
                    </Container>
                  </div>
                </Wrapper1>
              </div>
              <div
                className="absolute content-stretch flex h-[231.989px] items-start left-0 top-0 w-[200px]"
                data-name="Container"
              >
                <Image />
                <Wrapper1 additionalClassNames="h-[80px] w-[100px]">
                  <div
                    className="absolute content-stretch flex h-[80px] items-center justify-center left-0 top-0 w-[100px]"
                    data-name="Container"
                  >
                    <Container>
                      <div
                        className="h-[23.999px] opacity-70 shrink-0 w-[96.094px]"
                        data-name="img"
                      />
                    </Container>
                  </div>
                </Wrapper1>
              </div>
              <div
                className="absolute h-[231.989px] left-[248px] top-0 w-[762.912px]"
                data-name="Container"
              >
                <SpanText
                  text="Higher Diploma"
                  additionalClassNames="w-[121.236px]"
                />
                <HText text="Interaction Design" />
                <Text1 text="Dublin City University" />
                <div
                  className="absolute content-stretch flex flex-col gap-[11.996px] h-[101.996px] items-start left-0 top-[129.99px] w-[762.912px]"
                  data-name="Container"
                >
                  <HText1 text="Focus areas" />
                  <div
                    className="h-[60px] relative shrink-0 w-full"
                    data-name="ul"
                  >
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-0 w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Interaction design"
                        additionalClassNames="w-[135.675px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-[397.45px] top-0 w-[365.462px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="UX design"
                        additionalClassNames="w-[78.033px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-[34px] w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <Wrapper additionalClassNames="w-[262.223px]">{`IT & web technology fundamentals`}</Wrapper>
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-[397.45px] top-[34px] w-[365.462px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Researching interactions"
                        additionalClassNames="w-[186.79px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[364.893px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                aria-hidden="true"
                className="absolute border-[#ededed] border-b-[0.909px] border-solid inset-0 pointer-events-none"
              />
              <div
                className="absolute content-stretch flex h-[299.986px] items-start left-0 top-0 w-[200px]"
                data-name="Container"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={imgContainer2}
                />
                <Wrapper1 additionalClassNames="h-[80px] w-[100px]">
                  <div
                    className="absolute content-stretch flex h-[80px] items-center justify-center left-0 top-0 w-[100px]"
                    data-name="Container"
                  >
                    <Container>
                      <div
                        className="h-[71.996px] opacity-70 shrink-0 w-[100px]"
                        data-name="img"
                      />
                    </Container>
                  </div>
                </Wrapper1>
              </div>
              <div
                className="absolute h-[299.986px] left-[248px] top-0 w-[762.912px]"
                data-name="Container"
              >
                <SpanText
                  text="Higher Diploma"
                  additionalClassNames="w-[121.236px]"
                />
                <HText text="Computing" />
                <Text1 text="Griffith College Dublin" />
                <div
                  className="absolute content-stretch flex flex-col gap-[11.996px] h-[169.993px] items-start left-0 top-[129.99px] w-[762.912px]"
                  data-name="Container"
                >
                  <HText1 text="Focus areas" />
                  <div
                    className="h-[127.997px] relative shrink-0 w-full"
                    data-name="ul"
                  >
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-0 w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Programming"
                        additionalClassNames="w-[101.563px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-[397.45px] top-0 w-[365.462px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <Wrapper additionalClassNames="w-[251.264px]">{`Architecture & operating systems`}</Wrapper>
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-[34px] w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Databases"
                        additionalClassNames="w-[79.986px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-[397.45px] top-[34px] w-[365.462px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Networks"
                        additionalClassNames="w-[72.756px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-[68px] w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Object-oriented design"
                        additionalClassNames="w-[174.503px]"
                      />
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-[397.45px] top-[68px] w-[365.462px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <Wrapper additionalClassNames="w-[75.327px]">{`HCI & GUI`}</Wrapper>
                    </div>
                    <div
                      className="absolute content-stretch flex gap-[11.996px] h-[26.001px] items-start left-0 top-[102px] w-[365.455px]"
                      data-name="li"
                    >
                      <SpanText1
                        text="•"
                        additionalClassNames="opacity-40 w-[9.006px]"
                      />
                      <SpanText1
                        text="Web application software engineering"
                        additionalClassNames="w-[286.293px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="h-[193.991px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex h-[129.993px] items-start left-0 top-0 w-[200px]"
                data-name="Container"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      alt=""
                      className="absolute h-full left-[18.74%] max-w-none top-0 w-[163.01%]"
                      src={imgContainer3}
                    />
                  </div>
                  <img
                    alt=""
                    className="absolute max-w-none object-contain opacity-0 size-full"
                    src={imgContainer}
                  />
                </div>
                <Wrapper1 additionalClassNames="h-[80px] w-[100px]">
                  <div
                    className="absolute content-stretch flex h-[80px] items-center justify-center left-0 top-0 w-[100px]"
                    data-name="Container"
                  >
                    <Container>
                      <div
                        className="h-[23.999px] opacity-70 shrink-0 w-[96.094px]"
                        data-name="img"
                      />
                    </Container>
                  </div>
                </Wrapper1>
              </div>
              <div
                className="absolute h-[129.993px] left-[248px] top-0 w-[762.912px]"
                data-name="Container"
              >
                <SpanText
                  text="Bachelor of Arts"
                  additionalClassNames="w-[139.624px]"
                />
                <HText text="English" />
                <Text1 text="University College Dublin" />
              </div>
            </div>
          </div>
          <div
            className="absolute h-[58.906px] left-[80px] opacity-60 top-[1243.77px] w-[1010.909px]"
            data-name="Container"
          >
            <div
              aria-hidden="true"
              className="absolute border-[#ededed] border-solid border-t-[0.909px] inset-0 pointer-events-none"
            />
          </div>
        </Wrapper1>
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
                <Wrapper2>{`Let's connect`}</Wrapper2>
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <A additionalClassNames="w-[473.452px]">
                    <Wrapper3>
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
                    </Wrapper3>
                    <div
                      className="h-[30px] relative shrink-0 w-[275.305px]"
                      data-name="span"
                    >
                      <Text text="emmacassidylee@gmail.com" />
                    </div>
                  </A>
                  <A additionalClassNames="w-[473.452px]">
                    <Wrapper3>
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
                    </Wrapper3>
                    <div
                      className="h-[30px] relative shrink-0 w-[145.405px]"
                      data-name="span"
                    >
                      <Text text="LinkedIn profile" />
                    </div>
                    <ExternalLink />
                  </A>
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-[537.45px] top-0 w-[473.459px]"
                data-name="Container"
              >
                <Wrapper2>Links</Wrapper2>
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <A additionalClassNames="w-[473.459px]">
                    <div
                      className="h-[30px] relative shrink-0 w-[323.352px]"
                      data-name="span"
                    >
                      <Text text="Content Designers Ireland Meetup" />
                    </div>
                    <ExternalLink />
                  </A>
                  <A additionalClassNames="w-[473.459px]">
                    <div
                      className="h-[30px] relative shrink-0 w-[133.487px]"
                      data-name="span"
                    >
                      <Text text="Medium posts" />
                    </div>
                    <ExternalLink />
                  </A>
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
          <Wrapper1 additionalClassNames="h-[26.996px] w-[146.499px]">
            <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[27px] left-0 not-italic text-[#0a0a0a] text-[18px] top-[0.27px] tracking-[0.36px] whitespace-nowrap">
              EMMA CASSIDY
            </p>
          </Wrapper1>
          <Wrapper1 additionalClassNames="h-[23.999px] w-[375.568px]">
            <div
              className="absolute h-[23.999px] left-[316.16px] top-0 w-[59.411px]"
              data-name="button"
            >
              <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[30.5px] not-italic text-[#0a0a0a] text-[16px] text-center top-[-0.73px] whitespace-nowrap">
                Contact
              </p>
            </div>
            <LinkText text="About" additionalClassNames="left-0 w-[45.128px]" />
            <div
              className="absolute h-[23.999px] left-[77.12px] top-0 w-[77.507px]"
              data-name="Link"
            >
              <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.73px] whitespace-nowrap">
                Education
              </p>
              <div
                className="absolute bg-[#0a0a0a] h-[1.996px] left-0 top-[26px] w-[77.507px]"
                data-name="span"
              />
            </div>
            <LinkText
              text="Case studies"
              additionalClassNames="left-[186.63px] w-[97.536px]"
            />
          </Wrapper1>
        </div>
      </div>
    </div>
  );
}
