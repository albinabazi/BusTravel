import React from 'react';

function ChatBubble({ onClick }) {
  return (
    <div
      className="chat-bubble"
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1000,
      }}
    >
      <span style={{ fontSize: '24px' }}>💬</span>
    </div>
  );
}

export default ChatBubble;