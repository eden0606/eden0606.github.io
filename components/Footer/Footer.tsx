import { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Footer.module.scss';
import Image from 'next/image';
import { startPrograms } from '@/data/startPrograms';
import { WindowsContext } from '../WindowsProvider';
import { openWindow } from '@/util/operations';

const Footer: FunctionComponent = () => {
  const [time, setTime] = useState('');
  const [isStartVisible, setIsStartVisible] = useState(false);
  const { windows, addWindow } = useContext(WindowsContext);

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
        const clickedEl = e.target as HTMLElement;
        if (!clickedEl.className.includes('Footer')) {
          setIsStartVisible(false);
        }
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
              {/* TODO: make into buttons */}
              <Image
                src='/images/icons/notepad.ico'
                alt='notepad icon'
                className={styles.notepadIcon}
                width={20}
                height={20}
              />
              <button
                type='button'
                onClick={() => { openWindow('internet-explorer-window'); addWindow('internet-explorer-window') }}>
                <Image
                  src='/images/icons/internet-explorer.ico'
                  alt='internet explorer icon'
                  className={styles.ieIcon}
                  width={20}
                  height={20}
                />
              </button>
              <button
                type='button'
                onClick={() => { openWindow('my-projects-window'); addWindow('my-projects-window') }}>
                <Image
                  src='/images/icons/folder.ico'
                  alt='folder icon'
                  className={styles.folderIcon}
                  width={20}
                  height={20}
                />
              </button>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.secondaryDivider}></div>
            {windows.map((window) => {
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
      {
        isStartVisible && (
          <div className={styles.startWindow}>
            {startPrograms.map((program, idx) => {
              return (
                <button
                  type='button'
                  key={`${program.name}-${idx}`}
                  className={styles.programButton}
                  onClick={() => {
                    if (program.windowId && !windows.includes(program.windowId)) {
                      openWindow(program.windowId);
                      addWindow(program.windowId);
                    }
                  }}
                >
                  <Image
                    src={program.img.src}
                    alt={program.img.alt}
                    className={styles.startIcon}
                    width={45}
                    height={45}
                  />
                  <p className={styles.programText}>{program.name}</p>
                </button>
              );
            })}
          </div>
        )
      }
    </section >
  );
};

export default Footer;
