import { io } from 'socket.io-client';
const socket = io('http://localhost:5000');

socket.on('userTyping', (user) => {
  console.log(`${user} is typing...`);
});

export default socket;
