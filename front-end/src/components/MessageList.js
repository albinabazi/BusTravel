import React from 'react';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div 
          key={index} 
          style={{
            textAlign: msg.sender === 'user' ? 'right' : 'left',
            color: msg.sender === 'user' ? 'blue' : 'green',  // Color for user and server
            padding: '5px 10px',
            margin: '5px 0',
            borderRadius: '10px',
            backgroundColor: msg.sender === 'user' ? '#e0f7fa' : '#f1f8e9'
          }}
        >
          <strong>{msg.sender}:</strong> {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;