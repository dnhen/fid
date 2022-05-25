interface TerminalDisplayProps {
  terminalNo: number;
}

export const TerminalDisplay = ({ terminalNo }: TerminalDisplayProps) => {
  return (
    <div className="bg-yellow-400 w-36 h-36 rounded-3xl flex justify-center items-center">
      <span className="text-neutral-900 font-semibold text-6xl">T{terminalNo}</span>
    </div>
  );
};
