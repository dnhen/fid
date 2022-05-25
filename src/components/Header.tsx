import { TerminalDisplay } from './Header/TerminalDisplay';
import { TimeDisplay } from './Header/TimeDisplay';

export const Header = () => {
  return (
    <div className="w-full flex justify-between  p-8">
      <TerminalDisplay terminalNo={2} />
      <span className="text-6xl text-center font-semibold max">
        INTERNATIONAL
        <br />
        DEPARTURES
      </span>
      <TimeDisplay />
    </div>
  );
};
