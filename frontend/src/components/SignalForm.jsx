function SignalForm({ broker, setBroker, asset, setAsset, timeframe, setTimeframe }) {
  return (
    <>
      <label>Broker</label>

      <select value={broker} onChange={(e) => setBroker(e.target.value)}>
        <option value="Quotex">Quotex</option>
        <option value="Pocket Option">Pocket Option</option>
        <option value="Binomo">Binomo</option>
      </select>

      <label>Trading Asset</label>

      <select value={asset} onChange={(e) => setAsset(e.target.value)}>
        <optgroup label="Major Currency Pairs">
          <option value="EUR/USD">EUR/USD</option>
          <option value="GBP/USD">GBP/USD</option>
          <option value="USD/JPY">USD/JPY</option>
          <option value="AUD/USD">AUD/USD</option>
          <option value="USD/CAD">USD/CAD</option>
        </optgroup>
        <optgroup label="Cross Currency Pairs">
          <option value="GBP/JPY">GBP/JPY</option>
          <option value="EUR/GBP">EUR/GBP</option>
          <option value="AUD/JPY">AUD/JPY</option>
          <option value="EUR/JPY">EUR/JPY</option>
          <option value="CAD/JPY">CAD/JPY</option>
        </optgroup>
        <optgroup label="Other Assets">
          <option value="XAU/USD">XAU/USD</option>
          <option value="BTC/USD">BTC/USD</option>
        </optgroup>
      </select>

      <label>Time Frame</label>

      <select value={timeframe} onChange={(e) => setTimeframe(e.target.value)}>
        <option value="15 Sec">15 Sec</option>
        <option value="30 Sec">30 Sec</option>
        <option value="1 Min">1 Min</option>
      </select>
    </>
  );
}

export default SignalForm;