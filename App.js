import React, { useState } from 'react';
import RoomList from './components/RoomList';
import ChatRoom from './components/ChatRoom';

function App() {
  const [room, setRoom] = useState(null);

  return (
    <div>
      {!room ? (
        <RoomList onJoinRoom={setRoom} />
      ) : (
        <ChatRoom room={room} onLeave={() => setRoom(null)} />
      )}
    </div>
  );
}

export default App;
