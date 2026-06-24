function GenerateButton({ generateSignal, isLoading }) {
  return (
    <button onClick={generateSignal} disabled={isLoading} style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? "not-allowed" : "pointer" }}>
      {isLoading ? "⚡ ANALYZING... ⚡" : "⚡ GENERATE NEW SIGNAL ⚡"}
    </button>
  );
}

export default GenerateButton;