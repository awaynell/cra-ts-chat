import React, { useContext } from "react";
import { Context } from "./context";

const ChatMessages = () => {
  const { messages, user } = useContext(Context);

  return (
    <>
      {messages.map((message: any) => {
        return (
          <div
            className='message'
            key={message.id}
            style={{
              marginLeft: message.uid === user.uid ? "auto" : "",
              backgroundColor: message.uid === user.uid ? "var(--accent-color-hover)" : "var(--accent-color)",
            }}
          >
            <div className='message-avatar'>
              <img style={{ backgroundColor: "red" }} src={message.photoURL} />
            </div>
            <div className='message-text'>{message.text}</div>
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;
