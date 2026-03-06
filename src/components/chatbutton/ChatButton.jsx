import { Link } from "react-router-dom";

export default function ChatButton({ to, text }) {
  return (
    <Link  to={to} target={text==="Chat on WhatsApp"? "_blank":undefined} className="h-14 px-6 border rounded-full bg-dark text-sm sm:text-[16px] hover:opacity-80 hover:shadow-lg hover:cursor-pointer transition-all text-light flex items-center justify-center w-fit">
      {text}
    </Link>
  );
}
