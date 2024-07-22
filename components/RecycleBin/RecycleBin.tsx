import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './RecycleBin.module.scss';
import { recycleBinItems } from '@/data/recycleBin';

const RecycleBin: FunctionComponent = () => {
  return (
    <div className={styles.root}>
      {recycleBinItems.map((item, index) => (
        <div key={`${item.alt}-${index}`} className={styles.item}>
          <Image src={item.icon} alt={item.alt} width={50} height={50} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default RecycleBin;
