import styles from "./index.module.css";
import MessageList from "../MessageList/MessageList.jsx";
import { useEffect, useRef, useState } from "react";
import { messages as messagesMock } from "../MessageList/messages.js";

// function insertMessages() {}

const Wrapper = () => {
  const [messages, setMessages] = useState(messagesMock);

  const wrapperRef = useRef(null);
  const messageListRef = useRef(null);

  useEffect(() => {
    wrapperRef.current?.addEventListener("scroll", onScrollChange);

    function onScrollChange() {
      // console.log(wrapperRef?.current.scrollTop);
    }

    return () => {
      wrapperRef.current?.removeEventListener("scroll", onScrollChange);
    };
  }, []);

  useEffect(() => {
    const scrollHeight = messageListRef.current.clientHeight - wrapperRef.current.clientHeight;

    wrapperRef.current?.scrollTo(0, scrollHeight);
  }, []);

  return (
    <>
      <h2>消息长列表</h2>
      <div className={styles.wrapper} ref={wrapperRef}>
        <MessageList ref={messageListRef} messages={messages} />
      </div>
    </>
  );
};

export default Wrapper;
