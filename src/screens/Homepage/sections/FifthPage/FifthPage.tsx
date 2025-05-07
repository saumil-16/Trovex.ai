import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const statistics = [
  {
    value: "45%",
    description: "Faster speed to proficiency",
  },
  {
    value: "21%",
    description: "Improvement in win rates",
  },
  {
    value: "5x",
    description: "More practice",
  },
];

const featureCards = [
  {
    title: "Reduce Your Ramp Time",
    description:
      "Let your sales rep hit the floor 2x faster with hyper-realistic roleplay.",
    content: (
      <div className="relative w-[164px] h-[85px] mx-auto mt-[17px]">
        <div className="absolute w-[66px] h-2.5 top-[75px] left-24">
          <div className="relative w-[62px] h-2.5 bg-white rounded-[23.88px]">
            <div className="w-[5px] h-[5px] top-[3px] left-[3px] rounded-[2.46px] absolute bg-[#e74c3c]" />
            <div className="absolute h-1.5 top-0.5 left-[11px] [font-family:'Geist',Helvetica] font-medium text-[#545454] text-[5.2px] tracking-[-0.10px] leading-[6.2px] whitespace-nowrap">
              0:24
            </div>
            <div className="h-[7px] top-0.5 left-7 text-[5.2px] tracking-[-0.10px] leading-[6.2px] absolute [font-family:'Geist',Helvetica] font-normal text-[#545454] whitespace-nowrap">
              <span className="font-medium tracking-[-0.01px]">Recording</span>
              <span className="font-medium text-[5.8px] tracking-[-0.01px] leading-[7.0px]">
                ...
              </span>
            </div>
            <img
              className="h-[9px] top-0 left-[25px] absolute w-px"
              alt="Line"
              src="/line-1.svg"
            />
          </div>
        </div>
        <div className="absolute w-[164px] h-[71px] top-0 left-0">
          <div className="absolute w-[158px] h-[60px] top-[11px] left-0">
            <div className="relative w-[158px] h-[60px] bg-white rounded-[12.46px]">
              <div className="absolute w-[138px] h-[22px] top-[27px] left-3 [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[8.3px] tracking-[-0.17px] leading-[11.2px]">
                I'd love to tell you about how Trovex AI can 10x your sales
                teams.
              </div>
              <div className="absolute h-[13px] top-[9px] left-3 [background:linear-gradient(180deg,rgba(130,84,243,1)_9%,rgba(199,63,162,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[9.3px] tracking-[-0.19px] leading-[12.6px] whitespace-nowrap">
                Neel Gupta
              </div>
            </div>
          </div>
          <img
            className="absolute w-[29px] h-[29px] top-0 left-[135px] object-cover"
            alt="Profile"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Evaluate Real Calls",
    description:
      "Get AI-driven scores instantly and provide personalised feedback.",
    content: (
      <div className="w-[183px] h-[90px] mx-auto mt-4">
        <div className="absolute w-[113px] h-[90px] top-0 left-[70px]">
          <div className="absolute w-[113px] h-[27px] top-0 left-0 bg-[#faf7ff] rounded-[4.49px]">
            <div className="relative w-[100px] h-3 top-2 left-1.5">
              <img
                className="absolute w-[11px] h-[11px] top-px left-0"
                alt="Vector"
                src="/vector-3.svg"
              />
              <div className="absolute h-3 top-0 left-[15px] [font-family:'Geist',Helvetica] font-medium text-[#016b57] text-[7.8px] tracking-[0] leading-[11.8px] whitespace-nowrap">
                85% Talking Points Hit
              </div>
            </div>
          </div>
          
        </div>
        <img
          className="absolute w-[53px] h-[59px] top-[15px] left-0"
          alt="Vector"
          src="/vector-10.svg"
        />
      </div>
    ),
  },
  {
    title: "Encourage Mastery",
    description:
      "Assign role-plays anytime for your reps to practice on their terms.",
    content: (
      <div className="relative w-[195px] h-[109px] mx-auto mt-2.5">
        <div className="absolute w-[111px] h-[109px] top-0 left-0">
          <div className="relative w-[116px] h-[109px] left-[-3px] bg-[#f4edff] rounded-[7.99px_7.99px_0px_0px]">
            <div className="relative w-[97px] h-[88px] top-[11px] left-[9px]">
              <div className="absolute w-[71px] h-[54px] top-0 left-[11px]">
                <div className="relative w-[71px] h-[54px]">
                  <div className="w-[75px] h-[19px] top-[35px] absolute left-0">
                    <div className="h-[11px] left-2.5 [background:linear-gradient(180deg,rgba(130,84,243,1)_9%,rgba(199,63,162,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Inter',Helvetica] font-normal text-transparent text-[8px] tracking-[-0.16px] leading-[10.8px] absolute top-0 whitespace-nowrap">
                      Tony Marshal
                    </div>
                    <div className="absolute h-2 top-[11px] left-0 [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[6px] tracking-[-0.12px] leading-[8.1px] whitespace-nowrap">
                      Vice President @ WeWork
                    </div>
                  </div>
                  <img
                    className="absolute w-[31px] h-[31px] top-0 left-5"
                    alt="Profile"
                  />
                </div>
              </div>
              <div className="absolute w-[97px] h-[27px] top-[61px] left-0">
                <div className="flex flex-col w-[97px] items-center gap-[3px]">
                  <div className="inline-flex items-center gap-[3px]">
                    <div className="inline-flex items-center justify-center gap-0.5 px-[3.84px] py-[1.92px] bg-white rounded-[29.95px] border-[none]">
                      <img
                        className="w-[5.76px] h-[5.76px]"
                        alt="Warm"
                        src="/warm-1.svg"
                      />
                      <div className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-[#b745b6] text-[5.8px] tracking-[-0.23px] leading-[7.8px] whitespace-nowrap">
                        Warm Lead
                      </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-0.5 px-[3.84px] py-[1.92px] bg-white rounded-[29.95px] border-[none]">
                      <img
                        className="w-[6.72px] h-[6.72px]"
                        alt="Brain"
                        src="/brain.svg"
                      />
                      <div className="mt-[-0.50px] text-[5.8px] tracking-[-0.23px] leading-[7.8px] [font-family:'Inter',Helvetica] font-medium text-[#b745b6] whitespace-nowrap">
                        Kind
                      </div>
                    </div>
                  </div>
                  <div className="inline-flex items-center justify-center gap-0.5 px-[3.84px] py-[1.92px] bg-white rounded-[29.95px] border-[none]">
                    <div className="mt-[-0.50px] [font-family:'Inter',Helvetica] font-medium text-[#b745b6] text-[5.8px] tracking-[-0.23px] leading-[7.8px] whitespace-nowrap">
                      What are the next steps?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-24 h-[59px] top-[25px] left-[99px]">
          <div className="absolute w-[100px] h-4 top-0 left-0">
            <div className="relative w-24 h-4 bg-[#faf7ff] rounded-[20.77px]">
              <div className="absolute w-[17px] h-2.5 top-[3px] left-1">
                <img
                  className="absolute w-2.5 h-2.5 top-0 left-[7px]"
                  alt="Profile"
                />
                <img
                  className="absolute w-1 h-1 top-[3px] left-0"
                  alt="Vector"
                  src="/vector-9.svg"
                />
              </div>
              <div className="h-[5px] top-[5px] left-6 text-[3.9px] tracking-[-0.08px] leading-[5.3px] absolute [font-family:'Geist',Helvetica] font-semibold text-[#2d3436] whitespace-nowrap">
                Prachi Sharma
              </div>
              <div className="absolute h-[5px] top-[5px] left-[54px] [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[3.9px] tracking-[-0.08px] leading-[5.3px] whitespace-nowrap">
                12:24
              </div>
              <div className="left-[76px] absolute w-[17px] h-1 top-1.5">
                <div className="h-1 left-0 [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[2.9px] tracking-[-0.06px] leading-[3.9px] absolute top-0 whitespace-nowrap">
                  May 24
                </div>
                <img
                  className="absolute w-[3px] h-[3px] top-px left-[13px]"
                  alt="Menu"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[100px] h-4 top-[22px] left-0">
            <div className="relative w-24 h-4 bg-[#faf7ff] rounded-[20.77px]">
              <div className="absolute w-[17px] h-2.5 top-[3px] left-1">
                <img
                  className="absolute w-2.5 h-2.5 top-0 left-[7px] object-cover"
                  alt="Profile"
                />
                <img
                  className="absolute w-1 h-1 top-[3px] left-0"
                  alt="Vector"
                  src="/vector-9.svg"
                />
              </div>
              <div className="absolute h-[5px] top-[5px] left-6 [font-family:'Geist',Helvetica] font-semibold text-[#2d3436] text-[3.9px] tracking-[-0.08px] leading-[5.3px] whitespace-nowrap">
                Rohit Bansal
              </div>
              <div className="absolute h-[5px] top-[5px] left-[54px] [font-family:'Geist',Helvetica] font-medium text-[#e74c3c] text-[3.9px] tracking-[-0.08px] leading-[5.3px] whitespace-nowrap">
                01:52
              </div>
              <div className="left-[76px] absolute w-[17px] h-1 top-1.5">
                <div className="h-1 left-0 [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[2.9px] tracking-[-0.06px] leading-[3.9px] absolute top-0 whitespace-nowrap">
                  May 25
                </div>
                <img
                  className="absolute w-[3px] h-[3px] top-px left-[13px]"
                  alt="Menu"
                />
              </div>
            </div>
          </div>
          <div className="absolute w-[99px] h-[15px] top-[43px] left-px">
            <div className="relative w-[95px] h-[15px] bg-[#faf7ff] rounded-[20.54px]">
              <div className="absolute w-[17px] h-2.5 top-[3px] left-1">
                <img
                  className="absolute w-2.5 h-2.5 top-0 left-[7px] object-cover"
                  alt="Profile"
                />
                <img
                  className="absolute w-1 h-1 top-[3px] left-0"
                  alt="Vector"
                  src="/vector-17.svg"
                />
              </div>
              <div className="absolute h-[5px] top-[5px] left-[23px] [font-family:'Geist',Helvetica] font-semibold text-[#2d3436] text-[3.9px] tracking-[-0.08px] leading-[5.2px] whitespace-nowrap">
                Aman Goel
              </div>
              <div className="absolute h-[5px] top-[5px] left-[53px] [font-family:'Geist',Helvetica] font-medium text-[#016b57] text-[3.9px] tracking-[-0.08px] leading-[5.2px] whitespace-nowrap">
                18:57
              </div>
              <div className="left-[75px] absolute w-[17px] h-1 top-1.5">
                <div className="h-1 left-0 [font-family:'Geist',Helvetica] font-medium text-[#2d3436] text-[2.9px] tracking-[-0.06px] leading-[3.9px] absolute top-0 whitespace-nowrap">
                  May 27
                </div>
                <img
                  className="absolute w-[3px] h-[3px] top-px left-3"
                  alt="Menu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Plug Skill Gaps",
    description:
      "Spot knowledge gaps and get personalized training recommendations.",
    content: (
      <img className="w-[222px] h-[120px]" alt="Skill gaps visualization" />
    ),
  },
];

const infoSections = [
  {
    title: "Trovex's Call Recorder listens to every calls your reps take",
    icons: [{ alt: "Icon 1" }, { alt: "Icon 2" }, { alt: "Icon 3" }],
  },
  {
    title: "Hire or Train the best sales rep with our scalable assessment.",
    icons: [
      { alt: "Profile 1" },
      { alt: "Profile 2" },
      { alt: "Profile 3" },
      { alt: "Profile 4" },
    ],
  },
];

export const SolutionPage = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1180px] mx-auto py-16">
      <div className="flex flex-col items-center">
        
        <div className="flex items-center mb-8">
          <div className="relative w-[30px] h-[30px] mr-2">
            <div className="absolute w-[30px] h-[30px] rounded-full border-2 border-[#c73fa2]"></div>
            <div className="absolute w-[20px] h-[20px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c73fa2]"></div>
            <div className="absolute w-[10px] h-[10px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#c73fa2]"></div>
          </div>
          <span className="text-[20px] font-bold">
            <span className="text-[#1e3a8a]">Trovex</span>
            <span className="text-[#c73fa2]">.ai</span>
          </span>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-[48px] font-bold leading-tight">
            <span className="text-gray-800">Supercharge your sales training </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8254f3] to-[#c73fa2]">
              with AI That Truly Delivers
            </span>
          </h1>
        </div>

        <div className="w-full max-w-[1124px] mb-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-center text-[28px] font-bold leading-[33.6px] tracking-[-1px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
              The Trovex Advantage
            </h2>
            <p className="text-base leading-6 max-w-[403px] font-medium text-[#474646]">
              Trained on over{" "}
              <span className="text-black">1.8 million hours</span> of B2B sales
              calls and <span className="text-black">150,000+</span> roleplays,
              Trovex AI empowers your team to close deals faster with
              hyper-realistic roleplays.
            </p>
          </div>

          <div className="flex justify-center gap-20">
            {statistics.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-5xl font-bold tracking-[-1px] leading-[57.6px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
                  {stat.value}
                </span>
                <span className="text-base font-medium text-black tracking-[-0.25px] leading-6">
                  {stat.description}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-[url(/rectangle-4.svg)] bg-[100%_100%] py-16">
          <div className="max-w-[1040px] mx-auto">
            
            <div className="flex justify-between mb-12">
              <Card className="w-[260px] h-[295px] bg-[#faf7ff] rounded-3xl border-[#e5ddf4]">
                <div className="h-[120px] mx-[19px] mt-4 bg-white rounded-[12px_12px_0px_0px] border border-solid border-[#ededed]">
                  {featureCards[0].content}
                </div>
                <CardContent className="pt-5">
                  <h3 className="text-[20.6px] font-bold leading-[24.7px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
                    {featureCards[0].title}
                  </h3>
                  <p className="text-[14.4px] font-medium text-neutral-800 leading-[21.6px]">
                    {featureCards[0].description}
                  </p>
                </CardContent>
              </Card>

              <div className="relative">
                <img
                  className="w-[167px] h-[75px]"
                  alt="Connector"
                  src="/union.svg"
                />
              </div>

              <Card className="w-[260px] h-[295px] bg-[#faf7ff] rounded-3xl border-[#e5ddf4]">
                <div className="h-[120px] mx-[18px] mt-[15px] bg-white rounded-[12px_12px_0px_0px] border border-solid border-[#ededed]">
                  {featureCards[1].content}
                </div>
                <CardContent className="pt-3">
                  <h3 className="text-[20.6px] font-bold leading-[24.7px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
                    {featureCards[1].title}
                  </h3>
                  <p className="text-[14.4px] font-medium text-neutral-800 leading-[21.6px]">
                    {featureCards[1].description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between mb-12">
              <div className="max-w-[237px]">
                <h4 className="text-base font-medium text-[#2d3436] leading-[21.6px] mb-6">
                  {infoSections[1].title}
                </h4>
                <div className="flex">
                  {infoSections[1].icons.map((icon, index) => (
                    <img
                      key={index}
                      className="w-[35px] h-[35px] mr-[-10px]"
                      alt={icon.alt}
                    />
                  ))}
                </div>
              </div>

              <div className="max-w-[258px]">
                <h4 className="text-lg font-medium text-[#2d3436] leading-[24.3px] mb-6">
                  {infoSections[0].title}
                </h4>
                <div className="flex gap-3">
                  {infoSections[0].icons.map((icon, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 bg-[#faf7ff] rounded-lg border border-solid border-[#e5ddf4] flex items-center justify-center"
                    >
                      <img className="w-[33px] h-[33px]" alt={icon.alt} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              
              <div className="relative">
                <img
                  className="w-[76px] h-[188px]"
                  alt="Connector"
                  src="/union-1.svg"
                />
              </div>

              <Card className="w-[260px] h-[295px] bg-[#faf7ff] rounded-3xl border-[#e5ddf4]">
                <div className="h-[120px] mx-[19px] mt-4 bg-white rounded-[12px_12px_0px_0px] border border-solid border-[#ededed]">
                  {featureCards[2].content}
                </div>
                <CardContent className="pt-5">
                  <h3 className="text-[20.6px] font-bold leading-[24.7px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
                    {featureCards[2].title}
                  </h3>
                  <p className="text-[14.4px] font-medium text-neutral-800 leading-[21.6px]">
                    {featureCards[2].description}
                  </p>
                </CardContent>
              </Card>

              <div className="relative">
                <img
                  className="w-[188px] h-[76px]"
                  alt="Connector"
                  src="/union-2.svg"
                />
              </div>

              <Card className="w-[260px] h-[295px] bg-[#faf7ff] rounded-3xl border-[#e5ddf4]">
                <div className="h-[120px] mx-[18px] mt-[15px] bg-white rounded-[12px_12px_0px_0px] border border-solid border-[#ededed]">
                  {featureCards[3].content}
                </div>
                <CardContent className="pt-3">
                  <h3 className="text-[20.6px] font-bold leading-[24.7px] mb-3 bg-gradient-to-b from-[rgba(130,84,243,1)] from-[9%] to-[rgba(199,63,162,1)] to-[100%] bg-clip-text text-transparent [font-family:'Geist',Helvetica]">
                    {featureCards[3].title}
                  </h3>
                  <p className="text-[14.4px] font-medium text-neutral-800 leading-[21.6px]">
                    {featureCards[3].description}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};