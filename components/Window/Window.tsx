import { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Window.module.scss';
import Image from 'next/image';
import { WindowsContext } from '../WindowsProvider';
import { closeWindow } from '@/util/operations';
import { useOutlet } from 'react-router-dom';

export interface WindowProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: {
    src: string;
    alt: string;
  };
  title: string;
  hasMinimize?: boolean;
  hasMaximize?: boolean;
  width?: number | string;
  height?: number | string;
}

const Window: FunctionComponent<WindowProps> = ({
  icon,
  title,
  hasMaximize = true,
  hasMinimize = true,
  width = '75vw',
  height = 'auto',
  children,
  ...props
}) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const { windows, removeWindow } = useContext(WindowsContext);

  return (
    <div {...props} id={props.id} className={`${styles.root} ${props.className}`}>
      <div
        style={{
          width: isMaximized ? '100vw' : width,
          height: isMaximized ? '90vh' : height,
        }}
        className={styles.wrapper}
      >
        <div id={`${props.id}-header`} className={styles.header}>
          <div className={styles.left}>
            <Image src={icon.src} alt={icon.alt} width={15} height={15} />
            <h3 className={styles.title}>{title}</h3>
          </div>
          <div className={styles.right}>
            {hasMinimize && (
              <div
                className={styles.navWrapper}
                onClick={() => {
                  closeWindow(props.id ?? '');
                  removeWindow(props.id ?? '');
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
                closeWindow(props.id ?? '');
                removeWindow(props.id ?? '');
              }}
            >
              <p className={styles.close}>x</p>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Window;
