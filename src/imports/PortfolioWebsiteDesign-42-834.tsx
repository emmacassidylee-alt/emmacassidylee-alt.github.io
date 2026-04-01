import clsx from "clsx";
import svgPaths from "./svg-hp45huu8f1";
import imgMediaFrame from "bea93815ebfaaf4bcb4379811116e2501353781c.png";
import imgMediaFrame1 from "648c8c8d721016bbd7360c4618cbaa49ebe8f8ba.png";
import imgMediaFrame2 from "0a2e8a1b31423dffb7748db739d6e279cb524e2f.png";
import imgMediaFrame3 from "75467e54047b93af4c6accb22defc17173d539be.png";
import imgMediaFrame4 from "db137c402c245f3ea30c0a5d36aeebe76c41ce12.png";
import imgMediaFrame5 from "ff820feec17c7c157e1b1f2ce363ecc7fc893e67.png";
import imgMediaFrame6 from "f56898ebe37e5501202dcc5a2f7d33a7d64eda17.png";
import imgMediaFrame7 from "9daabea0762e2e008164c666f6a9b88e23cc954c.png";
import imgMediaFrame8 from "19c9bd7926d6f89394fe3818d25aa61205ee39a5.png";
import imgMediaFrame9 from "07c8323dc729a164d26f84a89796259acd1ecc3f.png";
import imgMediaFrame10 from "ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgMediaFrame11 from "ed9fddfa78dce24004d889365386d2dd73b1c056.png";
import imgMediaFrame12 from "615f803fe251abf07828ac1d19384998c42afe17.png";
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

function Text4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[352px]">
        {children}
      </p>
    </div>
  );
}
type MediaFrameProps = {
  additionalClassNames?: string;
};

