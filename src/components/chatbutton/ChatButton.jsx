
export default function ChatButton({ text }) {
  return (
    <button className="h-14 px-10 border rounded-full bg-primary text-primary-foreground font-semibold text-sm whitespace-nowrap hover:opacity-90 hover:shadow-lg hover:cursor-pointer transition-all text-softDark">
      {text}
    </button>
  );
}
