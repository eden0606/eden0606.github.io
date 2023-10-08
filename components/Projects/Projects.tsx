import { FunctionComponent } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import { projects } from '@/data/projects';

interface ProjectsProps {
  // projects?: {
  //   name: string;
  //   description: string;
  //   img: {
  //     src: string;
  //     alt: string;
  //   };
  //   technologies: string[];
  //   github: string;
  //   demo: string;
  // }[];
}

const Projects: FunctionComponent<ProjectsProps> = () => {
  return (
    <div className={styles.wrapper}>
      {projects.map((project, index) => {
        return (
          <div key={`project-${index}`}>
            <Image
              src={project.img.src}
              alt={project.img.alt}
              width={50}
              height={50}
            />
            <p>{project.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
