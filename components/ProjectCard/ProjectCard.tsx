import { FunctionComponent } from 'react';
import styles from './ProjectCard.module.css';
import { ProjectData } from '@/data/projects';
import Image from 'next/image';

const ProjectCard: FunctionComponent<ProjectData> = (props) => {
  console.log('card');
  return (
    <div className={styles.wrapper}>
      <Image src={props.img.src} alt={props.img.alt} width={350} height={300} />
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className={styles.tagWrapper}>
        {props.tags.map((tag, index) => {
          return (
            <div className={styles.tag} key={`${props.name}-tag-${index}`}>
              {tag}
            </div>
          );
        })}
      </div>
      <div className={styles.buttonWrapper}>
        {props.site ? (
          <a href={props.site}>
            <button>visit site</button>
          </a>
        ) : (
          <p>app never went live :(</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
