import { Spin } from "antd";

import styles from "./index.module.css";
const Loading = (props) => {
  return (
    <div className={styles.loading}>
      <Spin {...props} />
    </div>
  );
};

export default Loading;
