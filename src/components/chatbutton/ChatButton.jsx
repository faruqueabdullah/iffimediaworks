
export default function ChatButton({ text }) {
  return (
    <button className="h-14 px-6 border rounded-full bg-dark font-semibold text-sm sm:text-[16px] hover:opacity-80 hover:shadow-lg hover:cursor-pointer transition-all text-light">
      {text}
    </button>
  );
}
