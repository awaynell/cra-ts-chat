import React, { useContext } from "react";
import { Context } from "./context";

const ChatMessages = () => {
  const { messages, user } = useContext(Context);

  return (
    <>
      {messages.map((message: any) => {
        return (
          <div
            className='message-wrapper'
            key={message.id}
            style={{ marginLeft: message.uid === user.uid ? "auto" : "", flexDirection: message.uid === user.uid ? "row-reverse" : "row" }}
          >
            <div className='message-avatar'>
              <img style={{ backgroundColor: "red" }} src={message.photoURL} />
            </div>
            <div
              className='message'
              style={{
                margin: message.uid === user.uid ? "0 0 0 15px" : "0 15px 0 0",
                backgroundColor: message.uid === user.uid ? "var(--accent-color-hover)" : "var(--accent-color)",
              }}
            >
              <div className='message-text'>{message.text}</div>
            </div>
            {message.createdAt && <div className='message-time'>{new Date(message.createdAt).toLocaleString("ru", { timeStyle: "short" })}</div>}
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;
