import { FunctionComponent, useState } from 'react';
import Image from 'next/image';
import styles from './application.module.css';

interface ApplicationProps {
  appName: string;
  img: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };

}

const Application: FunctionComponent<ApplicationProps> = ({ 
  appName,
  img,
 }) => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div>
        <Image 
        src={img.src}
        alt={img.alt}
        width={img.width ?? 50}
        height={img.height ?? 50}
        />
      </div>
      <p className={styles.appName}>{appName}</p>
    </div>
  );
};

export default Application;
