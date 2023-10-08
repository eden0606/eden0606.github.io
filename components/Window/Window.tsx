import { FunctionComponent, useState } from 'react';
import styles from './Window.module.css';
import Image from 'next/image';

export interface WindowProps {
  parentId: string;
  id: string;
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  hasMinimize: boolean;
  hasMaximize: boolean;
  isPopupVisible: boolean;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}

const Window: FunctionComponent<WindowProps> = ({
  parentId,
  id,
  icon,
  title,
  hasMaximize,
  hasMinimize,
  isPopupVisible,
  width = 500,
  height = 400,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    (isPopupVisible && (
      <div
        id={`${parentId}${id}`}
        style={{
          width: isMaximized ? '100vw' : width,
          height: isMaximized ? '100vh' : height,
        }}
        className={styles.wrapper}
        // onClick={() => {setIsClicked(true)}}
      >
        <div className={styles.header}>
          <div className={styles.left}>
            <Image src={icon.src} alt={icon.alt} width={15} height={15} />
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.right}>
            {hasMinimize && (
              <div
                className={styles.navWrapper}
                onClick={() => {
                  isPopupVisible = false;
                }}
              >
                <p className={styles.minimize}>_</p>
              </div>
            )}
            {hasMaximize && (
              <div
                className={styles.navWrapper}
                onClick={() => setIsMaximized(!isMaximized)}
              >
                <div className={styles.maximize}></div>
              </div>
            )}
            <div
              className={styles.navWrapper}
              onClick={() => {
                isPopupVisible = false;
                console.log(isPopupVisible);
              }}
            >
              <p className={styles.close}>x</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    )) || <></>
  );
};

export default Window;
