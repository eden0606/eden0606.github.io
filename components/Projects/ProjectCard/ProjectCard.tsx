import { FunctionComponent } from 'react';
import styles from './ProjectCard.module.scss';
import { ProjectData } from '@/data/projects';
import Image from 'next/image';

// define props better here
const ProjectCard: FunctionComponent<ProjectData> = ({
  name,
  description,
  tags,
  site,
  github,
  appSnapshot
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.iconWrapper}>
        {appSnapshot && (<Image className={styles.icon} src={appSnapshot.src} alt={appSnapshot.alt} width={200} height={200} />)}
      </div>
      {site ? (<a href={site} target='_blank'><h2 className={styles.name}>{name}</h2></a>) : (<h2 className={styles.name}>{name}</h2>)}
      <div className={styles.buttonWrapper}>
        {site && (
          <a href={site} target='_blank'><Image src='/images/icons/internet-explorer.ico' alt='ie logo' width={20} height={20} /></a>)}
        {github && (
          <a href={github} target='_blank'><Image src='/images/icons/github.png' alt='github logo' width={20} height={20} /></a>
        )}
      </div>
      <p className={styles.description}>
        {description}
      </p>
      <div className={styles.tagWrapper}>
        {tags.map((tag, index) => {
          return (
            <div className={styles.tag} key={`${name}-tag-${index}`}>
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
