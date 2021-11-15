import React, { FC, useContext } from "react";
import { Context } from "./context";
import Loader from "./Loader";

const ChatMessages = () => {
  const { messages, user, load } = useContext(Context);
  console.log("messages: ", messages);

  if (load) {
    return <Loader />;
  }

  return (
    <>
      {messages.map((message: any) => {
        return (
          <div
            className='message'
            style={{ marginLeft: message.uid === user.uid ? "auto" : "", backgroundColor: message.uid === user.uid ? "red" : "blue" }}
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
