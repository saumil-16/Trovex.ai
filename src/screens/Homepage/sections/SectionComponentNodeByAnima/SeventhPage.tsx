import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const EndingPage = () => {
  const featureCards = [
    {
      id: 1,
      title: "Create a scenario",
      description:
        "Craft hyper-realistic scenarios that mirror your most challenging customer interactions.",
      content: (
        <div className="w-full h-[253px] relative">
          <div className="w-full h-[70px] mb-[22px]">
            <div className="relative h-[70px] bg-[#faf7ff] rounded-[18.33px] flex items-center px-5">
              <div className="flex items-center">
                <img
                  className="w-[17px] h-[15px] mr-2"
                  alt="Vector"
                  src="/vector-11.svg"
                />
                <div className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-bold text-[13.7px] tracking-[-0.27px] leading-[18.6px]">
                  Topic
                </div>
              </div>
              <div className="ml-4 font-medium text-[#2d3436] text-[12.2px] tracking-[-0.24px] leading-[16.5px] whitespace-nowrap">
                Why should we buy your product?
              </div>
            </div>
          </div>

          <div className="w-full h-[70px] mb-[21px] bg-[#faf7ff] rounded-[18.33px]">
            <div className="relative h-[70px] flex items-center px-5">
              <div className="flex items-center">
                <img
                  className="w-4 h-[13px] mr-2"
                  alt="Group"
                  src="/group-icon.svg"
                />
                <div className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-bold text-[13.7px] tracking-[-0.27px] leading-[18.6px]">
                  Conversation Partner
                </div>
              </div>
              <div className="ml-4 font-medium text-[#2d3436] text-[12.2px] tracking-[-0.24px] leading-[16.5px] whitespace-nowrap">
                Search Client
              </div>
              <img
                className="absolute w-5 h-5 top-1/2 right-5 transform -translate-y-1/2"
                alt="Search"
                src="/search-icon.svg"
              />
            </div>
          </div>

          <div className="w-full h-[70px] bg-[#faf7ff] rounded-[18.33px]">
            <div className="relative h-[70px] flex items-center px-5">
              <div className="flex items-center">
                <img
                  className="w-[13px] h-[18px] mr-2"
                  alt="Group"
                  src="/persona-icon.svg"
                />
                <div className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-bold text-[13.7px] tracking-[-0.27px] leading-[18.6px]">
                  Persona
                </div>
              </div>
              <div className="ml-4 font-medium text-[#2d3436] text-[12.2px] tracking-[-0.24px] leading-[16.5px] whitespace-nowrap">
                Skeptical, Rude
              </div>
              <img
                className="absolute w-5 h-5 top-1/2 right-5 transform -translate-y-1/2"
                alt="Dropdown"
                src="/dropdown-arrow.svg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: "Power Up the Simulator",
      description:
        "Assign role-plays anytime for your reps to practice on their terms.",
      content: (
        <div className="w-full h-[252px] relative">
          <div className="absolute w-[263px] h-[115px] top-0 left-0">
            <div className="relative w-[263px] h-[115px]">
              <div className="absolute w-[238px] h-[87px] top-0 left-[25px] bg-white rounded-[17.97px] p-4">
                <div className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-bold text-[13.5px] tracking-[-0.27px] leading-[18.2px] mb-2">
                  Trovex AI
                </div>
                <div className="font-medium text-[#2d3436] text-xs tracking-[-0.24px] leading-[16.2px]">
                  So how does your pricing works? <br />
                  Any extra costs I should be aware of?
                </div>
              </div>
              <div className="absolute w-[30px] h-[34px] top-[81px] left-0">
                <div className="relative h-[34px]">
                  <div className="absolute w-[25px] h-[25px] top-0 left-1 rounded-[12.58px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%]" />
                  <img
                    className="absolute w-[15px] h-[15px] top-[5px] left-2.5"
                    alt="Vector"
                    src="/vector-13.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[252px] h-[110px] top-[85px] right-0">
            <div className="relative w-[252px] h-[110px]">
              <div className="absolute w-[244px] h-[93px] top-[17px] left-0 bg-white rounded-[19.17px] border-[none] p-4">
                <div className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-bold text-[14.4px] tracking-[-0.29px] leading-[19.4px] mb-2">
                  Prachi Sharma
                </div>
                <div className="flex justify-between w-full h-10">
                  {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={`wave1-${i}`}
                      className="w-1 h-[27px] mt-[7px] rounded-[30px] bg-gradient-to-b from-[rgba(130,84,243,0.72)_9%] to-[rgba(199,63,162,0.72)_100%]"
                    />
                  ))}
                  <div className="flex justify-between w-24 h-10 ml-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                      <div
                        key={`wave2-${i}`}
                        className="w-1 h-[27px] mt-[7px] rounded-[30px] bg-gradient-to-b from-[rgba(130,84,243,0.72)_9%] to-[rgba(199,63,162,0.72)_100%]"
                      />
                    ))}
                  </div>
                  <div className="w-4 h-[27px] flex justify-between">
                    <div className="w-1 h-4 mt-[5px] rounded-[30px] bg-gradient-to-b from-[rgba(130,84,243,0.72)_9%] to-[rgba(199,63,162,0.72)_100%]" />
                    <div className="w-1 h-[27px] rounded-[30px] bg-gradient-to-b from-[rgba(130,84,243,0.72)_9%] to-[rgba(199,63,162,0.72)_100%]" />
                  </div>
                </div>
              </div>
              <img
                className="absolute w-[45px] h-[45px] top-0 right-0"
                alt="Profile"
              />
            </div>
          </div>

          <div className="absolute w-[230px] h-[34px] bottom-0 left-1/2 -translate-x-1/2">
            <div className="relative w-[230px] h-[34px] bg-white rounded-[80.37px] flex items-center px-4">
              <div className="w-[17px] h-[17px] rounded-[8.28px] bg-[#e74c3c]" />
              <div className="ml-3 font-medium text-[#545454] text-[17.5px] tracking-[-0.35px] leading-[21.0px] whitespace-nowrap">
                0:24
              </div>
              <div className="ml-auto flex items-center">
                <div className="font-medium text-[#545454] text-[17.5px] tracking-[-0.35px] leading-[21.0px] whitespace-nowrap">
                  Next Question
                </div>
                <img
                  className="w-2 h-3.5 ml-2"
                  alt="Vector"
                  src="/vector.svg"
                />
              </div>
              <img
                className="absolute h-8 top-px right-[82px] w-px"
                alt="Line"
                src="/line-1-1.svg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: "Review the Results",
      description:
        "Spot every gap—knowledge, tone, word choice, sentiment, and method—in one clear click.",
      content: (
        <div className="w-full h-[290px] relative">
          <div className="absolute w-[157px] h-[157px] top-[63px] right-0 bg-[#eac9eb] rounded-[78.26px] blur-[42px]" />
          <img
            className="absolute w-[219px] h-[290px] top-0 right-0 object-cover"
            alt="Results visualization"
          />
          <div className="absolute w-[202px] h-40 top-[60px] left-0 flex flex-col gap-2">
            <div className="w-full h-12 bg-[#faf7ff] rounded-lg flex items-center px-2.5">
              <img
                className="w-[19px] h-[19px]"
                alt="Vector"
                src="/vector-3.svg"
              />
              <div className="ml-[7px] font-medium text-[#016b57] text-sm leading-[21px]">
                85% Talking Points Hit
              </div>
            </div>

            <div className="w-full h-12 bg-[#faf7ff] rounded-lg flex items-center px-[11px]">
              <img
                className="w-[17px] h-[17px]"
                alt="Xmlid"
                src="/xmlid-75-.svg"
              />
              <div className="ml-2 font-medium text-[#016b57] text-sm leading-[21px]">
                Objective Handling
              </div>
            </div>

            <div className="w-full h-12 bg-[#faf7ff] rounded-lg flex items-center px-[11px]">
              <img
                className="w-[17px] h-[19px]"
                alt="Vector"
                src="/vector-27.svg"
              />
              <div className="ml-2 font-medium text-[#e74c3c] text-sm leading-[21px]">
                Open-Ended Questions
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full max-w-[1123px] mx-auto py-16">
      <div className="max-w-[422px] mb-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-5xl font-bold tracking-[-2.00px] leading-[57.6px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent">
            How Trovex Solves These Problems
          </h2>

          <p className="text-base font-medium tracking-[-0.32px] leading-6 text-black">
            Learn how our platform helps you power up your sales team.
          </p>

          <div className="flex items-center gap-3">
            <Button className="h-[46px] px-6 py-3 rounded-xl shadow-[inset_0px_2px_1px_#ffffff66] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] text-white text-sm">
              Book a Demo
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        {featureCards.map((card) => (
          <Card
            key={card.id}
            className="w-full max-w-[496px] h-[495px] ml-auto bg-[url(/rectangle-1563.svg)] bg-[100%_100%] border-none"
          >
            <CardContent className="p-0">
              <div className="w-[447px] h-[297px] mx-auto mt-[30px] bg-white rounded-[22.88px]">
                {card.content}
              </div>
              <div className="w-[440px] mx-auto mt-7">
                <h3 className="text-[22.9px] font-bold leading-[27.5px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent">
                  {card.title}
                </h3>
                <p className="mt-4 font-medium text-neutral-800 text-base leading-6">
                  {card.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};