import { useEffect, useState, useRef } from "react";

import Header from "../components/Header";
import SignalForm from "../components/SignalForm";
import GenerateButton from "../components/GenerateButton";
import SignalCard from "../components/SignalCard";
import Timer from "../components/Timer";
import SignalHistory from "../components/SignalHistory";

import "../styles/style.css";

function Home() {
  const [broker, setBroker] = useState("Quotex");
  const [asset, setAsset] = useState("EUR/USD");
  const [timeframe, setTimeframe] = useState("1 Min");

  const [signal, setSignal] = useState("");
  const [confidence, setConfidence] = useState(0);
  const [history, setHistory] = useState([]);
  const [signalData, setSignalData] = useState(null);
  const [lastSignalTime, setLastSignalTime] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const assetRef = useRef(asset);
  useEffect(() => {
    assetRef.current = asset;
  }, [asset]);

  const generateLocalSignal = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      const isCall = Math.random() > 0.5;
      const newSignal = isCall ? "UP 🟢" : "DOWN 🔴";
      const newConfidence = Math.floor(Math.random() * 20) + 80; // 80-99%
      
      const data = {
        asset,
        timeframe,
        broker,
        signal: newSignal,
        confidence: newConfidence,
        timestamp: Date.now()
      };

      console.log("LOCAL SIGNAL GENERATED:", data);
      setSignal(data.signal);
      setConfidence(data.confidence);
      setSignalData(data);
      setLastSignalTime(data.timestamp);

      setHistory((prev) => [
        data.signal,
        ...prev.slice(0, 4),
      ]);
      setIsLoading(false);
    }, 1500);
  };

  // Automatically request signal when settings change
  useEffect(() => {
    generateLocalSignal();
  }, [asset, timeframe, broker]);

  const handleGenerateManual = () => {
    if (!isLoading) {
      generateLocalSignal();
    }
  };

  return (
    <div className="container">
      <div className="card">
        <Header />

        <SignalForm
          broker={broker}
          setBroker={setBroker}
          asset={asset}
          setAsset={setAsset}
          timeframe={timeframe}
          setTimeframe={setTimeframe}
        />

        <GenerateButton
          generateSignal={handleGenerateManual}
          isLoading={isLoading}
        />

        {isLoading ? (
          <div className="loader-container">
            {/* Candlestick chart icon */}
            <svg className="signal-logo" width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Candle 1 - Green (UP) */}
              <line x1="8" y1="5" x2="8" y2="12" stroke="#00ff99" strokeWidth="2"/>
              <rect x="4" y="12" width="8" height="14" rx="1" fill="#00ff99"/>
              <line x1="8" y1="26" x2="8" y2="33" stroke="#00ff99" strokeWidth="2"/>
              {/* Candle 2 - Red (DOWN) */}
              <line x1="22" y1="10" x2="22" y2="16" stroke="#ff4444" strokeWidth="2"/>
              <rect x="18" y="16" width="8" height="18" rx="1" fill="#ff4444"/>
              <line x1="22" y1="34" x2="22" y2="42" stroke="#ff4444" strokeWidth="2"/>
              {/* Candle 3 - Green (UP) */}
              <line x1="36" y1="8" x2="36" y2="15" stroke="#00ff99" strokeWidth="2"/>
              <rect x="32" y="15" width="8" height="12" rx="1" fill="#00ff99"/>
              <line x1="36" y1="27" x2="36" y2="35" stroke="#00ff99" strokeWidth="2"/>
              {/* Candle 4 - Red (DOWN) */}
              <line x1="50" y1="14" x2="50" y2="20" stroke="#ff4444" strokeWidth="2"/>
              <rect x="46" y="20" width="8" height="16" rx="1" fill="#ff4444"/>
              <line x1="50" y1="36" x2="50" y2="44" stroke="#ff4444" strokeWidth="2"/>
            </svg>

            <div className="trading-loader">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <p className="loader-text">Analyzing Market...</p>
          </div>
        ) : (
          <SignalCard
            signal={signal}
            confidence={confidence}
            asset={signalData?.asset || asset}
            timeframe={signalData?.timeframe || timeframe}
            time={
              signalData
                ? new Date(signalData.timestamp).toLocaleTimeString()
                : "-"
            }
          />
        )}

        <Timer lastSignalTime={lastSignalTime} />

        <SignalHistory history={history} />
      </div>
    </div>
  );
}

export default Home;

