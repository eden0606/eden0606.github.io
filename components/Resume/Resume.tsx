import { FunctionComponent } from 'react';
import styles from './Resume.module.css';

const Resume: FunctionComponent = () => {
  return <iframe src='/eden_chou_resume_2024.pdf' className={styles.pdf}></iframe>;
};

export default Resume;
