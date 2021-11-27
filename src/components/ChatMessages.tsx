import React, { useContext } from "react";
import { Context } from "./context";
import ReactTooltip from "react-tooltip";
import { CSSTransition, Transition, TransitionGroup } from "react-transition-group";
import { ENTERING } from "react-transition-group/Transition";

const ChatMessages = () => {
  const { messages, user } = useContext(Context);

  const defaultStyle = {
    transition: `opacity 400ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: any = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

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
            key={message.uid}
          >
            <div className='message-avatar'>
              <img style={{ backgroundColor: "red" }} src={message.photoURL} alt='msg-avatar' />
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
            {message.createdAt && (
              <div
                data-tip={new Date(message.createdAt).toLocaleString("ru", { dateStyle: "medium", timeStyle: "short" })}
                className='message-time'
                style={{ margin: message.uid === user.uid ? "0 0 0 5px" : "0 5px 0 0" }}
              >
                {new Date(message.createdAt).toLocaleString("ru", { timeStyle: "short" })}
              </div>
            )}
            <ReactTooltip
              effect='solid'
              className='tooltip'
              backgroundColor={"var(--layout-chat-bg)"}
              textColor={"var(--font-color)"}
              delayShow={100}
            />
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;
