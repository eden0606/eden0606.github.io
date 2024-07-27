import { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Projects.module.scss';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { openWindow } from '@/util/operations';
import { WindowsContext } from '../WindowsProvider';

interface ProjectsProps {
  // window: WindowProps
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
  const { windows, addWindow } = useContext(WindowsContext);

  return (
    <div className={styles.root}>
      <div className={styles.projectWrapper}>
        {projects.map((project, index) => {
          const projectId = project.name.replaceAll(' ', '-') + '-window';

          return (
            <div
              className={styles.project}
              key={`project-${index}`}
              onClick={() => {
                if (windows.includes(projectId)) return;
                openWindow(projectId);
                addWindow(projectId);
              }}
            >
              <Image
                src={project.icon.src}
                alt={project.icon.alt}
                width={50}
                height={50}
              />
              <p>{project.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
