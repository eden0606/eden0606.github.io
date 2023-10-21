import { FunctionComponent, useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Window, { WindowProps } from '../Window/Window';
import generateDraggableElement from '@/util/generateDraggableElement';
import generateWindow from '@/util/generateWindow';
import { openProjectWindows } from '@/app/page';
import ProjectCard from '../ProjectCard/ProjectCard';

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
  console.log('open', openProjectWindows);
  const [isGenerated, setIsGenerated] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // if (document.getElementById('project-folder-wrapper')) {
    //   console.log('ue');
    // if (!openProjectWindows.includes(`${projectName}-window`)) {
    generateDraggableElement(
      document.getElementById(`${projectName}-wrapper`),
      `${projectName}-window`
    );
    // }

    console.log('esu');
  }, [projectName]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.projectWrapper}>
        {projects.map((project, index) => {
          return (
            <div
              className={styles.project}
              key={`project-${index}`}
              onClick={() => {
                if (!openProjectWindows?.includes(`${project.name}-window`)) {
                  generateWindow(
                    <Window
                      parentId={`${project.name}-wrapper`}
                      id={`${project.name}-window`}
                      icon={{
                        src: '/images/icons/folder.ico',
                        alt: 'folder icon',
                      }}
                      title={project.name}
                      hasMinimize={true}
                      hasMaximize={true}
                      isPopupVisible={isVisible}
                      width={400}
                      setVisibility={setIsVisible}
                    >
                      <ProjectCard {...project} />
                    </Window>,
                    `${project.name}-wrapper`,
                    `${project.name}-window`
                  );
                  openProjectWindows?.push(`${project.name}-window`);
                  setProjectName(project.name);
                }
              }}
            >
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
    </div>
  );
};

export default Projects;
