import { firestore } from "firebase";
import React, { FC, useContext, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import ChatMessages from "./ChatMessages";
import { Context } from "./context";
import Loader from "./Loader";

interface ChatProps {
  textMessage: string;
  setTextMessage: any;
  user: any;
}

const Chat: FC<ChatProps> = ({ textMessage, setTextMessage, user }) => {
  const { load, auth, firestore, firebase, messages } = useContext(Context);
  console.log("messages: ", messages);
  messages.map((mess: any) => {
    console.log(mess.text);
  });

  let inputEl: any = useRef();
  let endOfMessages: any = useRef();

  const sendMessages = () => {
    firestore.collection("messages").add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: textMessage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    inputEl.current.value = "";
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
        <input ref={inputEl} type='text' className='chat-text' onChange={(e) => setTextMessage(e.target.value)} />
        <button className='chat-send' onClick={sendMessages}></button>
      </div>
    </div>
  );
};

export default Chat;
