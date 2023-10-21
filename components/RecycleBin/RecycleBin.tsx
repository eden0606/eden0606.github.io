import { FunctionComponent } from 'react';
import Image from 'next/image';
import styles from './RecycleBin.module.css';

const RecycleBin: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <Image
          src='/images/icons/folder.ico'
          alt='folder icon'
          width={50}
          height={50}
        />
        <p>temp</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/multiple-files.ico'
          alt='multiple files icon'
          width={50}
          height={50}
        />
        <p>asdklfjdslj</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/file.ico'
          alt='file icon'
          width={50}
          height={50}
        />
        <p>resume.pdf</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/file.ico'
          alt='file icon'
          width={50}
          height={50}
        />
        <p>resume-2022-old.pdf</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/music-file.ico'
          alt='music file icon'
          width={50}
          height={50}
        />
        <p>best-tunes.mp3</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/folder.ico'
          alt='folder icon'
          width={50}
          height={50}
        />
        <p>old stuff</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/folder.ico'
          alt='folder icon'
          width={50}
          height={50}
        />
        <p>documents</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/folder.ico'
          alt='folder icon'
          width={50}
          height={50}
        />
        <p>misc</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/file.ico'
          alt='file icon'
          width={50}
          height={50}
        />
        <p>resume-2022-old.pdf (1)</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/text-file.ico'
          alt='text file icon'
          width={50}
          height={50}
        />
        <p>sample.txt</p>
      </div>
      <div className={styles.item}>
        <Image
          src='/images/icons/text-file.ico'
          alt='text file icon'
          width={50}
          height={50}
        />
        <p>sample.txt (1)</p>
      </div>
    </div>
  );
};

export default RecycleBin;
