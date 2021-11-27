import React, { FC, useContext, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import ChatMessages from "./ChatMessages";
import { Context } from "./context";

interface ChatProps {
  textMessage: string;
  setTextMessage?: any;
  user: any;
}
const Chat: FC<ChatProps> = ({ user }) => {
  const { firestore, firebase, messages } = useContext(Context);
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {}, []);

  let endOfMessages: any = useRef();

  const onSubmit: any = (data: any) => {
    sendMessages(data.chatText);
  };

  const sendByKey = (e: any) => {
    if (e.key === "Enter") {
      sendMessages(e.target.value);
      setValue("chatText", "");
    }
  };

  const sendMessages = (text: string) => {
    console.log(text);
    if (text.length === 0) return;
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setValue("chatText", "");
  };

  useEffect(() => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className='wrapper'>
      <div className='chat'>
        <div className='chat-messages'>
          <ChatMessages />
          <span ref={endOfMessages}></span>
        </div>
      </div>
      <div className='chat-input'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("chatText")}
            onKeyDown={(e) => sendByKey(e)}
            className='chat-text'
            onClick={(e) => {
              endOfMessages.current.scrollIntoView({ block: "end", behavior: "smooth" });
            }}
          />
          <button type='submit' className='chat-send'></button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
