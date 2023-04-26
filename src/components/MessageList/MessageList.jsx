import styles from "./index.module.css";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const MessageList = forwardRef((props, ref) => {
  const { messages } = props;

  return (
    <ul ref={ref}>
      {messages.map((message) => {
        const { name, itemHeight, bg } = message;

        return (
          <li key={name} className={styles.item} style={{ height: `${itemHeight}px`, background: bg || "#fff" }}>
            {name}
          </li>
        );
      })}
    </ul>
  );
});

MessageList.displayName = "MessageList";
export default MessageList;

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      itemHeight: PropTypes.number,
      bg: PropTypes.any,
    })
  ),
};
