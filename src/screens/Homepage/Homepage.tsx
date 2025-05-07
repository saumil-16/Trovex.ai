import React from "react";
import { LandingPage } from "./sections/DivByAnima/DivByAnima";
import { SetupPage } from "./sections/FirstPage/FirstPage";
import { Group2ByAnima } from "./sections/SecondPage";
import { GroupByAnima } from "./sections/ThirdPage";
import { GroupWrapperByAnima } from "./sections/FourthPage";
import { SolutionPage } from "./sections/FifthPage/FifthPage";
import { OverlapWrapperByAnima } from "./sections/SixthPage";
import { EndingPage } from "./sections/SectionComponentNodeByAnima/SeventhPage.tsx";

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        <GroupByAnima />
        <SolutionPage />
        <Group2ByAnima />
        <EndingPage />
        <SetupPage />
        <OverlapWrapperByAnima />
        <LandingPage />
        <GroupWrapperByAnima />


        
        
        

        <section className="w-full px-6 py-12">
          <div className="relative w-full max-w-[1202px] mx-auto">
            <div className="absolute w-[57px] h-[57px] top-[388px] left-[1078px]">
              <img
                className="absolute w-[35px] h-[35px] top-[17px] left-[5px]"
                alt="Group"
              />
            </div>
            
          </div>
        </section>

        
      </div>
    </div>
  );
};
