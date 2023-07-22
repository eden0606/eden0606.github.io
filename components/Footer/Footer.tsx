import { FunctionComponent, useEffect, useState } from 'react';
import styles from './footer.module.css';

const Footer: FunctionComponent = ({ props }) => {
  const [time, setTime] = useState('');

  function updateTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amOrPm = hours < 12 ? 'AM' : 'PM';
    setTime(`${Math.abs(12 - hours)}:${`0${minutes}`.slice(-2)} ${amOrPm}`);
  }

  useEffect(() => {
    updateTime();
    setInterval(updateTime, 60000);
  }, [time]);

  return (
    <section className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.start}>icon Start</div>
          <div className={styles.divider}></div>
          <div className={styles.secondaryDivider}></div>
          <div className={styles.icons}>ico ico ico</div>
          <div className={styles.divider}></div>
          <div className={styles.secondaryDivider}></div>
          <div className={styles.tab}>name of tab here</div>
        </div>
        <div className={styles.right}>
          <div className={styles.time}>{time}</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
