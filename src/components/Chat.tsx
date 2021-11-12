import React, { FC } from "react";

interface ChatProps {
  textMessage: string;
  setTextMessage: any;
}

const Chat: FC<ChatProps> = ({ textMessage, setTextMessage }) => {
  return (
    <div className='wrapper'>
      <div className='chat'>
        <div className='chat-messages'>{textMessage}</div>
        <div className='chat-input'>
          <input type='text' className='chat-text' onChange={(e) => setTextMessage(e.target.value)} />
          <button className='chat-send'></button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
