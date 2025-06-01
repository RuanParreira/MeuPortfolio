export default function Button2({ children }: { children: React.ReactNode }) {
  return (
    <button className="border-2 border-blue-500 rounded-full p-2 cursor-pointer hover:bg-blue-500 group">
      {children}
    </button>
  );
}
