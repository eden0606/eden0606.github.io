import { ButtonHTMLAttributes, FunctionComponent, useState } from 'react';
import Image from 'next/image';
import styles from './Application.module.scss';

interface ApplicationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appName: string;
  img: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
}

const Application: FunctionComponent<ApplicationProps> = ({ appName, img, ...props }) => {
  return (
    <button {...props} className={styles.root}>
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width ?? 50}
        height={img.height ?? 50}
      />
      <p className={styles.appName}>{appName}</p>
    </button>
  );
};

export default Application;
