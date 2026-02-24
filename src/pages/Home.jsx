
import ChatButton from "../components/chatbutton/ChatButton";
import { RevenueEngine } from "../components/RevenueEngine";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto px-3 md:px-6 lg:px-8 pt-24 pb-20 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
        {/* Left Section */}
        <div className="space-y-8 py-20 border">
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
        <div className="flex justify-center lg:justify-end border">
          <RevenueEngine />
        </div>
      </div>
    </div>
  );
}
