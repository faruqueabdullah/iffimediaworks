
export default function ChatButton({ text }) {
  return (
    <button className="h-14 px-10 border rounded-full bg-dark font-semibold text-[16px] whitespace-nowrap hover:opacity-80 hover:shadow-lg hover:cursor-pointer transition-all text-light">
      {text}
    </button>
  );
}
