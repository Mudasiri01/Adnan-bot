import { useEffect, useState } from "react";

function Timer({ lastSignalTime }) {
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    setSecondsLeft(5);
  }, [lastSignalTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 1 ? prev - 1 : 5));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h3>⏳ Next Signal In</h3>
      <h1>00:0{secondsLeft}</h1>
    </div>
  );
}

export default Timer;