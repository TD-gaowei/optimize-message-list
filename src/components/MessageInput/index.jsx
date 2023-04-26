import { Button, Input } from "antd";
import { useState, memo } from "react";

import styles from "./index.module.css";
import PropTypes from "prop-types";

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
export default memo(MessageInput);

MessageInput.propTypes = {
  onSend: PropTypes.func,
};
