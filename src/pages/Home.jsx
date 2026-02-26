import BeforeAfterSlider from "../components/beforeAfterSlider/BeforeAfterSlider";
import ChatButton from "../components/chatbutton/ChatButton";
import { RevenueEngine } from "../components/RevenueEngine";
import AccordionSlider from "../components/slider/Slider";
import ServicesGrid from "../components/servicesgrid/ServicesGrid";

export default function Home() {
  return (
    <>
      <div className="hero relative w-full bg-linear-to-br from-blue-50 via-sky-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Section */}
          <div className="space-y-8 py-20">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-dark leading-tight tracking-tight">
              Bihar's Growth-Focused Digital Marketing Agency
            </h1>

            <p className="text-lg leading-relaxed max-w-[550px] text-softDark">
              Performance Marketing, SEO, Social Media & Outdoor Advertising. We
              help businesses scale with data-driven strategies.
            </p>

            {/* Input + Button */}
            <div className="flex max-w-md gap-5">
              <ChatButton text={"Chat on WhatsApp"} />
              <ChatButton text={"Chat on WhatsApp"} />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end">
            <RevenueEngine />
          </div>
        </div>
      </div>
      <div className="slider w-full">
        <AccordionSlider />
      </div>

      {/* Revenue marketing */}
      <div className="revenue marketing w-full">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-extrabold leading-11 tracking-tighter text-dark text-center">
            Move From Marketing that Reports Clicks to <br />
            <span className="text-blue">Marketing that eports Revenue</span>
          </h2>
          <p className="text-xl py-4 text-dark">
            Traditional marketing optimizes for channel metrics. Revenue
            marketing optimizes for business impact. Connected revenue marketing
            through RevenueCloudFX leads to{" "}
            <span className="font-bold">
              1.8X faster lead growth than industry average.
            </span>
          </p>

          <BeforeAfterSlider />
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-extrabold leading-11 tracking-tighter text-dark text-center">
          Industries We Power with
          <br />
          <span className="text-blue">Data-Driven Growth</span>
        </h2>
        <p className="text-xl py-4 text-dark">
          We've partnered with leading organizations across{" "}
          <b>
            Real Estate, Healthcare & Hospitals, Schools/Colleges/EdTech,
            Fintech & Finance, and E-commerce/FMCG brands
          </b>
          . <br />
          Our <b>data-driven strategies</b> consistently deliver measurable{" "}
          <b>ROI, scalable growth,</b> and a competitive edge for
          <b>high-ticket clients and enterprise-level businesses</b>.
        </p>
        <ServicesGrid />
      </div>

      {/* Global solution */}
      <div className="global-solution w-full">
        <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20">
          <h2 className="text-4xl text-blue font-extrabold leading-11 tracking-tighter text-center">
            Global Digital Marketing{" "}
            <span className="text-dark">Solutions</span>
          </h2>
          <p className="text-xl py-4 text-dark">
            We work with global clients, including businesses in Dubai and Saudi
            Arabia, providing performance-driven digital marketing and
            advertising solutions tailored for competitive global markets.
          </p>
          <p className="text-xl py-4 text-dark font-bold">
            Our global services are designed for growth-focused businesses,
            funded startups, and established companies looking for measurable
            ROI.
          </p>
          <p className="text-xl py-4 text-softDark italic">
            Our core services—performance marketing, SEO, social media
            marketing, branding, and advertising—are delivered remotely for
            global clients with the same ROI focus.
          </p>
          
        </div>
      </div>
    </>
  );
}