function MediaFrame({
  children,
  additionalClassNames = "",
}: React.PropsWithChildren<MediaFrameProps>) {
  return (
    <div
      className={clsx(
        "absolute content-stretch flex flex-col h-[471px] items-start rounded-[20px] w-[838px]",
        additionalClassNames,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[20px]"
      >
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
    <div className={clsx("h-[30px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
        {children}
      </p>
    </div>
  );
}
type Wrapper1Props = {
  additionalClassNames?: string;
};

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="h-[17.997px] opacity-60 relative shrink-0 w-full">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-0 not-italic text-[#0a0a0a] text-[13px] top-[-0.09px] tracking-[0.65px] uppercase whitespace-nowrap">
        {children}
      </p>
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

function Icon() {
  return (
    <div className="relative shrink-0 size-[15.994px]">
      <svg
        className="absolute block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 15.9943 15.9943"
      >
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
      </svg>
    </div>
  );
}
type TextText2Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText2({ text, additionalClassNames = "" }: TextText2Props) {
  return (
    <div className={clsx("h-[30px] relative shrink-0", additionalClassNames)}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] whitespace-nowrap">
          {text}
        </p>
      </div>
    </div>
  );
}

function MediaFrameImage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[471px] items-start left-[61px] rounded-[20px] top-[0.35px] w-[838px]">
      <img
        alt=""
        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
        src={imgMediaFrame6}
      />
    </div>
  );
}
type TagChipTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TagChipText({ text, additionalClassNames = "" }: TagChipTextProps) {
  return (
    <div
      className={clsx(
        "absolute bg-[#ededed] content-stretch flex h-[29.986px] items-center px-[12px] py-[6px] rounded-[4px] top-0",
        additionalClassNames,
      )}
    >
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[18px] not-italic relative shrink-0 text-[#0a0a0a] text-[13px] tracking-[0.26px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type TextText1Props = {
  text: string;
  additionalClassNames?: string;
};

function TextText1({ text, additionalClassNames = "" }: TextText1Props) {
  return (
    <div
      className={clsx(
        "absolute h-[52.003px] w-[370.099px]",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[338px]">
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
      className={clsx("absolute opacity-40 w-[9.006px]", additionalClassNames)}
    >
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type TextTextProps = {
  text: string;
  additionalClassNames?: string;
};

function TextText({ text, additionalClassNames = "" }: TextTextProps) {
  return (
    <div
      className={clsx(
        "absolute h-[17.997px] left-0 opacity-40 top-[8.64px]",
        additionalClassNames,
      )}
    >
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[18px] left-0 not-italic text-[#0a0a0a] text-[13px] top-[-0.09px] tracking-[0.65px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type ContainerText1Props = {
  text: string;
};

function ContainerText1({ text }: ContainerText1Props) {
  return (
    <div className="h-[52.003px] opacity-70 relative shrink-0 w-full">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[208px]">
        {text}
      </p>
    </div>
  );
}
type ContainerTextProps = {
  text: string;
};

function ContainerText({ text }: ContainerTextProps) {
  return <Wrapper>{text}</Wrapper>;
}
type Text3Props = {
  text: string;
};

function Text3({ text }: Text3Props) {
  return (
    <Wrapper1 additionalClassNames="relative shrink-0 w-full">{text}</Wrapper1>
  );
}
type HeadingText1Props = {
  text: string;
  additionalClassNames?: string;
};

function HeadingText1({ text, additionalClassNames = "" }: HeadingText1Props) {
  return <Wrapper1 additionalClassNames="absolute top-0">{text}</Wrapper1>;
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="absolute h-[36.001px] left-0 top-0 w-[1001.818px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#0a0a0a] text-[28px] top-[-0.09px] whitespace-nowrap">
        {text}
      </p>
    </div>
  );
}
type Text2Props = {
  text: string;
  additionalClassNames?: string;
};

function Text2({ text, additionalClassNames = "" }: Text2Props) {
  return (
    <div className={clsx("absolute h-[52.003px]", additionalClassNames)}>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[52px] left-0 not-italic text-[#0a0a0a] text-[44px] top-[0.09px] tracking-[-0.44px] whitespace-nowrap">
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
    <div className="h-[52.003px] relative shrink-0 w-full">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[52px] left-0 not-italic text-[#0a0a0a] text-[44px] top-[0.09px] tracking-[-0.44px] whitespace-nowrap">
        {text}
      </p>
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
        className="absolute bg-white content-stretch flex flex-col gap-[128.907px] h-[345px] items-start left-0 pt-[80.909px] top-[0.27px] w-[1162px]"
        data-name="Root"
      >
        <div
          className="h-[11088px] relative rounded-[10px] shrink-0 w-[1162px]"
          data-name="CaseStudies"
        >
          <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
            <div
              className="absolute h-[52.003px] left-[80px] top-[95.99px] w-[1001.818px]"
              data-name="Container"
            >
              <Text2
                text="Case studies"
                additionalClassNames="left-0 top-0 w-[1001.818px]"
              />
              <div
                className="absolute content-stretch flex flex-col h-0 items-start left-0 opacity-70 pl-[23.999px] top-[76px] w-[800px]"
                data-name="Container"
              >
                <div
                  className="h-0 shrink-0 w-full"
                  data-name="Numbered List"
                />
              </div>
            </div>
            <div
              className="absolute bg-white h-[4732px] left-[92px] top-[1186.09px] w-[1002px]"
              data-name="Section"
            >
              <div
                className="absolute content-stretch flex flex-col h-[84.908px] items-start left-0 pb-[0.909px] top-0 w-[1001.818px]"
                data-name="Container"
              >
                <div
                  aria-hidden="true"
                  className="absolute border-[#ededed] border-b-[0.909px] border-solid inset-0 pointer-events-none"
                />
                <div
                  className="h-[52.003px] opacity-60 shrink-0 w-full"
                  data-name="Heading 2"
                />
              </div>
              <div
                className="absolute h-[2741px] left-[-6px] top-[-815px] w-[1002px]"
                data-name="Article"
              >
                <HeadingText text="Guardium Cryptography Manager (GCM)" />
                <div
                  className="absolute content-stretch flex flex-col gap-[15.994px] h-[195.994px] items-start left-0 top-[68px] w-[800px]"
                  data-name="Container"
                >
                  <Text3 text="Outcome" />
                  <div
                    className="h-[150px] relative shrink-0 w-full"
                    data-name="Paragraph"
                  >
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[771px]">
                      <span className="leading-[30px]">{`Transformed a complex cryptography management product with inconsistent terminology and UI content into a clear, cohesive user experience for security administrators, `}</span>
                      <span className="leading-[30px]">
                        contributing to customer trust and adoption in regulated
                        sectors.
                      </span>
                      <span className="leading-[30px]">{` `}</span>
                      <span className="leading-[30px]">{`Cryptography management combined with `}</span>
                      <span className="leading-[30px]">{`certificate lifecycle management `}</span>
                      <span className="leading-[30px]">
                        is a strategic differentiator for IBM Security
                      </span>
                      <span className="leading-[30px]">
                        , with GCM serving as its flagship offering
                      </span>
                      <span className="leading-[30px]">.</span>
                      <span className="leading-[30px]">{` `}</span>
                    </p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[257.805px] items-start left-0 top-[311.99px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Metrics" />
                  <div
                    className="h-[203.807px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-0 pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="100%" />
                      <ContainerText text="Terminology alignment" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[247px]">{`Eliminated variants across UI `}</p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[341.94px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="16+" />
                      <ContainerText text="product features" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[209px]">
                          <span className="leading-[26px]">Improved</span>
                          <span className="leading-[26px]">{` `}</span>
                          <span className="leading-[26px]">UI content</span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[683.88px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="30+" />
                      <ContainerText text="approved terms" />
                      <ContainerText1 text="Included in glossary" />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[471.619px] items-start left-0 top-[617.79px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Process" />
                  <div
                    className="h-[417.621px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-0 rounded-[4px] top-0 w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="01"
                          additionalClassNames="w-[15.675px]"
                        />
                        <HeadingText1
                          text="Researched terminology"
                          additionalClassNames="left-[31.67px] w-[211.214px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[112.003px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.09px] not-italic text-[#0a0a0a] text-[16px] top-[-0.69px] w-[362px]">
                              Audited existing terminology used in GCM and
                              identified inconsistencies.
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[343px]">
                              Researched industry standards and conducted
                              unmoderated user testing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-[512.9px] rounded-[4px] top-0 w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="02"
                          additionalClassNames="w-[18.253px]"
                        />
                        <Wrapper1
                          additionalClassNames="absolute top-0"
                          additionalClassNames="left-[34.25px] w-[148.494px]"
                        >{`Compiled glossary `}</Wrapper1>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[130px] items-start left-[72.19px] top-[70.3px] w-[391px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[336.293px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.19px] not-italic text-[#0a0a0a] text-[16px] top-[-0.69px] w-[368px]">
                              Standardised terminology across UI for unified
                              experience and reduced cognative load.
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <div
                            className="absolute h-[48.004px] left-0 opacity-40 top-[4px] w-[9.006px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[24px] whitespace-nowrap">
                              •
                            </p>
                          </div>
                        </div>
                      </div>
                      <TextText1
                        text="Compiled comprehensive product glossary for internal and external users."
                        additionalClassNames="left-[93.19px] top-[137.3px]"
                      />
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-0 rounded-[4px] top-[231.81px] w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="03"
                          additionalClassNames="w-[18.459px]"
                        />
                        <HeadingText1
                          text="Used Jobs-to-Be-Done"
                          additionalClassNames="left-[34.45px] w-[228.928px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[342px]">
                              <span className="leading-[26px]">{`Worked with UXR to `}</span>
                              <span className="leading-[26px]">defin</span>
                              <span className="leading-[26px]">{`e `}</span>
                              <span className="leading-[26px]">
                                JTBD statements and outcome ma
                              </span>
                              <span className="leading-[26px]">
                                ppings for GDSC flows.
                              </span>
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[345.277px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.09px] not-italic text-[#0a0a0a] text-[16px] top-[-1.12px] w-[345px]">
                              Based UI content on JTBD statements to ground it
                              in real user needs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-[512.9px] rounded-[4px] top-[231.81px] w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="04"
                          additionalClassNames="w-[18.857px]"
                        />
                        <HeadingText1
                          text="Built repeatable content patterns"
                          additionalClassNames="left-[34.85px] w-[186.74px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col h-[67.997px] items-start left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[324.879px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.19px] not-italic text-[#0a0a0a] text-[16px] top-[-1.12px] w-[374px]">{`Built product-specific library of content patterns for consistency and efficiency. `}</p>
                          </div>
                        </div>
                      </div>
                      <div
                        className="absolute h-[30px] left-[71.19px] top-[137.49px] w-[391.101px]"
                        data-name="List Item"
                      >
                        <Text
                          text="•"
                          additionalClassNames="h-[26.001px] left-0 top-[-7px]"
                        />
                        <div
                          className="absolute h-[30px] left-[21px] top-0 w-[298.466px]"
                          data-name="Text"
                        >
                          <p className="absolute font-['Inter:Regular',sans-serif] font-normal h-[75px] leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-9px] w-[367px]">
                            Created content guidelines for designers and
                            developers to reduce content rework.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[554.901px] items-start left-0 top-[1137.41px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Samples" />
                  <div
                    className="h-[1483px] relative shrink-0 w-[1002px]"
                    data-name="Container"
                  >
                    <div
                      className="absolute content-stretch flex flex-col h-[471px] items-start left-[61px] rounded-[20px] top-[0.35px] w-[838px]"
                      data-name="MediaFrame"
                    >
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                        src={imgMediaFrame}
                      />
                    </div>
                  </div>
                </div>
                <MediaFrame additionalClassNames="left-[61px] top-[1682px]">
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[20px] size-full"
                    src={imgMediaFrame1}
                  />
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[20px] size-full"
                    src={imgMediaFrame1}
                  />
                </MediaFrame>
                <div
                  className="absolute content-stretch flex flex-col h-[471px] items-start left-[61px] pointer-events-none rounded-[20px] top-[2174px] w-[838px]"
                  data-name="MediaFrame"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-contain rounded-[20px] size-full"
                    src={imgMediaFrame2}
                  />
                  <div
                    aria-hidden="true"
                    className="absolute border-3 border-[#0a0a0a] border-solid inset-0 rounded-[20px]"
                  />
                </div>
              </div>
              <div
                className="absolute h-[2723px] left-[19px] top-[2033px] w-[1002px]"
                data-name="Article"
              >
                <HeadingText text="Guardium Data Security Center (GDSC)" />
                <div
                  className="absolute content-stretch flex flex-col gap-[15.994px] h-[165.994px] items-start left-0 top-[68px] w-[800px]"
                  data-name="Container"
                >
                  <Text3 text="Outcome" />
                  <div
                    className="h-[120px] relative shrink-0 w-full"
                    data-name="Paragraph"
                  >
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[794px]">
                      Simplified complex mapping flows and introduced clear
                      content patterns to minimise user friction when
                      configuring inbound and outbound API integrations. This
                      feature work significantly reduced onboarding time for
                      advanced Guardium SaaS users in internal usability
                      reviews.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[257.805px] items-start left-0 top-[281.99px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Metrics" />
                  <div
                    className="h-[203.807px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-0 pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="25%" />
                      <ContainerText text="reduction in onboarding time" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[228px]">
                          Intuitive flows and clear guidance
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[341.94px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="100%" />
                      <ContainerText text="error coverage" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[235px] whitespace-pre-wrap">
                          <p className="mb-0">{`UI error message for every error state `}</p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[683.88px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <div
                        className="h-[52.003px] relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <Text2
                          text="8"
                          additionalClassNames="left-[1.22px] top-[-3.9px] w-[252.131px]"
                        />
                      </div>
                      <ContainerText text="interviews" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.22px] not-italic text-[#0a0a0a] text-[16px] top-[-0.89px] w-[252px]">
                          Technical sellers to understand user expectations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[449.616px] items-start left-0 top-[587.79px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Process" />
                  <div
                    className="h-[395.618px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-0 rounded-[4px] top-0 w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="01"
                          additionalClassNames="w-[15.675px]"
                        />
                        <HeadingText1
                          text="Planned strategically"
                          additionalClassNames="left-[31.67px] w-[262.386px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[355px]">
                              <span className="leading-[26px]">{`Created `}</span>
                              <span className="font-['Inter:Italic',sans-serif] italic leading-[26px]">
                                content journey maps
                              </span>
                              <span className="leading-[26px]">{` to identify where content would have greatest impact.`}</span>
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[360.618px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] whitespace-pre">
                              <span className="leading-[26px]">{`Built `}</span>
                              <span className="font-['Inter:Italic',sans-serif] italic leading-[26px]">
                                content models
                              </span>
                              <span className="leading-[26px]">
                                {` to align terminology and `}
                                <br aria-hidden="true" />
                                {`metrics across integrations. `}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-[512.9px] rounded-[4px] top-0 w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="02"
                          additionalClassNames="w-[18.253px]"
                        />
                        <HeadingText1
                          text="Participated in user research"
                          additionalClassNames="left-[34.25px] w-[187.415px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[67.997px] items-start left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[311.555px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] whitespace-pre">
                              {`Conducted interviews to identify industry `}
                              <br aria-hidden="true" />
                              terminology and existing knowledge.
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[342.017px]"
                            data-name="Text"
                          >
                            <div className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.19px] not-italic text-[#0a0a0a] text-[16px] top-[-0.69px] w-[357px]">
                              <p className="mb-0">&nbsp;</p>
                              <p>{`Synthesised usability testing results to validate early designs. `}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Text
                        text="•"
                        additionalClassNames="h-[26.001px] left-[72.19px] top-[132.3px]"
                      />
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-0 rounded-[4px] top-[209.81px] w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="03"
                          additionalClassNames="w-[18.459px]"
                        />
                        <HeadingText1
                          text="Delivered error guidance"
                          additionalClassNames="left-[34.45px] w-[195.54px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[321.932px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.09px] not-italic text-[#0a0a0a] text-[16px] top-[-0.6px] w-[378px]">{`Worked with developers to minimise opportunities for users to hit error states. `}</p>
                          </div>
                        </div>
                        <div
                          className="h-[58px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[13px]"
                          />
                          <div
                            className="absolute h-[33px] left-[21.1px] top-[19.4px] w-[370px]"
                            data-name="Text"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-[513px] rounded-[4px] top-[210.11px] w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="03"
                          additionalClassNames="w-[18.459px]"
                        />
                        <HeadingText1
                          text="Collaborated with content developers"
                          additionalClassNames="left-[34.45px] w-[195.54px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[321.932px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.09px] not-italic text-[#0a0a0a] text-[16px] top-[-0.9px] w-[384px]">
                              Documented design phase insights to minimise
                              rework.
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[15px]"
                          />
                          <div
                            className="absolute h-[52px] left-[21.1px] top-[0.1px] w-[394px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[14px] w-[394px]">
                              Streamlined content creation and improved the
                              relevance of UI content and documentation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[94px] not-italic text-[#0a0a0a] text-[16px] top-[973px] w-[378px]">
                  Created error messages with next steps to reduce frustration
                  and increase task completion.
                </p>
                <div
                  className="absolute h-[543.125px] left-0 top-[1085.4px] w-[1001.818px]"
                  data-name="Container"
                >
                  <HeadingText1
                    text="Samples"
                    additionalClassNames="left-0 w-[1001.818px]"
                  />
                  <div
                    className="absolute content-stretch flex flex-col h-[471px] items-start left-[42px] rounded-[20px] top-[72.6px] w-[838px]"
                    data-name="MediaFrame"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                      src={imgMediaFrame3}
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col h-[471px] items-start left-[45px] rounded-[20px] top-[1655px] w-[838px]"
                  data-name="MediaFrame"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                    src={imgMediaFrame4}
                  />
                </div>
              </div>
              <div
                className="absolute content-stretch flex flex-col h-[471px] items-start left-[64px] rounded-[20px] top-[4186px] w-[838px]"
                data-name="MediaFrame"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                  src={imgMediaFrame5}
                />
              </div>
            </div>
            <div
              className="absolute h-[29.986px] left-[80px] top-[182.09px] w-[1001.818px]"
              data-name="Container"
            >
              <TagChipText
                text="UI content"
                additionalClassNames="left-0 w-[89.957px]"
              />
              <TagChipText
                text="Design systems"
                additionalClassNames="left-[101.95px] w-[124.901px]"
              />
              <TagChipText
                text="Technical documentation"
                additionalClassNames="left-[238.85px] w-[184.538px]"
              />
              <TagChipText
                text="Terminology"
                additionalClassNames="left-[435.38px] w-[103.139px]"
              />
            </div>
            <div
              className="absolute h-[6840px] left-[74px] top-[6160.09px] w-[1002px]"
              data-name="Section"
            >
              <div
                className="absolute h-[2414.616px] left-0 top-[148.91px] w-[1001.818px]"
                data-name="Article"
              >
                <HeadingText text="Design System" />
                <div
                  className="absolute content-stretch flex flex-col gap-[15.994px] h-[195.994px] items-start left-0 top-[68px] w-[800px]"
                  data-name="Container"
                >
                  <Text3 text="Outcome" />
                  <div
                    className="h-[150px] relative shrink-0 w-full"
                    data-name="Paragraph"
                  >
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#0a0a0a] text-[0px] text-[20px] top-[-0.27px] w-[744px]">
                      <span className="leading-[30px]">{`Transformed Sage’s Design System from a component‑only resource into a `}</span>
                      <span className="font-['Inter:Bold',sans-serif] font-bold leading-[30px]">
                        content‑powered ecosystem
                      </span>
                      <span className="leading-[30px]">
                        , unifying writing standards, terminology and guidance
                        across the company. What began as individual content
                        designers embedded in different products became a
                        cross‑organisational content movement with active
                        communities, clinics and scalable governance.
                      </span>
                    </p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[257.805px] items-start left-0 top-[311.99px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Metrics" />
                  <div
                    className="h-[203.807px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-0 pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="60+" />
                      <ContainerText text="Components" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[215px]">
                          Content guidance and examples
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[341.94px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="40+" />
                      <ContainerText text="Content designers" />
                      <div
                        className="h-[26.001px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.16px] not-italic text-[#0a0a0a] text-[16px] top-[-0.79px] w-[218px]">{`Community of practice with alignment across products `}</p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[683.88px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="8+" />
                      <Wrapper>{`Products `}</Wrapper>
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.22px] not-italic text-[#0a0a0a] text-[16px] top-[-0.79px] w-[246px]">
                          Multilingual terminology in glossary
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[493.622px] items-start left-0 top-[617.79px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Process" />
                  <div
                    className="h-[439.624px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-0 rounded-[4px] top-0 w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="01"
                          additionalClassNames="w-[15.675px]"
                        />
                        <HeadingText1
                          text="Identified gaps"
                          additionalClassNames="left-[31.67px] w-[144.318px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[112.003px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[364px] whitespace-pre-wrap">{`Created content guidelines and examples for design system components and  patterns.`}</p>
                          </div>
                        </div>
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <Text4>{`Worked with product teams to evaluate existing components and patterns. `}</Text4>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-[512.9px] rounded-[4px] top-0 w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="02"
                          additionalClassNames="w-[18.253px]"
                        />
                        <HeadingText1
                          text="Strengthened terminology consistency"
                          additionalClassNames="left-[34.25px] w-[243.253px]"
                        />
                      </div>
                      <div
                        className="absolute h-[52.003px] left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List Item"
                      >
                        <Text
                          text="•"
                          additionalClassNames="h-[48.004px] left-0 top-[4px]"
                        />
                        <TextText1
                          text="Took ownership of the company glossary, shaping it into a trusted source for internal and customer‑facing terminology."
                          additionalClassNames="left-[21px] top-0"
                        />
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-0 rounded-[4px] top-[231.81px] w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="03"
                          additionalClassNames="w-[18.459px]"
                        />
                        <HeadingText1
                          text="Centralised content foundations"
                          additionalClassNames="left-[34.45px] w-[156.946px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="content-stretch flex flex-col gap-[7.997px] items-start relative shrink-0 w-[391.094px]"
                          data-name="List"
                        >
                          <div
                            className="h-[52.003px] relative shrink-0 w-full"
                            data-name="List Item"
                          >
                            <Text
                              text="•"
                              additionalClassNames="h-[48.004px] left-0 top-[4px]"
                            />
                            <div
                              className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                              data-name="Text"
                            >
                              <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[364px]">
                                Grew style guide committee into a
                                cross‑department group.
                              </p>
                            </div>
                          </div>
                          <div
                            className="h-[52.003px] relative shrink-0 w-full"
                            data-name="List Item"
                          >
                            <Text
                              text="•"
                              additionalClassNames="h-[48.004px] left-0 top-[4px]"
                            />
                            <Text4>
                              Added writing basics, inclusive wording, and
                              accessibility guidance to style guide.
                            </Text4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-[512.9px] rounded-[4px] top-[231.81px] w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="04"
                          additionalClassNames="w-[18.857px]"
                        />
                        <Wrapper1
                          additionalClassNames="absolute top-0"
                          additionalClassNames="left-[34.85px] w-[144.411px]"
                        >{`Operationalised adoption `}</Wrapper1>
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col h-[112.003px] items-start left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.099px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[360px] whitespace-pre-wrap">
                              Set up weekly clinics and monthly sharing sessions
                              to showcase best practices, making the style guide
                              accessible to everyone, not just content
                              professionals.
                              <br aria-hidden="true" />
                              <br aria-hidden="true" />
                              <br aria-hidden="true" />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[543.125px] left-0 top-[1159.41px] w-[1001.818px]"
                  data-name="Container"
                >
                  <HeadingText1
                    text="Samples"
                    additionalClassNames="left-0 w-[1001.818px]"
                  />
                  <div
                    className="absolute h-[441.129px] left-0 top-[54px] w-[1001.818px]"
                    data-name="Container"
                  >
                    <MediaFrameImage />
                    <div
                      className="absolute bg-[rgba(255,255,255,0)] h-[174px] left-[632px] top-[236.35px] w-[309px]"
                      data-name="MediaFrame"
                    />
                  </div>
                </div>
                <div
                  className="absolute h-[543.125px] left-0 top-[1159.41px] w-[1001.818px]"
                  data-name="Container"
                >
                  <HeadingText1
                    text="Samples"
                    additionalClassNames="left-0 w-[1001.818px]"
                  />
                  <div
                    className="absolute h-[441.129px] left-0 top-[54px] w-[1001.818px]"
                    data-name="Container"
                  >
                    <MediaFrameImage />
                    <div
                      className="absolute bg-[rgba(255,255,255,0)] h-[174px] left-[632px] top-[236.35px] w-[309px]"
                      data-name="MediaFrame"
                    />
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col h-[471px] items-start left-[61px] rounded-[20px] top-[1805.75px] w-[838px]"
                  data-name="MediaFrame"
                >
                  <img
                    alt=""
                    className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                    src={imgMediaFrame7}
                  />
                </div>
              </div>
              <div
                className="absolute h-[2550.994px] left-0 top-[2659.52px] w-[1001.818px]"
                data-name="Article"
              >
                <HeadingText text="CRM Help" />
                <div
                  className="absolute content-stretch flex flex-col gap-[15.994px] h-[195.994px] items-start left-0 top-[68px] w-[800px]"
                  data-name="Container"
                >
                  <Text3 text="Outcome" />
                  <div
                    className="h-[150px] relative shrink-0 w-full"
                    data-name="Paragraph"
                  >
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[30px] left-0 not-italic text-[#0a0a0a] text-[20px] top-[-0.27px] w-[783px]">
                      Redesigned Sage CRM product documentation and videos to
                      improve user success, reduce support tickets and enhance
                      user confidence. Created topic-based documentation with
                      clear visuals and progressive disclosure, directly
                      contributing to measurable business value.
                    </p>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[257.805px] items-start left-0 top-[311.99px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Metrics" />
                  <div
                    className="h-[203.807px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-0 pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="15+" />
                      <ContainerText text="Product videos" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[202px]">
                          Instructional tutorials for CRM
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[341.94px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="25%" />
                      <ContainerText text="Reduction in support tickets" />
                      <div
                        className="h-[52.003px] opacity-70 relative shrink-0 w-full"
                        data-name="Container"
                      >
                        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[191px]">
                          Related to documented tasks
                        </p>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white content-stretch flex flex-col gap-[7.997px] h-[203.807px] items-start left-[683.88px] pb-[0.909px] pt-[32.905px] px-[32.905px] rounded-[4px] top-0 w-[317.94px]"
                      data-name="CardMetric"
                    >
                      <div
                        aria-hidden="true"
                        className="absolute border-[#ededed] border-[0.909px] border-solid inset-0 pointer-events-none rounded-[4px]"
                      />
                      <Text1 text="7" />
                      <ContainerText text="languages supported" />
                      <ContainerText1 text="Localised documentation and videos" />
                    </div>
                  </div>
                </div>
                <div
                  className="absolute content-stretch flex flex-col gap-[23.999px] h-[471.619px] items-start left-0 top-[617.79px] w-[1001.818px]"
                  data-name="Container"
                >
                  <Text3 text="Process" />
                  <div
                    className="h-[417.621px] relative shrink-0 w-full"
                    data-name="Container"
                  >
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-0 rounded-[4px] top-0 w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="01"
                          additionalClassNames="w-[15.675px]"
                        />
                        <HeadingText1
                          text="Redesigned product help"
                          additionalClassNames="left-[31.67px] w-[73.629px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[112.003px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[357px]">
                              Analysed existing documentation structure and
                              gaps.
                            </p>
                          </div>
                        </div>
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[371px]">
                              Created templates for tasks, concepts, and
                              reference topics.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[207.813px] left-[512.9px] rounded-[4px] top-0 w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="02"
                          additionalClassNames="w-[18.253px]"
                        />
                        <HeadingText1
                          text="Delivered complete documentation set"
                          additionalClassNames="left-[34.25px] w-[141.903px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col h-[90px] items-start left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List"
                      >
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[103px] left-[21.19px] top-[-0.21px] w-[345px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.19px] not-italic text-[#0a0a0a] text-[16px] top-[-1.21px] w-[312px]">
                              Created online Developer help, System
                              administrator help and User help, patch release
                              notes, What’s New overviews and Implementation
                              workbooks.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-0 rounded-[4px] top-[231.81px] w-[488.906px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.091px]"
                        data-name="Container"
                      >
                        <TextText
                          text="03"
                          additionalClassNames="w-[18.459px]"
                        />
                        <HeadingText1
                          text="Engaged with CRM Community Hub"
                          additionalClassNames="left-[34.45px] w-[155.043px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col gap-[7.997px] h-[90px] items-start left-[72px] top-[69.99px] w-[391.094px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.092px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[353px]">{`Engaged with partners and users to resolve questions and identify recurring issues. `}</p>
                          </div>
                        </div>
                        <div
                          className="h-[30px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[26.001px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[30px] left-[21px] top-0 w-[341.527px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-[0.09px] not-italic text-[#0a0a0a] text-[16px] top-[-1.02px] w-[341px]">
                              Fed insights into documentation, reducing friction
                              and improving user success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="absolute bg-white border-[#ededed] border-[0.909px] border-solid h-[185.81px] left-[512.9px] rounded-[4px] top-[231.81px] w-[488.913px]"
                      data-name="CardProcessStep"
                    >
                      <div
                        className="absolute h-[30px] left-[24px] top-[24px] w-[439.098px]"
                        data-name="Container"
                      >
                        <TextText
                          text="04"
                          additionalClassNames="w-[18.857px]"
                        />
                        <HeadingText1
                          text="Built product video library"
                          additionalClassNames="left-[34.85px] w-[158.295px]"
                        />
                      </div>
                      <div
                        className="absolute content-stretch flex flex-col h-[90px] items-start left-[72px] top-[69.99px] w-[391.101px]"
                        data-name="List"
                      >
                        <div
                          className="h-[52.003px] relative shrink-0 w-full"
                          data-name="List Item"
                        >
                          <Text
                            text="•"
                            additionalClassNames="h-[48.004px] left-0 top-[4px]"
                          />
                          <div
                            className="absolute h-[52.003px] left-[21px] top-0 w-[370.099px]"
                            data-name="Text"
                          >
                            <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#0a0a0a] text-[16px] top-[-0.82px] w-[349px]">
                              Produced end‑to‑end library of product walkthrough
                              and how‑to videos as a fast-track alternative to
                              reading documentation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute h-[679.517px] left-0 top-[1137.41px] w-[1001.818px]"
                  data-name="Container"
                >
                  <HeadingText1
                    text="Samples"
                    additionalClassNames="left-0 w-[1001.818px]"
                  />
                  <div
                    className="absolute content-stretch flex flex-col h-[471px] items-start left-[56px] rounded-[20px] top-[67.08px] w-[838px]"
                    data-name="MediaFrame"
                  >
                    <img
                      alt=""
                      className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full"
                      src={imgMediaFrame8}
                    />
                  </div>
                </div>
                <MediaFrame additionalClassNames="left-[56px] top-[1783.48px]">
                  <img
                    alt=""
                    className="absolute max-w-none object-cover rounded-[20px] size-full"
                    src={imgMediaFrame9}
                  />
                  <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[20px]" />
                  <img
                    alt=""
                    className="absolute max-w-none object-contain opacity-20 rounded-[20px] size-full"
                    src={imgMediaFrame10}
                  />
                </MediaFrame>
              </div>
              <div
                className="absolute content-stretch flex flex-col items-start left-[-3px] rounded-[20px] size-[120px] top-[-21px]"
                data-name="MediaFrame"
              >
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[20px] size-full"
                  src={imgMediaFrame11}
                />
              </div>
            </div>
            <div
              className="absolute content-stretch flex flex-col items-start left-[80px] rounded-[20px] size-[120px] top-[246.09px]"
              data-name="MediaFrame"
            >
              <img
                alt=""
                className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-[20px] size-full"
                src={imgMediaFrame12}
              />
            </div>
          </div>
        </div>
        <div
          className="bg-[#fafafa] h-[450.888px] relative shrink-0 w-[1161.818px]"
          data-name="Footer"
        >
          <div
            aria-hidden="true"
            className="absolute border-black border-solid border-t-[0.909px] inset-0 pointer-events-none"
          />
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[63.998px] items-start pt-[95.994px] px-[80px] relative size-full">
            <div
              className="h-[135.994px] relative shrink-0 w-full"
              data-name="Container"
            >
              <div
                className="absolute content-stretch flex flex-col gap-[23.999px] h-[135.994px] items-start left-0 top-0 w-[468.906px]"
                data-name="Container"
              >
                <Wrapper2>{`Let's connect`}</Wrapper2>
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
                    <TextText2
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
                    <TextText2
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
                <Wrapper2>Links</Wrapper2>
                <div
                  className="content-stretch flex flex-col gap-[15.994px] h-[75.994px] items-start relative shrink-0 w-full"
                  data-name="Container"
                >
                  <Link additionalClassNames="w-[468.913px]">
                    <TextText2
                      text="Content Designers Ireland Meetup"
                      additionalClassNames="w-[323.352px]"
                    />
                    <Icon />
                  </Link>
                  <Link additionalClassNames="w-[468.913px]">
                    <TextText2
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
    </div>
  );
}
