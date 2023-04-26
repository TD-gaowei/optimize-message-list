import { Button, Input } from "antd";
import { useState, memo } from "react";
import PropTypes from "prop-types";

import styles from "./index.module.css";

const MessageInput = (props) => {
  const { onSend } = props;
  const [message, setMessage] = useState("");

  const onTextChange = (e) => {
    const value = e.target.value;
    setMessage(value);
  };

  const handleClick = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <div className={styles["message-input"]}>
      <Input type="text" onChange={onTextChange} value={message} />
      <Button onClick={handleClick} type="primary">
        send
      </Button>
    </div>
  );
};

MessageInput.displayName = "MessageInput";

const MessageInputMemo = memo(MessageInput);
export default MessageInputMemo;

MessageInput.propTypes = {
  onSend: PropTypes.func,
};
