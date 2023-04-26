import { useEffect, useRef, useState } from "react";
import MessageList from "../MessageList/MessageList.jsx";
import { messages as messagesMock, range } from "../MessageList/messages.js";

import { nanoid } from "nanoid";

import styles from "./index.module.css";

function insertMessages() {
  return range(10).map((_, idx) => ({
    name: `message-${idx}-${nanoid()}`,
  }));
}

const Wrapper = () => {
  const [messages, setMessages] = useState(messagesMock);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);
  const messageListRef = useRef(null);

  const onScrollChange = () => {
    if (wrapperRef?.current.scrollTop <= 0) {
      setLoading(true);
      setTimeout(() => {
        setMessages((messages) => [...insertMessages(), ...messages]);
        wrapperRef.current?.scrollTo(0, 41);
        setLoading(false);
      }, 1500);
    }
  };

  useEffect(() => {
    wrapperRef.current?.addEventListener("scroll", onScrollChange);

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
        {loading ? <p>loading</p> : null}
        <MessageList ref={messageListRef} messages={messages} />
      </div>
    </>
  );
};

export default Wrapper;
