import { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';
import ProjectWindowContext from '@/app/ProjectWindowContext';

const Footer: FunctionComponent = ({ props }) => {
  const [time, setTime] = useState('');
  const [isStartVisible, setIsStartVisible] = useState(false);
  const { windowContext } = useContext(ProjectWindowContext);

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
    if (document.getElementsByTagName('body')) {
      document.body.addEventListener('click', (e) => {
        setIsStartVisible(false);
      });
    }
  }, [time]);

  return (
    <section className={styles.footer}>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div
              className={styles.start}
              onClick={() => {
                setIsStartVisible(true);
              }}
            >
              <Image
                src='/images/icons/start.ico'
                alt='start icon'
                className={styles.startIcon}
                width={20}
                height={20}
              />
              <p className={styles.startText}>Start</p>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.secondaryDivider}></div>
            <div className={styles.iconWrapper}>
              <Image
                src='/images/icons/notepad.ico'
                alt='notepad icon'
                className={styles.notepadIcon}
                width={20}
                height={20}
              />
              <Image
                src='/images/icons/internet-explorer.ico'
                alt='internet explorer icon'
                className={styles.ieIcon}
                width={20}
                height={20}
              />
              <Image
                src='/images/icons/folder.ico'
                alt='folder icon'
                className={styles.folderIcon}
                width={20}
                height={20}
              />
            </div>
            <div className={styles.divider}></div>
            <div className={styles.secondaryDivider}></div>
            {windowContext.map((window) => {
              return (
                <div className={styles.tab} key={window}>
                  {window.replaceAll('-', ' ').replace('window', '')}
                </div>
              );
            })}
          </div>
          <div className={styles.right}>
            <div className={styles.time}>
              <Image
                src='/images/icons/volume.ico'
                alt='volume icon'
                className={styles.volumeIcon}
                width={20}
                height={20}
              />
              <p>{time}</p>
            </div>
          </div>
        </div>
      </div>
      {isStartVisible && <div className={styles.startWindow}>yup</div>}
    </section>
  );
};

export default Footer;
