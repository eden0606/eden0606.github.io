import { FunctionComponent, useContext, useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Window, { WindowProps } from '../Window/Window';
import generateDraggableElement from '@/util/generateDraggableElement';
import generateWindow from '@/util/generateWindow';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectWindowContext from '@/app/ProjectWindowContext';
import { createPortal } from 'react-dom';

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
  const [shouldGenerateWindow, setShouldGenerateWindow] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const window = document.getElementById('screen') as Element;
  const { windowContext, setWindowContext, removeWindowContext } =
    useContext(ProjectWindowContext);

  useEffect(() => {
    // if (document.getElementById('project-folder-wrapper')) {
    //   console.log('ue');
    // if (!openProjectWindows.includes(`${projectName}-window`)) {
    console.log('project name', projectName);
    console.log(
      'window context',
      document.getElementById(`${projectName}-wrapper${projectName}-window`)
    );
    generateDraggableElement(
      document.getElementById(`${projectName}-wrapper${projectName}-window`),
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
                if (!windowContext?.includes(`${project.name}-window`)) {
                  setShouldGenerateWindow(true);
                  // generateWindow(
                  // createPortal(
                  //   <Window
                  //     parentId={`${project.name}-wrapper`}
                  //     id={`${project.name}-window`}
                  //     icon={{
                  //       src: '/images/icons/folder.ico',
                  //       alt: 'folder icon',
                  //     }}
                  //     title={project.name}
                  //     hasMinimize={true}
                  //     hasMaximize={true}
                  //     isPopupVisible={isVisible}
                  //     width={400}
                  //     setVisibility={setIsVisible}
                  //   >
                  //     <ProjectCard {...project} />
                  //   </Window>,
                  //   window
                  //   // `${project.name}-wrapper`,
                  //   // `${project.name}-window`,
                  // );
                  // );
                  setWindowContext(windowContext, `${project.name}-window`);
                  setProjectName(project.name);
                }
              }}
            >
              {shouldGenerateWindow &&
                createPortal(
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
                  window
                )}
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
