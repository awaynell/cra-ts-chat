import React, { useContext } from "react";
import { Context } from "./context";
import "animate.css";
import { Fade } from "@mui/material";
import CustomTooltip from "./CustomTooltip";

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
              <CustomTooltip
                placement='top'
                title={new Date(message.createdAt).toLocaleString("ru", { dateStyle: "medium", timeStyle: "short" })}
                TransitionComponent={Fade}
                enterDelay={500}
                leaveDelay={250}
                arrow
              >
                <div className='message-time' style={{ margin: message.uid === user.uid ? "0 0 0 5px" : "0 5px 0 0" }}>
                  {new Date(message.createdAt).toLocaleString("ru", { timeStyle: "short" })}
                </div>
              </CustomTooltip>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ChatMessages;
