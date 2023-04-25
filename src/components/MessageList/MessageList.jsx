import styles from "./index.module.css";
import { forwardRef } from "react";

const MessageList = forwardRef((props, ref) => {
  const { messages } = props;

  return (
    <ul ref={ref}>
      {messages.map((message) => (
        <li key={message.name} className={styles.item}>
          {message.name}
        </li>
      ))}
    </ul>
  );
});

MessageList.displayName = "MessageList";
export default MessageList;
