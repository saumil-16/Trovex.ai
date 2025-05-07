import React from "react";

// Define navigation items for reuse
const navigationItems = [
  { name: "Product", hasDropdown: true },
  { name: "About", hasDropdown: false },
  { name: "Pricing", hasDropdown: false },
  { name: "Resources", hasDropdown: true },
];

// Define company logos for the bottom section
const companyLogos = ['Finbox', 'Snapdeal', 'Evabot', 'Vyapar', 'Vedantu', 'Scalenut', 'Mystify', 'Finbox', 'Snapdeal'];

export const SalesForcePage = () => {
  return (
    <section className="relative w-full max-w-[1406px] mx-auto my-5 h-[800px] bg-gradient-to-b from-[#f5e9ff] to-[#e0d4ff] rounded-3xl overflow-hidden">
      <div className="p-6 relative h-full">
        {/* Background gradient effects */}
        <div className="absolute w-[136px] h-[136px] top-0 right-[37px] bg-[#e0bbdb] rounded-[68px] blur-[107px]" />
        <div className="absolute w-36 h-36 bottom-[108px] left-[37px] bg-[#8753ee] rounded-[72.14px] blur-[107px]" />
        <div className="absolute w-[263px] h-[263px] top-[253px] right-[147px] rounded-[131.64px] blur-[140px] bg-gradient-to-b from-[#8254f3] to-[#c73fa2]" />
        <div className="absolute w-[628px] h-[628px] top-[34px] left-[358px] rounded-[313.91px] blur-[512px] bg-gradient-to-b from-[#8254f3] to-[#c73fa2]" />

        {/* Navigation Bar */}
        <div className="relative w-full h-[72px] mb-[156px]">
          <div className="absolute w-full h-[72px] bg-white/80 rounded-xl border border-gray-100 backdrop-blur-[27px]">
            <div className="p-0 h-full flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center h-[42px] ml-[22px]">
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

              {/* Navigation Menu */}
              <div className="flex items-center justify-between ml-auto mr-[17px]">
                <div className="mr-[60px] flex gap-10">
                  {navigationItems.map((item, index) => (
                    <div key={index} className="font-medium text-black text-base">
                      {item.name}
                      {item.hasDropdown && <span className="ml-1">▼</span>}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button className="h-[46px] px-6 py-3 rounded-xl border-none text-white font-medium bg-gradient-to-b from-[#8254f3] to-[#c73fa2] shadow-[inset_0px_2px_1px_rgba(255,255,255,0.4)]">
                    Book a Demo
                  </button>
                  <button className="h-[46px] px-6 py-3 rounded-xl border border-gray-300 text-gray-800 font-medium bg-white hover:bg-gray-50">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-[88px] mt-[156px]">
          
          <div className="w-[566px]">
            
            <div className="w-[145px] h-[25px] mb-[42px]">
              <div className="relative w-[143px] h-[25px] rounded-[72px] border border-gray-200 flex items-center px-2">
                <div className="w-4 h-4 bg-yellow-400 rounded-full mr-1"></div>
                <span className="text-[#784ec6] text-[10px] font-medium leading-[13.5px]">
                  4.8 stars, 50+ reviews
                </span>
              </div>
            </div>

            
            <h1 className="text-[48px] font-bold text-gray-800 leading-tight mb-6">
              Sales Excellence Starts <br />
              With <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8254f3] to-[#c73fa2]">Better Practice</span>
            </h1>

            
            <div className="w-[442.64px] font-medium text-[#353535] text-base tracking-[-0.32px] leading-6 mb-[42px]">
              Trovex listens to every sales call, identifies what top reps do
              differently, and builds AI-powered simulations that help your
              entire team practice, improve, and win—at scale.
            </div>

            
            <button className="h-[46px] px-6 py-3 rounded-xl border-none text-white font-medium bg-gradient-to-b from-[#8254f3] to-[#c73fa2] shadow-[inset_0px_2px_1px_rgba(255,255,255,0.4)]">
              Book a Demo
            </button>
          </div>

          
          <div className="w-[423px] relative">
            
            <div className="relative">
              <div className="absolute w-[41px] h-[47px] left-0 top-[113px]">
                <div className="relative h-[47px]">
                  <div className="w-3 h-3 top-[35px] rounded-[6.24px] absolute left-0 bg-gradient-to-b from-[#8254f3] to-[#c73fa2]" />
                  <div className="absolute w-[35px] h-[35px] top-0 left-1.5 rounded-[17.47px] bg-gradient-to-b from-[#8254f3] to-[#c73fa2]" />
                  <div className="absolute w-[21px] h-[21px] top-[7px] left-[13px] bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-800">
                    T
                  </div>
                </div>
              </div>

              <div className="w-[317px] h-[121px] ml-[34px] rounded-[24.96px] bg-white shadow-lg p-5">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#8254f3] to-[#c73fa2] font-bold text-[18.7px] tracking-[-0.37px] leading-[25.3px] mb-[5px]">
                  Trovex AI
                </div>
                <div className="font-medium text-[#2d3436] text-[16.6px] tracking-[-0.33px] leading-[22.5px]">
                  Hey There! Tell me more about what <br />
                  you're selling...
                </div>
              </div>
            </div>

            
            <div className="relative mt-[5px]">
              <div className="w-[317px] h-[121px] ml-[95px] rounded-[24.96px] bg-white shadow-lg p-6">
                <div className="text-transparent bg-clip-text bg-gradient-to-b from-[#8254f3] to-[#c73fa2] font-bold text-[18.7px] tracking-[-0.37px] leading-[25.3px] mb-[13px]">
                  Neel Gupta
                </div>
                <div className="font-medium text-[#2d3436] text-[16.6px] tracking-[-0.33px] leading-[22.5px]">
                  I'd love to tell you about how Trovex AI can 10x your
                  sales teams.
                </div>
              </div>

              <div className="absolute w-[58px] h-[58px] top-[-22px] right-0 bg-gray-200 rounded-full"></div>

              
              <div className="absolute bottom-[-25px] right-[5px] w-32 h-5 bg-white text-[#545454] rounded-[47.84px] flex items-center justify-start px-1.5 border border-gray-200">
                <div className="w-2.5 h-2.5 bg-[#e74c3c] rounded-[4.93px] mr-[6px]" />
                <span className="text-[10.4px] tracking-[-0.21px] leading-[12.5px] font-medium">
                  0:24
                </span>
                <div className="w-px h-[19px] mx-[6px] bg-gray-200" />
                <span className="text-[10.4px] tracking-[-0.21px] leading-[12.5px] font-medium">
                  Recording...
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[59px] left-[55px] w-full">
          <div className="text-center mb-[24px]">
            <span className="text-xs font-medium text-[#353535] mr-2">
              Over
            </span>
            <span className="px-[7px] py-1 bg-white rounded-[5px] border border-gray-200 shadow-[0px_1px_2px_rgba(0,0,0,0.1),0px_3px_3px_rgba(0,0,0,0.09),0px_8px_5px_rgba(0,0,0,0.05),0px_14px_6px_rgba(0,0,0,0.01)]">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#8254f3] to-[#c73fa2] text-xs tracking-[-1.00px] leading-[14.4px]">
                100+ companies
              </span>
            </span>
            <span className="text-xs font-medium text-[#353535] ml-2">
              prefer Trovex AI to train their sales and customer support teams.
            </span>
          </div>

          <div className="flex flex-wrap gap-5 opacity-[0.88]">
            {companyLogos.map((logo, index) => (
              <div key={index} className="h-[39px] w-[127px] flex items-center justify-center text-gray-500 font-medium">
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-[76px] h-[75px] top-[407px] right-[74px] bg-white rounded-[224px] overflow-hidden blur-[47px]">
          <div className="relative w-[364px] h-[468px] -top-44 left-[-148px]">
            <div className="w-80 h-80 top-0 left-0 bg-[#9370ff] absolute rounded-[192px] blur-[30px]" />
            <div className="w-[228px] h-[228px] top-60 left-28 bg-[#784ec6] absolute rounded-[192px] blur-[30px]" />
            <div className="w-[120px] h-[120px] top-60 left-[244px] bg-[#9370ff] absolute rounded-[192px] blur-[30px]" />
            <div className="absolute w-[120px] h-[120px] top-[220px] left-44 bg-[#d23c95] rounded-[60px] blur-[30px]" />
            <div className="absolute w-[120px] h-[120px] top-[156px] left-[232px] bg-[#ff8ed3] rounded-[60px] blur-[30px]" />
          </div>
        </div>
      </div>
    </section>
  );
};