import { FunctionComponent } from 'react';
import styles from './Resume.module.css';

const Resume: FunctionComponent = () => {
  return <iframe src='/pea-sherman.pdf' className={styles.pdf}></iframe>;
};

export default Resume;
