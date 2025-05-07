import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const features = [
  {
    id: 1,
    icon: "/encryption.svg",
    title: "Strong Encryption, Enterprise SSO & SIEM",
    description: "Trovex AI supports AES 256 Bit Encryption Out of the box.",
  },
  {
    id: 2,
    icon: null, 
    title: "SOC 2 Type II & GDPR Compliance Supported",
    description: "Designed to meet the demands of complex organizations with 1,000+ reps. 99% uptime.",
  },
  {
    id: 3,
    icon: null, 
    title: "Integrate seamlessly with your workflow",
    description: "25+ integrations and custom integrations upon request.",
  },
  {
    id: 4,
    icon: "/global.svg",
    title: "Localisation, 40+ languages",
    description: "Global-first. Trovex AI is used by reps from over 40 different countries.",
  },
];

export const QuestionAnswerPage = () => {
  return (
    <section className="w-full max-w-[1203px] mx-auto py-16">
      <Card className="bg-[#2f1043] rounded-3xl overflow-hidden border-none relative">
        <CardContent className="p-10 relative">
          <div className="absolute bottom-0 left-0 w-[244px] h-[244px] bg-[#705481] rounded-[121.88px] blur-[148px]" />
          <div className="absolute top-0 right-0 w-[321px] h-[321px] bg-[#feb2a652] rounded-[160.38px] blur-[173px]" />

          <div className="relative z-10">
            <div className="flex flex-col items-center gap-3 mb-16">
              <h2 className="font-bold text-5xl text-white tracking-[-2.00px] leading-[55.2px] text-center">
                Engineered for Large Corporations
              </h2>
              <p className="font-medium text-base text-[#d1d1d1] tracking-[-0.25px] leading-6 text-center max-w-[473px]">
                Trovex AI meets elite benchmarks set by verified third-party leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-start">
                <div className="w-[41px] h-10 mb-4 bg-gray-300 rounded" />
                <h3 className="font-semibold text-lg text-white tracking-[-1.00px] leading-[21.6px] mb-4">
                  {features[0].title}
                </h3>
                <p className="font-medium text-sm text-[#d9d9d9] tracking-[-1.00px] leading-[18.9px]">
                  {features[0].description}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <div className="w-[47px] h-[47px] bg-gray-300 rounded-full" />
                  <div className="w-[47px] h-[47px] bg-gray-300 rounded-full -ml-[11px]" />
                </div>
                <h3 className="font-semibold text-lg text-white tracking-[-1.00px] leading-[21.6px] mb-4">
                  {features[1].title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < features[1].title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="font-medium text-sm text-[#d9d9d9] tracking-[-1.00px] leading-[18.9px]">
                  {features[1].description}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[42px] h-[42px] bg-gray-300 rounded-full" />
                  <div className="w-[54px] h-[37px] bg-gray-300 rounded" />
                  <div className="w-[42px] h-[42px] bg-gray-300 rounded-full" />
                </div>
                <h3 className="font-semibold text-lg text-white tracking-[-1.00px] leading-[21.6px] mb-4">
                  {features[2].title}
                </h3>
                <p className="font-medium text-sm text-[#d9d9d9] tracking-[-1.00px] leading-[18.9px]">
                  {features[2].description}
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[43px] h-[42px] mb-4 bg-gray-300 rounded" />
                <h3 className="font-semibold text-lg text-white tracking-[-1.00px] leading-[21.6px] mb-4">
                  {features[3].title.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < features[3].title.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h3>
                <p className="font-medium text-sm text-[#d9d9d9] tracking-[-1.00px] leading-[18.9px]">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};