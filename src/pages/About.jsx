import React from "react";
import ChatButton from "../components/chatbutton/ChatButton";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-3 md:px-6 lg:px-8 py-26">
      <div className="leading-11 tracking-tighter text-center pt-20 pb-10">
        <h2 className="text-5xl pb-6 text-dark font-extrabold ">
          About <span className="text-blue">iFFi Media Works</span>
        </h2>
        <p className="text-xl text-dark pb-6">
          We're on a mission to bring clarity and performance to digital
          marketing for Indian businesses.
        </p>
        <ChatButton text={"Chat on WhatsApp"} />
      </div>

      <div>
        <div className="max-w-250 h-150 rounded-2xl overflow-hidden mx-auto my-10">
          <img
            src="https://images.unsplash.com/photo-1567080185975-88eedc2b273a"
            alt="about-image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-250 mx-auto auto-rows-[minmax(150px,auto)]">
          <div className="border border-softDark p-4 rounded-xl flex flex-col justify-between text-lg">
            <h2 className="text-sm text-light bg-blue rounded-full mb-6 py-1 px-3 w-fit">
              Mission
            </h2>
            <p>
              To empower businesses with innovative, customize stratiges that
              drive growth and transform them into industry leaders.{" "}
            </p>
          </div>

          <div className="border border-softDark p-4 rounded-xl flex flex-col justify-between text-lg">
            <h2 className="text-sm text-light bg-blue rounded-full mb-6 py-1 px-3 w-fit">
              Vission
            </h2>
            <p>
              To revolutionize business growth through creativity, technology
              and expertise, helping company thrive in digital age .{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center max-w-7xl mx-auto px-3 md:px-6 lg:px-8 pt-20 pb-10">
        <h2 className="text-5xl pb-6 text-dark font-extrabold">Our Values</h2>
        <p className="text-xl text-dark pb-6">
          The principles that guide everything we do.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]  ">
        <div className="text-xl rounded-xl p-4 gap-2 flex flex-col justify-center items-center border border-gray-200 hover:shadow hover:-translate-y-1 transition-all duration-200">
          <i class="fa-solid fa-bullseye text-blue text-4xl"></i>
          <h3 className="text-lg font-bold">Performance First</h3>
          <p className="text-sm text-softDark">
            Every strategy is built around measurable results and ROI.
          </p>
        </div>
        <div className="text-xl rounded-xl p-4 gap-2 flex flex-col justify-center items-center border border-gray-200 hover:shadow hover:-translate-y-1 transition-all duration-200">
          <i class="fa-solid fa-user-group text-blue text-4xl"></i>
          <h3 className="text-lg font-bold">Client Partnership</h3>
          <p className="text-sm text-softDark">
            We build long-term relationships based on trust and transparency.
          </p>
        </div>
        <div className="text-xl rounded-xl p-4 gap-2 flex flex-col justify-center items-center border border-gray-200 hover:shadow hover:-translate-y-1 transition-all duration-200">
          <i class="fa-solid fa-arrow-trend-up text-blue text-4xl"></i>
          <h3 className="text-lg font-bold">Continuous Growth</h3>
          <p className="text-sm text-softDark">
            We constantly evolve our strategies to stay ahead of the curve
          </p>
        </div>
        <div className="text-xl rounded-xl p-4 gap-2 flex flex-col justify-center items-center border border-gray-200 hover:shadow hover:-translate-y-1 transition-all duration-200">
          <i class="fa-solid fa-award text-blue text-4xl"></i>
          <h3 className="text-lg font-bold">Excellence</h3>
          <p className="text-sm text-softDark">
            We maintain the highest standards in everything we do
          </p>
        </div>
      </div>

      <div className="max-w-7xl py-20 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <div className="flex lg:justify-start">
          <div className="overflow-hidden rounded-xl shadow-xl w-full max-w-lg">
            <img
              src="https://horizons-cdn.hostinger.com/ea883b72-9d22-435d-a610-17e32f94f6c0/6fd5d36e61bbc3f7ccfc7699061f1235.png"
              alt="Team"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl pb-6 text-dark font-extrabold">
            Meet <span className="text-blue"> Imran Haider</span>
          </h2>
          <p className="text-dark mb-6 leading-relaxed text-lg">
            Imran Haider is redefining digital growth in Bihar. From a focused
            vision in Siwan to building a trusted marketing force, he has helped
            brands scale with strategy, clarity, and performance-driven
            execution. Through iFFi Media Works, businesses don’t just market —
            they grow, compete, and lead.
          </p>

          <div className="space-y-4">
            {/* Stat 1 */}
            <div className="flex items-end gap-5">
              <h2 className="text-4xl font-bold text-blue">50+</h2>
              <p className="text-gray-400 mt-2 text-lg font-semibold">Client Served.</p>
            </div>
            <div className="h-px bg-softDark mt-3"></div>

            {/* Stat 3 */}
            <div className="flex gap-5">
              <h2 className="text-4xl font-bold text-blue">₹10Cr+</h2>
              <p className="text-gray-400 mt-2 text-lg font-semibold">managed ad spend</p>
            </div>
            <div className="h-px bg-softDark mt-3"></div>

            {/* Stat 2 */}
            <div className="flex gap-5">
              <h2 className="text-4xl font-bold text-blue">5X</h2>
              <p className="text-gray-400 mt-2 text-lg font-semibold">Return On Investment (ROI).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
