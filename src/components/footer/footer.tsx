import { useState, useEffect } from "react";
import { setInterval } from "timers";
import styles from './footer.module.css'

const Footer = () => {
  const [time, setTime] = useState(new Date());
  const formateTime = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const dateString =
      year +
      "年" +
      month +
      "月" +
      day +
      "日" +
      " " +
      hour +
      "时" +
      minute +
      "分" +
      second +
      "秒";
    return dateString;
  };

  const dateString = formateTime(time);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.footer}>
      <div className={styles.slogen}>Coding Is Awesome!😎😎😎</div>
      <div className={styles.time}>{dateString}</div>
    </div>
  );
};

export default Footer;
