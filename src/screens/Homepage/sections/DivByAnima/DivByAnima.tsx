import React from "react";
import { Button } from "../../../../components/ui/button";

export const LandingPage = () => {
  const features = [
    { id: 1, title: "Dive Into Call Data and Thrive With AI-Coaching", description: "Analyze real call recordings, detect skill gaps and transform your sales reps into rockstars with precision AI coaching." },
    { id: 2, title: "AI Call Scoring" },
    { id: 3, title: "Personalized AI Scorecard" },
    { id: 4, title: "Multilingual AI Roleplay (30+ languages)" },
    { id: 5, title: "Reporting & Analytics" },
    { id: 6, title: "AI Call Companion" },
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Trovex has truly transformed our sales team’s performance! With its AI-based role play simulator, our sales reps have honed their skills, tackled realistic scenarios, and received valuable feedback.",
      author: "Avinash Saurabh",
      title: "Senior Entrepreneur",
      rating: 5,
    },
    {
      id: 2,
      quote: "Trovex has boosted our sales team’s productivity with its AI-driven role play simulator. It fit smoothly into our training with excellent onboarding support.",
      author: "Amar Mishra",
      title: "Founder",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 mb-16">
        <h2 className="text-5xl font-bold text-center tracking-[-2.00px] leading-[57.6px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent">
          Everything you need to Upskill your Sales Force
        </h2>
        <p className="font-medium text-black text-base text-center tracking-[-0.32px] leading-6">
          Transform your sales reps into rockstars
        </p>
        <Button className="h-[46px] px-6 py-3 rounded-xl border-none shadow-[inset_0px_2px_1px_#ffffff66] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] text-white">
          Book a Demo
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="bg-[#faf7ff] rounded-[20px] p-8">
            <h3 className="text-[22.9px] font-bold leading-[27.5px] text-[#2d3436] mb-3">
              {features[0].title}
            </h3>
            <p className="text-base font-medium text-[#2d3436] leading-6 mb-5">
              {features[0].description}
            </p>
            <div className="inline-flex items-center gap-1">
              <span className="bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent font-medium text-base">
                View Details
              </span>
              <svg className="w-5 h-5 text-[#8254f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            {features.slice(1).map((feature) => (
              <div key={feature.id} className="flex items-center gap-4">
                <div className="w-6 h-6 bg-[#faf7ff] rounded-md flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#8254f3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-[#434343] leading-[21.6px]">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-[#faf7ff] rounded-[20px] p-7">
          <div className="w-full h-[485px] rounded-lg bg-white p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="text-xl font-bold text-[#8254f3]">Trovex.ai</div>
              </div>
              <div className="flex gap-2 text-sm text-[#2d3436]">
                <span className="px-3 py-1 bg-[#faf7ff] rounded-full">Overview</span>
                <span className="px-3 py-1">My Progress</span>
                <span className="px-3 py-1">Reports</span>
                <span className="px-3 py-1">Exercises</span>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-[#faf7ff] rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#2d3436]">12</div>
                <div className="text-sm text-[#2d3436]">Total Learners</div>
              </div>
              <div className="flex-1 bg-[#faf7ff] rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-[#2d3436]">23</div>
                <div className="text-sm text-[#2d3436]">Total Scores</div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-[#faf7ff] rounded-lg p-4">
                <div className="text-sm font-medium text-[#2d3436] mb-2">Course Completion Status</div>
                <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-sm text-[#2d3436]">Pie Chart</span>
                </div>
                <div className="flex justify-center gap-2 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#8254f3]"></div>
                    <span>Completed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#c73fa2]"></div>
                    <span>In Progress</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                    <span>Not Started</span>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-[#faf7ff] rounded-lg p-4">
                <div className="text-sm font-medium text-[#2d3436] mb-2">Overall Score Trend</div>
                <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-sm text-[#2d3436]">Line Chart</span>
                </div>
                <div className="flex justify-center gap-2 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#8254f3]"></div>
                    <span>Max Score Trend</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-[#c73fa2]"></div>
                    <span>Min Score Trend</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6">
        <h2 className="text-4xl font-bold text-center tracking-[-1.5px] leading-[48px] bg-gradient-to-b from-[rgba(130,84,243,1)_9%] to-[rgba(199,63,162,1)_100%] bg-clip-text text-transparent">
          Don’t take our word for it
        </h2>
        <p className="text-lg font-medium text-[#2d3436] leading-[24.3px] mb-6">
          Hear it from clients!
        </p>
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex-1 bg-white rounded-[20px] p-6 shadow-md">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#8254f3]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-base font-medium text-[#2d3436] leading-6 mb-4">
                "{testimonial.quote}"
              </p>
              <div className="text-sm font-medium text-[#2d3436]">{testimonial.author}</div>
              <div className="text-sm text-[#545454]">{testimonial.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};