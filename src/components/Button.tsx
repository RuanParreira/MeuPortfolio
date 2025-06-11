export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="group cursor-pointer rounded-full border-2 border-blue-500 p-2 hover:bg-blue-500">
      {children}
    </button>
  );
}
