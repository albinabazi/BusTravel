import React, { useState, useEffect } from 'react';
import MessageList from './components/MessageList';
import ChatInput from './components/ChatInput';
import ChatBubble from './components/ChatBubble';
import logo from './components/logo.png';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [sender, setSender] = useState('user');

  useEffect(() => {
    const webSocket = new WebSocket('ws://localhost:8087/chat');

    webSocket.onopen = () => console.log('✅ WebSocket connection established');
    
    webSocket.onmessage = (event) => {
        try {
            const message = JSON.parse(event.data);
            console.log('📩 Received message:', message);
            setMessages((prevMessages) => [...prevMessages, message]);
        } catch (error) {
            console.error('❌ Error parsing WebSocket message:', error);
        }
    };

    webSocket.onerror = (error) => console.error('❌ WebSocket error:', error);
    
    webSocket.onclose = (event) => console.log('🔴 WebSocket connection closed', event);

    setSocket(webSocket);

    return () => {
        console.log('🛑 Closing WebSocket connection');
        webSocket.close();
    };
  }, []);

  const sendMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ text: message, sender }));
      setSender(sender === 'user' ? 'server' : 'user');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <div className="chat-app">
      {isOpen ? (
        <div
          className="chat-window"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            maxWidth: '400px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '500px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#fff',
          }}
        >
          <div
            className="chat-header"
            style={{
              backgroundColor: '#22496d',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderTopLeftRadius: '8px',
              borderTopRightRadius: '8px',
            }}
          >
            <img src={logo} alt="Logo" style={{ height: '40PX', width: 'auto' }} />

            <div
              className="close-btn"
              style={{
                cursor: 'pointer',
                fontSize: '15px',
              }}
              onClick={closeChat}
            >
              &or;
            </div>
          </div>

          <div
            className="card-body"
            style={{
              flex: 1,
              padding: '10px',
              display: 'flex',
              flexDirection: 'column-reverse',
              overflowY: 'auto',
            }}
          >
            <MessageList messages={messages} />
          </div>

          <div
            className="chat-input"
            style={{
              padding: '10px',
              borderTop: '1px solid #ccc',
              backgroundColor: '#f1f1f1',
            }}
          >
            <ChatInput onSend={sendMessage} />
          </div>
        </div>
      ) : (
        <div
          className="chat-bubble-wrapper"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            cursor: 'pointer',
          }}
          onClick={toggleChat}
        >
          <ChatBubble message="Hi!" sender="user" />
        </div>
      )}
    </div>
  );
}

export default ChatApp;