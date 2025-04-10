import React from 'react';

function TypingIndicator({ typingUser }) {
  return typingUser ? <p>{typingUser} is typing...</p> : null;
}

export default TypingIndicator;
