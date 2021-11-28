import React, { useContext } from "react";
import { Context } from "./context";
import ReactTooltip from "react-tooltip";
import "animate.css";

const ChatMessages = () => {
  const { messages, user } = useContext(Context);

  return (
    <>
      {messages.map((message: any) => {
        return (
          <div
            className='message-wrapper'
            style={{
              marginLeft: message.uid === user.uid ? "auto" : "",
              flexDirection: message.uid === user.uid ? "row-reverse" : "row",
            }}
            key={message.id}
          >
            <div className='message-avatar animate__animated animate__fadeIn'>
              <img style={{ backgroundColor: "red" }} src={message.photoURL} alt='msg-avatar' />
            </div>
            <div
              className='message animate__animated animate__bounceIn'
              style={{
                margin: message.uid === user.uid ? "0 0 0 15px" : "0 15px 0 0",
                backgroundColor: message.uid === user.uid ? "var(--accent-color-hover)" : "var(--accent-color)",
              }}
            >
              <div className='message-text'>{message.text}</div>
            </div>
            {message.createdAt && (
              <div
                data-tip={new Date(message.createdAt).toLocaleString("ru", { dateStyle: "medium", timeStyle: "short" })}
                className='message-time'
                style={{ margin: message.uid === user.uid ? "0 0 0 5px" : "0 5px 0 0" }}
              >
                {new Date(message.createdAt).toLocaleString("ru", { timeStyle: "short" })}
              </div>
            )}
          </div>
        );
      })}
      <ReactTooltip effect='solid' className='tooltip' backgroundColor={"var(--layout-chat-bg)"} textColor={"var(--font-color)"} delayShow={100} />
    </>
  );
};

export default ChatMessages;
