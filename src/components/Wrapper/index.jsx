import { useCallback, useEffect, useRef, useState } from "react";
import MessageList from "../MessageList/MessageList.jsx";
import { generateMessage, insertMessages, messages as messagesMock } from "../../mocks/messages.js";
import throttle from "lodash.throttle";

import styles from "./index.module.css";
import Loading from "../Loading/index.jsx";
import MessageInput from "../MessageInput/index.jsx";

const THROTTLE_TIME = 400;

const TRIGGER_DISTANCE = 30;

const throttleOpts = {
  leading: false,
};

const Wrapper = () => {
  const [messages, setMessages] = useState(messagesMock);
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);
  const messageListRef = useRef(null);

  const messageListHeight = useRef(0);

  useEffect(() => {
    messageListHeight.current = messageListRef.current?.clientHeight;
  }, [messageListRef.current?.clientHeight]);

  const onScrollChange = useCallback(() => {
    if (wrapperRef?.current.scrollTop <= TRIGGER_DISTANCE) {
      setLoading(true);
      setTimeout(() => {
        setMessages((messages) => [...insertMessages(), ...messages]);
        setTimeout(() => {
          wrapperRef.current.scrollTop =
            messageListRef.current?.clientHeight - messageListHeight.current - wrapperRef.current?.clientHeight / 2;
          messageListHeight.current = messageListRef.current?.clientHeight;
        }, 0);
        setLoading(false);
      }, 1500);
    }
  }, []);

  useEffect(() => {
    const handler = throttle(onScrollChange, THROTTLE_TIME, throttleOpts);
    const wrapperEle = wrapperRef.current;

    wrapperEle?.addEventListener("scroll", handler);

    return () => {
      wrapperEle?.removeEventListener("scroll", handler);
    };
  }, [onScrollChange]);

  useEffect(() => {
    const scrollHeight = messageListRef.current?.clientHeight - wrapperRef.current?.clientHeight;
    wrapperRef.current?.scrollTo({ top: scrollHeight });
  }, []);

  const onSend = useCallback((message) => {
    setMessages((messages) => [...messages, generateMessage(message)]);

    setTimeout(() => {
      const scrollHeight = messageListRef.current?.clientHeight - wrapperRef.current?.clientHeight;
      wrapperRef.current?.scrollTo({ top: scrollHeight });
    }, 0);
  }, []);

  return (
    <>
      <h2>消息长列表</h2>
      <div className={styles.wrapper} ref={wrapperRef}>
        {loading ? <Loading tip="加载消息中" /> : null}
        <MessageList ref={messageListRef} messages={messages} />
      </div>
      <MessageInput onSend={onSend} />
    </>
  );
};

export default Wrapper;
