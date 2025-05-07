import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    id: 1,
    title: "Simulated Autodialer",
    description: "Throw AI roleplay scenarios into sequences and start simulated call blitzes.",
  },
  {
    id: 2,
    title: "Pre-Call Preparation",
    description: "Prepare for an upcoming call with a prospect by creating a digital AI twin of the prospect & cloning their voice.",
  },
  {
    id: 3,
    title: "Calling Competitions",
    description: "Gamify learning with internal calling competitions with leaderboards",
  },
  {
    id: 4,
    title: "AI Roleplay Practice Recommendations",
    description: "Practice personalized AI roleplay scenarios recommended by Trovex's AI based on real calls. Create personalized daily warmups, objection handling, knowledge, & competitive positioning drills",
  },
];

export const SetupPage = () => {
  return (
    <section className="w-full max-w-[1202px] mx-auto py-16">
    
      <div className="w-full max-w-[807px] mx-auto flex flex-col items-center justify-center gap-4 mb-16">
        <h2 className="text-5xl font-bold text-center tracking-[-2.00px] leading-[57.6px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent">
          Everything you need to Upskill your Sales Force
        </h2>
        <p className="font-medium text-black text-base text-center tracking-[-0.32px] leading-6">
          Transform your sales reps into rockstars
        </p>
        <Button className="h-[46px] px-6 py-3 rounded-xl shadow-[inset_0px_2px_1px_#ffffff66] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] border-none text-white text-sm">
          Book a Demo
        </Button>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <Card className="h-[433px] bg-[#faf7ff] rounded-3xl border border-solid border-[#ebddf1]">
          <CardContent className="p-0 h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="w-full h-[260px] bg-white rounded-[20px] border border-solid border-[#e7e7e7] mb-6">
                <div className="flex justify-center">
                  <div className="w-full h-[227px] mt-[33px] px-4">
                    
                    {[
                      { name: "Prachi Sharma", time: "12:24", date: "May 24", color: "#2d3436" },
                      { name: "Rohit Bansal", time: "01:52", date: "May 25", color: "#e74c3c" },
                      { name: "Aman Goel", time: "18:57", date: "May 27", color: "#016b57" },
                    ].map((call, index) => (
                      <div
                        key={index}
                        className="relative w-full h-[52px] mb-4"
                      >
                        <div className="w-full h-[52px] bg-[#faf7ff] rounded-[69.22px] flex items-center px-4">
                          <div className="flex items-center gap-3">
                            <div className="relative w-[35px] h-[35px]">
                              <div className="w-3.5 h-3.5 absolute top-2.5 left-0 rounded-full bg-[#8254f3]" />
                              <div className="w-[35px] h-[35px] absolute top-0 left-3 rounded-full bg-gray-200" />
                            </div>
                            <div className="font-semibold text-[#2d3436] text-[13px] tracking-[-0.26px] leading-[17.5px]">
                              {call.name}
                            </div>
                          </div>
                          <div className="ml-auto flex items-center gap-3">
                            <div
                              className="font-medium text-[13px] tracking-[-0.26px] leading-[17.5px]"
                              style={{ color: call.color }}
                            >
                              {call.time}
                            </div>
                            <div className="font-medium text-[#2d3436] text-[9.7px] tracking-[-0.19px] leading-[13.1px]">
                              {call.date}
                            </div>
                            <div className="w-2 h-2 rounded-full bg-[#8254f3]" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold tracking-[0] leading-[24px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent mb-2.5">
                  {featureCards[0].title}
                </h3>
                <p className="font-medium text-neutral-800 text-base tracking-[-0.32px] leading-6">
                  {featureCards[0].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-[433px] bg-[#faf7ff] rounded-3xl border border-solid border-[#ebddf1]">
          <CardContent className="p-0 h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="w-full h-[260px] bg-white rounded-[20px] border border-solid border-[#f2f2f2] mb-6">
                <div className="relative w-[230px] h-[238px] mx-auto mt-[22px]">
                  <div className="absolute w-[230px] h-[227px] top-[11px] left-0">
                    <div className="relative w-[241px] h-[227px] left-[-5px] bg-[#f4edff] rounded-[16.64px_16.64px_0px_0px]">
                      <div className="relative w-[203px] h-[181px] top-[23px] left-[19px]">
                        <div className="absolute w-[147px] h-28 top-0 left-6">
                          <div className="relative w-[147px] h-28">
                            <div className="w-[151px] h-[39px] absolute top-[73px] left-0">
                              <div className="absolute h-[22px] left-[21px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent text-[16.6px] tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
                                Tony Marshal
                              </div>
                              <div className="absolute h-[17px] top-[22px] left-0 font-medium text-[#2d3436] text-[12.5px] tracking-[-0.25px] leading-[16.8px] whitespace-nowrap">
                                Vice President @ WeWork
                              </div>
                            </div>
                            <div className="absolute w-[65px] h-[65px] top-0 left-[41px] rounded-full bg-gray-200" />
                          </div>
                        </div>
                        <div className="absolute w-[203px] h-[54px] top-[127px] left-0">
                          <div className="flex flex-col w-[203px] items-center gap-[6.24px]">
                            <div className="inline-flex items-center gap-[6.24px]">
                              <div className="inline-flex items-center justify-center gap-[4.16px] px-2 py-1 bg-white rounded-[62.4px] border-[none]">
                                <div className="w-3 h-3 rounded-full bg-[#8254f3]" />
                                <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                  Warm Lead
                                </div>
                              </div>
                              <div className="inline-flex items-center justify-center gap-[4.16px] px-2 py-1 bg-white rounded-[62.4px] border-[none]">
                                <div className="w-3.5 h-3.5 rounded-full bg-[#8254f3]" />
                                <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                  Kind
                                </div>
                              </div>
                            </div>
                            <div className="inline-flex items-center justify-center gap-[4.16px] px-2 py-1 bg-white rounded-[62.4px] border-[none]">
                              <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                What are the next steps?
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-[147px] h-[22px] top-0 left-[39px]">
                    <div className="relative w-[147px] h-[22px] bg-white rounded-[51.44px] flex items-center px-2">
                      <div className="w-[11px] h-[11px] rounded-[5.3px] bg-[#e74c3c]" />
                      <div className="ml-2 font-medium text-[#545454] text-[11.2px] tracking-[-0.22px] leading-[13.4px] whitespace-nowrap">
                        0:24
                      </div>
                      <div className="ml-auto font-medium text-[#545454] text-[11.2px] tracking-[-0.22px] leading-[13.4px] whitespace-nowrap">
                        Next Question
                      </div>
                      <div className="w-[5px] h-[9px] ml-2">
                        <svg className="w-full h-full text-[#545454]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold tracking-[0] leading-[24px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent mb-2.5">
                  {featureCards[1].title}
                </h3>
                <p className="font-medium text-neutral-800 text-base tracking-[-0.32px] leading-6">
                  {featureCards[1].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-[433px] bg-[#faf7ff] rounded-3xl border border-solid border-[#ebddf1]">
          <CardContent className="p-0 h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="w-full h-[260px] bg-white rounded-[20px] border border-solid border-[#f2f2f2] mb-6">
                <div className="relative w-[270px] h-[235px] mx-auto mt-[25px]">
                  <div className="absolute w-[243px] h-[235px] top-0 left-3.5">
                    <div className="absolute w-[117px] h-[235px] top-0 left-16">
                      <div className="absolute w-[71px] h-[71px] top-0 left-[22px] rounded-full bg-gray-200" />
                      <div className="absolute w-[115px] h-[152px] top-[83px] left-0">
                        <div className="relative w-[115px] h-[152px]">
                          <div className="absolute w-[115px] h-[152px] top-0 left-0">
                            <div className="absolute w-[115px] h-[126px] top-[26px] left-0 bg-gradient-to-b from-[rgba(139,82,233,1)] to-[rgba(226,199,255,1)]" />
                            <div className="absolute w-[115px] h-[26px] top-0 left-0 bg-[#8254f3] rounded-t-lg" />
                          </div>
                          <div className="absolute top-14 left-[34px] font-black text-white text-3xl text-center leading-[44.9px]">
                            89
                            <br />
                            <span className="text-[15px] leading-[22.5px]">points</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute w-[63px] h-[63px] top-[41px] left-[26px] rounded-full bg-gray-200" />
                    </div>
                    <div className="absolute w-[51px] h-[51px] top-[83px] left-48 rounded-full bg-gray-200" />
                    <div className="absolute w-[57px] h-[57px] top-[57px] left-0 rounded-full bg-gray-200" />
                    <div className="absolute top-44 left-[210px] font-black text-white text-[22.5px] text-center leading-[33.7px]">
                      65
                      <br />
                      <span className="text-[13.1px] leading-[19.7px]">points</span>
                    </div>
                    <div className="absolute top-44 left-[18px] font-black text-white text-[22.5px] text-center leading-[33.7px]">
                      72
                      <br />
                      <span className="text-[13.1px] leading-[19.7px]">points</span>
                    </div>
                    <div className="absolute w-[58px] h-[58px] top-[91px] left-[13px] rounded-full bg-gray-200" />
                    <div className="absolute w-[58px] h-[58px] top-28 left-[203px] rounded-full bg-gray-200" />
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold tracking-[0] leading-[24px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent mb-2.5">
                  {featureCards[2].title}
                </h3>
                <p className="font-medium text-neutral-800 text-base tracking-[-0.32px] leading-6">
                  {featureCards[2].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="h-[433px] bg-[#faf7ff] rounded-3xl border border-solid border-[#ebddf1]">
          <CardContent className="p-0 h-full">
            <div className="p-6 h-full flex flex-col">
              <div className="w-full h-[260px] bg-white rounded-[20px] border border-solid border-[#f2f2f2] mb-6">
                <div className="flex justify-center">
                  <div className="w-[588px] h-[227px] mt-[33px] relative">
                    <div className="absolute w-[230px] h-[227px] top-0 left-0">
                      <div className="h-[227px] bg-[#f4edff] rounded-[16.64px_16.64px_0px_0px]">
                        <div className="relative w-[203px] h-[187px] top-[18px] left-3.5">
                          <div className="absolute w-[114px] h-28 top-0 left-11">
                            <div className="relative w-[114px] h-28">
                              <div className="absolute w-[118px] h-[39px] top-[73px] left-0">
                                <div className="absolute h-[22px] left-0 bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent text-[16.6px] tracking-[-0.33px] leading-[22.5px] whitespace-nowrap">
                                  Janice Watson
                                </div>
                                <div className="absolute h-[17px] top-[22px] left-0.5 font-medium text-[#2d3436] text-[12.5px] tracking-[-0.25px] leading-[16.8px] whitespace-nowrap">
                                  Director @ Hubspot
                                </div>
                              </div>
                              <div className="absolute w-[65px] h-[65px] top-0 left-[22px] rounded-full bg-gray-200" />
                            </div>
                          </div>
                          <div className="absolute w-[203px] h-[55px] top-[132px] left-0">
                            <div className="flex flex-col w-[203px] items-center gap-[6.24px]">
                              <div className="inline-flex items-center gap-[6.24px]">
                                <div className="inline-flex items-center justify-center gap-[4.16px] px-2 py-1 bg-white rounded-[62.4px] border-[none]">
                                  <div className="w-4 h-4 rounded-full bg-[#8254f3]" />
                                  <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                    Cold Call
                                  </div>
                                </div>
                                <div className="inline-flex items-center justify-center gap-[4.16px] px-2 py-1 bg-white rounded-[62.4px] border-[none]">
                                  <div className="w-3.5 h-3.5 rounded-full bg-[#8254f3]" />
                                  <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                    Rude
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-center gap-[4.16px] px-2 py-1 w-full bg-white rounded-[62.4px] border-[none]">
                                <div className="font-medium text-[#b745b6] text-xs tracking-[-0.48px] leading-[16.2px] whitespace-nowrap">
                                  Why is your product expensive?
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute w-80 h-[182px] top-[22px] left-[267px]">
                      
                      {[
                        { name: "Prachi Sharma", time: "12:24", date: "May 24", color: "#2d3436" },
                        { name: "Rohit Bansal", time: "01:52", date: "May 25", color: "#e74c3c" },
                        { name: "Aman Goel", time: "18:57", date: "May 27", color: "#016b57" },
                      ].map((call, index) => (
                        <div
                          key={index}
                          className="absolute w-[324px] h-[52px] top-[65px] left-0"
                          style={{ top: `${index * 65}px` }}
                        >
                          <div className="relative w-80 h-[52px] bg-[#faf7ff] rounded-[69.22px] flex items-center px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-[35px] h-[35px]">
                                <div className="w-3.5 h-3.5 absolute top-2.5 left-0 rounded-full bg-[#8254f3]" />
                                <div className="w-[35px] h-[35px] absolute top-0 left-3 rounded-full bg-gray-200" />
                              </div>
                              <div className="font-semibold text-[#2d3436] text-[13px] tracking-[-0.26px] leading-[17.5px]">
                                {call.name}
                              </div>
                            </div>
                            <div className="ml-auto flex items-center gap-3">
                              <div
                                className="font-medium text-[13px] tracking-[-0.26px] leading-[17.5px]"
                                style={{ color: call.color }}
                              >
                                {call.time}
                              </div>
                              <div className="font-medium text-[#2d3436] text-[9.7px] tracking-[-0.19px] leading-[13.1px]">
                                {call.date}
                              </div>
                              <div className="w-2 h-2 rounded-full bg-[#8254f3]" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <h3 className="text-xl font-bold tracking-[0] leading-[24px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent mb-2.5">
                  {featureCards[3].title}
                </h3>
                <p className="font-medium text-neutral-800 text-base tracking-[-0.32px] leading-6">
                  {featureCards[3].description}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};