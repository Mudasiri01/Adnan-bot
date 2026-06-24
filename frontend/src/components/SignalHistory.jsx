function SignalHistory({ history }) {
  return (
    <div className="history">

      <h3>📜 Recent Signals</h3>

      {
        history.map((item,index)=>(
          <p key={index}>{item}</p>
        ))
      }

    </div>
  );
}

export default SignalHistory;