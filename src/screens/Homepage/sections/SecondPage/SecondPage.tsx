import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const ProblemsPage = (): JSX.Element => {
  return (
    <section className="w-full py-16">
      <Card className="w-full bg-[#2f1043] rounded-3xl overflow-hidden relative">
        <CardContent className="p-0">
          <div className="relative">
            {/* Background glows */}
            <div className="absolute top-0 right-0 w-[321px] h-[321px] bg-[#705481] rounded-[160px] blur-[148px]" />
            <div className="absolute bottom-0 left-0 w-[244px] h-[244px] bg-[#705481] rounded-[122px] blur-[148px]" />

            {/* Content container */}
            <div className="flex flex-col items-center py-32 px-8 md:px-16 lg:px-24 gap-12 relative z-10">
              <Badge className="bg-transparent border border-[#2f2e2e1f] text-[#784ec6] rounded-full px-4 py-1 font-normal">
                Why Trovex AI?
              </Badge>

              <div className="flex flex-col gap-8 max-w-4xl">
                <h2 className="text-white font-medium text-4xl tracking-[-2px] leading-[54px]">
                  The current sales training is outdated and ineffective
                </h2>

                <h3 className="text-white font-medium text-4xl tracking-[-2px] leading-[54px]">
                  Reps lose confidence, deals, and direction without clear
                  feedback.
                </h3>

                <p className="text-[#a3a1a1] font-medium text-4xl tracking-[-2px] leading-[54px]">
                  We deliver smart, personalized training that builds skills and
                  drives results.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
