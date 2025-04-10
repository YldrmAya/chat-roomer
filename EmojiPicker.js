import React from 'react';
import { Picker } from 'emoji-picker-react';

function EmojiPicker({ onSelectEmoji }) {
  const handleEmojiClick = (emoji) => {
    onSelectEmoji(emoji); // Gửi emoji vào phòng chat
  };

  return <Picker onEmojiClick={handleEmojiClick} />;
}

export default EmojiPicker;
