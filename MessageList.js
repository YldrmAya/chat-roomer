import React from 'react';

function MessageList({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.username}: </strong>{msg.message}
        </div>
      ))}
    </div>
  );
}

export default MessageList;
