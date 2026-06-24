function SignalCard({ signal, confidence, asset, timeframe, time }) {
  if (!signal) return null;

  return (
    <div className="signalCard">
      <h3>🎯 Latest Signal Generated!</h3>

      <div className={signal.includes("UP") ? "buyBox" : "sellBox"}>
        {signal}
      </div>

      <h2 className="confidence">
        {confidence}% Confidence
      </h2>

      <div className="details">
        <p><b>Asset:</b> {asset}</p>
        <p><b>Timeframe:</b> {timeframe}</p>
        <p><b>Generated:</b> {time}</p>
      </div>
    </div>
  );
}

export default SignalCard;