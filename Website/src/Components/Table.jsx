import React from 'react'

function Table() {
  const runScript = () => {
    fetch('http://localhost:5000/run-script', { method: 'POST' })
      .then(response => response.text())
      .then(data => console.log(data));
  };

  return (
    <div>
      <button onClick={runScript}>Run Script</button>
    </div>
  );
}

export default Table;
