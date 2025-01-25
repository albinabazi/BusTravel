import React, { useState } from 'react';

function ChatInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() !== '') {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button className="btn btn-primary" onClick={handleSend}>Send</button>
    </div>
  );
}

export default ChatInput;
