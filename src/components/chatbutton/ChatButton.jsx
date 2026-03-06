import { Link } from "react-router-dom";

export default function ChatButton({ text }) {
  return (
    <Link  to="https://wa.me/919473370867" target="_blank" className="h-14 px-6 border rounded-full bg-dark font-semibold text-sm sm:text-[16px] hover:opacity-80 hover:shadow-lg hover:cursor-pointer transition-all text-light flex items-center justify-center w-fit">
      {text}
    </Link>
  );
}
