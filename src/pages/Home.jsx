import BeforeAfterSlider from "../components/beforeAfterSlider/BeforeAfterSlider";
import ChatButton from "../components/chatbutton/ChatButton";
import { RevenueEngine } from "../components/RevenueEngine";
import AccordionSlider from "../components/slider/Slider";
import ServicesGrid from "../components/servicesgrid/ServicesGrid";
import IndustriesSection from "../components/industrysection/IndustriesSection";

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
              <ChatButton text={"Get Free Strategy Call"} />
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
          <h2 className="text-4xl pb-6 text-blue font-extrabold leading-11 tracking-tighter text-center">
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
            Our core services— performance marketing, SEO, social media
            marketing, branding, and advertising—are delivered remotely for
            global clients with the same ROI focus.
          </p>
          <div className="global solution logos">
            <div className="max-w-3xl flex gap-5 justify-center sm:justify-around md:justify-between mx-auto py-3">
              <div className="flex flex-col-reverse md:flex-row ">
                <h3 className="text-xl text-softDark font-semibold w-40 flex items-center">
                  Performance marketing
                </h3>
                <div className="w-26 h-26 flex items-center justify-center border border-softDark rounded-full">
                  <img className="w-10" src="/performance.png" alt="image" />
                </div>
              </div>
              <div className="flex flex-col-reverse md:flex-row-reverse gap-3">
                <h3 className="text-xl text-softDark font-semibold w-40 flex items-center">
                  Social Media marketing
                </h3>
                <div className="w-26 h-26 flex items-center justify-center border border-softDark rounded-full">
                  <img className="w-10" src="/socialmedia.png" alt="image" />
                </div>
              </div>
            </div>
            <div className=" max-w-2xl flex gap-5 justify-center md:justify-around mx-auto py-3">
              <div className="flex flex-col-reverse md:flex-row">
                <h3 className="text-xl text-softDark font-semibold w-40 flex items-center">
                  Search Engine Optimization
                </h3>
                <div className="w-26 h-26 flex items-center justify-center border border-softDark rounded-full">
                  <img className="w-10" src="/seo.png" alt="image" />
                </div>
              </div>
              <div className="flex flex-col-reverse md:gap-3 md:flex-row-reverse">
                <h3 className="text-xl text-softDark font-semibold w-40 flex items-center">
                  Branding and Advertising
                </h3>
                <div className="w-26 h-26 flex items-center justify-center border border-softDark rounded-full">
                  <img className="w-10" src="/branding.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why chose us? */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="left">
            <h2 className="text-4xl text-blue font-extrabold leading-11 tracking-tighter">
              Why Global Clients Choose{" "}
              <span className="text-dark">iFFi Media Works</span>
            </h2>
            <p className="text-xl py-4 text-dark font-bold">
              We simplify the process, stay transparent, and focus on strategies
              that genuinely help your business grow.
            </p>
            <ChatButton text={"Chat on WhatsApp"} />
          </div>
          <div className="grid grid-cols-1 gap-3">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1 border rounded-lg flex justify-center items-center font-display text-6xl font-extrabold text-gray-200">
                01
              </div>
              <div className="col-span-3 border border-gray-200 rounded-lg p-2 text-lg bg-linear-to-br from-gray-50 to-purple-50">
                Performance marketing and lead generation expertise
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 border border-gray-200 rounded-lg p-2 text-lg bg-linear-to-br from-gray-50 to-purple-50">
                Experience working with competitive and high-CPM markets
              </div>
              <div className="col-span-1 border rounded-lg flex justify-center items-center font-display text-6xl font-extrabold text-gray-200">
                02
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1 border rounded-lg flex justify-center items-center font-display text-6xl font-extrabold text-gray-200">
                03
              </div>
              <div className="col-span-3 border border-gray-200 rounded-lg p-2 text-lg bg-linear-to-br from-gray-50 to-purple-50">
                Clear communication and transparent reporting
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-3 border border-gray-200 rounded-lg p-2 text-lg bg-linear-to-br from-gray-50 to-purple-50">
                Scalable strategies aligned with global business goals
              </div>
              <div className="col-span-1 border rounded-lg flex justify-center items-center font-display text-6xl font-extrabold text-gray-200">
                04
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* scroll sections */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-20">
        {/* Section Heading */}
        <h2 className="text-4xl text-dark font-extrabold leading-11 tracking-tighter text-center mb-12">
          Our <span className="text-blue">Proven Process</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-20 sm:h-400">
          {/* LEFT CONTENT */}
          <div className="space-y-10 relative">
            {/* Step 1 */}

            {/* card 1 */}
            <div
              id="reviews"
              class="relative mx-auto sm:absolute sm:rotate-6 sm:top-0 sm:left-10 max-w-70 w-full rounded-xl shadow-lg bg-white z-20 p-3"
            >
              <div class="text-center">
                <i class="fa-solid fa-circle-dot text-green-200 text-3xl text-shadow-lg"></i>
              </div>
              <div class="w-full h-fit rounded-xl bg-green-200 p-5 mt-10">
                <div class="flex justify-between items-center">
                  <p class="font-caveat text-5xl font-bold">01</p>
                </div>
                <h4 class="py-3 font-bold text-xl">Diagnostic</h4>
                <p class=" text-lg leading-7">
                  We analyze your current digital footprint, competitive
                  landscape, and growth opportunities.
                </p>
              </div>
            </div>

            {/* card 2 */}
            <div
              id="reviews"
              class="relative mx-auto sm:absolute sm:-rotate-6 sm:top-90 sm:right-10 max-w-70 w-full rounded-xl shadow-lg bg-white z-20 p-3"
            >
              <div class="text-center">
                <i class="fa-solid fa-circle-dot text-pink-200 text-3xl text-shadow-lg"></i>
              </div>
              <div class="w-full h-fit rounded-xl bg-pink-200 p-5 mt-10">
                <div class="flex justify-between items-center">
                  <p class="font-caveat text-5xl font-bold">02</p>
                </div>
                <h4 class="py-3 font-bold text-xl">Strategy</h4>
                <p class="font-caveat text-lg leading-7">
                  We craft a custom roadmap aligned with your KPIs and revenue
                  goals.
                </p>
              </div>
            </div>

            {/* card 3 */}
            <div
              id="reviews"
              class="relative mx-auto mt-10 sm:absolute sm:rotate-12 sm:top-160 sm:left-10 max-w-70 w-full rounded-xl shadow-lg bg-white z-20 p-3"
            >
              <div class="text-center">
                <i class="fa-solid fa-circle-dot text-blue-200 text-3xl text-shadow-lg"></i>
              </div>
              <div class="w-full h-full rounded-xl bg-blue-200 p-5 mt-10">
                <div class="flex justify-between items-center">
                  <p class="font-caveat text-5xl font-bold">03</p>
                </div>
                <h4 class="py-3 font-bold text-xl">Strategy</h4>
                <p class="font-caveat text-lg leading-7">
                  Agile campaign execution with continuous testing and
                  performance optimization.
                </p>
              </div>
            </div>

            {/* card 4 */}
            <div
              id="reviews"
              class="relative mx-auto mt-10 sm:absolute sm:-rotate-12 sm:top-250 sm:right-10 max-w-70 w-full rounded-xl shadow-lg bg-white z-20 p-3"
            >
              <div class="text-center">
                <i class="fa-solid fa-circle-dot text-yellow-200 text-3xl text-shadow-lg"></i>
              </div>
              <div class="w-full h-full rounded-xl bg-yellow-200 p-5 mt-10">
                <div class="flex justify-between items-center">
                  <p class="font-caveat text-5xl font-bold">04</p>
                </div>
                <h4 class="py-3 font-bold text-xl">Scale</h4>
                <p class="font-caveat text-lg leading-7">
                  We double down on winning channels and scale sustainably for
                  long-term ROI.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (Sticky on Desktop Only) */}
          <div className="hidden md:block">
            <div className="sticky top-28">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
                  alt="Strategy Session"
                  className="rounded-3xl shadow-xl grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries section */}
      <IndustriesSection />

      {/* CTA */}
      <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-26 text-center">
        <h2 className="text-4xl md:text5xl text-blue font-extrabold leading-11 tracking-tighter">
          Ready to <span className="text-dark">accelerate?</span>
        </h2>
        <p className="text-xl py-4 text-dark font-bold">
          Partner with Bihar's most performance-obsessed digital agency.
        </p>
        <p className="text-xl py-5 text-softDark italic font-bold">
          Global businesses can connect with us for strategy discussions and
          long-term growth partnerships.{" "}
        </p>
        <ChatButton text={"Chat on WhatsApp"} />
      </div>
      <p className="text-lg py-10 text-dark bg-gray-200 font-bold text-center">
        Serving businesses across Bihar including Patna, Siwan, Gaya, and
        Muzaffarpur. <br />
        <span className="uppercase text-softDark">iffi media works</span>
      </p>
    </>
  );
}
