import { FunctionComponent } from 'react';
import styles from './window.module.css';
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
    width?: number;
    height?: number;
}

const Window: FunctionComponent<WindowProps> = ({ 
    parentId,
    id,
    icon,
    title,
    hasMaximize,
    hasMinimize,
        width = 500,
        height = 400,
 }) => {

    return (
        <div id={`${parentId}${id}`} style={{width: width, height: height}} className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.left}>
                <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={15}
                    height={15}
                />
                <h3 className={styles.title}>{title}</h3>
                </div>
                <div className={styles.right}>
                {hasMinimize && <div className={styles.navWrapper}><p className={styles.minimize}>_</p></div>}
                {hasMaximize && <div className={styles.navWrapper}><div className={styles.maximize}></div></div>}
                <div className={styles.navWrapper}><p className={styles.close}>x</p></div>
                </div>
            </div>
        </div>
    );
};

export default Window;
