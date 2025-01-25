import React, { useState } from 'react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';

function ChatWindow({ messages, onSend }) {
  return (
    <div
      className="chat-window"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '350px',
        height: '500px',
        backgroundColor: '#ffffff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        borderRadius: '8px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="chat-header" style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
        <span>Support Chat</span>
      </div>
      <div className="chat-body" style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
        <MessageList messages={messages} />
      </div>
      <div className="chat-footer" style={{ padding: '10px', backgroundColor: '#f1f1f1' }}>
        <ChatInput onSend={onSend} />
      </div>
    </div>
  );
}

export default ChatWindow;