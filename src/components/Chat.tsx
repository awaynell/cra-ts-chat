import React, { FC, useContext, useEffect, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import ChatMessages from "./ChatMessages";
import { Context } from "./context";

interface ChatProps {
  textMessage: string;
  setTextMessage?: any;
  user: any;
}
let renderCount = 0;
const Chat: FC<ChatProps> = ({ user }) => {
  const { load, auth, firestore, firebase, messages } = useContext(Context);
  const { register, handleSubmit, control, setValue } = useForm();

  const firstName = useWatch({
    control,
    name: "chatText",
  });

  renderCount++;

  // let inputEl: any = useRef();
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
    console.log("Message sent");
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
          <input {...register("chatText")} onKeyDown={(e) => sendByKey(e)} className='chat-text' />
          <button type='submit' className='chat-send' />
        </form>
      </div>
    </div>
  );
};

export default Chat;
