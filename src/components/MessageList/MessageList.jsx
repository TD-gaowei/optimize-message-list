import styles from "./index.module.css";
import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Avatar } from "antd";

import clsx from "clsx";

const MessageList = forwardRef((props, ref) => {
  const { messages } = props;

  return (
    <ul ref={ref}>
      {messages.map((message) => {
        const { name, itemHeight, bg, isAgent } = message;

        return (
          <li
            key={name}
            className={clsx(styles.item, isAgent ? [styles["is-right"]] : styles["is-left"])}
            style={{ height: `${itemHeight}px`, background: bg || "#fff" }}
          >
            <Avatar>{isAgent ? "C" : "A"}</Avatar>
            <span>{name}</span>
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
