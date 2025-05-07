import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

export const ReviewPage = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What is AI-driven roleplay simulation?",
      answer:
        "AI-driven roleplay simulation utilizes artificial intelligence (AI) technology to create realistic and interactive scenarios. The AI algorithm mimics real-world sales meetings, allowing sales professionals to practice their craft, enhance their skills and maintain sales readiness.",
      defaultOpen: true,
    },
    {
      question: "How does Trovex help your sales team train better?",
      answer: "",
      defaultOpen: false,
    },
    {
      question:
        "How does Trovex help track and measure sales team performance?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How does Trovex reduce time-to-productivity for new hires?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Can you assist us in developing the initial AI simulations?",
      answer: "",
      defaultOpen: false,
    },
  ];

  // Footer navigation links
  const footerLinks = {
    company: ["About Us", "Pricing", "Book a Demo"],
    product: [
      "AI Coaching",
      "AI Sales Role play",
      "AI Real Call Scoring",
      "AI Post-Sales Roleplays",
    ],
    resources: ["Blog", "Success Stories"],
  };

  return (
    <section className="w-full py-16 relative">
      {/* FAQ Section */}
      <div className="w-full max-w-[1200px] mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="font-semibold text-[40px] leading-[48px] text-black mb-4">
            Got Questions? <br />
            We've Got Answers!
          </h2>
          <p className="text-lg text-[#707070] leading-[27px]">
            Here Are the Most Frequently Asked Questions, <br />
            If you have more queries, feel free to{" "}
            <span className="underline">book a demo!</span>
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-[#f7f7f7] rounded-xl border-[1.6px] border-solid border-[#ededed] px-8 py-6"
            >
              <AccordionTrigger className="font-medium text-lg tracking-[-0.36px] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg tracking-[-0.18px] leading-[27px] pt-3">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#2f1043] rounded-3xl overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto py-16 px-6 relative">
          {/* Background blurs */}
          <div className="absolute w-[321px] h-[321px] top-0 right-0 bg-[#705481] rounded-[160.38px] blur-[148px]" />
          <div className="absolute w-[321px] h-[321px] bottom-0 left-0 bg-[#705481] rounded-[160.38px] blur-[148px]" />

          {/* CTA Section */}
          <div className="flex flex-col items-center justify-center gap-4 text-center mb-16 relative z-10">
            <div className="relative w-[124px] h-[25px]">
              <div className="rounded-[72px] border-[1.2px] border-solid border-[#2f2e2e1f] px-3 py-1">
                <span className="font-normal text-[#784ec6] text-[10px] leading-[13.5px]">
                  Join the AI Revolution
                </span>
              </div>
            </div>

            <h2 className="font-bold text-white text-[56px] tracking-[-3.00px] leading-[67.2px] max-w-[745px]">
              Ready To Revolutionise Your Sales Team's Performance?
            </h2>

            <Button className="mt-2 h-[46px] px-6 py-3 rounded-xl shadow-[inset_0px_2px_1px_#ffffff66] bg-gradient-to-b from-[rgba(130,84,243,1)] from-9% to-[rgba(199,63,162,1)] to-100% border-none">
              Talk to Sales
            </Button>
          </div>

          {/* Footer Links Section */}
          <Separator className="bg-[#ffffff1f] mb-5" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Social Links */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <img
                  className="w-[61px] h-[61px]"
                  alt="Logo"
                  src="/clip-path-group.svg"
                />
                <img className="h-7" alt="Brand name" src="/vector-23.svg" />
                <img
                  className="w-[30px] h-[29px]"
                  alt="Icon"
                  src="/vector-19.svg"
                />
              </div>

              <img className="w-[118px] h-[54px]" alt="Footer logo image" />

              <div className="flex gap-6">
                <img
                  className="w-4 h-4"
                  alt="Social icon"
                  src="/vector-24.svg"
                />
                <div className="w-4 h-4 bg-[url(/vector-18.svg)] bg-[100%_100%]">
                  <img
                    className="w-2.5 h-[9px] mt-1 ml-[3px]"
                    alt="Social icon"
                  />
                </div>
                <img
                  className="w-4 h-4"
                  alt="Social icon"
                  src="/vector-16.svg"
                />
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-medium text-white text-lg mb-6">Company</h3>
              <ul className="space-y-5">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#c6c6c6] text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-medium text-white text-lg mb-6">Product</h3>
              <ul className="space-y-5">
                {footerLinks.product.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#c6c6c6] text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="font-medium text-white text-lg mb-6">Resources</h3>
              <ul className="space-y-5">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-[#c6c6c6] text-base">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <Separator className="bg-[#ffffff1f] mb-5" />

          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#adadad] pt-4">
            <div>
              © 2025 Cloudsprint Technologies Private Limited. All rights
              reserved.
            </div>
            <div className="flex items-center gap-4">
              <span>
                Designed by{" "}
                <a href="#" className="text-white underline">
                  24Seven.Design
                </a>
              </span>
              <a href="#" className="text-[#adadad]">
                Terms of Use
              </a>
              <a href="#" className="text-[#adadad]">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
