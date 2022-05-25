import { useEffect, useState } from 'react';

export const TimeDisplay = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    setInterval(() => {
      const currDate = new Date();
      let currTime = currDate.getHours() + ':' + currDate.getMinutes();
      currTime.length == 4 ? (currTime = currTime = currTime.substring(0, 3) + '0' + currTime.substring(3, 4)) : (currTime = currTime);
      setTime(currTime);
    }, 1000);
  }, []);

  return <div className="font-semibold text-6xl">{time}</div>;
};
