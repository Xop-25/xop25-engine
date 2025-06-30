import React, { useState } from 'react';
import axios from 'axios';

export default function XOPTerminal() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:8000/respond', { input });
    setResponse(res.data.response);
    setInput('');
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full p-2 border rounded"
        rows="3"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Transmit your thought..."
      />
      <button className="bg-black text-white px-4 py-2 rounded" onClick={handleSubmit}>
        Submit to XOP-25
      </button>
      <div className="p-4 bg-gray-100 rounded">
        <strong>Response:</strong>
        <p>{response}</p>
      </div>
    </div>
  );
}